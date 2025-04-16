<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for logout
import './Home.css';

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-left">Food Rescue</div>
        <nav className="header-center">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
        <div className="header-right">
          <div className="profile-container" onClick={handleProfileClick}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              className="profile-icon"
            />
            {showDropdown && (
              <div className="dropdown">
                <Link to="/profile" className="dropdown-item">Your Profile</Link>
                <Link to="/settings" className="dropdown-item">Settings</Link>
                <div className="dropdown-item" onClick={handleLogout}>Logout</div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Middle Frame - Background Image */}
      <div className="middle-frame">
        {/* Background image area, no text */}
      </div>

      {/* Bottom Frame */}
      <div className="bottom-frame">
        <div className="section-title">Explore More</div>
        <div className="bottom-links">
          <Link to="/post-food-form" className="bottom-link">Post Food</Link>
          <Link to="/food-list" className="bottom-link">Food List</Link>
          <Link to="/impact-tracker" className="bottom-link">Impact Tracker</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
=======
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for logout
import './Home.css';

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-left">Food Rescue</div>
        <nav className="header-center">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
        <div className="header-right">
          <div className="profile-container" onClick={handleProfileClick}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              className="profile-icon"
            />
            {showDropdown && (
              <div className="dropdown">
                <Link to="/profile" className="dropdown-item">Your Profile</Link>
                <Link to="/settings" className="dropdown-item">Settings</Link>
                <div className="dropdown-item" onClick={handleLogout}>Logout</div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Middle Frame - Background Image */}
      <div className="middle-frame">
        {/* Background image area, no text */}
      </div>

      {/* Bottom Frame */}
      <div className="bottom-frame">
        <div className="section-title">Explore More</div>
        <div className="bottom-links">
          <Link to="/post-food-form" className="bottom-link">Post Food</Link>
          <Link to="/food-list" className="bottom-link">Food List</Link>
          <Link to="/impact-tracker" className="bottom-link">Impact Tracker</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
>>>>>>> f9a0e835b508d29c4d07ae06a2718abeead5a8f0
