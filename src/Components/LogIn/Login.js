import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css"
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    // Check credentials
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', username);
      setError('');
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='BgClouds' >
    <div className="container">
      <div style={{display:"flex",alignItems:"center", height:"100%"}} className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
        <div style={{ display:"flex", justifyContent:"center"}}className='textAlignCenterCss'>
        
        <div style={{fontSize:"30px"}} className='blackheader'>{`TCS ENTERPRISES `}  <span style={{fontSize:"30px"}} className="digitally">CLOUD PLATFORM</span></div>
        
          
          
          
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
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div style={{paddingTop:"0.5rem", paddingBottom:"0.5rem"}} className="d-grid gap-4 ">
                  <button  type="submit" className="btn btn-primary">Login</button>
                </div>
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