import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import App from './App';

export default function AppWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('keyword') || '';

    function changeSearchParams(newQuery) {
        if (newQuery) {
            setSearchParams({ keyword: newQuery });
        } else {
            setSearchParams({});
        }
    }

    return (
        <ThemeProvider>
            <App initialSearchQuery={q} onUrlChange={changeSearchParams} />
        </ThemeProvider>
    );
}
