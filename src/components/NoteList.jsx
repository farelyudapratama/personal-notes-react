import React from 'react';
import NoteItem from './NoteItem';
import { filterNotes } from '../utils/filter';

function NoteList({ notes, searchQuery, archived, onDelete, onArchive, onPin }) {
    const filteredNotes = filterNotes(notes, archived, searchQuery);

    return (
        <div>
            <h2>{archived ? 'Archived Notes' : 'Active Notes'}</h2>
            <div className="notes-list">
                {filteredNotes.length > 0 ? (
                    filteredNotes.map(note => (
                        <NoteItem key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} onPin={onPin} />
                    ))
                ) : (
                    <p>There are no {archived ? 'archived' : 'active'} notes {searchQuery ? 'matching "' + searchQuery + '"' : ''}.</p>
                )}
            </div>
        </div>
    );
}

export default NoteList;
