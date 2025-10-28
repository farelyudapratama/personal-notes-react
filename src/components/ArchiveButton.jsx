import React from "react";

function ArchiveButton({ id, archived, onArchive }) {
    return (
        <button
            type="button"
            className="note-item__archive-button"
            aria-label={archived ? "Unarchive note" : "Archive note"}
            onClick={() => onArchive(id)}
        >
            {archived ? "Unarchive" : "Archive"}
        </button>
    );
}

export default ArchiveButton;