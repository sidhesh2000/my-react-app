import React, { useState, useEffect } from 'react';
import { Table, Tag, Space, Spin } from 'antd';

const ImagesTable = () => {
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const projectId = JSON.parse(localStorage.getItem("userData"))?.projectId;

        const response = await fetch(`/glance/v2/images`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': token
          }
        });

        const data = await response.json();
        setImageData(data.images);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
        align:"center",
      render: (text) => text || '-'
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
        align:"center"
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
        align:"center",
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 
                    status === 'queued' ? 'blue' : 
                    status === 'saving' ? 'orange' : 'red'}>
          {status}
        </Tag>
      )
    },
    {
      title: 'Visibility',
      dataIndex: 'visibility',
      key: 'visibility',
        align:"center",
      render: (visibility) => (
        <Tag color={visibility === 'public' ? 'green' : 'blue'}>
          {visibility}
        </Tag>
      )
    },
    {
      title: 'Size (GB)',
      dataIndex: 'size',
      key: 'size',
        align:"center",
      render: (size) => size ? `${Math.round(size / 1073741824 * 100) / 100} GB` : '-'
    },
    {
      title: 'Disk Format',
      dataIndex: 'disk_format',
      key: 'disk_format',
        align:"center",
      render: (format) => format?.toUpperCase() || 'unknown'
    },
    {
      title: 'Protected',
      dataIndex: 'protected',
      key: 'protected',
        align:"center",
      render: (protectedFlag) => (
        <Tag color={protectedFlag ? 'green' : 'red'}>
          {protectedFlag ? 'Yes' : 'No'}
        </Tag>
      )
    },
    {
      title: 'Min Disk (GB)',
      dataIndex: 'min_disk',
      key: 'min_disk',
      render: (minDisk) => `${minDisk} GB`,
        align:"center"
    },
    {
      title: 'Min RAM (MB)',
      dataIndex: 'min_ram',
      key: 'min_ram',
      render: (minRam) => `${minRam} MB`,
       align:"center"
    }
  ];

  return (
    <div>
      <Spin spinning={loading}>
        <Table 
          columns={columns} 
          dataSource={imageData} 
          rowKey="id"
          bordered
          size="middle"
          pagination={{ pageSize: 10 }}
          scroll={{ x: 'max-content' }}
          style={{ textAlign: 'center' }}
        />
      </Spin>
    </div>
  );
};

export default ImagesTable;