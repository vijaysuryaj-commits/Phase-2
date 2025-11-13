import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <button onClick={toggleTheme}>
            switch to {theme === "light" ? "dark" : "light"} mode
        </button>
    )
}

export default ThemeToggler