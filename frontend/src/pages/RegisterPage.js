import React, { useState } from 'react';
import './Auth.css';// We'll add styling here

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('donor');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering with:', { name, email, password, role });
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-6 d-none d-md-block register-image"></div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div style={{ width: '100%', maxWidth: '450px' }}>
            <h2 className="mb-4 text-center">Register on FoodBridge</h2>
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" required value={name}
                  onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" required value={email}
                  onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" required value={password}
                  onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" />
              </div>
              <div className="mb-4">
                <label className="form-label">Select Role</label>
                <select className="form-select" value={role}
                  onChange={(e) => setRole(e.target.value)}>
                  <option value="donor">Donor</option>
                  <option value="receiver">Receiver</option>
                </select>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
