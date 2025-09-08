import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import axios from 'axios';
import { ROOT_URL } from '../RootUrl/rooturl';
const Login = () => {
  // Configuration
  const API_BASE_URL = ROOT_URL || 'http://localhost:5000';
  
  // State management
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    domain: 'admin_domain'
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [availableProjects, setAvailableProjects] = useState([]);
  const [authPhase, setAuthPhase] = useState('initial'); // 'initial', 'project-select', 'complete'
  const [selectedProject, setSelectedProject] = useState('');

  const navigate = useNavigate();

  // Check for existing session on component mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (authPhase === 'initial') {
        await handleInitialAuth();
      } else if (authPhase === 'project-select') {
        await handleProjectSelection();
      }
    } catch (err) {
      handleAuthError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInitialAuth = async () => {
    // Validate inputs
    if (!formData.username || !formData.password || !formData.domain) {
      throw new Error('Please fill all required fields');
    }

    // Make authentication request
    const response = await axios.post(`https://172.10.10.224/auth/login`, {
      username: formData.username,
      password: formData.password,
      domain: formData.domain
    });

    const { token, projects } = response.data;

    if (projects.length === 1) {
      // Auto-select if only one project
      await finalizeAuth(token, projects[0]);
      localStorage.setItem('cachetemp', token);
    } else {
      // Show project selection if multiple projects
      setAvailableProjects(projects);
      setAuthPhase('project-select');
      localStorage.setItem('tempToken', token);
      localStorage.setItem('cachetemp', token);
    }
  };

  const handleProjectSelection = async () => {
    const tempToken = localStorage.getItem('tempToken');
    if (!tempToken) {
      throw new Error('Session expired. Please login again.');
    }

    const project = availableProjects.find(p => p.id === selectedProject);
    if (!project) {
      throw new Error('Please select a valid project');
    }

    await finalizeAuth(tempToken, project);
  };

  const finalizeAuth = async (tempToken, project) => {
    const response = await axios.post(
      `https://172.10.10.224/auth/scope`,
      { project_id: project.id,  project_name: project.name },
      {
        headers: {
          Authorization: `gAAAAABoixvoKKXQgwzbQbbhj8r1cRtmiieIag80GWu0vSu3tNKVcpgp6iZN62_kjAlIEfFqw93y3iriKBG5OacSUy4a7pcx0sDW7vJ4M0YB7PiWSJ5NToCQOUVOJOxm9rsb7WptTsrWaEDoA8K-eZ3EZAQrr8k9YN2oIjP5OBvrFgjnvwx1ZADJoFOXYFFrocFW7rQjneCD`
        }
      }
    );

    const { jwtToken, userData } = response.data;
    storeAuthData(jwtToken, userData);
    navigate('/');
  };

  const storeAuthData = (token, userData) => {
    // 1. IMPORTANT FIX: Store the final scoped token as 'authToken'
    localStorage.setItem('authToken', token); 
    localStorage.setItem('userData', JSON.stringify(userData));
    
    localStorage.setItem('currentProjectId', userData.projectId);
    localStorage.removeItem('tempToken');
  };
  
  const handleAuthError = (error) => {
    console.error('Authentication error:', error);
    const errorMessage = error.response?.data?.error || 
                        error.message || 
                        'Authentication failed. Please try again.';
    setError(errorMessage);
    
    // Reset to initial phase if error occurs during project selection
    if (authPhase === 'project-select') {
      setAuthPhase('initial');
      setSelectedProject('');
      localStorage.removeItem('tempToken');
    }
  };

  const handleBackToLogin = () => {
    setAuthPhase('initial');
    setSelectedProject('');
    setError('');
    localStorage.removeItem('tempToken');
  };

  return (
    <div className='BgClouds'>
      <div className="container">
        <div style={{display: "flex", alignItems: "center", height: "100%"}} className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div style={{ display: "flex", justifyContent: "center"}} className='textAlignCenterCss'>
              <div style={{fontSize: "30px"}} className='blackheader'>
                {`TCS ENTERPRISES `}  
                <span style={{fontSize: "30px"}} className="digitally">CLOUD PLATFORM</span>
              </div>
            </div>
            <div className="card shadow">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">
                  <img
                    className="header-logo"
                    alt="TCS Enterprise Cloud Logo"
                    src={require('../../assets/TCSECP-Logo.png')}
                  />
                </h2>
                
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Initial Authentication Form */}
                  {authPhase === 'initial' && (
                    <>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          required
                          autoComplete="username"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          autoComplete="current-password"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="domain" className="form-label">Domain</label>
                        <input
                          type="text"
                          className="form-control"
                          id="domain"
                          name="domain"
                          value={formData.domain}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="d-grid gap-2">
                        <button 
                          type="submit" 
                          className="btn btn-primary"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                              Authenticating...
                            </>
                          ) : 'Login'}
                        </button>
                      </div>
                    </>
                  )}

                  {/* Project Selection Form */}
                  {authPhase === 'project-select' && (
                    <>
                      <div className="mb-3">
                        <h5 className="text-center">Select Project</h5>
                        <div className="list-group mt-3">
                          {availableProjects.map(project => (
                            <button
                              type="button"
                              key={project.id}
                              className={`list-group-item list-group-item-action ${
                                selectedProject === project.id ? 'active' : ''
                              }`}
                              onClick={() => setSelectedProject(project.id)}
                            >
                              <div className="d-flex w-100 justify-content-between">
                                <strong>{project.name}</strong>
                              </div>
                              {project.description && (
                                <small className="text-muted">{project.description}</small>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={handleBackToLogin}
                          disabled={isLoading}
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={!selectedProject || isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                              Connecting...
                            </>
                          ) : 'Continue'}
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;