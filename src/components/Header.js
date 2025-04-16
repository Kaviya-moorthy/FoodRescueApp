import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear tokens)
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-left">Food Rescue</div>

      <nav className="header-center">
        <Link to="/home" className="header-link">Home</Link>
        <Link to="/services" className="header-link">Services</Link>
        <Link to="/about" className="header-link">About</Link>
        <Link to="/contact" className="header-link">Contact Us</Link>
      </nav>

      <div className="header-right">
        <div className="profile-wrapper" onClick={handleProfileClick}>
          <FaUserCircle className="profile-icon" />
          {showDropdown && (
            <div className="profile-dropdown">
              <Link to="/profile" className="dropdown-item">Your Profile</Link>
              <Link to="/settings" className="dropdown-item">Settings</Link>
              <div className="dropdown-item" onClick={handleLogout}>Logout</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
