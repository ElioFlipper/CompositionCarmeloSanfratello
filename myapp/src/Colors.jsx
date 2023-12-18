function Color({ item }) {
    return (
        <div>
            <li >
                <h1>{item.name}</h1>
            </li>
        </div>
    )
}

export function Colors({ colors }) {
    return (
        <ul>
            {colors.map((item) => (
                <Color key={item.id} item={item} />
            ))}
        </ul>
    )
}