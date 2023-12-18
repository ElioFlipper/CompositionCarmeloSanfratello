export function CounterDisplay({initialValue, setValue, variable}){

    function HandleCounterIncrement() {
        setValue(initialValue + variable)
    }

    return(
        <div> 
        <p> I have counted <h2>{initialValue}</h2></p>
        <button onClick = {HandleCounterIncrement}>Increment</button>
        </div>
    )
}