import React, { useState } from 'react';
import './BranchCards.css';
import EditBranchPopup from './EditBranchPopup';
import { IoMdCloseCircleOutline } from "react-icons/io";

const BranchCard = ({ branch, onDelete, onUpdate }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleBranchDelete = async (event) => {
    event.stopPropagation();
    try {
      const response = await fetch(`http://localhost:8080/api/branches/${branch.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        onDelete(branch.id); // Call onDelete with the branch ID
      } else {
        console.error('Failed to delete the branch');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className={`branch-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="card-front">
          <span className="delete-button" onClick={handleBranchDelete}><IoMdCloseCircleOutline style={{ fontSize: '25px' }}/></span>
          <h1>{branch.city}, {branch.state}</h1>
          <p><strong>ZIP Code:</strong> {branch.zip}</p>
          <p><strong>Operating Hours:</strong> {branch.operatingHours}</p>
          <p><strong>Branch Manager:</strong> {branch.branchManager}</p>
          <p><strong>Number of Employees:</strong> {branch.numberOfEmployees}</p>
          <button onClick={handleButtonClick}>Edit Branch</button>
        </div>
        <div className="card-back">
          <h2>More info or map/image</h2>
        </div>
      </div>
      {isPopupVisible && (
        <EditBranchPopup
          branch={branch}
          onClose={closePopup}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
};

export default BranchCard;
