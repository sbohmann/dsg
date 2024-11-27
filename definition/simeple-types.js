import {deepFreeze} from "../types/deepfreeze.js"

export const simpleTypes = deepFreeze({
    int16: {
        name: 'int16',
        cType() {
            return 'int16_t'
        },
        includes: ['stdint.h']
    },
    string: {
        name: 'string',
        cType() {
            return 'char *'
        },
        includes: []
    }
})
