// import { createStore, applyMiddleware } from "redux";
// import cakeReducer from "./cakes/cakeReducer";
// import icecreamReducer from './icecreams/icecreamReducer'
// import { combineReducers } from "redux";
// import logger from 'redux-logger'


// const rootReducer = combineReducers({
//     cake: cakeReducer,
//     icecream: icecreamReducer
// })

// const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || 'compose';

// const store = createStore(
//     rootReducer,
//     enhancers(applyMiddleware(logger))
// );
// export default store


import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import {userReducer} from './users/userReducer'
const store = createStore(userReducer,applyMiddleware(thunk))
export default store