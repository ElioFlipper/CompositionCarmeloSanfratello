import { useState, React } from "react"
import { Link, Outlet } from "react-router-dom"

export function GithubuserList() {

    const [data, setData] = useState([])

    useState(() => {
        async function getData() {
            const response = await fetch("https://api.github.com/users")
            const json = await response.json()
            console.log(json)
            setData(json)
        }
        getData()
    }, [])


    return (
        <div>
            <ul>
                {data.map((el, index) => (
                    <li key={index}>
                        <Link to={el.login}>{el.login}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}