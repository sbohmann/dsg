export function DefinitionBuilder() {
    let structs = []

    let self = {
        structs,
        addStructs(... newStructs) {
            structs.push(... newStructs)
            return self
        },
        build() {
            return deepFreeze(structs)
        }
    }

    return self
}
