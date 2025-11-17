# Context API

  context api is mainly used to avoid prop drilling.
  normally if we want to pass data from parent to a deeply nested component,
  we have to keep passing it through every component in between even if they don’t use it.
  that becomes messy when the app grows.

  so instead of that, context api lets us create a central store
  where we can provide some value at a higher level and directly access it in any child component,
  without manually passing props.

  it’s like having global data for react components —
  commonly used for things like user info, theme, language, or global filters.

## Redux

  Redux is a library for managing state in a predictable way in javascript applications

## React-redux

  React-redux is a library that provides bindings to use React and Redux together in an application

## core concepts

  ->Store - holds the state of the application
  ->Action - describes the changes in the state
  ->Reducer - carries out the state transition depending on the action

## three principles

  ->all states are stored in single object and that object is maintained by redux store
  ->only way to change the state is to emit an action, an object describing what happened, have a "type" property describing type of the action
  ->to update state of the application write pure reducers(functions)-> take 2 arguments prevState and action and returns new state (prevState,action) => newState

## combine reducers

  ->combine two or more reducers each maintains it own part of the global state object

## middleware

  ->way to extend redux with custom functionality
  ->provides thirdparty extension point between dispatching an action, and the momen it reaches the reducer(for logging, crash reporting, performing async tasks)

## async actions
  
  ->synchronous actions -> as soon as action is dispatched state is immediately updated
  ->async action for example fetches data from an endpoint and displays it in the application
  (which takes time so state will not be updated immediately)Since reducers must be pure and sync, async logic is handled using middleware like Redux Thunk

## redux-thunk

  ->define async action creators
  ->async/sideeffects middleware

### mapStateToProps

  -> Takes data from the Redux store and gives it to components as props(Read from store), and can have ownProps from parent component

### mapDispatchToProps

  -> Gives component functions (props) that can dispatch actions.(Write to store (dispatch actions)), and can have ownProps from parent component

### connect

  ->A function that connects your React component to the Redux store by giving it the state (from mapStateToProps) and dispatch functions (from mapDispatchToProps) as props.

### useSelector hook

  ->equivalent to mapStateToProps
  ->takes a function as paramter called as selector function
  ->that function receives redux state as argument like mapStateToProps
  ->returns whatever is returned by that selector function

### useDispatch hook

  -> used to dispatch an action
  