import React from "react";
import "../../../styles/pages/Order/components/FailedOrder.css";
import { Link } from "react-router-dom";

const FailedOrder = () => {
  return (
    <section className="failed-order">
      <div>
        <i className="bi bi-exclamation-circle"></i>
        <p>Payment failed, please try again!</p>
      </div>
      <div>
        <p>Your order is not confirmed.</p>
        <p>
          Connect <span className="">codebook@example.com</span> for support.
        </p>
      </div>
      <Link to="/cart">
        <button type="button">
          Check Cart Again <i className="bi bi-cart"></i>
        </button>
      </Link>
    </section>
  );
};

export default FailedOrder;
