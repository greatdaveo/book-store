import React from "react";
import "../../styles/components/NavBar/DropDownLogin.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";

// This is the getUser from the dataService
import { getUser } from "../../services/dataService";

const DropDownLogin = ({ setDropdown }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getUser();
      data.email ? setUser(data) : handleLogout();
    }
    fetchData();
  }, []);

  function handleLogout() {
    // FOR logout from authService
    logout();
    setDropdown(false);
    navigate("/");
  }

  return (
    <div className="login-drop-down">
      <ul>
        <li style={{ borderBottom: "1px solid #f2f1ef" }}>
          <p>{user.email}</p>
        </li>
        <Link to="">
          <li>ebook</li>
        </Link>
        <Link to="/dashboard">
          <li>Dashboard</li>
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
