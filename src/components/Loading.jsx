import React from 'react';

export default function Loading() {
    return (
        <div className="loading-indicator" aria-live="polite" aria-busy="true">
            <svg className="loading-spinner" width="18" height="18" viewBox="0 0 50 50" aria-hidden="true">
                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4"></circle>
            </svg>
            <span className="loading-text">Loading...</span>
        </div>
    );
}
