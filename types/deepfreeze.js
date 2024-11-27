export function deepFreeze(instance) {
    Object.freeze(instance)

    Object.getOwnPropertyNames(instance)
        .map(name => instance[name])
        .map(property => relevant(property))
        .forEach(property => deepFreeze(property))

    function relevant(property) {
        return typeof property === 'object'
            || typeof property === 'function'
    }

    return instance
}