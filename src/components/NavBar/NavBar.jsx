import React from "react";
import "../../styles/components/NavBar/NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "../Search";
import DropDownLogin from "./DropDownLogout";
import DropDownLogout from "./DropDownLogin";
import { useCart } from "../../context/CartContext";

const NavBar = ({ darkMode, setDarkMode }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  // TO GET THE SESSION TOKEN
  const token = JSON.parse(sessionStorage.getItem("token"));

  // To show the the cartList length from useCart
  const { cartList } = useCart();

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
              <span>{cartList.length}</span>
            </Link>
            <Link
              style={{ position: "relative" }}
              onClick={() => setDropDown(!dropDown)}
            >
              <i className="bi bi-person-circle"></i>
              {dropDown &&
                (token ? (
                  <DropDownLogout />
                ) : (
                  <DropDownLogin setDropDown={setDropDown} />
                ))}
            </Link>
          </div>
        </nav>
      </header>

      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default NavBar;
