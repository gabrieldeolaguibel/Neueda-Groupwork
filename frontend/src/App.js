import React, { useEffect, useState } from 'react';
import BranchCard from './components/BranchCards';
import './App.css';

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
      <header className="App-header">
        <h1>Branch Management</h1>
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
