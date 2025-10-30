import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate, presetColors } from '../utils';

function NoteDetail({ notes, onDelete }) {
    const {id} = useParams()
    const navigate = useNavigate();
    const noteId = parseInt(id);
    const note = notes.find((note) => note.id === noteId);

    if (!note) {
        setTimeout(() => navigate('/not-found', { replace: true }), 100);
        return null;
    }

    const selected = presetColors.find(color => color.name === note.color) || presetColors[0];

    return (
    <div className="note-detail">
        <div 
            className="note-detail__content"
            style={{
            '--gradient': `linear-gradient(to right, ${selected.from}, ${selected.to})`,
            '--border': `${selected.border}`,
            }}
        >
            <div className="note-detail__header">
            <h1 className="note-detail__title">{note.title}</h1>
            <p className="note-detail__date">{showFormattedDate(note.createdAt)}</p>
            </div>
            <div className="note-detail__body">
            <p>{note.body}</p>
            </div>
            <div className="note-detail__meta">
            <p>Archived: {note.archived ? 'Yes' : 'No'}</p>
            <p>Pinned: {note.pinned ? 'Yes' : 'No'}</p>
            </div>
            <button onClick={() => navigate(-1)}>Back to Notes</button>
            <button onClick={() => { onDelete(note.id); navigate(-1); }}>Delete Note</button>
        </div>
    </div>
    );
}

export default NoteDetail;