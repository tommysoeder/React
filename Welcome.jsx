import { HelloWorld } from "../HelloWorld"
import { Age } from "./Age"
 
 export function Welcome({ name, age }){ // La página no renderiza nada si no se pasa un prop name 
    return <div>
        { name ? <h2>
           Welcome, <strong>{name}!</strong>
           </h2>  : <HelloWorld/>}
        {/* {age && <p>You are {age} years old</p>}  */}
        {age > 18 &&  <Age age={age}/>} 
        {age &&  <Age age={age}/>} 
        {age > 18 && age < 65 && <Age age={age}/>} 
        {age > 18 && age < 65 && name==="John" && <Age age={age}/>} 
        {age > 18 &&  <Age age={age}/>} 
        </div>
}