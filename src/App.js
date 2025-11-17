import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import BookList from './pages/BookList';
import BookDetails from './pages/BookDetails';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    // theme state
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    // apply theme to body
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <AppLayout theme={theme} setTheme={setTheme} />,
            children: [
                {
                    index: true,
                    element: <BookList />,
                },
                {
                    path: 'book/:id',
                    element: <BookDetails />,
                },
                {
                    path: '*',
                    element: <NotFoundPage />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
