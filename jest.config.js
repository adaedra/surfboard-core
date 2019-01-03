module.exports = {
    transform: {
        '\\.ts$': 'ts-jest'
    },
    testRegex: 'tests/.+.test.ts$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    globals: {
        'ts-jest': {
            tsConfig: 'tests/tsconfig.json'
        }
    }
}
