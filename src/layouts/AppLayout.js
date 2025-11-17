import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function AppLayout({ theme, setTheme }) {
    return (
        <>
            <Header theme={theme} setTheme={setTheme} />
            <Outlet />
        </>
    );
}
