export default function throttle (func, delay) {
    let shouldWait = false

    return function (...args) {
        if (!shouldWait){
            func.apply(this, args)
            shouldWait = true 
            setTimeout(() => {
                shouldWait = false
            }, delay)
        }
    }
}