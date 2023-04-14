import React from "react";
import "../../../styles/components/FilterBar.css";
import { useFilter } from "../../../context/FilterContext";

const FilterBar = ({ setShowFilter }) => {
  // TO ACCESS THE STATE AND DISPATCH
  const { state, dispatch } = useFilter();

  return (
    <section className="filter-section">
      <div className="filter-container">
        <div>
          <h3>Filters</h3>
          <button type="button" onClick={() => setShowFilter(false)}>
            <i className="bi bi-x-lg"></i>
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
                  checked={state.sortBy === "lowtohigh" || false}
                  onChange={() =>
                    dispatch({
                      type: "SORT_BY",
                      payload: { sortBy: "lowtohigh" },
                    })
                  }
                />
                <label htmlFor="price-sort-1">Price - Low to High</label>
              </div>
              <div>
                <input
                  id="price-sort-2"
                  type="radio"
                  value=""
                  name="price-sort"
                  checked={state.sortBy === "hightolow" || false}
                  onChange={() =>
                    dispatch({
                      type: "SORT_BY",
                      payload: { sortBy: "hightolow" },
                    })
                  }
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
                  checked={state.ratings === "4STARSABOVE" || false}
                  onChange={() =>
                    dispatch({
                      type: "RATINGS",
                      payload: { ratings: "4STARSABOVE" },
                    })
                  }
                />
                <label htmlFor="rating-sort-1">4 Stars & Above</label>
              </div>
              <div>
                <input
                  id="rating-sort-2"
                  type="radio"
                  value=""
                  name="rating-sort"
                  checked={state.ratings === "3STARSABOVE" || false}
                  onChange={() =>
                    dispatch({
                      type: "RATINGS",
                      payload: { ratings: "3STARSABOVE" },
                    })
                  }
                />
                <label htmlFor="rating-sort-2">3 Stars & Above</label>
              </div>
              <div>
                <input
                  id="rating-sort-3"
                  type="radio"
                  value=""
                  name="rating-sort"
                  checked={state.ratings === "2STARSABOVE" || false}
                  onChange={() =>
                    dispatch({
                      type: "RATINGS",
                      payload: { ratings: "2STARSABOVE" },
                    })
                  }
                />
                <label htmlFor="rating-sort-3">2 Stars & Above</label>
              </div>
              <div>
                <input
                  id="rating-sort-4"
                  type="radio"
                  value=""
                  name="rating-sort"
                  checked={state.ratings === "1STARABOVE" || false}
                  onChange={() =>
                    dispatch({
                      type: "RATINGS",
                      payload: { ratings: "1STARABOVE" },
                    })
                  }
                />
                <label htmlFor="rating-sort-4">1 Stars & Above</label>
              </div>
            </li>

            <li>
              <p>Other Filters:</p>
              <div>
                <input
                  id="best-seller"
                  type="checkbox"
                  value=""
                  checked={state.bestSellerOnly || false}
                  onChange={() =>
                    dispatch({
                      type: "BEST_SELLER_ONLY",
                      payload: { bestSellerOnly: !state.bestSellerOnly },
                    })
                  }
                />
                <label htmlFor="best-seller">Best Seller Only</label>
              </div>
              <div>
                <input
                  id="in-stock"
                  type="checkbox"
                  value=""
                  checked={state.onlyInStock || false}
                  onChange={() =>
                    dispatch({
                      type: "ONLY_IN_STOCK",
                      payload: { onlyInStock: !state.onlyInStock },
                    })
                  }
                />
                <label htmlFor="in-stock">In Stock Only</label>
              </div>
            </li>

            <li>
              <button
                type="button"
                onClick={() =>
                  dispatch({
                    type: "CLEAR_FILTER",
                  })
                }
              >
                Clear Filter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
