
const ThemeToggler = ({ theme, toggleTheme }) => {
    return (
        <button onClick={toggleTheme}>
            switch to {theme === "light" ? "dark" : "light"} mode
        </button>
    )
}

export default ThemeToggler