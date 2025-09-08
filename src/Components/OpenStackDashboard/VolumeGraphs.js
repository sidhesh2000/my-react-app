import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spin } from 'antd';
import LiquidGauge from 'react-liquid-gauge';
import { color } from 'd3-color';

// Custom hook to watch localStorage changes (works in same tab)
const useLocalStorageWatcher = (keys, interval = 500) => {
  const [values, setValues] = useState(() => 
    keys.reduce((acc, key) => ({ ...acc, [key]: localStorage.getItem(key) }), {})
  );

  useEffect(() => {
    const checkValues = () => {
      const newValues = keys.reduce((acc, key) => ({ ...acc, [key]: localStorage.getItem(key) }), {});
      if (keys.some(key => newValues[key] !== values[key])) {
        setValues(newValues);
      }
    };

    const intervalId = setInterval(checkValues, interval);
    return () => clearInterval(intervalId);
  }, [keys, values]);

  return values;
};

const VolumeGraphs = () => {
  const [limits, setLimits] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Watch these localStorage keys for changes
  const storageValues = useLocalStorageWatcher(['openstackToken', 'currentProjectId']);

  const fetchLimits = async () => {
    try {
      const token = localStorage.getItem("openstackToken");
      const projectId = localStorage.getItem('currentProjectId');
      
      if (!token || !projectId) {
        setLimits(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      const response = await fetch(`/nova/v2/${projectId}/limits`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': token
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setLimits(data.limits.absolute);
    } catch (error) {
      console.error('Error fetching limits:', error);
      setLimits(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLimits();
  }, [storageValues.openstackToken, storageValues.currentProjectId]);

  if (loading) return <div style={{display:"flex",justifyContent:"center",marginTop:"1rem"}}><Spin/></div>;
  if (!limits) return <div>No data available. Please check your authentication.</div>;

  // Extracting values
  const {
    maxTotalRAMSize = 0,  // in MB
    totalRAMUsed = 0,     // in MB
    maxTotalCores = 0,
    totalCoresUsed = 0,
    maxTotalInstances = 0,
    totalInstancesUsed = 0
  } = limits;

  // Convert RAM from MB to GB
  const maxRAMInGB = (maxTotalRAMSize / 1024).toFixed(1);
  const usedRAMInGB = (totalRAMUsed / 1024).toFixed(1);

  // Calculate usage percentages (0-100 range)
  const cpuUsage = maxTotalCores > 0 ? (totalCoresUsed / maxTotalCores) * 100 : 0;
  const memoryUsage = maxTotalRAMSize > 0 ? (totalRAMUsed / maxTotalRAMSize) * 100 : 0;
  const instanceUsage = maxTotalInstances > 0 ? (totalInstancesUsed / maxTotalInstances) * 100 : 0;

  const chartStyle = { textAlign: 'center', marginTop: '12px', fontSize: '14px' };

  // Common gauge settings
  const gaugeSettings = {
    width: 150,
    height: 150,
    textSize: 1,
    textOffsetX: 0,
    textOffsetY: 0,
    waveAnimation: true,
    waveFrequency: 1,
    waveAmplitude: 2,
    shape: 'circle',
    outlineBorder: true,
    outlineWidth: 2,
    textStyle: {
      fill: color('#444').toString(),
      fontFamily: 'Arial'
    },
    waveTextStyle: {
      fill: color('#fff').toString(),
      fontFamily: 'Arial'
    },
    style: { margin: '0 auto' },
  };

  // Function to create gradient stops
  const createGradientStops = (baseColor) => {
    const fillColor = color(baseColor);
    return [
      {
        key: '0%',
        stopColor: fillColor.darker(0.5).toString(),
        stopOpacity: 1,
        offset: '0%'
      },
      {
        key: '50%',
        stopColor: baseColor,
        stopOpacity: 0.75,
        offset: '50%'
      },
      {
        key: '100%',
        stopColor: fillColor.brighter(0.5).toString(),
        stopOpacity: 0.5,
        offset: '100%'
      }
    ];
  };

  // Color schemes for each gauge
  const colors = {
    instances: {
      base: '#ff4560',
      wave: '#ff4560',
      outline: '#d63031'
    },
    cpu: {
      base: '#775dd0',
      wave: '#775dd0',
      outline: '#6c5ce7'
    },
    memory: {
      base: '#008ffb',
      wave: '#008ffb',
      outline: '#0984e3'
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <h2 style={{ color: "#2234ae", padding:"0rem 0rem 1rem 0rem" }}>LIMIT SUMMARY</h2>
      <h4 style={{color:'#407bff'}}>COMPUTE</h4>
      <br />
      <Row gutter={16}>
        <Col span={8}>
          <Card title="INSTANCES">
            <LiquidGauge
              {...gaugeSettings}
              value={instanceUsage}
              percent="%"
              gradientStops={createGradientStops(colors.instances.base)}
              circleStyle={{ fill: colors.instances.base }}
              waveStyle={{ fill: colors.instances.wave }}
              outlineColor={colors.instances.outline}
              textRenderer={({ value }) => (
                <tspan>
                  <tspan className="value" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    {Math.round(value)}
                  </tspan>
                  <tspan style={{ fontSize: '12px' }}>%</tspan>
                </tspan>
              )}
            />
            <div style={chartStyle}>
              <strong>{totalInstancesUsed}</strong> used / <strong>{maxTotalInstances}</strong> total
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="VIRTUAL CPU USAGE">
            <LiquidGauge
              {...gaugeSettings}
              value={cpuUsage}
              percent="%"
              gradientStops={createGradientStops(colors.cpu.base)}
              circleStyle={{ fill: colors.cpu.base }}
              waveStyle={{ fill: colors.cpu.wave }}
              outlineColor={colors.cpu.outline}
              textRenderer={({ value }) => (
                <tspan>
                  <tspan className="value" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    {Math.round(value)}
                  </tspan>
                  <tspan style={{ fontSize: '12px' }}>%</tspan>
                </tspan>
              )}
            />
            <div style={chartStyle}>
              <strong>{totalCoresUsed}</strong> used / <strong>{maxTotalCores}</strong> total
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="RAM">
            <LiquidGauge
              {...gaugeSettings}
              value={memoryUsage}
              percent="%"
              gradientStops={createGradientStops(colors.memory.base)}
              circleStyle={{ fill: colors.memory.base }}
              waveStyle={{ fill: colors.memory.wave }}
              outlineColor={colors.memory.outline}
              textRenderer={({ value }) => (
                <tspan>
                  <tspan className="value" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    {Math.round(value)}
                  </tspan>
                  <tspan style={{ fontSize: '12px' }}>%</tspan>
                </tspan>
              )}
            />
            <div style={chartStyle}>
              <strong>Used {usedRAMInGB}GB</strong> of <strong>{maxRAMInGB}GB</strong>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default VolumeGraphs;