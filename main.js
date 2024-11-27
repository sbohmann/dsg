import {generateCCode} from "./c/cgenerator.js";
import {Definition} from "./definition/definition.js";
import {Struct} from "./definition/struct.js";
import {simpleTypes} from "./definition/simeple-types.js";

const definition = Definition()
    .struct(() => Struct('ExampleStruct')
        .field('name', simpleTypes.string)
        .field('n', simpleTypes.int16))

generateCCode(definition)
