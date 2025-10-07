import { useState } from "react";
import useEventListener from "./useEventListener"

export default function useHover(elementRef) {
    const [isHovered, setIsHovered] = useState(false)

    useEventListener('mouseenter', () => setIsHovered(true), elementRef)
    useEventListener('mouseleave', () => setIsHovered(false), elementRef)
    
    return isHovered
}