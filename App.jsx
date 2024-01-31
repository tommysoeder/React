import Forms from "./Components/Forms"
import { Message } from "./Components/Message"
import { Welcome } from "./Components/Welcome"
import { HelloWorld } from "./HelloWorld"
// import { Welcome2 } from "./Components/Welcome2"


export function App() {
    return (
        <div>
            <h1>My awesome App</h1>
            <hr></hr>
             <Welcome name="Tommy"age={28}/> 
            <Forms />            
            <Message/>  {/* Se puede utilizar desde App.jsx sin problema */}
            {/* <Welcome2 name = "Tommy2"/> */}
        </div>
    )
}
