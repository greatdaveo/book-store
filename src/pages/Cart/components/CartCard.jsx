import React from "react";
import "../../../styles/pages/Cart/CartCard.css";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();

  return (
    <div>
      <div className="cart-item">
        <div>
          <img src={product.poster} alt={product.name} width="120px" />

          <div className="cart-item-text">
            <Link to={`products/${product.id}`}>
              <h4>{product.name}</h4>
            </Link>
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        </div>

        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default CartCard;
