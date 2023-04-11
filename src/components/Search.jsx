import React, { useRef } from "react";
import "../styles/components/Search.css";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const navigate = useNavigate();
  const searchRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    setShowSearch(false);
    navigate(`/products?q=${searchRef.current.value}`);
  };

  return (
    <div>
      <div className="nav-input">
        <form onClick={handleSearch}>
          <input
            ref={searchRef}
            type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
          />
          <button type="submit" onClick={handleSearch}>
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
