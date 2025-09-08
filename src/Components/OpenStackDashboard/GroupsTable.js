import React, { useState, useEffect } from 'react';
import { Table, Tag, Space, Spin, Button } from 'antd';

const VolumeGroupsTable = () => {
  const [groupData, setGroupData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVolumeGroups = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const projectId = JSON.parse(localStorage.getItem("userData"))?.projectId;

        // Try v3 first, fallback to v2 if needed
        const endpoints = [
          `/cinder/v3/${projectId}/groups`,
          `/cinder/v2/${projectId}/groups`
        ];

        let lastError = null;

        for (const endpoint of endpoints) {
          try {
            const response = await fetch(endpoint, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': token,
                'OpenStack-API-Version': 'volume 3.14' // Required for some APIs
              }
            });

            if (response.ok) {
              const data = await response.json();
              setGroupData(data.groups || []);
            //   setError(null);
              return; // Exit on success
            }
            lastError = await response.json();
          } catch (e) {
            lastError = e;
          }
        }

        throw lastError || new Error("All endpoints failed");

      } catch (error) {
        // setError(error.message || "Failed to fetch volume groups");
        console.error('API Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVolumeGroups();
  }, []);


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => text || '-',
      align: 'center',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (text) => text || '-',
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (status) => (
        <Tag color={
          status === 'available' ? 'green' : 
          status === 'error' ? 'red' : 
          'orange'
        }>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Availability Zone',
      dataIndex: 'availability_zone',
      key: 'availability_zone',
      align: 'center',
      render: (zone) => zone || '-',
    },
    {
      title: 'Volume Type(s)',
      dataIndex: 'volume_types',
      key: 'volume_types',
      align: 'center',
      render: (types) => (
        types?.length > 0 ? (
          <Space wrap>
            {types.map((type, index) => (
              <Tag key={index}>{type}</Tag>
            ))}
          </Space>
        ) : '-'
      ),
    },
    {
      title: 'Has Snapshots',
      dataIndex: 'snapshots',
      key: 'has_snapshots',
      align: 'center',
      render: (snapshots) => (
        <Tag color={snapshots?.length > 0 ? 'green' : 'red'}>
          {snapshots?.length > 0 ? 'Yes' : 'No'}
        </Tag>
      ),
    },
  ];

  return (
    <div>
      <Spin spinning={loading}>
        <Table 
          columns={columns} 
          dataSource={groupData} 
          rowKey="id"
          bordered
          size="middle"
          pagination={{ pageSize: 10 }}
        />
      </Spin>
    </div>
  );
};

export default VolumeGroupsTable;