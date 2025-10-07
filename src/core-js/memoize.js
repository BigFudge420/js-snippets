export default function memoize(func) {
    let cache = new Map()

    return function(...args){
        let key = JSON.stringify(args)
        if(cache.has(key)){
            return cache.get(key)
        }

        let result = func.apply(this, args)
        cache.set(key, result)

        return result
    } 

}