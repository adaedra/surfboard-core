#!/usr/bin/env node
import { resolve } from 'path'
import { cwd } from 'process'
import { createServer, startDispatcher } from '..'

const configPath = resolve(cwd(), 'surfboard.server')
const config = require(configPath)

createServer().listen(1337, () => console.log('Server started.'))
startDispatcher(config.sources)
