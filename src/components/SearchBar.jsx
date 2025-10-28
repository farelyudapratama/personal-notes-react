import React from "react";

function SearchBar({ query, onQueryChange }) {
    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Search notes..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
        />
    );
}

export default SearchBar;