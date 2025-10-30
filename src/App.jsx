import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getInitialData } from './utils';
import NoteList from './components/NoteList';
import NoteInput from './components/NoteInput';
import TabNavigation from './components/TabNavigation';
import HeaderApp from './components/Header';
import NoteDetail from './pages/NoteDetail';
import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchQuery: props.initialSearchQuery || '',
            activeTab: 'active',
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onPinHandler = this.onPinHandler.bind(this);
        this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
        this.onTabChangeHandler = this.onTabChangeHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body, color }) {
        const newNote = {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
            pinned: false,
            color: color || 'yellow',
        };

        this.setState((prevState) => ({
            notes: [...prevState.notes, newNote],
        }));
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                return { ...note, archived: !note.archived };
            }
            return note;
        });
        this.setState({ notes });
    }

    onPinHandler(id) {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                return { ...note, pinned: !note.pinned };
            }
            return note;
        });
        this.setState({ notes });
    }

    onSearchChangeHandler(query) {
        this.setState({ searchQuery: query });
        if (typeof this.props.onUrlChange === 'function') {
            this.props.onUrlChange(query);
        }
    }

    onTabChangeHandler(tab) {
        this.setState({ activeTab: tab });
    }

    render() {
        const { notes, searchQuery, activeTab } = this.state;

        return (
            <div className="app">
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeaderApp searchQuery={searchQuery} onSearchChange={this.onSearchChangeHandler} />
                            <NoteInput addNote={this.onAddNoteHandler} />
                            <TabNavigation activeTab={activeTab} onTabChange={this.onTabChangeHandler} />
                            <div className="note-app__body">
                                <NoteList 
                                    notes={notes} 
                                    searchQuery={searchQuery} 
                                    archived={activeTab === 'archived'} 
                                    onDelete={this.onDeleteHandler} 
                                    onArchive={this.onArchiveHandler} 
                                    onPin={this.onPinHandler} 
                                />
                            </div>
                        </>
                    } />
                    <Route path="/detail/:id" element={
                        <NoteDetail notes={notes} onDelete={this.onDeleteHandler} />
                    } />
                    <Route path="/not-found" element={<NotFoundPage />} />
                    <Route path="*" element={<Navigate to="/not-found" replace />} />
                </Routes>
            </div>
        );
    }
}

export default App;