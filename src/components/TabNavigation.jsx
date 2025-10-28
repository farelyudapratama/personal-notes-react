import React from 'react';

function TabNavigation({ activeTab, onTabChange }) {
    return (
        <div className="tab-navigation">
            <button 
                className={`tab-button ${activeTab === 'active' ? 'active' : ''}`}
                onClick={() => onTabChange('active')}
            >
                Active Notes
            </button>
            <button 
                className={`tab-button ${activeTab === 'archived' ? 'active' : ''}`}
                onClick={() => onTabChange('archived')}
            >
                Archived Notes
            </button>
        </div>
    );
}

export default TabNavigation;