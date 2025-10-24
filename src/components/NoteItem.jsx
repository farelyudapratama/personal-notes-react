import React from 'react';
import NoteCard from './NoteCard';

function NoteItem({ title, body, archived, pinned, createdAt, color }) {
    return (
        <div className="note-item">
            <NoteCard
                title={title}
                body={body}
                archived={archived}
                pinned={pinned}
                createdAt={createdAt}
                color={color}
            />
        </div>
    );
}

export default NoteItem;
