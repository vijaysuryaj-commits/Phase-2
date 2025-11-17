const redux = require('redux')

const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "first redux action"
    }
}

// (previousState,action) => newState

//state
const initialState = {
    numberOfCakes: 10
}

//reducer function

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,  //if state object has more than 1 property create a copy of the state object first and then change the required state property
                numberOfCakes: state.numberOfCakes - 1
            }
        default:
            return state
    }
}

//store

const createStore = redux.createStore

const store = createStore(reducer)

console.log('initial state', store.getState())

const unsubscribe = store.subscribe(()=> console.log('updated state', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()