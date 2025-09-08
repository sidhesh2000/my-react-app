import React, { useState, useEffect } from 'react';
import { 
  Table, 
  Button, 
  Modal, 
  message, 
  Form, 
  Input, 
  Select, 
  Space, 
  Dropdown, 
  Menu 
} from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  SearchOutlined,
  PoweroffOutlined,
  CaretRightOutlined,
  SyncOutlined,
  MoreOutlined 
} from '@ant-design/icons';

const { Option } = Select;
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
const InstanceTable = () => {


  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingInstance, setEditingInstance] = useState(null);
  const [form] = Form.useForm();
  const [flavors, setFlavors] = useState([]);
  const [images, setImages] = useState([]);
  const [networks, setNetworks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [actionLoading, setActionLoading] = useState({});
  
  // Watch these localStorage keys for changes
  const storageValues = useLocalStorageWatcher(['openstackToken', 'currentProjectId']);

  const fetchData = async () => {
    const token = localStorage.getItem("openstackToken");
    const projectId = localStorage.getItem('currentProjectId');
    
    if (!token || !projectId) {
      setServers([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`/nova/v2.1/${projectId}/servers/detail`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': token,
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      const formattedData = data.servers.map(server => ({
        key: server.id,
        instanceName: server.name,
        imageName: server.image?.id || 'ubuntu22.04-dev-root',
        ipAddress: server.addresses['Netapp-TCSECP-Net']?.[0]?.addr || 'N/A',
        flavor: server.flavor?.id || 'g1t1.large',
        keyPair: server.key_name || '-',
        status: server.status,
        availabilityZone: server['OS-EXT-AZ:availability_zone'],
        task: server['OS-EXT-STS:task_state'] || 'None',
        powerState: getPowerState(server['OS-EXT-STS:power_state']),
        age: calculateAge(server.created)
      }));
      
      setServers(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
      message.error('Failed to fetch instances');
    } finally {
      setLoading(false);
    }
  };

  const fetchFlavors = async () => {
    const token = localStorage.getItem("openstackToken");
    const projectId = localStorage.getItem('currentProjectId');
    
    if (!token || !projectId) return;

    try {
      const response = await fetch(`/nova/v2.1/${projectId}/flavors`, {
        headers: { 'X-Auth-Token': token }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setFlavors(data.flavors);
    } catch (error) {
      console.error('Error fetching flavors:', error);
      message.error('Failed to fetch flavors');
    }
  };

  const fetchImages = async () => {
    const token = localStorage.getItem("openstackToken");
    
    if (!token) return;

    try {
      const response = await fetch(`/glance/v2/images`, {
        headers: { 'X-Auth-Token': token }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setImages(data.images);
    } catch (error) {
      console.error('Error fetching images:', error);
      message.error('Failed to fetch images');
    }
  };

  const fetchNetworks = async () => {
    const token = localStorage.getItem("openstackToken");
    const projectId = localStorage.getItem('currentProjectId');
    
    if (!token || !projectId) return;

    try {
      const response = await fetch(`/neutron/v2.0/networks`, {
        headers: { 'X-Auth-Token': token }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setNetworks(data.networks);
    } catch (error) {
      console.error('Error fetching networks:', error);
      message.error('Failed to fetch networks');
    }
  };

  useEffect(() => {
    fetchData();
    fetchFlavors();
    fetchImages();
    fetchNetworks();
  }, [storageValues.openstackToken, storageValues.currentProjectId]);

  const onSearchChange = (e) => setSearchText(e.target.value);
  
  const filteredServers = React.useMemo(() => {
    if (!searchText) return servers;
    const q = searchText.toLowerCase();
    return servers.filter((row) =>
      Object.values(row).some(
        (val) => val && String(val).toLowerCase().includes(q)
      )
    );
  }, [servers, searchText]);
  

  const showCreateModal = () => {
    setEditingInstance(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const showEditModal = (instance) => {
    setEditingInstance(instance);
    form.setFieldsValue({
      name: instance.instanceName,
      image: instance.imageName,
      flavor: instance.flavor,
      network: instance.ipAddress ? 'Netapp-TCSECP-Net' : undefined,
      keyPair: instance.keyPair !== '-' ? instance.keyPair : undefined
    });
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const token = localStorage.getItem("openstackToken");
    const projectId = localStorage.getItem('currentProjectId');

      if (editingInstance) {
        const response = await fetch(`/nova/v2.1/${projectId}/servers/${editingInstance.key}`, {
          method: 'PUT',
          headers: {
            'X-Auth-Token': token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            server: {
              name: values.name
            }
          })
        });

        if (response.ok) {
          message.success('Instance updated successfully');
          fetchData();
        }
      } else {
        const serverConfig = {
          name: values.name,
          flavorRef: values.flavor,
          imageRef: values.image,
          networks: [{ uuid: values.network }],
          key_name: values.keyPair || undefined
        };

        const response = await fetch(`/nova/v2.1/${projectId}/servers`, {
          method: 'POST',
          headers: {
            'X-Auth-Token': token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            server: serverConfig
          })
        });

        if (response.ok) {
          message.success('Instance created successfully');
          fetchData();
        }
      }
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error:', error);
      message.error('Operation failed');
    }
  };

  const deleteInstance = async (serverId) => {
    setDeletingId(serverId);
    try {
      const token = localStorage.getItem("openstackToken");
    const projectId = localStorage.getItem('currentProjectId');

      const response = await fetch(
        `/nova/v2.1/${projectId}/servers/${serverId}`,
        {
          method: 'DELETE',
          headers: {
            'X-Auth-Token': token,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.ok) {
        message.success('Instance deleted successfully');
        setServers(servers.filter(server => server.key !== serverId));
      } else {
        const errorData = await response.json();
        message.error(`Failed to delete instance: ${errorData.error?.message || 'Unknown error'}`);
      }
    } catch (error) {
      message.error('Error deleting instance');
      console.error('Delete error:', error);
    } finally {
      setDeletingId(null);
    }
  };

  const handleInstanceAction = async (serverId, action) => {
    setActionLoading(prev => ({ ...prev, [serverId]: true }));
    const token = localStorage.getItem("openstackToken");
    const projectId = localStorage.getItem('currentProjectId');

    try {
      let endpoint = '';
      let body = {};
      
      switch(action) {
        case 'start':
          endpoint = 'action';
          body = { "os-start": null };
          break;
        case 'stop':
          endpoint = 'action';
          body = { "os-stop": null };
          break;
        case 'reboot':
          endpoint = 'action';
          body = { "reboot": { "type": "SOFT" } };
          break;
        default:
          throw new Error('Invalid action');
      }

      const response = await fetch(
        `/nova/v2.1/${projectId}/servers/${serverId}/${endpoint}`,
        {
          method: 'POST',
          headers: {
            'X-Auth-Token': token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }
      );

      if (response.ok) {
        message.success(`Instance ${action} initiated successfully`);
        setTimeout(() => fetchData(), 2000);
      } else {
        const errorData = await response.json();
        message.error(`Failed to ${action} instance: ${errorData.error?.message || 'Unknown error'}`);
      }
    } catch (error) {
      message.error(`Error performing ${action} action`);
      console.error(`${action} error:`, error);
    } finally {
      setActionLoading(prev => ({ ...prev, [serverId]: false }));
    }
  };

  const handleDelete = (serverId) => {
    Modal.confirm({
      title: 'Confirm Delete',
      content: 'Are you sure you want to delete this instance? This action cannot be undone.',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: () => deleteInstance(serverId)
    });
  };

  const getPowerState = (powerState) => {
    switch(powerState) {
      case 1: return 'Running';
      case 0: return 'Stopped';
      default: return 'Unknown';
    }
  };

  const calculateAge = (created) => {
    const createdDate = new Date(created);
    const now = new Date();
    const diffMs = now - createdDate;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${diffHours} hours, ${diffMinutes} minutes`;
  };

  const actionMenu = (record) => (
    <Menu>
      <Menu.Item 
        key="start" 
        icon={<CaretRightOutlined />}
        onClick={() => handleInstanceAction(record.key, 'start')}
        disabled={record.powerState === 'Running' || actionLoading[record.key]}
      >
        Start
      </Menu.Item>
      <Menu.Item 
        key="stop" 
        icon={<PoweroffOutlined />}
        onClick={() => handleInstanceAction(record.key, 'stop')}
        disabled={record.powerState === 'Stopped' || actionLoading[record.key]}
      >
        Stop
      </Menu.Item>
      <Menu.Item 
        key="reboot" 
        icon={<SyncOutlined />}
        onClick={() => handleInstanceAction(record.key, 'reboot')}
        disabled={actionLoading[record.key]}
      >
        Reboot
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item 
        key="edit" 
        icon={<EditOutlined />}
        onClick={() => showEditModal(record)}
      >
        Edit
      </Menu.Item>
      <Menu.Item 
        key="delete" 
        icon={<DeleteOutlined />}
        danger
        onClick={() => handleDelete(record.key)}
        disabled={deletingId === record.key}
      >
        Delete
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: 'Instance Name',
      dataIndex: 'instanceName',
      key: 'instanceName',
      align: "center"
    },
    {
      title: 'Image',
      dataIndex: 'imageName',
      key: 'imageName',
      align: "center"
    },
    {
      title: 'IP Address',
      dataIndex: 'ipAddress',
      key: 'ipAddress',
      align: "center"
    },
    {
      title: 'Flavor',
      dataIndex: 'flavor',
      key: 'flavor',
      align: "center"
    },
    {
      title: 'Key Pair',
      dataIndex: 'keyPair',
      key: 'keyPair',
      align: "center"
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: "center"
    },
    {
      title: 'Availability Zone',
      dataIndex: 'availabilityZone',
      key: 'availabilityZone',
      align: "center"
    },
    {
      title: 'Task',
      dataIndex: 'task',
      key: 'task',
      align: "center"
    },
    {
      title: 'Power State',
      dataIndex: 'powerState',
      key: 'powerState',
      align: "center"
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      align: "center"
    },
    {
      title: 'Action',
      key: 'action',
      align: "center",
      render: (_, record) => (
        <Dropdown overlay={actionMenu(record)} trigger={['click']}>
          <Button 
            icon={<MoreOutlined />} 
            loading={actionLoading[record.key]}
          />
        </Dropdown>
      ),
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-between" }}>
        <Input
          placeholder="Search instances…"
          prefix={<SearchOutlined />}
          allowClear
          value={searchText}
          onChange={onSearchChange}
          style={{ width: 250 }}
        />
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={showCreateModal}
        >
          Create Instance
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={filteredServers}
        loading={loading}
        bordered
        size="middle"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 'max-content' }}
      />

      <Modal
        title={editingInstance ? "Edit Instance" : "Create Instance"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
        width={700}
        size="small"
        bodyStyle={{ maxHeight: 300, overflowY: 'auto' }} 
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Instance Name"
            rules={[{ required: true, message: 'Please input instance name!' }]}
          >
            <Input placeholder="e.g., web-server-01" />
          </Form.Item>

          {!editingInstance && (
            <>
              <Form.Item
                name="image"
                label="Image"
                rules={[{ required: true, message: 'Please select an image!' }]}
              >
                <Select placeholder="Select an image">
                  {images.map(image => (
                    <Option key={image.id} value={image.id}>
                      {image.name || image.id}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="flavor"
                label="Flavor"
                rules={[{ required: true, message: 'Please select a flavor!' }]}
              >
                <Select placeholder="Select a flavor">
                  {flavors.map(flavor => (
                    <Option key={flavor.id} value={flavor.id}>
                      {flavor.name} (vCPUs: {flavor.vcpus}, RAM: {flavor.ram}MB, Disk: {flavor.disk}GB)
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="network"
                label="Network"
                rules={[{ required: true, message: 'Please select a network!' }]}
              >
                <Select placeholder="Select a network">
                  {networks.map(network => (
                    <Option key={network.id} value={network.id}>
                      {network.name || network.id}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="keyPair"
                label="Key Pair (Optional)"
              >
                <Select placeholder="Select a key pair (optional)">
                  <Option value="">None</Option>
                  <Option value="my-key">my-key</Option>
                </Select>
              </Form.Item>
            </>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default InstanceTable;