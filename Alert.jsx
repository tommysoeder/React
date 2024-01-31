import { Button } from "./Button"

export function AlertClock(){
    function handleShowTime(){
        const now=new Date()

        alert(`The current time is ${now.toLocaleTimeString()}`)
    }
    return(
        <div>
            <p>Click below to show the time</p>
            <Button onClick={handleShowTime}/>
        </div>
    )
}