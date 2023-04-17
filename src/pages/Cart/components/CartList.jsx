import React from "react";
import "../../../styles/pages/Cart/CartList.css";
import { useState } from "react";
import CartCard from "./CartCard";
import CartCheckout from "./CartCheckout";
import { useCart } from "../../../context/CartContext";

const CartList = () => {
  const [checkout, setCheckout] = useState(false);

  // TO SHOW EACH OF THE CART ITEMS FROM THE useCart
  const { cartList, totalPrice } = useCart();

  return (
    <>
      <div className="cart-list">
        <section>
          <p>My Cart ({cartList.length})</p>
        </section>

        <section>
          {cartList.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </section>

        <div className="cart-items-button">
          <div>
            <span>Total Amount:</span>
            <span>${totalPrice}</span>
          </div>
          <div>
            <button type="button" onClick={() => setCheckout(true)}>
              PLACE ORDER <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      {checkout && <CartCheckout setCheckout={setCheckout} />}
    </>
  );
};

export default CartList;
