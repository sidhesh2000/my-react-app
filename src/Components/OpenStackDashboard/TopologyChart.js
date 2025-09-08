import React, { useEffect, useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { Card, Spin, Tag, Typography } from 'antd';

const { Title } = Typography;

const NetworkTopology = () => {
  const [elements, setElements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopologyData = async () => {
      try {
        const token = localStorage.getItem('openstackToken');
        const headers = { 'X-Auth-Token': token };

        const [networksRes, routersRes, portsRes] = await Promise.all([
          fetch('/neutron/v2.0/networks', { headers }),
          fetch('/neutron/v2.0/routers', { headers }),
          fetch('/neutron/v2.0/ports', { headers }),
        ]);

        if (!networksRes.ok) throw new Error('Failed to fetch networks');
        if (!routersRes.ok) throw new Error('Failed to fetch routers');
        if (!portsRes.ok) throw new Error('Failed to fetch ports');

        const networks = (await networksRes.json()).networks || [];
        const routers = (await routersRes.json()).routers || [];
        const ports = (await portsRes.json()).ports || [];

        // Create graph elements
        const nodes = [];
        const edges = [];

        // Add networks as rectangle nodes
        networks.forEach(net => {
          nodes.push({
            data: { 
              id: `net-${net.id}`, 
              label: net.name || `Network\n${net.id.substring(0, 8)}`,
              type: 'network',
              status: net.status,
              adminState: net.admin_state_up ? 'UP' : 'DOWN'
            },
            classes: 'network'
          });
        });

        // Add routers as diamond nodes
        routers.forEach(router => {
          nodes.push({
            data: { 
              id: `router-${router.id}`, 
              label: router.name || `Router\n${router.id.substring(0, 8)}`,
              type: 'router',
              status: router.status,
              adminState: router.admin_state_up ? 'UP' : 'DOWN'
            },
            classes: 'router'
          });

          // Find ports for this router
          const routerPorts = ports.filter(p => p.device_id === router.id);
          
          // Create connections to networks
          routerPorts.forEach(port => {
            if (port.network_id) {
              edges.push({
                data: {
                  id: `edge-${router.id}-${port.network_id}`,
                  source: `router-${router.id}`,
                  target: `net-${port.network_id}`,
                  portId: port.id
                }
              });
            }
          });
        });

        setElements([...nodes, ...edges]);
      } catch (err) {
        console.error('Error loading topology:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopologyData();
  }, []);

  // Use a built-in layout that works without additional dependencies
  const layout = {
    name: 'cose',
    animate: true,
    animationDuration: 500,
    randomize: true,
    componentSpacing: 100,
    nodeRepulsion: 4000,
    idealEdgeLength: 150,
    fit: true,
    padding: 50
  };

  const stylesheet = [
    // Network nodes (green rectangles)
    {
      selector: 'node.network',
      style: {
        'background-color': '#52c41a',
        'label': 'data(label)',
        'shape': 'rectangle',
        'width': 120,
        'height': 80,
        'text-valign': 'center',
        'text-halign': 'center',
        'color': '#fff',
        'font-size': 12,
        'text-wrap': 'wrap',
        'text-max-width': '100px',
        'border-width': 2,
        'border-color': '#389e0d',
        'padding': '10px'
      }
    },
    // Router nodes (orange diamonds)
    {
      selector: 'node.router',
      style: {
        'background-color': '#faad14',
        'label': 'data(label)',
        'shape': 'diamond',
        'width': 100,
        'height': 100,
        'text-valign': 'center',
        'text-halign': 'center',
        'color': '#fff',
        'font-size': 12,
        'text-wrap': 'wrap',
        'text-max-width': '80px',
        'border-width': 2,
        'border-color': '#d48806',
      }
    },
    // Edges (connections)
    {
      selector: 'edge',
      style: {
        'width': 2,
        'line-color': '#bfbfbf',
        'target-arrow-color': '#bfbfbf',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier',
        'arrow-scale': 1.5
      }
    },
    // Status indicators
    {
      selector: '[status = "ACTIVE"]',
      style: {
        'border-style': 'solid',
        'border-width': 3,
        'border-color': '#389e0d'
      }
    },
    {
      selector: '[status = "DOWN"]',
      style: {
        'border-style': 'dashed',
        'border-width': 2,
        'border-color': '#f5222d'
      }
    },
    {
      selector: '[status = "ERROR"]',
      style: {
        'border-style': 'double',
        'border-width': 3,
        'border-color': '#f5222d'
      }
    }
  ];

  return (
    <Card title="Network Topology" bordered={false}>
      {error ? (
        <div style={{ color: 'red', textAlign: 'center', padding: 20 }}>
          <Title level={4}>Error Loading Topology</Title>
          <p>{error}</p>
        </div>
      ) : (
        <Spin spinning={loading}>
          <div style={{ marginBottom: 16 }}>
            <Tag color="#52c41a">Networks</Tag>
            <Tag color="#faad14">Routers</Tag>
            <Tag color="#389e0d">Active</Tag>
            <Tag color="#f5222d">Down/Error</Tag>
          </div>
          
          <CytoscapeComponent
            elements={elements}
            style={{ width: '100%', height: '70vh', border: '1px solid #f0f0f0', borderRadius: 4 }}
            layout={layout}
            stylesheet={stylesheet}
            cy={(cy) => {
              // Add tooltip on mouseover
              cy.on('mouseover', 'node', (event) => {
                const node = event.target;
                const data = node.data();
                const type = data.type === 'network' ? 'Network' : 'Router';
                
                let tooltip = `
                  <div style="padding: 8px; background: #fff; border: 1px solid #ddd; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.15)">
                    <strong>${type} Details</strong><br>
                    ID: ${node.id().replace('net-', '').replace('router-', '')}<br>
                    Status: ${data.status}<br>
                    Admin State: ${data.adminState}
                  </div>
                `;
                
                const popper = node.popper({
                  content: () => {
                    const div = document.createElement('div');
                    div.innerHTML = tooltip;
                    return div;
                  },
                  popper: {}
                });
                
                node.scratch('popper', popper);
              });
              
              cy.on('mouseout', 'node', (event) => {
                const node = event.target;
                const popper = node.scratch('popper');
                if (popper) popper.destroy();
              });
            }}
          />
          
          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <Title level={5}>Topology Legend</Title>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
              <div>
                <div style={{ 
                  display: 'inline-block',
                  width: 20, 
                  height: 20, 
                  backgroundColor: '#52c41a',
                  border: '1px solid #389e0d',
                  marginRight: 8
                }}></div>
                Network
              </div>
              <div>
                <div style={{ 
                  display: 'inline-block',
                  width: 20, 
                  height: 20, 
                  backgroundColor: '#faad14',
                  border: '1px solid #d48806',
                  transform: 'rotate(45deg)',
                  marginRight: 8
                }}></div>
                Router
              </div>
              <div>
                <div style={{ 
                  display: 'inline-block',
                  width: 20, 
                  height: 2, 
                  backgroundColor: '#bfbfbf',
                  marginRight: 8,
                  verticalAlign: 'middle'
                }}></div>
                Connection
              </div>
              <div>
                <div style={{ 
                  display: 'inline-block',
                  width: 20, 
                  height: 20, 
                  border: '3px solid #389e0d',
                  marginRight: 8
                }}></div>
                Active
              </div>
              <div>
                <div style={{ 
                  display: 'inline-block',
                  width: 20, 
                  height: 20, 
                  border: '2px dashed #f5222d',
                  marginRight: 8
                }}></div>
                Down
              </div>
            </div>
          </div>
        </Spin>
      )}
    </Card>
  );
};

export default NetworkTopology;