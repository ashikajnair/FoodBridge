import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="sidebar p-3 text-white vh-100"
        style={{
          width: '240px',
          backgroundColor: '#343a40', // Dark Gray
        }}
      >
        <h4 className="text-center mb-4">
          <Link to="/admin" className="nav-link text-white">🛠️ Admin Panel</Link>
        </h4>

        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/admin" className="nav-link text-white" style={{ transition: '0.2s' }}>📊 Dashboard</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/admin/users" className="nav-link text-white">👥 Manage Users</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/admin/donations" className="nav-link text-white">🍱 Manage Donations</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/admin/pickups" className="nav-link text-white">🚚 Pickup Schedules</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/admin/reports" className="nav-link text-white">📄 Reports & Analytics</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/admin/settings" className="nav-link text-white">⚙️ System Settings</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">🚪 Logout</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content p-4 flex-grow-1" style={{ backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
