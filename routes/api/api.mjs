import express from 'express'
import fetchWithKey from './fetchWithKey.mjs'

const api = express.Router()

api.get('/', (req, res) => {
  res.send('api')
})

api.use('/fetchWithKey', fetchWithKey)
export default api
