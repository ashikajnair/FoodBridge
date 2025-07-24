import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('donor'); // default role
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate login success
    console.log('Logging in with:', { email, password, role });

    // Save role in localStorage (optional)
    localStorage.setItem('userRole', role);

    // Redirect based on role
    if (role === 'donor') {
      navigate('/donor');
    } else if (role === 'receiver') {
      navigate('/receiver');
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div style={{ width: '100%', maxWidth: '450px' }}>
            <h2 className="mb-4 text-center">Login to FoodBridge</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Select Role</label>
                <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="donor">Donor</option>
                  <option value="receiver">Receiver</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block login-image"></div>
      </div>
    </div>
  );
}

export default LoginPage;
