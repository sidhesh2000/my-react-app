import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spin } from 'antd';
import Chart from 'react-apexcharts';

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

const CinderGraphs = () => {
  const [limits, setLimits] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Watch these localStorage keys for changes
  const storageValues = useLocalStorageWatcher(['openstackToken', 'currentProjectId']);

  const fetchLimits = async () => {
    try {
      const token = localStorage.getItem('openstackToken');
      const projectId = localStorage.getItem('currentProjectId');
      
      if (!token || !projectId) {
        setLimits(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      const response = await fetch(`/cinder/v2/${projectId}/limits`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': token,
        },
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

  const {
    maxTotalVolumes = 0,
    totalVolumesUsed = 0,
    maxTotalSnapshots = 0,
    totalSnapshotsUsed = 0,
    maxTotalVolumeGigabytes = 0,
    totalGigabytesUsed = 0,
  } = limits;

  const volumeUsage = maxTotalVolumes > 0 ? (totalVolumesUsed / maxTotalVolumes) * 100 : 0;
  const snapshotUsage = maxTotalSnapshots > 0 ? (totalSnapshotsUsed / maxTotalSnapshots) * 100 : 0;
  const storageUsage = maxTotalVolumeGigabytes > 0 ? (totalGigabytesUsed / maxTotalVolumeGigabytes) * 100 : 0;

  const getBarChartOptions = (label, color) => ({
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '50%',
        dataLabels: {
          position: 'top',
        },
        distributed: true,
      },
    },
    xaxis: {
      categories: [label],
      max: 100,
      labels: {
        formatter: val => `${val}%`
      }
    },
    dataLabels: { 
      enabled: true,
      formatter: val => `${Math.round(val)}%`,
      style: {
        colors: ['black'],
        fontSize: '11px',
        fontWeight: 'bold',
      },
      offsetX: 18,
      background: {
        enabled: true,
        foreColor: '#fff',
        padding: 4,
        borderRadius: 2,
        backgroundColor: 'black',
        borderWidth: 0,
        offsetX: 10,
      },
      position: 'bottom',
    },
    colors: [color],
    grid: {
      xaxis: {
        lines: { show: false }
      },
    }
  });

  const chartStyle = { marginTop: '1rem', fontSize: '14px', textAlign: 'center' };

  return (
    <div style={{ padding: '24px' }}>
      <h4 style={{ color: '#407bff' }}>VOLUMES</h4>
      <br />
      <Row gutter={16}>
        <Col span={8}>
          <Card title="VOLUMES">
            <Chart
              options={getBarChartOptions('Volumes', '#6495ed')}
              series={[{ data: [volumeUsage] }]}
              type="bar"
              height={120}
            />
            <div style={chartStyle}>
              <strong>{totalVolumesUsed}</strong> used / <strong>{maxTotalVolumes}</strong> total
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="VOLUME SNAPSHOTS">
            <Chart
              options={getBarChartOptions('Snapshots', '#32CD32')}
              series={[{ data: [snapshotUsage] }]}
              type="bar"
              height={120}
            />
            <div style={chartStyle}>
              <strong>{totalSnapshotsUsed}</strong> used / <strong>{maxTotalSnapshots}</strong> total
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="VOLUME STORAGE">
            <Chart
              options={getBarChartOptions('Storage (GB)', '#FFA500')}
              series={[{ data: [storageUsage] }]}
              type="bar"
              height={120}
            />
            <div style={chartStyle}>
              <strong>{totalGigabytesUsed}GB</strong> used / <strong>{maxTotalVolumeGigabytes}GB</strong> total
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CinderGraphs;