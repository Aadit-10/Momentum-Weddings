import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Routes and Navigate
import Home from './Components/Home/Home';
import Admin from './Components/Admin/admin';
import Login from './Components/Login/login';
import './App.css';

function App() {
  // State to track whether the user is logged in or not
  const [loggedIn, setLoggedIn] = useState(false);

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    
    const isAuthenticated = checkIfUserIsAuthenticated();
    setLoggedIn(isAuthenticated);
  }, []);

  // Function to check if the user is authenticated (replace this with your own logic)
  const checkIfUserIsAuthenticated = () => {
   
    return false; 
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Set the root path ("/") to render the Home component */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
