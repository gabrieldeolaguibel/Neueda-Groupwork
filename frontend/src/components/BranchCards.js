import React, { useState } from 'react';
import './BranchCards.css';

const BranchCard = ({ branch }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`branch-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-front">
        <h2>{branch.city}, {branch.state}</h2>
        <p><strong>ZIP Code:</strong> {branch.zip}</p>
        <p><strong>Operating Hours:</strong> {branch.operatingHours}</p>
        <p><strong>Branch Manager:</strong> {branch.branchManager}</p>
        <p><strong>Number of Employees:</strong> {branch.numberOfEmployees}</p>
      </div>
      <div className="card-back">
        {/* Add any content you want to show on the back of the card */}
        <h2>More info or map/image</h2>
      </div>
    </div>
  );
};

export default BranchCard;
