// DonorDashboard.js (React + Bootstrap example)
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const DonorHome = () => {
  const [summary, setSummary] = useState({
    totalDonations: 12,
    peopleHelped: 89,
    pendingPickups: 3,
    nextPickupDate: '2025-07-24',
    nextPickupTime: '10:30 AM'
  });

  const [recentDonations, setRecentDonations] = useState([]);

  useEffect(() => {
    // You can replace these with real API calls
    const fetchDonations = async () => {
      const mockData = [
        { id: 1, date: '2025-07-22', item: 'Bread & Rice', status: 'Pending' },
        { id: 2, date: '2025-07-18', item: 'Vegetables', status: 'Picked Up' },
        { id: 3, date: '2025-07-15', item: 'Snacks', status: 'Picked Up' },
      ];
      setRecentDonations(mockData);
    };

    fetchDonations();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Welcome back, Ashika! <span role="img" aria-label="wave">👋</span></h2>
      <p className="text-muted">
        Thank you for being a part of <strong>FoodBridge</strong>. Your food donations can help feed hundreds of people in need every day. <span role="img" aria-label="heart">❤️</span>
      </p>

      {/* Dashboard Cards */}
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Donations</h5>
              <p className="card-text fs-4">{summary.totalDonations}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">People Helped</h5>
              <p className="card-text fs-4">{summary.peopleHelped}+</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-dark bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Pending Pickups</h5>
              <p className="card-text fs-4">{summary.pendingPickups}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <p className="mt-3 text-muted">
        You've contributed to feeding over <strong>{summary.peopleHelped}+</strong> people. Your continued support means the world to local communities! ❤️
      </p>

      {/* Next Pickup Reminder */}
      <div className="alert alert-info mt-4" role="alert">
        <strong>Reminder:</strong> Next donation pickup is scheduled for <strong>{summary.nextPickupDate}</strong> at <strong>{summary.nextPickupTime}</strong>.
      </div>

      {/* Recent Donations */}
      <h4 className="mt-5">Recent Donations</h4>
      <table className="table table-striped mt-2">
        <thead>
          <tr>
            <th>Date</th>
            <th>Food Item</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {recentDonations.map((donation) => (
            <tr key={donation.id}>
              <td>{donation.date}</td>
              <td>{donation.item}</td>
              <td>
                <span className={`badge ${donation.status === 'Pending' ? 'bg-warning text-dark' : 'bg-success'}`}>
                  {donation.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Quick Actions */}
      <div className="mt-4 d-flex gap-3">
        
            <Link to="/donor/add" className="btn btn-success me-2">Add New Donation</Link>
            <Link to="/donor/history" className="btn btn-light text-success">View All Donations</Link>
          
      </div>
    </div>
  );
};

export default DonorHome;
