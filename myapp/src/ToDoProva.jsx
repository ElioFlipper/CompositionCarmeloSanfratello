import { useState } from "react"
import classes from "./ToDoProva.module.css"


export function ToDo2() {

    const [todos, setTodos] = useState([])

    function handlePush(event) {
        event.preventDefault()
        const toDo = event.target.elements.todo.value
        setTodos((item) => [...item, toDo])
        event.target.elements.todo.value = ""
    }

    function handleReset(event) {
        setTodos([])
    }

    function handleRemove(index) {
        let newArr = todos
        newArr.splice(index, 1)
        setTodos([...newArr])
    }

    return (
        <form onSubmit={handlePush}>
            <div className={classes.todo}>
                <button name="OnClick" type="submit" >Click me</button>
                <button name="Reset" onClick={handleReset}>Reset</button>
                <input name="todo" onChange={() => { }} />
                <ul>{todos.map((element, index) => <li key={index}>{element}
                    <button name="Remove" onClick={()=>handleRemove(index)}>Remove</button></li>)}</ul>
            </div>
        </form>
    )
}