import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getAllNotes, addNote, deleteNote, toggleArchive, togglePin } from './utils';
import NoteList from './components/NoteList';
import NoteInput from './components/NoteInput';
import TabNavigation from './components/TabNavigation';
import HeaderApp from './components/Header';
import NoteDetail from './pages/NoteDetail';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken } from './utils/network-data';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getAllNotes(),
            searchQuery: props.initialSearchQuery || '',
            activeTab: 'active',

            authedUser: null,
            initializing: true,
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onPinHandler = this.onPinHandler.bind(this);
        this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
        this.onTabChangeHandler = this.onTabChangeHandler.bind(this);

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);
        this.setState({ notes: getAllNotes() });
    }

    onAddNoteHandler({ title, body, color }) {
        addNote({ title, body, color });
        this.setState({ notes: getAllNotes() });
    }

    onArchiveHandler(id) {
        toggleArchive(id);
        this.setState({ notes: getAllNotes() });
    }

    onPinHandler(id) {
        togglePin(id);
        this.setState({ notes: getAllNotes() });
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

    async onLoginSuccess({ accessToken }) {
        console.log("accessToken diterima:", accessToken);
        putAccessToken(accessToken);
        const { data } = await getUserLogged();

        this.setState({ authedUser: data })
    }

    onLogout() {
        this.setState(() => {
        return {
            authedUser: null
        }
        });
        putAccessToken('');
    }

    async componentDidMount() {
        const { data } = await getUserLogged();

        this.setState({ authedUser: data, initializing: false });
    }

    render() {
        const { notes, searchQuery, activeTab, initializing, authedUser } = this.state;
        if (initializing) {
            return null;
        }
        if (authedUser === null) {
            return (
                <div className="app">
                    <Routes>
                        <Route path="/login" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </Routes>
                </div>
            )
        }

        return (
            <div className="app">
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeaderApp searchQuery={searchQuery} onSearchChange={this.onSearchChangeHandler} logout={this.onLogout} name={authedUser.name}   />
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
                    <Route path="/login" element={<Navigate to="/" replace />} />
                    <Route path="/register" element={<Navigate to="/" replace />} />
                    <Route path="/not-found" element={<NotFoundPage />} />
                    <Route path="*" element={<Navigate to="/not-found" replace />} />
                </Routes>
            </div>
        );
    }
}

export default App;