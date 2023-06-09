import express from 'express'
import { WebSocketServer } from 'ws'
import http from 'http'
import requestCounter from './midlewares/requestCounter.mjs'
import middleware from './midlewares/middleware.mjs'
import api from './routes/api/api.mjs'

import connectionListener from './socket/connectionListener.mjs'
import compression from 'compression'
import bodyParser from 'body-parser'

const port = 3000

const app = express().disable('etag')
const server = http.createServer(app)
const socket = new WebSocketServer({ server })

server.listen(port, () => console.log(`listening on ${port}`))

socket.on('connection', connectionListener)

app.use(compression())
app.use(bodyParser.json())
app.use(requestCounter)
app.get('/', middleware, () => console.log('/'))
app.use(express.static('public'))
app.use('/api', api)

export default app
