import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import BookList from './pages/BookList';
import BookDetails from './pages/BookDetails';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    // (1) we keep theme on App level so as to pass in all components
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    // (2) on theme change → write on body + localStorage
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    // (3) router appears here
    const router = createBrowserRouter([
        {
            path: '/', // main route
            element: <AppLayout theme={theme} setTheme={setTheme} />, // wrapper layout
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

    // (4) RouterProvider tells React to use our router
    return <RouterProvider router={router} />;
}

export default App;
