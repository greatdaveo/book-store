import React, { Profiler } from "react";
import "../styles/Home/ProductCard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { useCart } from "../context/CartContext";
// import Book1 from "../assets/images/10001.avif";

const ProductCard = ({ product }) => {
  const { id, name, overview, price, poster, rating, best_seller } = product;

  // FOR THE cartLIST LOGIC
  const [inCart, setInCart] = useState(false);
  const { cartList, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    const productInCart = cartList.find(
      (cartItem) => cartItem.id === product.id
    );

    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <div className="card-container">
      <div className="product-card">
        <Link to={`/products/${id}`}>
          {best_seller && <span>Best Seller</span>}
          <img src={poster} alt="" width="385px" height="250px" />
        </Link>

        <div>
          <Link to={`products/${id}`}>
            <h4>{name}</h4>
          </Link>
          <p>{overview}</p>
        </div>

        <div>
          <Rating rating={rating} />
        </div>

        <div>
          <span>${price}</span>
          <Link>
            {!inCart && (
              <button
                onClick={() => addToCart(product)}
                className={`${product.in_stock ? "" : "not-in-stock"}`}
                disabled={product.in_stock ? "" : "disabled"}
              >
                Add To Cart
                <span>
                  <i className="bi bi-plus-lg"></i>
                </span>
              </button>
            )}

            {inCart && (
              <button
                onClick={() => removeFromCart(product)}
                style={{ background: "red" }}
                disabled={product.in_stock ? "" : "disabled"}
              >
                Remove
                <span>
                  <i className="bi bi-trash3"></i>
                </span>
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
