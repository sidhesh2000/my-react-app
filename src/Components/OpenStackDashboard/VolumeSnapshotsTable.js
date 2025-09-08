import React, { useState, useEffect } from 'react';
import { Table, Tag, Space, Spin, Button } from 'antd';

const VolumeSnapshotsTable = () => {
  const [snapshotData, setSnapshotData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSnapshots = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const projectId = JSON.parse(localStorage.getItem("userData"))?.projectId;

        const response = await fetch(`/cinder/v2/${projectId}/snapshots/detail`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': token
          }
        });

        const data = await response.json();
        setSnapshotData(data.snapshots);
      } catch (error) {
        console.error('Error fetching snapshots:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSnapshots();
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
      title: 'Size (GB)',
      dataIndex: 'size',
      key: 'size',
      render: (size) => `${size} GB`,
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (status) => (
        <Tag color={status === 'available' ? 'green' : 'orange'}>{status}</Tag>
      )
    },
    {
      title: 'Group Snapshot',
      dataIndex: 'group_snapshot_id',
      key: 'group_snapshot',
      align: 'center',
      render: (groupSnapshotId) => groupSnapshotId || '-'
    },
    {
      title: 'Volume Name',
      dataIndex: 'volume_id',
      key: 'volume_name',
      align: 'center',
      render: (volumeId) => volumeId || '-'
    },
   
  ];

  const handleAction = (action, snapshotId) => {
    // Implement your action handlers here
    console.log(`${action} snapshot with ID: ${snapshotId}`);
    // You can add API calls for delete/manage actions
  };

  return (
    <div>
      <Spin spinning={loading}>
        <Table 
          columns={columns} 
          dataSource={snapshotData} 
          rowKey="id"
          bordered
          size="middle"
          pagination={{ pageSize: 10 }}
        />
      </Spin>
    </div>
  );
};

export default VolumeSnapshotsTable;