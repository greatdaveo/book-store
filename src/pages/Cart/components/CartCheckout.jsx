import React from "react";
import "../../../styles/pages/Cart/CartCheckout.css";
import { useCart } from "../../../context/CartContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// This is the getUser & createOrder function from dataService
import { createOrder, getUser } from "../../../services/dataService";
import { toast } from "react-toastify";

const CartCheckout = ({ setCheckout }) => {
  const { cartList, totalPrice, clearCart } = useCart();
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        toast.error(error.message, { closeButton: true });
      }
    }
    fetchData();
  }, []);

  // HANDLE CHECKOUT FUNCTION
  async function handleCheckout(e) {
    e.preventDefault();

    try {
      const data = await createOrder(cartList, totalPrice, user);
      clearCart();
      navigate("/order", { state: { data: data, status: true } });
    } catch (error) {
      toast.error(error.message, { closeButton: true });
      navigate("/order", { state: { status: false } });
    }
  }

  return (
    <section className="check-out-container">
      <div>
        <div className="checkout-card">
          <div>
            <h3>
              <i className="bi bi-credit-card"></i> CARD PAYMENT
            </h3>

            <button type="button" onClick={() => setCheckout(false)}>
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          <form onSubmit={handleCheckout}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={user.name || ""}
                disabled
                required=""
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                id="email"
                value={user.email || ""}
                disabled
                required=""
              />
            </div>

            <div>
              <label htmlFor="card">Card Number:</label>
              <input
                type="number"
                name="card"
                id="card"
                value="1234567890123456789"
                disabled
                required=""
              />
            </div>

            <div className="expiry-date">
              <label htmlFor="code">Expiry Date:</label>
              <div>
                <input
                  type="number"
                  name="month"
                  id="month"
                  value="03"
                  disabled
                  required=""
                />
                <input
                  type="number"
                  name="year"
                  id="year"
                  value="27"
                  disabled
                  required=""
                />
              </div>
            </div>

            <div>
              <label htmlFor="code">Security Code:</label>
              <input
                type="number"
                name="code"
                id="code"
                value="523"
                disabled
                required=""
              />
            </div>

            <div>
              <h1>${totalPrice} 🤑</h1>
            </div>

            <button type="submit">
              <i className="bi bi-lock-fill"></i>PAY NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CartCheckout;
