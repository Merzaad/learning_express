import express from 'express'
import { WebSocketServer } from 'ws'
import http from 'http'
import usernames from './routes/api/usernames.mjs'
import members from './routes/api/members.mjs'
import generalMiddleware from './midleware/general.mjs'
import middleware from './midleware/middleware.mjs'

import socketHandler from './websocket/socket.mjs'

const appPort = 3000
const socketPort = 3001

const app = express().disable('etag')
const socketServer = http.createServer(app)
const socket = new WebSocketServer({ server: socketServer })

app.listen(appPort, () => {
  console.log(`listening on port ${appPort}`)
})
socketServer.listen(socketPort)

app.use(generalMiddleware)
app.get('/', middleware, () => console.log('client -> app'))
socket.on('connection', socketHandler)
app.use(express.static('public'))
app.use('/api', usernames, members)

export default app
