// src/pages/receiver/ReceiverHome.js
import React from 'react';
import { Link } from 'react-router-dom';
const ReceiverHome = () => {
  const acceptedDonations = [
    {
      id: 1,
      item: 'Fresh Vegetables 🥦',
      donor: 'GreenMart Supermarket',
      date: '2025-07-21',
      status: 'Pickup Scheduled',
    },
    {
      id: 2,
      item: 'Bread Loaves 🍞',
      donor: 'DailyNeeds Store',
      date: '2025-07-20',
      status: 'Picked Up',
    },
    {
      id: 3,
      item: 'Cooked Meals 🍛',
      donor: 'FoodForAll Café',
      date: '2025-07-19',
      status: 'Awaiting Pickup',
    },
  ];
  return (
    <div className="container mt-5">
      <h2 className="mb-5 text-success">🎯 Welcome to the Receiver Dashboard!</h2>

      <div className="mt-4 mb-5 p-3 text-center">
        <p className="lead">
          Hello there! 👋 We’re excited to have you as a part of the <strong>FoodBridge</strong> community.
          <br />This platform helps connect surplus food from donors (like supermarkets) with you — 
          <br />the receivers
          (NGOs, volunteers) working hard to reduce hunger. 🌱
        </p>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="p-4 border rounded bg-light">
            <h4 className="text-success"><Link to='/receiver/view-donations' className="text-success" style={{textDecoration:"none"}}>📦 View Available Donations</Link></h4>
            <p>
              Browse a live list of food donations added by our generous donors. Filter by category, expiry date,
              or location to find what suits your needs.
            </p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="p-4 border rounded bg-light">
            <h4 className="text-success"><Link to='/receiver/accepted' className="text-success" style={{textDecoration:"none"}}>✅ Accept Donations</Link></h4>
            <p>
              Found something useful? Quickly reserve your donation to prevent wastage and plan for pickup. We ensure
              real-time updates! 🔄
            </p>
          </div>
        </div>

        <div className="col-md-6 mb-4 p-3">
          <div className="p-4 bg-light center">
            
            <h4 className="text-success"><Link to='/receiver/support' className="text-success" style={{textDecoration:"none"}}>💬 Need Help?</Link></h4>
            <p>
              Reach out to us any time through the <strong>Support</strong> page. We’re here to help you navigate
              the platform smoothly.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h4 className="text-success mb-3">📝 My Recent Accepted Donations</h4>
        <div className="table-responsive">
          <table className="table table-bordered bg-white">
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Donor</th>
                <th>Date Accepted</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {acceptedDonations.map((donation) => (
                <tr key={donation.id}>
                  <td>{donation.id}</td>
                  <td>{donation.item}</td>
                  <td>{donation.donor}</td>
                  <td>{donation.date}</td>
                  <td>{donation.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="alert alert-success mt-4">
        🌟 Let’s work together to reduce food waste and spread nourishment. One meal at a time.
      </div>
    </div>
  );
};

export default ReceiverHome;
