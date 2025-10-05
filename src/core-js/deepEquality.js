export default function deepEquality(obj1, obj2, map = new WeakMap()) {

    if (typeof obj1 !== typeof obj2) return false
    if (obj1 === obj2) return true
    if ((obj1 === undefined) && (obj2 === undefined)) return true
    if (obj1 === null && obj2 === null) return true
    if (obj1 instanceof Date && obj2 instanceof Date) return obj1.getTime() === obj2.getTime()
    if (obj1 instanceof RegExp && obj2 instanceof RegExp) return obj1.source === obj2.source && obj1.flags === obj2.flags
    if (Number.isNaN(obj1) && Number.isNaN(obj2)) return true
    
    if (obj1 && typeof obj1 === "object"){
        if (map.has(obj1) && map.get(obj1) === obj2) return true
    }
    
    if ((Array.isArray(obj1) && Array.isArray(obj2)) && (obj1.length === obj2.length)){
        let result
        map.set(obj1, obj2)
            
         for (let i = 0; (i < obj1.length) && (i < obj2.length); i++){
            result = deepEquality(obj1[i], obj2[i], map)

            if (!result) {
                return false
            }
        }

        return true
    }

    if (obj1 instanceof Object && obj2 instanceof Object){
        if (Array.isArray(obj1) || Array.isArray(obj2)) return false
        map.set(obj1, obj2)

        let keys1 = Object.keys(obj1)
        let keys2 = Object.keys(obj2)

        if (keys1.length !== keys2.length) return false

        for (const key of keys1){
            if (!keys2.includes(key) || !deepEquality(obj1[key], obj2[key], map)) return false
        }

        return true
    }

    return false
}