import ThemeToggler from "./ThemeToggler"

const Sidebar = ({theme, toggleTheme}) => {
  return (
    <div>Sidebar
        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}

export default Sidebar