import Sidebar from "./Sidebar"

const Layout = ({ theme, toggleTheme }) => {
    return (
        <div>Layout
            <Sidebar theme={theme} toggleTheme={toggleTheme} />
        </div>
    )
}

export default Layout