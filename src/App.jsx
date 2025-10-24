import React from 'react';
import { getInitialData, showFormattedDate } from './utils';
import NoteList from './components/NoteList';

function App() {
    const notes = getInitialData();

    return (
        <div className="app">
            <h1>My Notes App</h1>
            <NoteList notes={notes} />
        </div>
    );
}

export default App;