import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/">StayEase</Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/hostels">Hostels</Link>
        </li>

        <li>
          <Link to="/mess">Mess</Link>
        </li>

        <li>
          <Link to="/about">About us</Link>
        </li>

        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Hostel U Need..."
        />
      </div>

      {/* Login/Register Buttons */}
      <div className="auth-buttons">

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="register-btn">
            Register
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;