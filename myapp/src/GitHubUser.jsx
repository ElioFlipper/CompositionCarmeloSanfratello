import { useEffect, useState } from "react"

function useGithubUser(username){
    const [data, setData] = useState(null)

    async function getData(username) {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const json = await response.json()
        console.log(json)
        setData(json)
    }

    useEffect(() => {
        getData(username)
    }, [username])

    return {data}
}

export function useGithubUser({ username }) {
    
    const {data} = useFetchData(username)

    return (
        <div>
            {data && <h1>{data.name}</h1>}
            {data && <h2>{data.login}</h2>}
            {data && <h3>{data.avatar_url}</h3>}
        </div>
    )
}