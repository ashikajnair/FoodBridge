import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AcceptedDonations() {
  const [accepted, setAccepted] = useState([]);

  useEffect(() => {
    axios.get('/api/donations/accepted')
      .then(res => setAccepted(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>Your Accepted Donations</h3>
      <ul>
        {accepted.map(donation => (
          <li key={donation.id}>{donation.item} - {donation.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default AcceptedDonations;
