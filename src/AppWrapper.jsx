import React from 'react';
import { useSearchParams } from 'react-router-dom';
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

    return <App initialSearchQuery={q} onUrlChange={changeSearchParams} />;
}
