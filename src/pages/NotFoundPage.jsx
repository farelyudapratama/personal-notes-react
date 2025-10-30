import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="not-found-page">
            <div className="not-found-content">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <div className="not-found-actions">
                    <button onClick={() => navigate('/')}>Go to Home</button>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;