export default function deepClone(obj, map = new WeakMap()) {
    if (obj === null || typeof obj !== "object") return obj;

    if (map.has(obj)) return map.get(obj)

    if (obj instanceof Date) return new Date(obj.getTime());
    
    if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);

    if (Array.isArray(obj)) {
        let newArr = []
        map.set(obj, newArr)
        obj.forEach((el, i) => {
            newArr[i] = deepClone(el, map)
        })
        return newArr
    }

    if (obj instanceof Object) {
        const newObj = {}
        map.set(obj, newObj)
        for (const [key, value] of Object.entries(obj)) {
            newObj[key] = deepClone(value, map)
        }
        return newObj;
    }

    return obj;
}
