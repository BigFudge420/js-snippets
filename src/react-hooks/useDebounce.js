import { useEffect, useState } from "react"

export function useDebounce (state, delay){
    let [debouncedState, setDebouncedState] = useState(state)

    useEffect(()=>{
        const timeoutId = setTimeout(() => setDebouncedState(state), delay)
        return () => clearTimeout(timeoutId) 
    },[state, delay])

    return debouncedState
}