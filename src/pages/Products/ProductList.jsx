import React from "react";
import "../../styles/products/ProductsList.css";
import ProductCard from "../../components/ProductCard";
import FilterBar from "./components/FilterBar";
import { useState, useEffect } from "react";

const ProductList = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      {/* This is the Filter Bar */}
      {showFilter && (
        <div className="filter-bar dark">
          <FilterBar setShowFilter={setShowFilter} />
        </div>
      )}
      {/* :::::::::::::::::::::::: */}

      <div className="products-header">
        <div>
          <h2>
            All eBooks <span>({products.length})</span>
          </h2>
        </div>

        <div>
          <span onClick={() => setShowFilter(!showFilter)}>
            <i className="bi bi-three-dots-vertical"></i>
          </span>
        </div>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>

      {/*  */}
    </div>
  );
};

export default ProductList;
