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
        <div>
          <Link to="#">
            <i class="bi bi-gear-wide-connected"></i>{" "}
          </Link>
          <Link to="">
            <i class="bi bi-search"></i>
          </Link>
          <Link to="#">
            <i class="bi bi-cart4"></i>
          </Link>
          <Link to="#">
            <i class="bi bi-person-circle"></i>{" "}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
