import React from 'react';
import './BranchCards.css';

const BranchCard = ({ branch }) => {
  return (
    <div className="branch-card">
      <h2>{branch.city}, {branch.state}</h2>
      <p><strong>ZIP Code:</strong> {branch.zip}</p>
      <p><strong>Operating Hours:</strong> {branch.operatingHours}</p>
      <p><strong>Branch Manager:</strong> {branch.branchManager}</p>
      <p><strong>Number of Employees:</strong> {branch.numberOfEmployees}</p>
    </div>
  );
};

export default BranchCard;
