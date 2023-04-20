import React from "react";
import ProductCard from "../../../components/ProductCard";
import { useState, useEffect } from "react";
import { getFeaturedList } from "../../../services/productService";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getFeaturedList();
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
