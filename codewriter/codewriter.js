import fs from 'fs'

export function CodeWriter(path) {
    let buffer = []
    let indentationLevel = 0
    let atNewLine = true

    function indent() {
        if (!atNewLine) {
            return
        }
        for (let index = 0; index < indentationLevel; ++index) {
            buffer += '    '
        }
    }

    function newLine() {
        buffer += '\n'
        atNewLine = true
    }

    function beginBlock(startMarker) {
        if (startMarker) {
            buffer += startMarker
        }
        ++indentationLevel
        newLine()
    }

    function endBlock(endMarker) {
        --indentationLevel
        if (endMarker) {
            buffer += endMarker
            newLine()
        }
    }

    return {
        print(text) {
            indent()
            buffer += text
        },
        println(text) {
            indent()
            buffer += text
            newLine()
        },
        block(startMarker, endMarker, code) {
            beginBlock()
            code()
            endBlock(endMarker);
        },
        beginBlock,
        endBlock,
        writeFile() {
            if (fs.existsSync(path)) {
                let currentFileContent = fs.readFileSync(path, 'utf8')
                if (currentFileContent === buffer) {
                    return
                }
                fs.writeFileSync(path, buffer, 'utf8')
            }
        }
    }
}
