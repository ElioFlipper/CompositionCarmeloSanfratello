import { useState } from "react"

function useCounter(initialValue){
    const [counter, setCounter] = useState(initialValue)

    function handleIncrement(){
        setCounter((c) => c + 1)
    }

    function handleDecrement(){
        setCounter((c) => c - 1)
    }

    function handleReset(){
        setCounter(initialValue)
    }

    return {
        counter: counter, 
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset,
    }
}

export function HookCounter({initialValue=0}) {
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

    return (
        <div>
            <h1>This is the value {counter}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}