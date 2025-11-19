import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function AppLayout({ theme, setTheme }) {
    return (
        <>
            {/* Header exists in all pages */}
            <Header theme={theme} setTheme={setTheme} />

            {/* every child route appears here */}
            <Outlet />
        </>
    );
}
