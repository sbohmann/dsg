export function StructDefinition(name) {
    let fields = []

    let self = {
        name,
        fields,
        field(name, type) {
            fields.push({
                name,
                type
            })
            return self
        }
    }

    return self
}

export function StructType(name) {
    return {
        name,
        cType: `struct ${name}`,
        includes: [`${name}.h`]
    }
}
