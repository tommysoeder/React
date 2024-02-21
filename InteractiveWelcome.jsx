import { useState } from "react"
import { Welcome } from "./Welcome"

const InteractiveWelcome = () => {

    const [name, setName]=useState('')

    const handleInputChange = (event) => {
        setName(event.target.value)
    }
  return (
    <div>
        <input type='text' value={name} onChange={handleInputChange}></input>
        <Welcome name={name}/>
    </div>
  )
}

export default InteractiveWelcome