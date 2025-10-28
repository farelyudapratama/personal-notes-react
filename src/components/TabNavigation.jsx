import React from 'react';

function TabNavigation({ activeTab, onTabChange }) {
    return (
        <div className="tab-navigation">
            <button 
                className={`tab-button ${activeTab === 'active' ? 'active' : ''}`}
                onClick={() => onTabChange('active')}
            >
                Catatan Aktif
            </button>
            <button 
                className={`tab-button ${activeTab === 'archived' ? 'active' : ''}`}
                onClick={() => onTabChange('archived')}
            >
                Catatan Arsip
            </button>
        </div>
    );
}

export default TabNavigation;