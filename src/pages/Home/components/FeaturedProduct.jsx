import React from "react";
import ProductCard from "../../../components/ProductCard";
import { useState, useEffect } from "react";
import { getFeaturedList } from "../../../services/productService";
import { toast } from "react-toastify";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList();
        setProducts(data);
      } catch (error) {
        // console.log(error.message);
        toast.error(error.message, { closeButton: true });
      }
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
