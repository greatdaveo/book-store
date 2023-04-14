import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/NavBar/DropDownLogin.css";

const DropDownLogin = () => {
  return (
    <div className="login-drop-down">
      <ul>
        <Link to="">
          <li>ebook</li>
        </Link>
        <Link to="/logout">
          <li>Login</li>
        </Link>
        <Link to="/register">
          <li>Register</li>
        </Link>
      </ul>
    </div>
  );
};

export default DropDownLogin;
