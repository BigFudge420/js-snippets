import { useState, useEffect } from "react"
import debounce from "../core-js/debounce"

export default function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(() => {

        const handleOnline = debounce(() => setIsOnline(true), 200)
        const handleOffline = debounce(() => setIsOnline(false), 200) 

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }

    }, [])

    return isOnline
} 