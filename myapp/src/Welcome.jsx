import { useNavigate } from "react-router-dom"

export function Welcome({ name, eta }) {

    const navigate = useNavigate()

    function handleGitHubButton() {
        navigate("/githubUser")
    }
    return (
        <div className="welcome">
            <p>Welcome, <strong>{name}!</strong></p>
            <p>You are {eta} years old.</p>
            <button onClick={handleGitHubButton}>Click for show your github account!</button>
        </div>
    )
}