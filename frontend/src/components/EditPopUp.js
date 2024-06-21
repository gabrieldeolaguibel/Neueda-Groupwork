import React from 'react';
import './EditPopUp.css';

const EditPopUp = ({ branch, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>X</span>
        <h2>Edit Branch Info</h2>
        {/* Your form for editing branch info goes here */}
        <form>
          <label>
            City:
            <input type="text" defaultValue={branch.city} />
          </label>
          <label>
            State: 
            <input type="text" defaultValue={branch.state} />
          </label>
          <label>
            ZIP Code: 
            <input type="text" defaultValue={branch.zip} />
          </label>
          <label>
            Operating Hours:
            <input type="text" defaultValue={branch.operatingHours} />
          </label>
          <label>
            Branch Manager:
            <input type="text" defaultValue={branch.branchManager} />
          </label>
          <label>
            Number of Employees:
            <input type="text" defaultValue={branch.numberOfEmployees} />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditPopUp;
