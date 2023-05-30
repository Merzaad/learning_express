const connectionListener = (ws) => {
  console.log('socket connected')

  ws.on('message', (message) => {
    console.log(JSON.parse(message))
  })
}
export default connectionListener
