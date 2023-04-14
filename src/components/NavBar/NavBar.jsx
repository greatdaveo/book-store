import React from "react";
import "../../styles/components/NavBar/NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "../Search";
import DropDownLogin from "./DropDownLogin";
import DropDownLogout from "./DropDownLogout";

const NavBar = ({ darkMode, setDarkMode }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <header>
        <nav>
          <div>
            <Link to="" className="logo">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Book Store Logo"
              />
              <span>Book Store</span>
            </Link>
          </div>

          <div className="header-icons">
            <Link to="#">
              <i
                className="bi bi-gear-wide-connected"
                onClick={() => setDarkMode(!darkMode)}
              ></i>
            </Link>
            <Link to="">
              <i
                className="bi bi-search"
                onClick={() => setShowSearch(!showSearch)}
              ></i>
            </Link>
            <Link to="/cart">
              <i className="bi bi-cart4"></i>
              <span>0</span>
            </Link>
            <Link
              to=""
              style={{ position: "relative" }}
              onClick={() => setDropDown(!dropDown)}
            >
              <i className="bi bi-person-circle"></i>
              {/* <DropDownLogin /> */}
              {dropDown && <DropDownLogout />}
            </Link>
          </div>
        </nav>
      </header>

      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default NavBar;
