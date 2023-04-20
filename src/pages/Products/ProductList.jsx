import React from "react";
import "../../styles/products/ProductsList.css";
import ProductCard from "../../components/ProductCard";
import FilterBar from "./components/FilterBar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFilter } from "../../context/FilterContext";
// This is from productService
import { getProductList } from "../../services/productService";
import { toast } from "react-toastify";

const ProductList = () => {
  const [showFilter, setShowFilter] = useState(false);

  // THIS IS FOR THE SEARCH FEATURE
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
  // :::::::::::::::::::::::::::::::

  const { products, initialProductList } = useFilter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProductList(searchTerm);
        initialProductList(data);
      } catch (error) {
        // console.log(error.message);
        toast.error(error.message, { closeButton: true });
      }
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
