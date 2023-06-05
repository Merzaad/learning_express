import express from 'express'
import getData from '../../redis/getData.mjs'

const fetchWithKey = express.Router()

fetchWithKey.get('/', (req, res) => {
  res.send('fetchWithKey/:key')
})

fetchWithKey
  .route('/:key')
  .get((req, res) => {
    const { key } = req.params
    getData(key)
      .then((result) => res.json({ [key]: result }))
      .catch((error) => {
        console.error(error.message)
        res.sendStatus(400)
      })
  })
  .post((req) => {
    // todo
  })

fetchWithKey.param('key', (req, res, next, key) => {
  console.log(`fetching key => ${key}`)
  next()
})
export default fetchWithKey
