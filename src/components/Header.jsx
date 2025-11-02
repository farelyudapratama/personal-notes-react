import React from "react";
import { useTheme } from '../contexts/ThemeContext.jsx';
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle/ThemeToggle.jsx";

function HeaderApp({ searchQuery, onSearchChange, logout, name}) {
    const { theme } = useTheme();

    return (
        <header className={`note-app__header ${theme}`}>
            <h1>My Notes App</h1>
            <SearchBar query={searchQuery} onQueryChange={onSearchChange} />
            <div className="header-controls">
                <ThemeToggle />
                <button className="btn-logout" onClick={logout}>{name} Logout</button>
            </div>
        </header>
    );
}

export default HeaderApp;