import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "./components/SearchIcon";

function SearchBox(props) {
  return (
    <>
      <div className="input-group mb-3 my-2 my-lg-0">
        <input
          className=""
          type="text"
          placeholder="Type to search"
          value={props.value}
          onChange={props.handleSearch}
        />

        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
          >
            <Link to="/search-list">
              <SearchIcon />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
