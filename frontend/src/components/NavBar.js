import React from 'react';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src={`${process.env.PUBLIC_URL}/images/${'leafico.png'}`} alt="Logo" />
      <h1>Branch Manager</h1>
      <button onClick={null}>Add Branch</button>
      {/* <button>Delete Branch</button> */}
    </nav>
  );
};

export default NavBar;
