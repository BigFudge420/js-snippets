import {useState, useEffect, useCallback} from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            if (typeof window === "undefined") {
                return typeof initialValue === 'function'? initialValue() : initialValue
            }
            const item = localStorage.getItem(key)
            if(item) return JSON.parse(item)
            return typeof initialValue === 'function'? initialValue() : initialValue    
        }catch (err){
            console.error("Error reading localStorage key:", err)
            return typeof initialValue === 'function'? initialValue() : initialValue 
        }
    })

    useEffect(() => {
        try {
            if (typeof window === "undefined") return
            localStorage.setItem(key, JSON.stringify(state))
        }catch (err){
            console.error("Error writing localStorage key:", err)
        }
    }, [key, state])

    const setLocalState = useCallback((value => {
        setState ((prev) => {
            const newValue = value instanceof Function ? value(prev) : value
            try {
                if (typeof window !== "undefined" ){
                    localStorage.setItem(key, JSON.stringify(newValue))
                }
            }catch (err){
                console.error("useLocalStorage set error:", err)
            }
            return newValue
        })
    }), [key])
    
    return [state, setLocalState]
}