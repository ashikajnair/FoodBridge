import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageDonations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // Replace with your backend endpoint
    axios.get('http://localhost:5000/api/donations')
      .then((res) => setDonations(res.data))
      .catch((err) => console.error('Failed to fetch donations:', err));
  }, []);

  return (
    <div className="container bg-white p-4 rounded shadow-sm">
      <h2 className="mb-4 text-dark">🍱 Manage Donations</h2>

      {donations.length === 0 ? (
        <p>No donations found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Donor</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Pickup Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation._id}>
                  <td>{donation.donorName || 'N/A'}</td>
                  <td>{donation.item || 'N/A'}</td>
                  <td>{donation.quantity || '-'}</td>
                  <td>{donation.status || 'Pending'}</td>
                  <td>{donation.pickupDate ? new Date(donation.pickupDate).toLocaleDateString() : 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageDonations;
