import React, { useState, useEffect } from 'react';
import { Select, Spin, message } from 'antd';
import { useAuth } from './AuthContext';
import { ROOT_URL } from '../RootUrl/rooturl';

const ProjectSwitcher = () => {
  const { user, token, setUser } = useAuth();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(localStorage.getItem('currentProjectId'));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("cachetemp");
        const response = await fetch(`${ROOT_URL}/auth/projects`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const data = await response.json();

        if (data.success && Array.isArray(data.projects)) {
          setProjects(data.projects);

          // Set the current project from localStorage or user context
          const currentProjectId = localStorage.getItem('currentProjectId') || user?.currentProjectId;
          if (currentProjectId) {
            setSelectedProject(currentProjectId);
          } else if (data.projects.length > 0) {
            setSelectedProject(data.projects[0].id);
          }
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        message.error('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
    handleProjectChange(selectedProject);
  }, [user?.currentProjectId]);

  const handleProjectChange = async (projectId) => {
    if (!projectId) return;
    const token = localStorage.getItem("authToken");
    setLoading(true);
    try {
      const response = await fetch(`${ROOT_URL}/auth/switch-project`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ projectId })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Update user context
      setUser(data.userData, data.jwtToken);

      // Store OpenStack token and project ID in localStorage
      if (data.openstackToken?.id) {
        localStorage.setItem('openstackToken', data.openstackToken.id);
      }
      localStorage.setItem('currentProjectId', projectId);

      // ✅ Ensure the selected project is updated in UI
      setSelectedProject(projectId);

      message.success('Project switched successfully');
    } catch (error) {
      console.error('Project switch failed:', error);
      message.error('Failed to switch project');
      // Revert to previous selection if switch fails
      setSelectedProject(localStorage.getItem('currentProjectId') || user?.currentProjectId || '');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="project-switcher" style={{ minWidth: 200 }}>
      <Select
        value={selectedProject}
        onChange={handleProjectChange}
        loading={loading}
        disabled={loading || projects.length === 0}
        style={{ width: '100%' }}
      >
        {projects.map(project => (
          <Select.Option key={project.id} value={project.id}>
            {project.name}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default ProjectSwitcher;
