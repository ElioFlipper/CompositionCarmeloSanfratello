import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useSWR from "swr"

const fetcher = url => fetch(url).then(response => response.json())

export function FetchData() {

    const { data, error } = useSWR("http://api.github.com/users", fetcher)

    return (
        <div>
            {!data && !error && <h3>Loading...</h3>}
            {error && <h3>Something went wrong</h3>}
            {data && !error && <ul>
                {data.map((el, index) =>
                <li key={el.id}>
                    <p>{el.login}</p>
                </li>)}</ul>}
        </div>
    )
}