
import { useState } from "react"
import classes from "./Container.module.css"

export function Container({title, children}){

const [collapse, setCollapse] = useState(false)

function handleToggle() {
    setCollapse(e => !e)
}


    return(
        <div>
        <div>{title} <button onClick = {handleToggle}>Toggle</button></div>
        {collapse && <div className={classes.container}>{children}</div>}
        </div>
    )
}