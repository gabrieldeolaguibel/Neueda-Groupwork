// BranchCard.js
import React, { useState } from 'react';
import './BranchCards.css';
import EditBranchPopup from './EditPopUp';

const BranchCard = ({ branch }) => {
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

  return (
    <div>
      <div className={`branch-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="card-front">
          <h2>{branch.city}, {branch.state}</h2>
          <p><strong>ZIP Code:</strong> {branch.zip}</p>
          <p><strong>Operating Hours:</strong> {branch.operatingHours}</p>
          <p><strong>Branch Manager:</strong> {branch.branchManager}</p>
          <p><strong>Number of Employees:</strong> {branch.numberOfEmployees}</p>
          <button onClick={handleButtonClick}>Edit Branch Info</button>
        </div>
        <div className="card-back">
          <h2>More info or map/image</h2>
        </div>
      </div>
      {isPopupVisible && <EditBranchPopup branch={branch} onClose={closePopup} />}
    </div>
  );
};

export default BranchCard;
