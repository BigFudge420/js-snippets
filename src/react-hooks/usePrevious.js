import { useEffect, useRef } from "react";

export default function usePrevious(count){
    let prevCount = useRef(undefined) 

    useEffect(() => {
        prevCount.current = count
    },[count])

    return prevCount.current
}