import { useEffect, useState } from "react"

export function GetUsers() {

    const [data, setData] = useState([])
    const [input, setInput] = useState("")

    async function getData() {
        const response = await fetch(`https://api.github.com/users/${input}`)
        const json = await response.json()
        console.log(json)
        setData([...data,
            json])
        setInput("")
    }

    function handleChangeInput(event) {
        setInput(event.target.value)
    }

    function handleSubmitButton(event) {
        event.preventDefault()
        getData()
    }

    return (
        <form onSubmit={handleSubmitButton}>
            <input onChange={handleChangeInput} value={input} />
            <button type="submit">Show username</button>
            {data && <ul>{data.map((el, index) => <li key={index}>{el.name}</li>)}</ul>}
        </form>
    )
}