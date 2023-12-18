import { useState } from "react"

function ToDo() {

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    function handlePush(event) {
        event.preventDefault()
        setTodos([...todos, input])
    }


    function handleInputChange(event) {
        event.preventDefault()
        setInput(event.target.value)
    }

    function handleReset(event) {
        setInput("")
    }

    return (
        <form>
        <div>
            <ul>
                <li>
                    <h1>{todos}</h1>
                </li>
            </ul>
            <button name = "OnClick" onClick={handlePush} >Click me</button>
            <button name = "Reset" onClick={handleReset}>Reset</button>
            <input onChange={handleInputChange} />
        </div>
        </form>
    )

}

export function ToDoList({ todos }) {
    return (
        <div>
            {todos.map((item) => (
                <ToDo key={item} item={item} />
            ))}
        </div>
    )
}
