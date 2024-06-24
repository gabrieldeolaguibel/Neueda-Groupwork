import React, { useState } from 'react';
import './PopupStyle.css'; // Reusing the same CSS as EditBranchPopup

const AddBranchPopup = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    city: '',
    state: '',
    zip: '',
    operatingHours: '',
    branchManager: '',
    numberOfEmployees: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/branches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add branch');
      }

      const newBranch = await response.json();
      onAdd(newBranch);
      onClose();
    } catch (error) {
      console.error('Error adding branch:', error);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>X</span>
        <h2>Add New Branch</h2>
        <form onSubmit={handleSubmit}>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            ZIP Code:
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Operating Hours:
            <input
              type="text"
              name="operatingHours"
              value={formData.operatingHours}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Branch Manager:
            <input
              type="text"
              name="branchManager"
              value={formData.branchManager}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Number of Employees:
            <input
              type="number"
              name="numberOfEmployees"
              value={formData.numberOfEmployees}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Add Branch</button>
        </form>
      </div>
    </div>
  );
};

export default AddBranchPopup;
