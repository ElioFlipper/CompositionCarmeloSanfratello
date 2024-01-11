import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ShowGithubUser() {
    const { username } = useParams()
    const [userDetail, setUserDetail] = useState({})

    async function getData() {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const responseJson = await response.json()
        console.log(responseJson)
        setUserDetail(responseJson)
    }

    useEffect(() => {
        getData()
    }, [username])

    return (
        <div>
            <h2>Id: {userDetail.id}</h2>
            <h2>username: {userDetail.login}</h2>
        </div>
    )
}