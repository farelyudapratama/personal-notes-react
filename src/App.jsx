import React from 'react';
import { getInitialData } from './utils';
import NoteList from './components/NoteList';
import NoteInput from './components/NoteInput';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);

        this.onArchiveHandler = this.onArchiveHandler.bind(this);
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

    render() {
        const { notes } = this.state;

        return (
            <div className="app">
                <h1>My Notes App</h1>
                <NoteInput addNote={this.onAddNoteHandler} />
                <div className="note-app__body">
                    <NoteList notes={notes} archived={false} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                    <NoteList notes={notes} archived={true} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                </div>
            </div>
        );
    }
}

export default App;