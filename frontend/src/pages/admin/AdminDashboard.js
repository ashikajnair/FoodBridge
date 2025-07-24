import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <h2 className="mb-4">📊 Admin Dashboard</h2>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow" style={{ backgroundColor: '#f4f6f8', borderLeft: '6px solid #607d8b' }}>
            <div className="card-body">
              <h6 className="text-muted">Total Users</h6>
              <h3 className="fw-semibold">128</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow" style={{ backgroundColor: '#f4f6f8', borderLeft: '6px solid #26a69a' }}>
            <div className="card-body">
              <h6 className="text-muted">Active Donations</h6>
              <h3 className="fw-semibold">45</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow" style={{ backgroundColor: '#f4f6f8', borderLeft: '6px solid #ffa726' }}>
            <div className="card-body">
              <h6 className="text-muted">Pending Pickups</h6>
              <h3 className="fw-semibold">12</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h5 className="mb-3">📈 Recent Activity</h5>
        <ul className="list-group">
          <li className="list-group-item">User <strong>NGO Hope</strong> registered</li>
          <li className="list-group-item">Donation from <strong>FreshMart Supermarket</strong> added</li>
          <li className="list-group-item">Pickup scheduled for <strong>Tomorrow 9:00 AM</strong></li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
