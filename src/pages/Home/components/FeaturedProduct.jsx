import React from "react";
import ProductCard from "../../../components/ProductCard";
import { useState, useEffect } from "react";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/featured_products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "2rem" }}>Top rated eBooks</h1>

      <div style={{ display: "flex", gap: "0rem" }}>
        {products.map((product) => (
          <div>
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
