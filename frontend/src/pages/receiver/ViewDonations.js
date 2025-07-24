import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewDonations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get('/api/donations/available')
      .then(res => setDonations(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAccept = (id) => {
    axios.post(`/api/donations/accept/${id}`)
      .then(() => alert("Donation accepted!"))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h3>Available Donations</h3>
      <ul>
        {donations.map(donation => (
          <li key={donation.id}>
            <strong>{donation.item}</strong> - {donation.quantity}
            <button onClick={() => handleAccept(donation.id)}>Accept</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewDonations;
