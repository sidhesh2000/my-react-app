import React, { useState, useEffect } from 'react';
import { Table, Tag, Spin, Button, Space, Alert } from 'antd';

const VolumeGroupSnapshotsTable = () => {
  const [snapshotsData, setSnapshotsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroupSnapshots = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const projectId = JSON.parse(localStorage.getItem("userData"))?.projectId;

        // Try both v3 and v2 endpoints
        const endpoints = [
          `/cinder/v3/${projectId}/group_snapshots/detail`,
          `/cinder/v2/${projectId}/group_snapshots/detail`
        ];

        let lastError = null;

        for (const endpoint of endpoints) {
          try {
            const response = await fetch(endpoint, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': token,
                'OpenStack-API-Version': 'volume 3.14'
              }
            });

            if (response.ok) {
              const data = await response.json();
              setSnapshotsData(data.group_snapshots || []);
              setError(null);
              return;
            }
            lastError = await response.json();
          } catch (e) {
            lastError = e;
          }
        }

        throw lastError || new Error("All API endpoints failed");

      } catch (error) {
        setError(error.message || "Failed to fetch group snapshots");
        console.error('API Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroupSnapshots();
  }, []);

  const handleDelete = (snapshotId) => {
    console.log("Delete snapshot:", snapshotId);
    // Implement actual deletion API call here
  };

  const handleManage = (snapshotId) => {
    console.log("Manage snapshot:", snapshotId);
    // Implement management logic here
  };

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
      title: 'Group',
      dataIndex: 'group_id',
      key: 'group',
      align: 'center',
      render: (groupId) => groupId || '-'
    },
    {
      title: 'Actions',
      key: 'actions',
      align: 'center',
      render: (_, record) => (
        <Space size="middle">
          <Button 
            type="link" 
            onClick={() => handleDelete(record.id)}
            danger
          >
            Delete
          </Button>
          <Button 
            type="link" 
            onClick={() => handleManage(record.id)}
          >
            Manage
          </Button>
        </Space>
      )
    },
  ];

  if (error) {
    return (
      <Alert
        type="error"
        message="Failed to Load Group Snapshots"
        description={
          <>
            <p>{error}</p>
            <p>This feature might not be available in your OpenStack deployment.</p>
          </>
        }
      />
    );
  }

  return (
    <Spin spinning={loading}>
      <Table
        columns={columns}
        dataSource={snapshotsData}
        rowKey="id"
        bordered
        size="middle"
        pagination={{ pageSize: 10 }}
        locale={{ emptyText: 'No group snapshots found' }}
      />
    </Spin>
  );
};

export default VolumeGroupSnapshotsTable;