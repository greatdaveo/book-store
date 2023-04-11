import React, { useRef } from "react";
import "../styles/components/Search.css";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const navigate = useNavigate();
  const searchRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?q=${searchRef.current.value}`);
    setShowSearch(false);
  };

  return (
    <div>
      <div className="nav-input">
        <form onSubmit={handleSearch}>
          <input
            ref={searchRef}
            type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
          />
          <button type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
