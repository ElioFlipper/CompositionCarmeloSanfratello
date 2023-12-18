import { useState } from "react"


export function ToDo() {

    const [todos, setTodos] = useState([])

    const handlePush = (event) => {
        event.preventDefault()
        const toDo = event.target.elements.todo.value
        setTodos((item) => [...item, toDo])
        event.target.elements.todo.value = ""
        console.log(event)
    }

    const handleReset = () => {
        setTodos([])
    }

    const handleRemove = (index) => {
        let newArr = todos
        console.log(index)
        newArr.splice(index, 1)
        console.log(newArr)
        setTodos(newArr)
    }

    return (
        <form onSubmit={handlePush}>
            <div>
                <button name="OnClick" type="submit" >Click me</button>
                <button name="Reset" onClick={handleReset}>Reset</button>
                <input name="todo" onChange={()=>{}}/>

                <ul>
                    {todos.map((element, index) =>
                        <li key={index}>{element}
                            <button name="Remove" onClick={handleRemove(index)}>Remove</button>
                        </li>)}
                </ul>
            </div>
        </form>
    )

}