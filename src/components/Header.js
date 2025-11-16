import Theme from './Theme.js';
const Header = ({ theme, setTheme }) => {
    return (
        <header className='app-header'>
            <Theme theme={theme} setTheme={setTheme} />
            <p className='app-logo'>The New York Times</p>
        </header>
    );
};

export default Header;
