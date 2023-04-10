import React from "react";
import "../styles/products/ProductDetail.css";
import { useState, useEffect } from "react";
import Rating from "../components/Rating";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  return (
    <main className="product-detail-container">
      <div>
        <h1>{product.name}</h1>
        <p>{product.overview}</p>
      </div>

      <div className="product-detail-cover">
        <div>
          <img
            src={product.poster}
            alt={product.name}
            style={{ borderRadius: "10px" }}
            width="550px"
            height="400px"
          />
        </div>

        <div className="product-detail">
          <p style={{ color: "black", fontWeight: "bold", fontSize: "3rem" }}>
            <span>$</span>
            <span>{product.price}</span>
          </p>

          <div>
            <Rating rating={product.rating} />
          </div>

          <div>
            {product.best_seller && (
              <span style={{ color: "#f59e2f", background: "#fffbeb" }}>
                BEST SELLER
              </span>
            )}

            {product.in_stock && (
              <span style={{ color: "#059672", background: "#f1f5f9" }}>
                INSTOCK
              </span>
            )}
            {!product.in_stock && (
              <span style={{ color: "#059672", background: "#f1f5f9" }}>
                OUT OF STOCK
              </span>
            )}
            <span style={{ color: "#6a84f6", background: "#f1f5f9" }}>
              {product.size} MB
            </span>
          </div>

          <div>
            <button>
              Add To Cart <i className="bi bi-plus-lg"></i>
            </button>
            <button>
              Remove Item <i className="bi bi-trash3"></i>
            </button>
          </div>

          <div>
            <p>{product.long_description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
