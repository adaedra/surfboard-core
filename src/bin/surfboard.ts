#!/usr/bin/env node
import { resolve } from 'path'
import { cwd } from 'process'
import { createServer, startDispatcher } from '..'

const relative = (name: string) => resolve(cwd(), name)

let config = require(relative('surfboard.server.js'))

createServer().listen(1337, () => console.log('Server started.'))
startDispatcher(config.sources)
