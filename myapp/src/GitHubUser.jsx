import { useEffect, useState } from "react"

export function FetchData({ username }) {

    const [data, setData] = useState(null)

    async function getData(username) {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        console.log(data)
        setData(data)
    }

    useEffect(() => {
        getData(username)
    }, [username])

    return (
        <div>
            {data && <h1>{data.name}</h1>}
            {data && <h2>{data.login}</h2>}
            {data && <h3>{data.avatar_url}</h3>}
        </div>
    )
}