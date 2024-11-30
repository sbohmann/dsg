export function capitalize(name) {
    if (name.length === 0) {
        return name
    }
    return name[0].toUpperCase() + name.slice(1)
}
