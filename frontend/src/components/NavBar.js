// src/NavBar.js
import React from 'react';
import './NavBar.css'; // Optional, if you want to style your nav bar
const NavBar = () => {
  return (
    <nav className="navbar">
        {/* <img class="logo" src={`${process.env.PUBLIC_URL}/images/${'branchOne.png'}`}/> */}
        <img class="logo" src={`${process.env.PUBLIC_URL}/images/${'leafico.png'}`}/>
        <h1>Branch Manager</h1>
    </nav>
  );
};

export default NavBar;
