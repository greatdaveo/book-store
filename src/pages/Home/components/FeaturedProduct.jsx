import React from "react";
import ProductCard from "../../../components/ProductCard";

const FeaturedProduct = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "2rem" }}>Top rated eBooks</h1>

      <div style={{ display: "flex", gap: "0rem" }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default FeaturedProduct;
