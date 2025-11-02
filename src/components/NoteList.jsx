import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, searchQuery, archived, onDelete, onArchive, onUnarchive }) {
    const filteredNotes = notes.filter(note => 
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.body.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h2>{archived ? 'Archived Notes' : 'Active Notes'}</h2>
            <div className="notes-list">
                {filteredNotes.length > 0 ? (
                    filteredNotes.map(note => (
                        <NoteItem 
                            key={note.id} 
                            {...note} 
                            onDelete={onDelete} 
                            onArchive={onArchive} 
                            onUnarchive={onUnarchive}
                        />
                    ))
                ) : (
                    <p>There are no {archived ? 'archived' : 'active'} notes {searchQuery ? 'matching "' + searchQuery + '"' : ''}.</p>
                )}
            </div>
        </div>
    );
}

export default NoteList;
