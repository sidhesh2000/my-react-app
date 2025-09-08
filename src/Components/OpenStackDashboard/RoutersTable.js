import React, { useState, useEffect } from 'react';
import { Table, Tag, Spin, Switch, Alert, Space, message } from 'antd';

const RoutersTable = () => {
  const [routersData, setRoutersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRouters = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const projectId = JSON.parse(localStorage.getItem("userData"))?.projectId;

        const response = await fetch(`/neutron/v2.0/routers`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': token,
            'X-Project-Id': projectId
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setRoutersData(data.routers || []);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching routers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRouters();
  }, []);

  const handleAdminStateChange = async (checked, routerId) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(`/neutron/v2.0/routers/${routerId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': token
        },
        body: JSON.stringify({
          router: {
            admin_state_up: checked
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to update router: ${response.status}`);
      }

      message.success(`Router ${checked ? 'enabled' : 'disabled'} successfully`);
      setRoutersData(prev => prev.map(router => 
        router.id === routerId ? {...router, admin_state_up: checked} : router
      ));
    } catch (error) {
      message.error(`Update failed: ${error.message}`);
      console.error('Error updating router:', error);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => text || '(No name)',
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (status) => (
        <Tag color={status === 'ACTIVE' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'External Network',
      dataIndex: 'external_gateway_info',
      key: 'external_network',
      align: 'center',
      render: (info) => (
        info?.network_id ? (
          <Tag color="blue">
            {info.network_name || info.network_id.substring(0, 8) + '...'}
          </Tag>
        ) : 'Not connected'
      ),
    },
    {
      title: 'Admin State',
      dataIndex: 'admin_state_up',
      key: 'admin_state',
      align: 'center',
      render: (state, record) => (
        <Switch
          checked={state}
          onChange={(checked) => handleAdminStateChange(checked, record.id)}
          checkedChildren="UP"
          unCheckedChildren="DOWN"
        />
      ),
    },
  ];

  if (error) {
    return (
      <Alert
        type="error"
        message="Failed to Load Routers"
        description={
          <>
            <p>{error}</p>
            <p>Please check:</p>
            <ul>
              <li>Neutron service is available</li>
              <li>You have proper permissions</li>
              <li>Network API endpoint is correct</li>
            </ul>
          </>
        }
      />
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <Spin spinning={loading}>
        <Table
          columns={columns}
          dataSource={routersData}
          rowKey="id"
          bordered
          size="middle"
          pagination={{ pageSize: 10 }}
          locale={{ emptyText: 'No routers found' }}
        />
      </Spin>
    </div>
  );
};

export default RoutersTable;