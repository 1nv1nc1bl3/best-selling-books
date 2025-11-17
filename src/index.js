import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // αν το χρησιμοποιείς

const root = ReactDOM.createRoot(document.getElementById('root-book-list'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
