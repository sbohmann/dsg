import {CodeWriter} from "../codewriter/codewriter.js";

export function generateCCode(definition) {
    console.log(JSON.stringify(definition, null, 2))

    definition.structs.forEach(generateStruct)

    function generateStruct(struct) {
        writeHeader()
        writeModule()

        function writeHeader() {
            let out = CodeWriter(`output/${struct.name}.h`)
            writeIncludes()
            out.print(`struct ${struct.name} `)
            out.block(writeFieldDeclarations, '{', '};')
            out.writeFile()

            function writeIncludes() {
                let includes = collectIncludes()
                if (includes.length > 0) {
                    for (let include of includes) {
                        out.println(`#include "${include}"`)
                    }
                    out.println()
                }
            }

            function writeFieldDeclarations() {
                for (let field of struct.fields) {
                    out.println(`${field.type.cType} ${field.name};`)
                }
            }
        }

        function collectIncludes() {
            let allIncludes = new Set()
            for (let field of struct.fields) {
                for (let fieldImport of field.type.includes) {
                    allIncludes.add(fieldImport)
                }
            }
            let result = new Array(...allIncludes)
            result.sort()
            return result
        }

        function writeModule() {
            let out = CodeWriter(`output/${struct.name}.c`)
            out.writeFile()
        }
    }
}
