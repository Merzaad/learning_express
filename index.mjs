import express from 'express'
import usernames from './routes/api/usernames.mjs'
import members from './routes/api/members.mjs'
import genralMiddleware from './midleware/general.mjs'

const port = 3000
const app = express()
app.disable('etag') // 304

const middleware = (req, res, next) => {
  console.log('middleware')
  next()
}
app.use(genralMiddleware)

app.get('/', middleware, (request, response) => {
  response.status(200)
  response.send(
    '<ul style="font-size: 1.5rem"><li><a href="/api/members">api/members</a></li><li><a href="/api/usernames">api/usernames</a></li><li><a href="/index.html">index.html</a></li></ul>'
  )
})
app.use(express.static('public'))
app.use('/api', usernames, members)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
