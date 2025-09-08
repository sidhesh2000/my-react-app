import React, { useState, useEffect } from 'react';
import { Table, Tag, Space, Spin } from 'antd';

const VolumeTable = () => {
  const [volumeData, setVolumeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVolumes = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const projectId = JSON.parse(localStorage.getItem("userData"))?.projectId;

        const response = await fetch(`/cinder/v2/${projectId}/volumes/detail`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': token
          }
        });

        const data = await response.json();
        setVolumeData(data.volumes);
      } catch (error) {
        console.error('Error fetching volumes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVolumes();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'id',
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
        <Tag color={status === 'in-use' ? 'green' : 'blue'}>{status}</Tag>
      )
    },
    {
      title: 'Group',
      dataIndex: 'consistencygroup_id',
      key: 'group',
      align: 'center',
      render: (group) => group || '-'
    },
    {
      title: 'Type',
      dataIndex: 'volume_type',
      key: 'type',
      align: 'center',
    },
    {
      title: 'Attached To',
      dataIndex: 'attachments',
      key: 'attached_to',
      align: 'center',
      render: (attachments) => (
        attachments.length > 0 ? (
          <Space direction="vertical">
            {attachments.map(attachment => (
              <div key={attachment.attachment_id}>
                Server: {attachment.server_id}<br/>
                Device: {attachment.device}
              </div>
            ))}
          </Space>
        ) : 'Not attached'
      )
    },
    {
      title: 'Availability Zone',
      dataIndex: 'availability_zone',
      key: 'availability_zone',
      align: 'center',
    },
    {
      title: 'Bootable',
      dataIndex: 'bootable',
      key: 'bootable',
      align: 'center',
      render: (bootable) => (
        <Tag color={bootable === 'true' ? 'green' : 'red'}>
          {bootable === 'true' ? 'Yes' : 'No'}
        </Tag>
      )
    },
    {
      title: 'Encrypted',
      dataIndex: 'encrypted',
      key: 'encrypted',
      align: 'center',
      render: (encrypted) => (
        <Tag color={encrypted ? 'green' : 'red'}>
          {encrypted ? 'Yes' : 'No'}
        </Tag>
      )
    },
  ];

  return (
    <div>
      <Spin spinning={loading}>
        <Table 
          columns={columns} 
          dataSource={volumeData} 
          rowKey="id"
          bordered
          size="middle"
          pagination={{ pageSize: 10 }}
        />
      </Spin>
    </div>
  );
};

export default VolumeTable;