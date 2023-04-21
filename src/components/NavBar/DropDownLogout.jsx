import React from "react";
import { Link } from "react-router-dom";
// import "../../styles/components/NavBar/DropDownLogout.css";

const DropDownLogout = () => {
  return (
    <div className="login-drop-down">
      <ul>
        <Link to="/products">
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
