export default function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;

    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);

    if (Array.isArray(obj)) {
        return obj.map(el => deepClone(el))
    }

    if (obj instanceof Object) {
        const newObj = {};
        for (const [key, value] of Object.entries(obj)) {
            newObj[key] = deepClone(value);
        }
        return newObj;
    }

    return obj;
}
