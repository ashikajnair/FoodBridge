// src/pages/donor/DonorLayout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const DonorLayout = () => {
  return (
    <div className="d-flex">
      <div className="sidebar p-3 bg-dark text-white vh-100" style={{ width: '250px' }}>
        <h4 className="text-center mb-4"><Link to="/donor" className="nav-link text-white">🍱 Donor Panel</Link></h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/donor/add" className="nav-link text-white">➕ Add Donation</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/donor/mydonations" className="nav-link text-white">📋 My Donations</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/donor/history" className="nav-link text-white">📈 Donation History</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/donor/support" className="nav-link text-white">💬 Support</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">🚪 Logout</Link>
          </li>
        </ul>
      </div>

      <div className="content p-4 flex-grow-1 bg-light">
        <Outlet />
      </div>
    </div>
  );
};

export default DonorLayout;
