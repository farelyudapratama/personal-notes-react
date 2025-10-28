import React from 'react';

function ColorPicker({ colors, selected, onSelect }) {
    return (
        <div className="color-picker">
            {colors.map((c) => (
                <button
                    key={c.name}
                    type="button"
                    className={`note-input__color-button ${selected === c.name ? 'selected' : ''}`}
                    style={{
                        background: `linear-gradient(to right, ${c.from}, ${c.to})`,
                        border: `2px solid ${c.border}`,
                        boxShadow: `0 6px 18px ${c.glow}`,
                        borderRadius: '10px',
                    }}
                    onClick={() => onSelect(c.name)}
                    aria-pressed={selected === c.name}
                    aria-label={`Choose ${c.name}`}
                >
                </button>
            ))}
        </div>
    );
}

export default ColorPicker;
