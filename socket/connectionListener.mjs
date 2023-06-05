const connectionListener = (ws) => {
  const test = { a: 1, b: 2 }
  let timeOut = null
  ws.on('message', (message) => {
    if (String(message) === 'ping') {
      ws.send('pong')
      timeOut = setTimeout(() => {
        test.a += 1
        test.b += 1
        ws.send(JSON.stringify(test))
        console.log('test')
      }, 2000)
    } else {
      ws.send('connection closed')
      clearTimeout(timeOut)
      ws.terminate()
    }
  })
}
export default connectionListener
