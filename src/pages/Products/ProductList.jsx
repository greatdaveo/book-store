import React from "react";
import "../../styles/products/ProductsList.css";
import ProductCard from "../../components/ProductCard";
import FilterBar from "./components/FilterBar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFilter } from "../../context/FilterContext";

const ProductList = () => {
  const [showFilter, setShowFilter] = useState(false);
  // const [products, setProducts] = useState([]);

  // THIS IS FOR THE SEARCH FEATURE
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
  // :::::::::::::::::::::::::::::::

  const { products, initialProductList } = useFilter();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        `http://localhost:3000/products?name_like=${
          searchTerm ? searchTerm : ""
        }`
      );
      const data = await response.json();
      // setProducts(data);
      initialProductList(data);
    }
    fetchProducts();
  }, [searchTerm]);

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
