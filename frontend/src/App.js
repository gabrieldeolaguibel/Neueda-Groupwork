import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { updateBranch, deleteBranch } from './api';

function MainPage({ branches }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Branch Management</h1>
        <Link to="/branch-management">Go to Branch Management</Link>
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

function BranchManagement() {
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [branchDetails, setBranchDetails] = useState({
    city: '',
    zip: '',
    state: '',
    operatingHours: '',
    branchManager: '',
    numberOfEmployees: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/api/branches')
      .then(response => response.json())
      .then(data => setBranches(data))
      .catch(error => console.error('Error fetching branches:', error));
  }, []);

  const handleUpdate = async (branchId) => {
    try {
      await updateBranch(branchId, branchDetails);
      setBranches(branches.map(branch =>
        branch.id === branchId ? { ...branch, ...branchDetails } : branch
      ));
      setSelectedBranch(null);
      setBranchDetails({
        city: '',
        zip: '',
        state: '',
        operatingHours: '',
        branchManager: '',
        numberOfEmployees: '',
      });
    } catch (error) {
      console.error('Error updating branch:', error);
    }
  };

  const handleDelete = async (branchId) => {
    try {
      await deleteBranch(branchId);
      setBranches(branches.filter(branch => branch.id !== branchId));
    } catch (error) {
      console.error('Error deleting branch:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBranchDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Branch Management</h1>
        <ul>
          {branches.map(branch => (
            <li key={branch.id}>
              <h2>{branch.city}</h2>
              <button onClick={() => {
                setSelectedBranch(branch.id);
                setBranchDetails({
                  city: branch.city,
                  zip: branch.zip,
                  state: branch.state,
                  operatingHours: branch.operatingHours,
                  branchManager: branch.branchManager,
                  numberOfEmployees: branch.numberOfEmployees,
                });
              }}>Update</button>
              <button onClick={() => handleDelete(branch.id)}>Delete</button>
              {selectedBranch === branch.id && (
                <div>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={branchDetails.city}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="zip"
                    placeholder="Zip"
                    value={branchDetails.zip}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={branchDetails.state}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="operatingHours"
                    placeholder="Operating Hours"
                    value={branchDetails.operatingHours}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="branchManager"
                    placeholder="Branch Manager"
                    value={branchDetails.branchManager}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="numberOfEmployees"
                    placeholder="Number of Employees"
                    value={branchDetails.numberOfEmployees}
                    onChange={handleChange}
                  />
                  <button onClick={() => handleUpdate(branch.id)}>Submit</button>
                  <button onClick={() => setSelectedBranch(null)}>Go Back</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

function App() {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/branches')
      .then(response => response.json())
      .then(data => setBranches(data))
      .catch(error => console.error('Error fetching branches:', error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage branches={branches} />} />
        <Route path="/branch-management" element={<BranchManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
