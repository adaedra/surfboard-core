import { Observable, ReplaySubject, combineLatest } from 'rxjs'
import { map as mapOperator, startWith } from 'rxjs/operators'
import { map } from 'lodash'

type Config = {
    [key: string]: Observable<any>
}

const dispatcher = new ReplaySubject()

export function start(config: Config) {
    const observables = map(config, (observable, key) =>
        observable.pipe(mapOperator(value => ({ [key]: value }), startWith({})))
    )
    combineLatest(...observables, Object.assign).subscribe(dispatcher)
}

dispatcher.subscribe(value => console.log('dispatcher', value))

export default dispatcher
