import React from "react";
import "../../../styles/pages/Cart/CartList.css";
import { useState } from "react";
import CartCard from "./CartCard";
import CartCheckout from "./CartCheckout";

const cartlist = [
  {
    id: 10001,
    name: "Basics To Advanced In React",
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
    long_description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.",
    price: 29,
    poster:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
    image_local: "/assets/images/10001.avif",
    rating: 5,
    in_stock: true,
    size: 5,
    best_seller: true,
  },
  {
    id: 10001,
    name: "Basics To Advanced In React",
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
    long_description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.",
    price: 29,
    poster:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
    image_local: "/assets/images/10001.avif",
    rating: 5,
    in_stock: true,
    size: 5,
    best_seller: true,
  },
];

const CartList = () => {
  const [checkout, setCheckout] = useState(false);

  return (
    <>
      <div className="cart-list">
        <section>
          <p>My Cart (2)</p>
        </section>

        <section>
          {cartlist.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </section>

        <div className="cart-items-button">
          <div>
            <span>Total Amount:</span>
            <span>$29</span>
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
