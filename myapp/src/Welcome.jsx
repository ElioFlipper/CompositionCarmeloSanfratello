export function Welcome({ name, eta }) {
    return (
        <div className="welcome">
            <p>Welcome, <strong>{name}!</strong></p>
            <p>You are {eta} years old.</p>
        </div>
    )
}