export function generateCCode(definition) {
    definition.structs.forEach(generateStruct)

    function generateStruct(struct) {
        writeHeader()
        writeModule()

        function writeHeader() {
            
        }

        function writeModule() {

        }
    }
}
