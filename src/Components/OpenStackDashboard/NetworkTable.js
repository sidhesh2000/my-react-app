import React, { useState, useEffect } from 'react';
import { Table, Tag, Spin } from 'antd';

const NetworkTable = () => {
  const [networkData, setNetworkData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNetworks = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(`/neutron/v2.0/networks`, {
          method: 'GET',
          headers: {
            'X-Auth-Token': token
          }
        });

        const data = await response.json();
        setNetworkData(data.networks);
      } catch (error) {
        console.error('Error fetching networks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNetworks();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      align: 'center',
      key: 'name',
      render: (text) => text || '-'
    },
    {
      title: 'Subnets Associated',
      key: 'subnets',
      align: 'center',
      render: (_, record) => record.subnets?.length || 0
    },
    {
      title: 'Shared',
      dataIndex: 'shared',
      key: 'shared',
      align: 'center',
      render: (shared) => (
        <Tag color={shared ? 'green' : 'red'}>
          {shared ? 'Yes' : 'No'}
        </Tag>
      )
    },
    {
      title: 'External',
      dataIndex: 'router:external',
      key: 'external',
      align: 'center',
      render: (external) => (
        <Tag color={external ? 'blue' : 'orange'}>
          {external ? 'Yes' : 'No'}
        </Tag>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (status) => (
        <Tag color={status === 'ACTIVE' ? 'green' : 'volcano'}>
          {status}
        </Tag>
      )
    },
    {
      title: 'Admin State',
      dataIndex: 'admin_state_up',
      key: 'admin_state',
      align: 'center',
      render: (state) => (
        <Tag color={state ? 'green' : 'red'}>
          {state ? 'UP' : 'DOWN'}
        </Tag>
      )
    },
  ];

  return (
    <div>
      <Spin spinning={loading}>
        <Table 
          columns={columns} 
          dataSource={networkData} 
          rowKey="id"
          bordered
          size="middle"
          pagination={{ pageSize: 10 }}
        />
      </Spin>
    </div>
  );
};

export default NetworkTable;