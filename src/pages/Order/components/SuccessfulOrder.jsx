import React from "react";
import "../../../styles/pages/Order/components/SuccessfulOrder.css";
import { Link } from "react-router-dom";

const SuccessfulOrder = ({ data }) => {
  return (
    <section className="successful-order">
      <div>
        <i className="bi bi-check-circle"></i>
        <p>Thank you {data.user.name} for the order!</p>
        <p>Your Order ID: {data.id}</p>
      </div>

      <div>
        <p>Your order is confirmed.</p>
        <p>Please check your mail ({data.user.email}) for the eBook.</p>
        <p>Payment ID: xyz_123456789</p>
      </div>

      <Link to="/products">
        <button type="button">
          Continue Shopping <i className="bi bi-cart"></i>
        </button>
      </Link>
    </section>
  );
};

export default SuccessfulOrder;
