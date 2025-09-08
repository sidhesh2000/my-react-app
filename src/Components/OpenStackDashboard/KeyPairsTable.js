import React, { useState, useEffect } from 'react';
import { Table, Tag, Spin } from 'antd';

// Separate component for the Public Key cell
const PublicKeyCell = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  
  if (!text) return '-';
  
  return (
    <div 
      onClick={() => setExpanded(!expanded)}
      style={{ 
        cursor: 'pointer',
        wordBreak: expanded ? 'break-all' : 'normal'
      }}
    >
      {expanded ? text : `${text.substring(0, 10)}...`}
    </div>
  );
};

const KeyPairsTable = () => {
  const [keypairData, setKeypairData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKeyPairs = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const projectId = JSON.parse(localStorage.getItem("userData"))?.projectId;

        const response = await fetch(`/nova/v2.1/os-keypairs`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': token
          }
        });

        const data = await response.json();
        setKeypairData(data.keypairs.map(kp => kp.keypair));
      } catch (error) {
        console.error('Error fetching keypairs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchKeyPairs();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      align: 'center',
      render: (text) => text || '-'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 100,
      align: 'center',
      render: (type) => (
        <Tag color={type === 'ssh' ? 'blue' : 'green'}>
          {type || 'ssh'}
        </Tag>
      )
    },
    {
      title: 'Finger Print',
      dataIndex: 'fingerprint',
      key: 'fingerprint',
      align: 'center',
      render: (text) => text || '-',
      width: 100
    },
    {
      title: 'Public Key',
      dataIndex: 'public_key',
      key: 'publickey',
      align: 'center',
      render: (text) => <PublicKeyCell text={text} />,
      width: 100
    },
  ];

  return (
    <div>
      <Spin spinning={loading}>
        <Table 
          columns={columns} 
          dataSource={keypairData} 
          rowKey="name"
          bordered
          size="middle"
          pagination={{ pageSize: 10 }}
          scroll={{ x: 'max-content' }}
        />
      </Spin>
    </div>
  );
};

export default KeyPairsTable;