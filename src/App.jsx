import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NoteList from './components/NoteList';
import TabNavigation from './components/TabNavigation';
import HeaderApp from './components/Header';
import Loading from './components/Loading';
import NoteDetail from './pages/NoteDetail';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken, getActiveNotes, getArchivedNotes, addNote, deleteNote, archiveNote, unarchiveNote } from './utils/network-data';
import AddNotePage from './pages/AddNotePage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNotes: [],
            archivedNotes: [],
            searchQuery: props.initialSearchQuery || '',
            activeTab: 'active',

            authedUser: null,
            initializing: true,
            loading: false,
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
        this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
        this.onTabChangeHandler = this.onTabChangeHandler.bind(this);

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    async onDeleteHandler(id) {
        this.setState({ loading: true });
        try {
            const result = await deleteNote(id);
            if (!result.error) {
                await this.fetchNotes();
            }
            return result;
        } finally {
            this.setState({ loading: false });
        }
    }

    async onAddNoteHandler({ title, body }) {
        this.setState({ loading: true });
        try {
            const result = await addNote({ title, body });
            if (!result.error) {
                await this.fetchNotes();
            }
            return result;
        } finally {
            this.setState({ loading: false });
        }
    }

    async onArchiveHandler(id) {
        this.setState({ loading: true });
        try {
            const result = await archiveNote(id);
            if (!result.error) {
                await this.fetchNotes();
            }
            return result;
        } finally {
            this.setState({ loading: false });
        }
    }

    async onUnarchiveHandler(id) {
        this.setState({ loading: true });
        try {
            const result = await unarchiveNote(id);
            if (!result.error) {
                await this.fetchNotes();
            }
            return result;
        } finally {
            this.setState({ loading: false });
        }
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
        this.setState({ loading: true });
        try {
            putAccessToken(accessToken);
            const { data } = await getUserLogged();

            this.setState({ authedUser: data });
            await this.fetchNotes();
        } finally {
            this.setState({ loading: false });
        }
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
        this.setState({ loading: true });
        try {
            const { data } = await getUserLogged();

            if (data) {
                this.setState({ authedUser: data });
                await this.fetchNotes();
            }
        } finally {
            this.setState({ loading: false, initializing: false });
        }
    }

    async fetchNotes() {
        this.setState({ loading: true });
        try {
            const activeNotesResult = await getActiveNotes();
            const archivedNotesResult = await getArchivedNotes();

            if (!activeNotesResult.error) {
                this.setState({ activeNotes: activeNotesResult.data });
            }

            if (!archivedNotesResult.error) {
                this.setState({ archivedNotes: archivedNotesResult.data });
            }
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { activeNotes, archivedNotes, searchQuery, activeTab, initializing, authedUser, loading } = this.state;
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

        const notes = activeTab === 'archived' ? archivedNotes : activeNotes;

        return (
            <div className="app">
                {loading && <Loading />}
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeaderApp searchQuery={searchQuery} onSearchChange={this.onSearchChangeHandler} logout={this.onLogout} name={authedUser.name}   />
                            <TabNavigation activeTab={activeTab} onTabChange={this.onTabChangeHandler} />
                            <div className="note-app__body">
                                <NoteList 
                                    notes={notes} 
                                    searchQuery={searchQuery} 
                                    archived={activeTab === 'archived'} 
                                    onDelete={this.onDeleteHandler} 
                                    onArchive={activeTab === 'archived' ? this.onUnarchiveHandler : this.onArchiveHandler} 
                                    onUnarchive={this.onUnarchiveHandler}
                                />
                            </div>
                        </>
                    } />
                    <Route path="/detail/:id" element={
                        <NoteDetail 
                            onDelete={this.onDeleteHandler} 
                        />
                    } />
                    <Route path='/note/new' element={<AddNotePage addNote={this.onAddNoteHandler} />} />
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