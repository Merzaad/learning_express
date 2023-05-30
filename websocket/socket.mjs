const socketHandler = (ws) => {
  console.log('client -> socket')

  ws.on('message', function incoming(message) {
    console.log('Received message:', message)
  })
}

export default socketHandler
