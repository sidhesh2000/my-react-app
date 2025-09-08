import React, { useState } from 'react';
import { Layout, Menu, theme, Avatar, Dropdown, Space } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import InstanceTable from './InstanceTable';
import VolumeGraphs from './VolumeGraphs';
import VolumeTable from './VolumeTable';
import NetworkTable from './NetworkTable';
import CinderGraphs from './CinderGraphs';
import NetworkGraphs from './NetworkGraphs';
import ImagesTable from './ImagesTable';
import KeyPairsTable from './KeyPairsTable';
import ServerGroups from './ServerGroups';
import VolumeSnapshotsTable from './VolumeSnapshotsTable';
import VolumeGroupsTable from './GroupsTable';
import VolumeGroupSnapshotsTable from './VolumeGroupSnapshotsTable';
import TopologyChart from './TopologyChart';
import RoutersTable from './RoutersTable';
import ProjectSwitcher from '../ProjectSwitcher/ProjectSwitcher';
const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1-1');
  const [] = useState(
    localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).username : null
  );
  const [domainname] = useState(
    localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).domainname : null
  );
  const [projectname] = useState(
    localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).projectName : null
  );
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

 
  const items = [
    {
      key: '1',
      icon: <DashboardOutlined />,
      label: 'Compute',
      children: [
        {
          key: '1-1',
          label: 'Overview',
        },
        {
          key: '1-2',
          label: 'Instances',
        },
        {
          key: '1-3',
          label: 'Images',
        },
        {
          key: '1-4',
          label: 'Key Pairs',
        },
        {
          key: '1-5',
          label: 'Server Groups',
        },
      ],
    },
    {
      key: '2',
      icon: <ShoppingCartOutlined />,
      label: 'Volume',
      children: [
        {
          key: '2-0',
          label: 'Volumes',
        },
        {
          key: '2-1',
          label: 'Snapshots',
        },
        {
          key: '2-2',
          label: 'Groups',
        },
        {
          key: '2-3',
          label: 'Group Snapshots',
        },
      ],
    },
    {
      key: '3',
      icon: <ShoppingCartOutlined />,
      label: 'Network',
      children: [
        {
          key: '3-0',
          label: 'Networks',
        },
        {
          key: '3-1',
          label: 'Topology',
        },
        {
          key: '3-2',
          label: 'Routers',
        },
        
      ],
    },
  ];

  const userMenuItems = [
    {
      key: '1',
      label: 'Profile',
      icon: <UserOutlined />,
    },
    {
      key: '2',
      label: 'Settings',
      icon: <SettingOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: 'Logout',
      icon: <LogoutOutlined />,
    },
  ];

  const renderContent = () => {
    switch (selectedKey) {
      case '1-1': // Overview
        return (
          <>
         
          <div >
            <VolumeGraphs />
            <CinderGraphs />
            <NetworkGraphs />
          </div> {/* Corrected this */}
        </>
        
        );
      case '1-2': // Instances
        return <InstanceTable />;
        case '1-3': // Instances
        return <ImagesTable />;
        case '1-4':
          return <KeyPairsTable />;
          case '1-5':
            return <ServerGroups />
      case '2-0':
        return <VolumeTable />;
        case '2-1': // Instances
        return <VolumeSnapshotsTable />;
        case '2-2': // Instances
        return <VolumeGroupsTable />;
        case '2-3': // Instances
        return <VolumeGroupSnapshotsTable />;
      case '3-0':
        return <NetworkTable />;
        case '3-1':
          return <TopologyChart />;
          case '3-2':
            return <RoutersTable />;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
        collapsedWidth={80}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:"#F8F8F8",
          padding: collapsed ? '0' : '0 24px'
        }}>
          {collapsed ? (
            <Avatar style={{ backgroundColor: '#1890ff' }}>TCS</Avatar>
          ) : (
           <img  width={130} src={require('../../assets/TCSECP-Logo.png')}/>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          inlineCollapsed={collapsed}
          items={items}
          onClick={({ key }) => setSelectedKey(key)}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 250, transition: 'margin-left 0.2s' }}>
        <Header
          style={{
            padding: 0,
            background: "#001529 !important",
            backgroundImage: "none !important",
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
          }}
        >
          <div style={{ zIndex: "2" }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggleCollapsed,
              style: {
                padding: '0 24px',
                fontSize: '18px',
                cursor: 'pointer'
              },
            })}
            
          </div>
       
          <div style={{ paddingRight: 24, zIndex:"2", display:"flex" }}>
          <div style={{display:"flex",gap:"0.8rem"}}>
          <ProjectSwitcher/>
          <div style={{ zIndex: "2",marginRight:"0.8rem" }}>{domainname}</div>
          </div>
            <Space size="large">
              <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
                <Space>
                  <Avatar icon={<UserOutlined />} />
                  {!collapsed && <span>{}</span>}
                </Space>
              </Dropdown>
            </Space>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
