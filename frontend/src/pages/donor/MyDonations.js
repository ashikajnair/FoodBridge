import React, { useEffect, useState } from 'react';

const MyDonations = () => {
  const [donations, setDonations] = useState([]);

  // Simulated data — in real use, replace with fetch from API/backend
  useEffect(() => {
    const dummyDonations = [
      {
        id: 1,
        foodName: 'Bread Packets',
        quantity: '20',
        expiryDate: '2025-07-24 18:00',
        status: 'Pending',
        pickupAddress: 'Main Street Supermarket, Mumbai',
      },
      {
        id: 2,
        foodName: 'Rice',
        quantity: '10 kg',
        expiryDate: '2025-07-22 14:00',
        status: 'Picked Up',
        pickupAddress: 'Downtown Warehouse, Delhi',
      },
    ];
    setDonations(dummyDonations);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Your Donations</h2>
      {donations.length === 0 ? (
        <p>No donations found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover shadow-sm">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Food Name</th>
                <th>Quantity</th>
                <th>Expiry Date</th>
                <th>Status</th>
                <th>Pickup Address</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation, index) => (
                <tr key={donation.id}>
                  <td>{index + 1}</td>
                  <td>{donation.foodName}</td>
                  <td>{donation.quantity}</td>
                  <td>{donation.expiryDate}</td>
                  <td>
                    <span
                      className={`badge ${
                        donation.status === 'Pending'
                          ? 'bg-warning'
                          : donation.status === 'Picked Up'
                          ? 'bg-success'
                          : 'bg-secondary'
                      }`}
                    >
                      {donation.status}
                    </span>
                  </td>
                  <td>{donation.pickupAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyDonations;
