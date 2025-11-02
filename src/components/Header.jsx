import React from "react";
import SearchBar from "./SearchBar";

function HeaderApp({ searchQuery, onSearchChange, logout, name}) {
    return (
        <header className="note-app__header">
            <h1>My Notes App</h1>
            <SearchBar query={searchQuery} onQueryChange={onSearchChange} />
            <button onClick={logout}>{name} Logout</button>
        </header>
    );
}

export default HeaderApp;