const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  user: {
    name: "Vijay",
    address: {
      city: "Chennai",
      pincode: 600001
    }
  }
};

// function userReducerNormal(state = initialState, action) {
//   switch (action.type) {
//     case "UPDATE_CITY":
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           address: {
//             ...state.user.address,
//             city: action.payload
//           }
//         }
//       };
//     default:
//       return state;
//   }
// }

function userReducerImmer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "UPDATE_CITY":
        draft.user.address.city = action.payload;
        break;
    }
  });
}

// const store = redux.createStore(userReducerNormal);
const store = redux.createStore(userReducerImmer);

console.log("Initial State:", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State:", store.getState());
});

store.dispatch({
  type: "UPDATE_CITY",
  payload: "Hyderabad"
});

store.dispatch({
  type: "UPDATE_CITY",
  payload: "Bangalore"
});

unsubscribe();
