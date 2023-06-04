import express from 'express'
import { WebSocketServer } from 'ws'
import http from 'http'
import usernames from './routes/api/usernames.mjs'
import members from './routes/api/members.mjs'
import generalMiddleware from './midlewares/generalMiddleware.mjs'
import middleware from './midlewares/middleware.mjs'

import connectionListener from './websocket/connectionListener.mjs'
import compression from 'compression'

const port = 3000

const app = express().disable('etag')
const server = http.createServer(app)
const socket = new WebSocketServer({ server })

server.listen(port, () => console.log(`listening on ${port}`))

socket.on('connection', connectionListener)

app.use(compression())
app.use(generalMiddleware)
app.get('/', middleware, () => console.log('/'))
app.use(express.static('public'))
app.use('/api', usernames, members)

export default app
