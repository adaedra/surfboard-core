import { Observable, combineLatest, BehaviorSubject } from 'rxjs'
import { map as mapOperator, startWith, tap } from 'rxjs/operators'
import { map } from 'lodash'

type Config = {
    [key: string]: Observable<any>
}

const dispatcher = new BehaviorSubject({})

export function start(config: Config) {
    const observables = map(config, (observable, key) =>
        observable
            .pipe(mapOperator(value => ({ [key]: value })))
            .pipe(startWith({}))
    )
    combineLatest(...observables, Object.assign).subscribe(v =>
        dispatcher.next(v)
    )
}

export default dispatcher
