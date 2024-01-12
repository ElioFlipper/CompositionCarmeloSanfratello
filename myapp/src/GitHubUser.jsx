import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useSWR from "swr"


const fetcher = url => fetch(url).then(response => response.json())
function useGithubUsers () {

    const { data, error, mutate } = useSWR("http://api.github.com/users", fetcher)

    function handleRefresh(){
        mutate()
    }

    return {
        users:data,
        error,
        isLoading: !data && !error,
        onRefresh: handleRefresh,
    }
    
}

export function FetchData() {

    const {users, error, isLoading, onRefresh} = useGithubUsers()


    return (
        <div>
            <button onClick={onRefresh}>Refresh</button>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>Something went wrong</h3>}
            {users && <ul>
                {users.map((el, index) =>
                <li key={el.id}>
                    <p>{el.login}</p>
                </li>)}</ul>}
        </div>
    )
}