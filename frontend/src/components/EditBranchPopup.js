import React, { useState } from 'react';
import './PopupStyle.css';
// import './EditBranchPopup.css';

const EditBranchPopup = ({ branch, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({ ...branch });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/branches/${branch.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update branch');
      }

      const updatedBranch = await response.json();
      onUpdate(updatedBranch);
      onClose();
    } catch (error) {
      console.error('Error updating branch:', error);
    }
  };

  return (
    <div className="popup-background">
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>X</span>
        <h2 className='formTile'>Edit Branch</h2>
        <form onSubmit={handleSubmit}>
          <label className='label'>
            City:
            <input className='input'
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
          <label className='label'>
            State:
            <input className='input'
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </label>
          <label className='label'>
            ZIP Code:
            <input className='input'
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </label>
          <label className='label'>
            Operating Hours:
            <input className='input'
              type="text"
              name="operatingHours"
              value={formData.operatingHours}
              onChange={handleChange}
              required
            />
          </label>
          <label className='label'>
            Branch Manager:
            <input className='input'
              type="text"
              name="branchManager"
              value={formData.branchManager}
              onChange={handleChange}
              required
            />
          </label>
          <label className='label'>
            Number of Employees:
            <input className='input'
              type="number"
              name="numberOfEmployees"
              value={formData.numberOfEmployees}
              onChange={handleChange}
              required
            />
          </label>
          <button className='saveButton' type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditBranchPopup;
