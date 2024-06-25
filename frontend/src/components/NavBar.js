import React, { useState } from 'react';
import './NavBar.css';
import AddBranchPopup from './AddBranchPopup';

const NavBar = ({ onAddBranch }) => {
  const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);

  const handleAddButtonClick = () => {
    setIsAddPopupVisible(true);
  };

  const closeAddPopup = () => {
    setIsAddPopupVisible(false);
  };

  return (
    <nav className="navbar">
      <img className="logo" src={`${process.env.PUBLIC_URL}/images/${'leafico.png'}`} alt="Logo" />
      <h1 className='appTitle'>Branch Manager</h1>
      <button className='addButton' onClick={handleAddButtonClick}>Add Branch</button>
      {isAddPopupVisible && <AddBranchPopup onClose={closeAddPopup} onAdd={onAddBranch} />}
    </nav>
  );
};

export default NavBar;
