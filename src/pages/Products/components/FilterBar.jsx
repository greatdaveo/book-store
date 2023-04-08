import React from "react";
import "../../../styles/components/FilterBar.css";

const FilterBar = ({ setShowFilter }) => {
  return (
    <section className="filter-section">
      <div className="filter-container">
        <div>
          <h3>Filters</h3>
          <button type="button" onClick={() => setShowFilter(false)}>
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <div>
          <ul>
            <li>
              <p>Sort by: </p>
              <div>
                <input
                  id="price-sort-1"
                  type="radio"
                  value=""
                  name="price-sort"
                />
                <label htmlFor="price-sort-1">Price - Low to High</label>
              </div>
              <div>
                <input
                  id="price-sort-2"
                  type="radio"
                  value=""
                  name="price-sort"
                />
                <label htmlFor="price-sort-2">Price - High to Low</label>
              </div>
            </li>

            <li>
              <p>Rating:</p>
              <div>
                <input
                  id="rating-sort-1"
                  type="radio"
                  value=""
                  name="rating-sort"
                />
                <label htmlFor="rating-sort-1">4 Stars & Above</label>
              </div>
              <div>
                <input
                  id="rating-sort-2"
                  type="radio"
                  value=""
                  name="rating-sort"
                />
                <label htmlFor="rating-sort-2">3 Stars & Above</label>
              </div>
              <div>
                <input
                  id="rating-sort-3"
                  type="radio"
                  value=""
                  name="rating-sort"
                />
                <label htmlFor="rating-sort-3">2 Stars & Above</label>
              </div>
              <div>
                <input
                  id="rating-sort-4"
                  type="radio"
                  value=""
                  name="rating-sort"
                />
                <label htmlFor="rating-sort-4">1 Stars & Above</label>
              </div>
            </li>

            <li>
              <p>Other Filters:</p>
              <div>
                <input id="best-seller" type="checkbox" value="" />
                <label htmlFor="best-seller">Best Seller Only</label>
              </div>
              <div>
                <input id="in-stock" type="checkbox" value="" />
                <label htmlFor="in-stock">In Stock Only</label>
              </div>
            </li>

            <li>
              <button type="button">Clear Filter</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
