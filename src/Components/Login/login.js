import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook to get the navigation function

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log('Logging in with:', username, password);

      // Send a POST request to your backend with username and password
      const response = await axios.post('http://localhost:3000/login', {
        username, password,
      });

      if (response.data === 'success-user') {
        console.log("success");
        navigate('/admin'); // Use navigate function to redirect
      } else if (response.data === 'wrongpass') {
        setError("Wrong Password");
      } else if (response.data === 'notexist') {
        // Handle the case when the user does not exist
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred while logging in.');
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
