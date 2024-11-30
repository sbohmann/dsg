import {deepFreeze} from "../types/deepfreeze.js"
import {capitalize} from "../naming/naming.js"

const listTypeForElementType = new Map()

export function listType(elementType) {
    let result = listTypeForElementType.get(elementType)
    if (result !== undefined) {
        return result
    }
    let listTypeName = capitalize(elementType.name)
    result = {
        name: `List<${elementType.name}>`,
        cType: `struct ${listTypeName}List`,
        includes: [`${listTypeName}List.h`]
    }
    listTypeForElementType.set(elementType, result)
    return deepFreeze(result)
}