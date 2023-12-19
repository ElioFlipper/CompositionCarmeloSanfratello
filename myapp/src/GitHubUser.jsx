import { useEffect, useState } from "react"

export function FetchData({ username }) {

    const [data, setData] = useState(null)

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json()
            console.log(data)
            setData(data)
        }
        getData()
    }, [username])

    return (
        <div>
            {data && <h1>{data.name}</h1>}
            {data && <h2>{data.login}</h2>}
            {data && <h3>{data.avatar_url}</h3>}
        </div>
    )
}