import React from "react";
import SearchBar from "./SearchBar";

function HeaderApp({ searchQuery, onSearchChange }) {
    return (
        <header className="note-app__header">
            <h1>My Notes App</h1>
            <SearchBar query={searchQuery} onQueryChange={onSearchChange} />
        </header>
    );
}

export default HeaderApp;