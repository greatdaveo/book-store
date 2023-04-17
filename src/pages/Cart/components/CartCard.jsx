import React from "react";
import "../../../styles/pages/Cart/CartCard.css";
import { Link } from "react-router-dom";
import SampleImage from "../../../assets/images/10001.avif";

const CartCard = ({ product }) => {
  return (
    <div>
      <div className="cart-item">
        <div>
          <img src={product.poster} alt={product.name} width="120px" />

          <div className="cart-item-text">
            <Link to={`products/${product.id}`}>
              <h4>{product.name}</h4>
            </Link>
            <button>Remove</button>
          </div>
        </div>

        <p>$29</p>
      </div>
    </div>
  );
};

export default CartCard;
