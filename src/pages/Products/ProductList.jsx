import React from "react";
import "../../styles/products/ProductsList.css";

const ProductList = () => {
  return (
    <div className="products-header">
      <div>
        <h2>
          All eBooks <span>(0)</span>
        </h2>
      </div>

      <div>
        <span>
          <i class="bi bi-three-dots-vertical"></i>
        </span>
      </div>
    </div>
  );
};

export default ProductList;
