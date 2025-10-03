import { createContext, useContext } from "react";
const localProviderContext = createContext()
    
export const useLocalStorageContext = () => {
    const context = useContext(localProviderContext)
    if(!context) throw new Error("useLocalStorageContext must be used within a LocalProvider")
    return context
}

export const LocalProvider = ({children}) => {
    const get = (key) => {
        try {
            const entry = localStorage.getItem(key)
            return entry ? JSON.parse(entry) : null
        } catch (error) {
            console.error("Error getting localStorage entry:", error)
            return null
        }
    }

    const set = (key, data) => {
        const entry = {
            data,
            timeStamp: Date.now(),
            expiresAt: Date.now() + 60 * 1000
        }
        localStorage.setItem(key, JSON.stringify(entry))
    }

    const isValid = (key) => {
        const entry = get(key)
        return entry && entry.expiresAt > Date.now()
    }

    const clear = (key) => {
        localStorage.removeItem(key)
    }

    return (
        <localContext.Provider value={{get, set, isValid, clear}}>
            {children}
        </localContext.Provider>
    )
}