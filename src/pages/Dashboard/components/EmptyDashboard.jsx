import React from "react";
import "../../../styles/pages/DashBoard/EmptyDashboard.css";
import { Link } from "react-router-dom";

const EmptyDashboard = () => {
  return (
    <section>
      <div className="my-5">
        <p className="bi bi-cart"></p>
        <p>Oops! Your order dashboard looks empty!</p>
        <p>Add eBooks to your cart from our store collection.</p>
      </div>
      <Link href="/" type="button">
        Continue Shopping <i className="bi bi-cart"></i>
      </Link>
    </section>
  );
};

export default EmptyDashboard;
