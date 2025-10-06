import { useState, useCallback } from "react";
import debounce from "../core-js/debounce";

export default function useToast() {
    const [toasts, setToast] = useState([])

    const addToast = useCallback(({text, id = Date.now(), type = "info", duration = 3000}) => {
        let toastObj = {text, id, type, duration}

        setToast((prev) => [...prev, toastObj])
        setTimeout(() => {
            setToast(prev => prev.filter(item => item.id !== toastObj.id))
        }, toastObj.duration)

    },[])

    const debouncedAddToast = debounce(addToast, 1000)
    
    return [toasts, debouncedAddToast, addToast]

}