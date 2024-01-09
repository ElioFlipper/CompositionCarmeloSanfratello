import { useNavigate } from "react-router-dom"
import { CounterDisplay } from "./CounterDisplay"
import { useEffect, useRef, useState } from "react"

export function Counter({ initialValue, variable }) {

    const [counter, setCounter] = useState(initialValue)
    const navigate = useNavigate()

    const upDown = useRef("none")

    useEffect(() => {
        if (counter > initialValue) {
            if (upDown.current !== "up") {
                console.log("up");
            }

        } else if (counter < initialValue) {
            if (upDown.current !== "down") {
                console.log("down")

            } else {
                upDown.current = "none"
                console.log("none")
            }

        }
    }, [counter, initialValue])

    function HandleCounterDecrement() {
        setCounter(counter - variable)
    }

    function HandleCounterReset() {
        setCounter(initialValue)
    }

    function handleWelcomePage(){
        navigate("/")
    }

    return (
        <div>
            <CounterDisplay initialValue={counter} setValue={setCounter} variable={variable} />
            <button onClick={HandleCounterDecrement}>Decrement</button>
            <button onClick={HandleCounterReset}>Reset</button>
            <button onClick={handleWelcomePage}>Click here to return to the welcome page</button>
        </div>
    )
}