import React from "react";
import "../../../styles/pages/Cart/CartCheckout.css";

const CartCheckout = ({ setCheckout }) => {
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

          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value=""
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
                value=""
                disabled
                required=""
              />
            </div>

            <div>
              <label htmlFor="card">Card Number:</label>
              <input type="number" name="card" id="card" disabled required="" />
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
