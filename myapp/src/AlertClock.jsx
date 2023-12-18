import { useContext } from "react"
import { Button } from "./Button"
import './Clock.scss'
import { LanguageContext } from "./assets/LanguageContext"

export function AlertClock ({onClick, label}) {

    const language = useContext(LanguageContext)

    function HandleShowTime(){
        const now = new Date()
        alert(language==="en" ? `The current time is ${now.toLocaleTimeString()}` : `Sono le ore ${now.toLocaleTimeString()}`)
    }

    return(
        <div className="clock">
            <p>{language === "en" ? 'Click the button below to show the current time' : "Clicca il pulsante sotto per mostrare l'ora esatta"}</p>
            <Button onClick = {HandleShowTime} label ={language==="en" ? "Click me!" : "Clicca qui"} />
        </div>
    )
}