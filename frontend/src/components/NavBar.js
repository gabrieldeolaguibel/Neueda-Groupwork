import React, { useState } from 'react';
import './NavBar.css'; 

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    onSearch(searchTerm);
  };

  return (
    <nav className="navbar">
      <img className="logo" src={`${process.env.PUBLIC_URL}/images/leafico.png`} alt="Logo" />
      <h1>Branch Manager</h1>
      <form onSubmit={handleSearchSubmit}>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search by zip..." 
            value={searchTerm} 
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </div>
      </form>
      <button>Add Branch</button>
      <button>Delete Branch</button>
    </nav>
  );
};

export default NavBar;
