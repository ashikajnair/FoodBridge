import React, { useState } from 'react';

const AddDonation = () => {
  const [formData, setFormData] = useState({
    foodName: '',
    quantity: '',
    expiryDate: '',
    pickupAddress: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation submitted:', formData);
    alert("Donation submitted successfully!");

    // Clear the form
    setFormData({
      foodName: '',
      quantity: '',
      expiryDate: '',
      pickupAddress: '',
      additionalNotes: '',
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add a New Donation</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Food Name</label>
          <input
            type="text"
            className="form-control"
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            placeholder="e.g. Rice, Bread, Fruits..."
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity (in kg or servings)</label>
          <input
            type="text"
            className="form-control"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g. 5 kg or 10 meals"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Expiry Date & Time</label>
          <input
            type="datetime-local"
            className="form-control"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Pickup Address</label>
          <textarea
            className="form-control"
            name="pickupAddress"
            value={formData.pickupAddress}
            onChange={handleChange}
            placeholder="Provide the exact pickup location"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Additional Notes (optional)</label>
          <textarea
            className="form-control"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Special instructions, if any"
            rows="2"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success w-100">
          Submit Donation
        </button>
      </form>
    </div>
  );
};

export default AddDonation;
