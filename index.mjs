import express from 'express'
import routes from './routes/route.mjs'

const port = 3000
const app = express()
app.disable('etag') // 304

const genralMiddleware = (req, res, next) => {
  console.log('query', req.query)
  next()
}

const middleware = (req, res, next) => {
  console.log('middleware')
  next()
}
app.use(genralMiddleware)

app.get('/', middleware, (request, response) => {
  response.status(200)
  response.json({ routes: ['/', { '/route': '/:id' }] })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.use('/route', routes)
