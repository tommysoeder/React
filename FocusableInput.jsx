import { useEffect, useRef } from "react"

const FocusableInput = () => {
    const inputRef=useRef(null)

    useEffect(()=>{
        inputRef.current?.focus()
    })
  return (
    <div>
        <input type="text" ref={inputRef} placeholder="Focus!"></input>
    </div>
  )
}

export default FocusableInput