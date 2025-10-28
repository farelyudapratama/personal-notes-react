import React from "react";

function PinButton({ id, pinned, onPin }) {
    return (
        <button
            type="button"
            className={`note-item__pin-button ${pinned ? 'pinned' : 'unpinned'}`}
            aria-label={pinned ? "Unpin note" : "Pin note"}
            onClick={() => onPin(id)}
        >
            {pinned ? "Unpin" : "Pin"}
        </button>
    );
}

export default PinButton;