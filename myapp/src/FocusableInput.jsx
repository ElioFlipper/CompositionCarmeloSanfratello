import { useEffect, useRef } from "react"

export function FocusableInput(){

    const inputRef = useRef(null)
    const mountedRef = useRef(false)

    useEffect(()=>{
        if(!mountedRef.current){
            mountedRef.current = true
            console.log("Mounting for the first time")
        } else {
            console.log("Mounting again");
        }

        inputRef.current?.focus()
    }, [])



    return(
        <div>
            <input ref={inputRef} />
        </div>
    )
}