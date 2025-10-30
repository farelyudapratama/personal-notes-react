import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import style
import './styles/style.css';
import AppRouter from './AppWrapper';

const root = createRoot(document.getElementById('root'));
root.render(<BrowserRouter><AppRouter /></BrowserRouter>);