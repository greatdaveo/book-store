import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{ textAlign: "center", fontSize: "1.5rem", margin: "10rem auto" }}
    >
      <h1 style={{ color: "red" }}>404 Ooops!</h1>
      <h3>Page Not Found</h3>

      <Link to="/">
        <button style={{ padding: "1rem 2rem", marginTop: "2rem" }}>
          Back To Home Page
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
