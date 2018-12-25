import { createServer, Server } from 'http'
import { Server as WebSocket } from 'ws'
import dispatcher from './dispatcher'

export function create(app?: any): Server {
    const server = createServer(app)
    const ws = new WebSocket({ server })

    ws.on('connection', client => {
        const subscription = dispatcher.subscribe(value =>
            client.send(JSON.stringify(value))
        )

        client.on('close', () => subscription.unsubscribe())
    })

    return server
}
