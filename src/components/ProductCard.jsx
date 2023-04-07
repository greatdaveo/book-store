import React from "react";
import "../styles/Home/ProductCard.css";
import { Link } from "react-router-dom";
import Book1 from "../assets/images/10001.avif";

const ProductCard = () => {
  return (
    <div className="card-container">
      <div className="product-card">
        <Link>
          <span>Best Seller</span>
          <img src={Book1} alt="" width="385px" />
        </Link>

        <div>
          <h2>JavaScript Basics To Advance</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            aliquam culpa harum fuga quidem cupiditate!
          </p>
        </div>

        <div>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-half"></i>
        </div>

        <div>
          <span>$50</span>
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
