import { useContext} from "react"
import Layout from "./Layout1"
import { ThemeContext } from "./ThemeContext"

const ThemeContextExample = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme === "light" ? "white" : "black" }}>ThemeContextExample
            <Layout  />
        </div>
    )
}

export default ThemeContextExample