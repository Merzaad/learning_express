import express from 'express'
import routes from './routes/route.mjs'

const port = 3000
const app = express()
app.disable('etag') // 304

app.get('/', (request, response) => {
  response.status(200)
  response.json({ test: 'tests' })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.use('/route', routes)
