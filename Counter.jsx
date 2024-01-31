import { useState } from "react"

export function Counter({initialValue = 0}) {
const [ counter, setCounter ] = useState(initialValue) // Destructuring del array que devuelve useState: el indice 1 será el valor actual y el indice 2 será la función que lo actualiza

function handleCounterIncrement() {
    setCounter(counter + 1) // La función pasada a useState como función actualizadora
}

function handleCounterDecrement() {
    setCounter(counter - 1)
}

function handleCounterReset() {
    setCounter(initialValue) 
}
    return(
        <div>
            <p>I have counted to {counter}</p>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}