import React from "react";
import "../styles/components/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
          <Link to="">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Book Store Logo"
            />
            <span>Book Store</span>
          </Link>
        </div>

        <div className="header-icons">
          <Link to="#">
            <i className="bi bi-gear-wide-connected"></i>
          </Link>
          <Link to="">
            <i className="bi bi-search"></i>
          </Link>
          <Link to="/cart">
            <i className="bi bi-cart4"></i>
            <span>0</span>
          </Link>
          <Link to="/dashboard">
            <i className="bi bi-person-circle"></i>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
