import React from "react";
import { Link } from "react-router-dom";

function SearchBox(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Type to search"
        value={props.value}
        onChange={props.handleSearch}
      />
      <button type="button" className="btn btn-outline-light btn-sm">
        <Link to="/search-list">Submit</Link>
      </button>
    </div>
  );
}

export default SearchBox;
