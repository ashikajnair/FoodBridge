// src/pages/receiver/ReceiverLayout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ReceiverLayout = () => {
  return (
    <div className="d-flex">
      <div className="sidebar p-3" style={{ backgroundColor: '#2F855A', color: 'white', width: '250px', minHeight: '100vh' }}>
        <h4 className="text-center mt-4 mb-4">
          <Link to="/receiver" className="nav-link text-white">🎯 Receiver Panel</Link>
        </h4>
        <ul className="nav flex-column">
          <li className="nav-item mt-2 mb-2">
            <Link to="/receiver/view-donations" className="nav-link text-white">🍱 View Donations</Link>
          </li>
          <li className="nav-item mt-2 mb-2">
            <Link to="/receiver/accepted" className="nav-link text-white">✅ Accepted Donations</Link>
          </li>
          
          <li className="nav-item mt-2 mb-2">
            <Link to="/receiver/support" className="nav-link text-white">💬 Support</Link>
          </li>
          <li className="nav-item mt-2">
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

export default ReceiverLayout;
