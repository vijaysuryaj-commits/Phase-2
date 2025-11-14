const redux = require('redux')

// const initialState = {
//     numberOfCakes: 10,
//     numberOfIcecreams: 20
// }

// const BUY_CAKE = 'BUY_CAKE'

// const BUY_ICECREAM = 'BUY_ICECREAM'

// function buyCake() {
//     return {
//         type: BUY_CAKE,
//         info: "Buy cake"
//     }
// }

// function buyIcecream() {
//     return {
//         type: BUY_ICECREAM,
//         info: 'Buy Icecream'
//     }
// }

const createStore = redux.createStore
const combineReducers = redux.combineReducers

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numberOfCakes: state.numberOfCakes - 1
//             }
//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 numberOfIcecreams: state.numberOfIcecreams - 1
//             }
//         default:
//             return state
//     }
// }

// const store = createStore(reducer)

// console.log('initial state', store.getState())

// const unsubscribe = store.subscribe(()=> console.log('updated state', store.getState()))

// store.dispatch(buyCake())
// store.dispatch(buyCake())

// store.dispatch(buyIcecream())
// store.dispatch(buyIcecream())
// store.dispatch(buyCake())

// unsubscribe()


const BUY_CAKE = 'BUY_CAKE'

const BUY_ICECREAM = 'BUY_ICECREAM'

const initialCakeState = {
    numberOfCakes: 10
}

const initialIcecreamState = {
    numberOfIcecreams: 20
}

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "Buy cake"
    }
}

function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: 'Buy Icecream'
    }
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }

        default:
            return state
    }
}

const iceCreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams - 1
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})


const store = createStore(rootReducer)

console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyCake())

unsubscribe()