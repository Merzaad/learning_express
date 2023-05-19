import express from 'express'

const port = 3000
const app = express()

app.get('/', (request, response) => {
  response.send(JSON.stringify({ test: 'testsss' }))
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
