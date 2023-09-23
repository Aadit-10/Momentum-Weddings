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
    // You can implement your authentication check here using Firebase Auth or any other method.
    // For example, you might check if a user is authenticated by checking their token.
    // If the user is authenticated, setLoggedIn(true), otherwise, setLoggedIn(false).
    // This is just a placeholder.
    const isAuthenticated = checkIfUserIsAuthenticated();
    setLoggedIn(isAuthenticated);
  }, []);

  // Function to check if the user is authenticated (replace this with your own logic)
  const checkIfUserIsAuthenticated = () => {
    // Replace this with your authentication logic.
    // For example, you can check if the user has a valid token or session.
    // If they are authenticated, return true; otherwise, return false.
    // This is just a placeholder.
    return false; // Change this to true if the user is authenticated.
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Set the root path ("/") to render the Home component */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={loggedIn ? <Admin /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
