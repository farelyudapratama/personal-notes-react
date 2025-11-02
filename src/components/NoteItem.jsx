import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItem({ title, body, archived, createdAt, id, onDelete, onArchive, onUnarchive }) {
    const handleArchiveToggle = () => {
        if (archived) {
            onUnarchive(id);
        } else {
            onArchive(id);
        }
    };

    return (
        <div className={`note-item`}>
            <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
                <div className="note-item__content">
                    <div className="note-item__header">
                        <h2 className="note-item__title">{title}</h2>
                    </div>
                    <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                    <p className="note-item__body">{body}</p>
                </div>
            </Link>
            <div className="note-item__action">
                <ArchiveButton id={id} archived={archived} onArchive={handleArchiveToggle} />
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}

export default NoteItem;
