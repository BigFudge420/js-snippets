import { useEffect, useRef } from "react"

export default function useEventListener(event, handler, elementRef){    
    const handlerRef = useRef(handler)

    useEffect(() => {
        handlerRef.current = handler
    }, [handler])
    
    useEffect(() => {
        const target = elementRef?.current || window
        if (!(target && target.addEventListener)) return

        const eventHandler = (e) => handlerRef.current(e)

        target.addEventListener(event, eventHandler)
        return () => target.removeEventListener(event, eventHandler)
    }, [event, elementRef])
}