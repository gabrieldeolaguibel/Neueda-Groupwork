import React, { useState } from 'react';
import './NavBar.css';
import AddBranchPopup from './AddBranchPopup';

const NavBar = ({ onAddBranch, onSearch }) => {
  const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddButtonClick = () => {
    setIsAddPopupVisible(true);
  };

  const closeAddPopup = () => {
    setIsAddPopupVisible(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    onSearch(searchTerm);
  };

  return (
    <nav className="navbar">
      <img className="logo" src={`${process.env.PUBLIC_URL}/images/${'leafico.png'}`} alt="Logo" />
      <h1 className='appTitle'>Branch Manager</h1>
      <form onSubmit={handleSearchSubmit}>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search by zip code..." 
            value={searchTerm} 
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </div>
      </form>
      <button className='addButton' onClick={handleAddButtonClick}>Add Branch</button>
      {isAddPopupVisible && <AddBranchPopup onClose={closeAddPopup} onAdd={onAddBranch} />}
    </nav>
  );
};

export default NavBar;
