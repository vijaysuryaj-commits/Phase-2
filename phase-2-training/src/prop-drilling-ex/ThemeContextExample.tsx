import { useState } from "react"
import Layout from "./Layout"

const ThemeContextExample = () => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => setTheme((prev) => prev === "light" ? "dark" : "light")
    return (
        <div style={{ backgroundColor: theme === "light" ? "white" : "black" }}>ThemeContextExample
            <Layout theme={theme} toggleTheme={toggleTheme} />
        </div>
    )
}

export default ThemeContextExample