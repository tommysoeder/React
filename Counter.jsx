import { useEffect, useState, useRef } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter({initialValue = 0}) {
const [ counter, setCounter ] = useState(initialValue) // Destructuring del array que devuelve useState: el indice 1 será el valor actual y el indice 2 será la función que lo actualiza
const directionRef = useRef(null)

useEffect(()=>{
    console.log('I have been mounted') //First time it´s mounted (empty array)
},[])

useEffect(()=>{
    console.log(`The value of the counter is ${counter}`)

    if (counter > initialValue) {
        directionRef.current = 'up';
      } else if (counter < initialValue) {
        directionRef.current = 'down';
      }

      if (directionRef.current !== null) {
        console.log(`Counter changed direction: ${directionRef.current}`);
      }

},[counter,initialValue]) // Every time the or the initial value counter change

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
            <h2>I have counted to {counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}