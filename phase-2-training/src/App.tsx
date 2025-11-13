// import { UserProvider } from './Components/UserContext'
// import ChannelContext from './Components/ChannelContext'
// import ComponentC from './Components/ComponentC'
// const App = () => {
//   return (
//     <div>
//       <UserProvider value="Vijay">
//         <ChannelContext.Provider value="JoyBoy">
//           <ComponentC />
//         </ChannelContext.Provider>
//       </UserProvider>
//     </div>
//   )
// }
// export default App
import './App.css'
import { ThemeProvider } from "./context-api-example/ThemeContext"
// import ThemeContextExample from "./prop-drilling-ex/ThemeContextExample"
import ThemeContextExample from "./context-api-example/ThemeContextExample1"


const App = () => {
  return (
    // <ThemeContextExample />
    <ThemeProvider>
      <ThemeContextExample />
    </ThemeProvider>
  )
}

export default App