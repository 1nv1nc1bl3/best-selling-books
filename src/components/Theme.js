const Theme = ({ theme, setTheme }) => {
    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };
    return (
        <button type='button' onClick={toggleTheme}>
            {theme === 'light' ? <span>🌛</span> : <span>☀️</span>}
        </button>
    );
};

export default Theme;
