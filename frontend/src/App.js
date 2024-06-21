import React, { useEffect, useState } from 'react';
import BranchCard from './components/BranchCards';
import './App.css';
import NavBar from './components/NavBar';


function App() {

  // Could use this variable when editiing, deleting, or adding new branches
  // Cards on screen should update automatically if variable is also updated correctly
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/branches')
      .then(response => response.json())
      .then(data => setBranches(data))
      .catch(error => console.error('Error fetching branches:', error));
  }, []);

  return (
    <div className="App">
      <NavBar />
      {/* <img class="background" src={`${process.env.PUBLIC_URL}/images/${'background.jpg'}`}/> */}
      <header className="App-header">
        <div className="branch-list">
          {branches.map(branch => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </header>
    </div>
  );
}


export default App;
