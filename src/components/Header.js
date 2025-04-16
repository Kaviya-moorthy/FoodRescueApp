import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { FaUserCircle } from 'react-icons/fa'; // Profile icon
import './Header.css'; // Make sure you create the Header.css for styling

function Header() {
  return (
    <header className="header">
      <div className="header-left">Food Rescue</div>
      <nav className="header-center">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/services" className="header-link">Services</Link>
        <Link to="/about" className="header-link">About</Link>
        <Link to="/contact" className="header-link">Contact Us</Link>
      </nav>
      <div className="header-right">
        <FaUserCircle size={30} />
      </div>
    </header>
  );
}

export default Header;
