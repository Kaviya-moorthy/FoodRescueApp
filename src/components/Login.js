<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const navigate = useNavigate(); // Use navigate to handle redirection

  // Load saved data when component mounts
  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername) setUsername(savedUsername);
    if (savedPassword) setPassword(savedPassword);
  }, []);

  // Handle input changes and save to localStorage
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    localStorage.setItem('username', value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    localStorage.setItem('password', value);
  };

  const handleUsernameKeyDown = (e) => {
    if (e.key === 'Enter') {
      passwordRef.current.focus(); // Move to password field
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username && password) {
      // If login is successful, redirect to home page
      alert(`Logged in as: ${username}`);
      navigate('/home'); // Navigate to the Home page after login
    } else {
      alert('Please fill in both username and password');
    }
  };

  return (
    <div className="page-container">
      <div className="login-frame">
        <div className="left-side">
          <h1>WELCOME TO WEBPAGE</h1>
          <p>Your one-stop destination for everything!</p>
        </div>
        <div className="right-side">
          <h2>User Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              onKeyDown={handleUsernameKeyDown}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              ref={passwordRef}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
=======
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const navigate = useNavigate(); // Use navigate to handle redirection

  // Load saved data when component mounts
  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername) setUsername(savedUsername);
    if (savedPassword) setPassword(savedPassword);
  }, []);

  // Handle input changes and save to localStorage
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    localStorage.setItem('username', value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    localStorage.setItem('password', value);
  };

  const handleUsernameKeyDown = (e) => {
    if (e.key === 'Enter') {
      passwordRef.current.focus(); // Move to password field
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username && password) {
      // If login is successful, redirect to home page
      alert(`Logged in as: ${username}`);
      navigate('/home'); // Navigate to the Home page after login
    } else {
      alert('Please fill in both username and password');
    }
  };

  return (
    <div className="page-container">
      <div className="login-frame">
        <div className="left-side">
          <h1>WELCOME TO WEBPAGE</h1>
          <p>Your one-stop destination for everything!</p>
        </div>
        <div className="right-side">
          <h2>User Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              onKeyDown={handleUsernameKeyDown}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              ref={passwordRef}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
>>>>>>> f9a0e835b508d29c4d07ae06a2718abeead5a8f0
