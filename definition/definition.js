export function Definition() {
    let structs = []

    let self = {
        structs,
        struct(structDeclaration) {
            structs.push(structDeclaration())
            return self
        }
    }

    return self
}
