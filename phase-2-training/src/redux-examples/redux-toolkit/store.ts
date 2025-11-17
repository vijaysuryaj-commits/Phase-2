import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cakeSlice";
import icecreamReducer from "./icecreamSlice";
import userReducer from "../redux-toolkit/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream:icecreamReducer,
    users: userReducer
  }
});

export default store;
