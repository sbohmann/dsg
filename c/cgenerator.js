import {CodeWriter} from "../codewriter/codewriter.js";

export function generateCCode(definition) {
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
