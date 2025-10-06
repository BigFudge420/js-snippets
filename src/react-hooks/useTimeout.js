import { useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
    let callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        if (typeof delay !== 'number' || delay < 0) return

        const timeoutId = setTimeout(() => {
            callbackRef.current()
        }, delay)

        return (
            () => clearTimeout(timeoutId)
        )
    }, [delay])
}