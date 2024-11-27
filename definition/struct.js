export function Struct(name) {
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
