import express from 'express'
import members from './members.mjs'
import usernames from './usernames.mjs'
const api = express.Router()

api.get('/', (req, res) => {
  res.send('api')
})

api.use(members, usernames)
export default api
