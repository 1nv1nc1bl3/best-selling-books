const Theme = ({ theme, setTheme }) => {
    const toggleTheme = () => {
        // toggle theme
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <button type='button' onClick={toggleTheme}>
            {/* Icon changes depending on theme */}
            {theme === 'light' ? <span>🌛</span> : <span>☀️</span>}
        </button>
    );
};

export default Theme;
