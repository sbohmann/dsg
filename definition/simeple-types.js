import {deepFreeze} from "../types/deepfreeze.js"

export const SimpleTypes = deepFreeze({
    int16: {
        name: 'int16',
        cType: 'int16_t',
        includes: ['stdint.h']
    },
    string: {
        name: 'string',
        cType: 'char *',
        includes: []
    }
})