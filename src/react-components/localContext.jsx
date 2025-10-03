import { createContext, useContext, useState, useEffect, use } from "react";
const localContext = createContext()

export const useLocalStorage = () => {
    const context = useContext(localContext)
    if(!context) throw new Error("useLocalStorage must be used within a LocalProvider")
    return context
}

export const LocalProvider = ({children}) => {
    const [cache, setCache] = useState(() => {
        try {
            const storedCache = {}
            for (let i = 0; i < localStorage.length; i++){
                const key = localStorage.key(i)
                const entry = localStorage.getItem(key)
                try {
                    storedCache[key] = JSON.parse(entry)
                } catch (error) {
                    console.error("Error parsing localStorage entry:", error)
                }
            }
            return storedCache
        } catch (error) {
            console.error("Error reading localStorage:", error)
            return {}
        }
    })

    const [lastKey, setLastKey] = useState(null)

    useEffect(() => {
        try {
            localStorage.setItem(lastKey, JSON.stringify(cache[lastKey]))
        }catch (error){
            console.error("Error writing to localStorage:", error)
        }  
    }, [cache])

    const localHelpers = {
        get: (key) => {
            return cache[key] || null
        },

        set: (key, data) => {
            setCache(prev => ({
                ...prev, 
                [key]:{
                    data,
                    timeStamp: Date.now(),
                    expiresAt: Date.now() + 60 * 1000
                }}))
            setLastKey(key)
        },

        isValid: (key) => {
            const entry = cache[key]
            return entry && entry.expiresAt > Date.now()
        },

        clear: (key) => {
            setCache(prev => {
                const updated = {...prev}
                delete updated[key]
                return updated
            })
        }
    }

    return (
        <localContext.Provider value={{cache, ...localHelpers}}>
            {children}
        </localContext.Provider>
    )
}