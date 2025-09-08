import React, { useState, useEffect } from 'react';
import { Table, Tag, Space, Spin } from 'antd';

const ServerGroups = () => {
  const [serverGroupData, setServerGroupData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerGroups = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const projectId = JSON.parse(localStorage.getItem("userData"))?.projectId;

        const response = await fetch(`/nova/v2.1/os-server-groups`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': token
          }
        });

        const data = await response.json();
        setServerGroupData(data.server_groups);
      } catch (error) {
        console.error('Error fetching server groups:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServerGroups();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      render: (text) => text || '-'
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: 'Policies',
      dataIndex: 'policies',
      key: 'policies',
      align: 'center',
      render: (policies) => (
        <Space size="small">
          {policies?.map((policy, index) => (
            <Tag color={policy === 'anti-affinity' ? 'red' : 
                        policy === 'affinity' ? 'green' : 'blue'} 
                 key={index}>
              {policy}
            </Tag>
          ))}
        </Space>
      )
    },
  
  ];

  return (
    <div>
      <Spin spinning={loading}>
        <Table 
          columns={columns} 
          dataSource={serverGroupData} 
          rowKey="id"
          bordered
          size="middle"
          pagination={{ pageSize: 10 }}
        />
      </Spin>
    </div>
  );
};

export default ServerGroups;