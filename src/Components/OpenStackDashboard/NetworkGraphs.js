import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spin } from 'antd';
import ReactApexChart from 'react-apexcharts';

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

const NetworkGraphs = () => {
  const [quota, setQuota] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Watch these localStorage keys for changes
  const storageValues = useLocalStorageWatcher(['openstackToken', 'currentProjectId']);

  const fetchQuota = async () => {
    try {
      const token = localStorage.getItem("openstackToken");
      const projectId = localStorage.getItem('currentProjectId');
      
      if (!token || !projectId) {
        setQuota(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      const response = await fetch(`/neutron/v2.0/quotas/${projectId}`, {
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
      setQuota(data.quota);
    } catch (error) {
      console.error('Error fetching quota:', error);
      setQuota(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuota();
  }, [storageValues.openstackToken, storageValues.currentProjectId]);

  if (loading) return <div style={{display:"flex",justifyContent:"center",marginTop:"1rem"}}><Spin/></div>;
  if (!quota) return <div>No data available. Please check your authentication.</div>;

  const chartStyle = { textAlign: 'center', marginTop: '12px', fontSize: '14px' };

  const resources = [
    { key: 'floatingip', title: 'Floating Ips', color: '#00E396' },
    { key: 'security_group', title: 'Security Groups', color: '#FEB019' },
    { key: 'security_group_rule', title: 'Security Rules', color: '#008ffb' },
    { key: 'network', title: 'Networks', color: '#FF4560' },
    { key: 'port', title: 'Ports', color: '#775DD0' },
    { key: 'router', title: 'Routers', color: '#3F51B5' },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <h3 style={{ color: '#407bff' }}>NETWORKS</h3>
      <br/>
      <Row gutter={16}>
        {resources.map((resource) => {
          const limit = quota[resource.key];
          const used = 0; // Usage data would need to be fetched from additional API endpoints
          const usagePercentage = 0;

          return (
            <Col span={8} key={resource.key} style={{ marginBottom: '16px' }}>
              <Card title={resource.title}>
                <ReactApexChart
                  options={{
                    chart: { type: 'radialBar' },
                    labels: [resource.title],
                    colors: [resource.color],
                    plotOptions: {
                      radialBar: {
                        hollow: {
                          size: '60%',
                        },
                        dataLabels: {
                          name: {
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#333',
                            offsetY: 3
                          },
                          value: {
                            fontSize: '16px',
                            color: resource.color,
                            show: true,
                            formatter: function (val) {
                              return val + '%';
                            }
                          }
                        }
                      }
                    }
                  }}
                  series={[usagePercentage]}
                  type="radialBar"
                  height={250}
                />
                <div style={chartStyle}>
                  <strong>{used}</strong> used /{' '}
                  <strong>{limit === -1 ? 'No Limit' : limit}</strong> total
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default NetworkGraphs;