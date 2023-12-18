import { Button } from "./Button"
import './Clock.scss'

export function AlertClock ({onClick, label}) {

    function HandleShowTime(){
        const now = new Date()
        alert(`The current time is ${now.toLocaleTimeString()}`)
    }

    return(
        <div className="clock">
            <p>Click the button below to show the current time</p>
            <Button onClick = {HandleShowTime} label ="Click me!" />
        </div>
    )
}