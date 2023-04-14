import React from "react";
import "../../styles/components/NavBar/DropDownLogOut.css";
import { Link } from "react-router-dom";

const DropDownLogout = () => {
  return (
    <div className="logout-drop-down">
      <ul>
        <li>
          <p>dave@example.com</p>
        </li>
        <Link to="">
          <li>ebook</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/register">
          <li>Register</li>
        </Link>
      </ul>
    </div>
  );
};

export default DropDownLogout;
