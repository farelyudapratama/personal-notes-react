import React from 'react';
import NoteItem from './NoteItem';
import { filterNotes } from '../utils/filter';

function NoteList({ notes, searchQuery, archived, onDelete, onArchive, onPin }) {
    const filteredNotes = filterNotes(notes, archived, searchQuery);

    return (
        <div>
            <h2>{archived ? 'Catatan Arsip' : 'Catatan Aktif'}</h2>
            <div className="notes-list">
                {filteredNotes.length > 0 ? (
                    filteredNotes.map(note => (
                        <NoteItem key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} onPin={onPin} />
                    ))
                ) : (
                    <p>Tidak ada catatan {archived ? 'arsip' : 'aktif'}{searchQuery ? ' untuk pencarian "' + searchQuery + '"' : ''}</p>
                )}
            </div>
        </div>
    );
}

export default NoteList;
