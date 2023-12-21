import { useState } from "react"

function useCurrentLocation() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    function handleGetLocation() {
        setLoading(true)
        setError(null)
        try {
            navigator.geolocation.getCurrentPosition((position) => {
                (position.coords.latitude, position.coords.longitude)
                console.log(position)
            })
            
        } catch (error) {
            setError(error)
        }
    }
    return {
        getLocation: handleGetLocation,
        loading,
        error
    }
}


export function Location() {

    const { getLocation } = useCurrentLocation()

    return (
        <div>
            <button onClick={getLocation}>Get your position</button>

        </div>
    )
}
