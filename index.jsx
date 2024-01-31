import { HelloWorld } from "./HelloWorld";
import { createRoot } from "react-dom/client"
import { App } from "./App"

const helloWorldElement = <HelloWorld/>  // acceso al archivo .jsx

// const rootElement = document.getElementById("root") // acceso a html desde js 
// const root = createRoot(rootElement) // llamamos a la dom library de react y la ejecutamos. 
//                                      // Recibe una referncia a un elemento html

// root.render(helloWorldElement)      

createRoot(document.getElementById("root")).render(<App/>)