import { of, timer } from 'rxjs'

describe('dispatcher', () => {
    beforeEach(() => {
        jest.resetModules()
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it('dispatches tests', () => {
        const { default: dispatcher, start } = require('./dispatcher')
        const fn = jest.fn()

        dispatcher.subscribe(fn)
        start({ one: of(1), two: of(2) })

        expect(fn).toHaveBeenCalledWith({ one: 1, two: 2 })
    })

    it('sends data even if not all sources are ready', () => {
        const { default: dispatcher, start } = require('./dispatcher')
        const fn = jest.fn()

        dispatcher.subscribe(fn)
        start({ immediate: of(1), delayed: timer(2000) })

        expect(fn).toHaveBeenCalledWith({ immediate: 1 })
        jest.runAllTimers()
        expect(fn).toHaveBeenCalledWith({ immediate: 1, delayed: 0 })
    })

    it('sends data even if subscription is done later', () => {
        const { default: dispatcher, start } = require('./dispatcher')
        const fn = jest.fn()

        start({ one: of(1) })
        dispatcher.subscribe(fn)

        expect(fn).toHaveBeenCalledWith({ one: 1 })
    })
})
