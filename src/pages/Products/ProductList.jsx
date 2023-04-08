import React from "react";
import "../../styles/products/ProductsList.css";
import ProductCard from "../../components/ProductCard";
import FilterBar from "./components/FilterBar";
import { useState } from "react";

const ProductList = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="products-container">
      {/* This is the Filter Bar */}
      {showFilter && (
        <div className="filter-bar">
          <FilterBar setShowFilter={setShowFilter} />
        </div>
      )}
      {/* :::::::::::::::::::::::: */}

      <div className="products-header">
        <div>
          <h2>
            All eBooks <span>(15)</span>
          </h2>
        </div>

        <div>
          <span onClick={() => setShowFilter(!showFilter)}>
            <i class="bi bi-three-dots-vertical"></i>
          </span>
        </div>
      </div>

      <div className="product-list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      {/*  */}
    </div>
  );
};

export default ProductList;
