// App.js
import React, { useEffect, useState } from 'react';
import BranchCard from './components/BranchCards';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [branches, setBranches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    fetch('http://localhost:8080/api/branches')
      .then(response => response.json())
      .then(data => setBranches(data))
      .catch(error => console.error('Error fetching branches:', error));
  }, []);

  const handleDelete = (branchId) => {
    setBranches(branches.filter(branch => branch.id !== branchId));
  };

  const handleAddBranch = (newBranch) => {
    setBranches([...branches, newBranch]);
  };

  const handleUpdateBranch = (updatedBranch) => {
    setBranches(branches.map(branch => (branch.id === updatedBranch.id ? updatedBranch : branch)));
  };

    // Filter branches based on zip code
    const filteredBranches = searchTerm
    ? branches.filter(branch => branch.zip.includes(searchTerm))
    : branches;

  return (
    <div className="App">
      <NavBar onSearch={setSearchTerm} onAddBranch={handleAddBranch} />
      <header className="App-header">
        <div className="branch-list">
          {filteredBranches.map(branch => (
              <BranchCard
                key={branch.id}
                branch={branch}
                onDelete={handleDelete}
                onUpdate={handleUpdateBranch}
              />
            ))}
          {/* {branches.map(branch => (
            <BranchCard
              key={branch.id}
              branch={branch}
              onDelete={handleDelete}
              onUpdate={handleUpdateBranch}
            />
          ))} */}
        </div>
      </header>
    </div>
  );
}

export default App;
