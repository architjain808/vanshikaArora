import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">Vanshika Arora</NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/collection">Collection</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
