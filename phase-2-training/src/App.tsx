// // import { UserProvider } from './Components/UserContext'
// // import ChannelContext from './Components/ChannelContext'
// // import ComponentC from './Components/ComponentC'
// // const App = () => {
// //   return (
// //     <div>
// //       <UserProvider value="Vijay">
// //         <ChannelContext.Provider value="JoyBoy">
// //           <ComponentC />
// //         </ChannelContext.Provider>
// //       </UserProvider>
// //     </div>
// //   )
// // }
// // export default App
// import './App.css'
// import { ThemeProvider } from "./context-api-example/ThemeContext"
// // import ThemeContextExample from "./prop-drilling-ex/ThemeContextExample"
// import ThemeContextExample from "./context-api-example/ThemeContextExample1"


// const App = () => {
//   return (
//     // <ThemeContextExample />
//     <ThemeProvider>
//       <ThemeContextExample />
//     </ThemeProvider>
//   )
// }

// export default App

// import { Provider } from "react-redux"
// import './App.css'
// import store from "./redux-examples/redux/store"
// import CakeContainer from "./redux-examples/Components/cakeContainer"
// // import IceCreamContainer from "./redux-examples/Components/IceCreamContainer"
// // import HooksCakeContainer from "./redux-examples/Components/HooksCakeContainer"
// // import HooksIcecreamContainer from "./redux-examples/Components/HooksIcecreamContainer"
// import UserContainer from "./redux-examples/Components/UserContainer"

// function App() {
//   return (
//     <Provider store={store}>
//       <div>
//          <CakeContainer />
//         {/* <HooksCakeContainer /> 
//         <IceCreamContainer /> */}
//         {/* <HooksIcecreamContainer /> */}
//         <UserContainer />
//       </div>
//     </Provider>
//   )
// }

// export default App

import { Provider } from "react-redux";
import store from "./redux-examples/redux-toolkit/store";
import CakeContainer from "./redux-examples/Components/cakeContainer";
import IceCreamContainer from "./redux-examples/Components/IceCreamContainer";
import UserContainer from "./redux-examples/Components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
        <IceCreamContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
