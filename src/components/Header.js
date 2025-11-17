import { Link } from 'react-router-dom';
import Theme from './Theme';
const Header = ({ theme, setTheme }) => {
    return (
        <header className='app-header'>
            <Theme theme={theme} setTheme={setTheme} />
            <Link to='/'>
                <p className='app-logo'>The New York Times</p>
            </Link>
        </header>
    );
};

export default Header;
