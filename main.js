import {generateCCode} from "./c/cgenerator.js";
import {DefinitionBuilder} from "./definition/definition.js";
import {StructDefinition, StructType} from "./definition/struct.js"
import {SimpleTypes} from "./definition/simeple-types.js";
import {listType} from "./definition/list.js"

let exampleStructName = 'ExampleStruct'
let exampleStruct = StructDefinition(exampleStructName)
    .field('name', SimpleTypes.string)
    .field('n', SimpleTypes.int16)
    .field('numbers', listType(SimpleTypes.int16))
    .field('others', listType(StructType(exampleStructName)))

const definition = DefinitionBuilder()
    .addStructs(exampleStruct)

generateCCode(definition)
