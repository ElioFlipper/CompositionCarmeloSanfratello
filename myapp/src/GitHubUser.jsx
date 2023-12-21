import { useEffect, useState } from "react"

function useGithubUser(username){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    async function getData(username) {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            console.log(json)
            setData(json)
            
        } catch (error) {
            setError(error)
            setData(null)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getData(username)
    }, [username])

    return {data}
}

export function GithubUser({ username }) {
    
    const {data} = useGithubUser(username)

    return (
        <div>
            {data && <h1>{data.name}</h1>}
            {data && <h2>{data.login}</h2>}
            {data && <h3>{data.avatar_url}</h3>}
        </div>
    )
}