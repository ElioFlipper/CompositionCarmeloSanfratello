import { useState } from "react"

function useInput() {

    const [input, setInput] = useState({
        username: "",
        password: ""
    })

    function handleInputChange(event) {
        const { name, value, type, checked } = event.target
        setInput({
            ...input,
            [name]: type === "checked" ? checked : value
        })
    }

    function handleSubmitButton(event) {
        event.preventDefault()
        console.log(input)
    }

    return {
        input: input,
        onSubmit: handleSubmitButton,
        onInputChange: handleInputChange,
    }

}

export function InputFunction() {
    const {input, onSubmit, onInputChange} = useInput("")

        return (
            <form onSubmit={onSubmit}>
                <label>Username</label>
                <input name="username" onChange={onInputChange} value={input.username} />
                <label>Password</label>
                <input name="password" type="password" onChange={onInputChange} value={input.password} />
                <button type="submit">Submit</button>
            </form>)
    }