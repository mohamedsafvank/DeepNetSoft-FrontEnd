import React, { useState } from 'react';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../Images/logo - Copy.png" alt="Logo" />
      </div>
      <div className="logo-second">
        <img src="../Images/logo.png" alt="Logo" />
      </div>


      {/* Hamburger button */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Menu" className="menu">Menu</a></li>
        <li><a href="#Reservation">Make a Reservation</a></li>
        <li><a href="#Contact">Contact us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
