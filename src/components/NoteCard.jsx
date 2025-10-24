import React from 'react';
import { showFormattedDate, presetColors } from '../utils';

function NoteCard({ title, body, archived, pinned, createdAt, color }) {
    const selected = presetColors.find((i) => i.name === color) || presetColors[0];

    return (
        <div
            className="note-card"
            style={{
                background: `linear-gradient(to right, ${selected.from}, ${selected.to})`,
                border: `2px solid ${selected.border}`,
            }}
        >
            <h2 className="note-card__title">{title}</h2>
            <p className="note-card__body">{body}</p>
            <p className="note-card__date">Created At: {showFormattedDate(createdAt)}</p>
            <p className="note-card__status">{archived ? 'Archived' : 'Active'}</p>
            <p className="note-card__status">{pinned ? 'Pinned' : 'Unpinned'}</p>
        </div>
    );
}

export default NoteCard;