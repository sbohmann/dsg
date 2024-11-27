import {CodeWriter} from "../codewriter/codewriter.js";

export function generateCCode(definition) {
    console.log(JSON.stringify(definition.structs, null, 2))

    definition.structs.forEach(generateStruct)

    function generateStruct(struct) {
        writeHeader()
        writeModule()

        function writeHeader() {
            let out = CodeWriter()
        }

        function writeModule() {
            let out = CodeWriter()
        }
    }
}
