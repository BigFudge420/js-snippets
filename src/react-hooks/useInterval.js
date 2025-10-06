import { useEffect, useRef } from "react";

export default function useInterval(callback, delay) {
    let callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        if (typeof delay !== 'number' || delay < 0) return
        
        const intervalId = setInterval(() => {
            callbackRef.current()
        }, delay)

        return (
            () => clearInterval(intervalId)
        )
    }, [delay])
}