import React from "react";
import "../../../styles/pages/Cart/EmptyCart.css";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="empty-cart">
      <div>
        <i className="bi bi-cart4"></i>
        <p>Oops! Your cart looks empty!</p>
        <p>Add eBooks to your cart from our store collection.</p>
      </div>

      <Link to="/products">
        <button type="button">
          Continue Shopping <i className="bi bi-cart4"></i>
        </button>
      </Link>
    </section>
  );
};

export default EmptyCart;
