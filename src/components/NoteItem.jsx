import React from 'react';
import { showFormattedDate, presetColors } from '../utils';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItem({ title, body, archived, pinned, createdAt, color, id, onDelete, onArchive }) {
    const selected = presetColors.find((i) => i.name === color) || presetColors[0];

    return (
        <div className="note-item">
            <div
                className="note-item__content"
                style={{
                    '--gradient': `linear-gradient(to right, ${selected.from}, ${selected.to})`,
                    '--border': `${selected.border}`,
                }}
            >
                <div className="note-item__header">
                    <h2 className="note-item__title">{title}</h2>
                    <p className="note-item__pinned">{pinned ? 'Pinned' : 'Unpinned'}</p>
                </div>
                <p className="note-item__date">Created At: {showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>

                <div className="note-item__action">
                    <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
                    <DeleteButton id={id} onDelete={onDelete} />
                </div>
            </div>
        </div>
    );
}

export default NoteItem;
