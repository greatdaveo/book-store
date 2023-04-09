import React from "react";
import "../styles/Home/ProductCard.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";
// import Book1 from "../assets/images/10001.avif";

const ProductCard = ({ product }) => {
  const { id, name, overview, price, poster, rating, best_seller } = product;
  return (
    <div className="card-container">
      <div className="product-card">
        <Link to={`products/${id}`}>
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
          {/* <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-half"></i> */}
        </div>

        <div>
          <span>${price}</span>
          <Link>
            <button>
              Add To Cart
              <span>
                <i className="bi bi-plus-lg"></i>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
