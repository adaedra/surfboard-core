import { of } from 'rxjs'

describe('dispatcher', () => {
    beforeEach(() => {
        jest.resetModules()
    })

    it('dispatches tests', () => {
        const { default: dispatcher, start } = require('../src/dispatcher')
        const fn = jest.fn()

        dispatcher.subscribe(fn)
        start({ one: of(1), two: of(2) })

        expect(fn).toHaveBeenCalledWith({ one: 1, two: 2 })
    })
})
