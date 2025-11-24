import type { CounterProps } from "./Counter.types";

const Counter = (props: CounterProps) => {
    return (
        <div>
            <h1>Counter</h1>
            <p>{props.count}</p>
            {props.incrementCount && (
                <button onClick={props.incrementCount}>Increment count</button>
            )}
            {
                props.decrementCount && (
                    <button onClick={props.decrementCount}>Decrement count</button>
                )
            }
        </div>
    )
}

export default Counter