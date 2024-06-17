import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
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
        <ul>
          {branches.map(branch => (
            <li key={branch.id}>
              <h2>{branch.city}</h2>
              <p>Zip: {branch.zip}</p>
              <p>State: {branch.state}</p>
              <p>Operating Hours: {branch.operatingHours}</p>
              <p>Branch Manager: {branch.branchManager}</p>
              <p>Number of Employees: {branch.numberOfEmployees}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
