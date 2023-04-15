import React from "react";
import "../../styles/components/NavBar/DropDownLogin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DropDownLogin = () => {
  const navigate = useNavigate();

  function handleLogout(e) {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userID");
    navigate("/");
  }

  return (
    <div className="login-drop-down">
      <ul>
        <li style={{ borderBottom: "1px solid #f2f1ef" }}>
          <p>dave@example.com</p>
        </li>
        <Link to="">
          <li>ebook</li>
        </Link>
        <Link to="/register">
          <li>Register</li>
        </Link>
        <Link>
          <li style={{ borderTop: "1px solid #f2f1ef" }} onClick={handleLogout}>
            Logout
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default DropDownLogin;
