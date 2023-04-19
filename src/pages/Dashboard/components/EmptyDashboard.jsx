import React from "react";
import "../../../styles/pages/DashBoard/EmptyDashboard.css";
import { Link } from "react-router-dom";

const EmptyDashboard = () => {
  return (
    <section className="empty-dashboard">
      <div>
        <i className="bi bi-cart4"></i>
        <p>Oops! Your order dashboard looks empty!</p>
        <p>Add eBooks to your cart from our store collection.</p>
      </div>

      <Link href="/" type="button">
        <button>
          Continue Shopping <i className="bi bi-cart4"></i>
        </button>
      </Link>
    </section>
  );
};

export default EmptyDashboard;
