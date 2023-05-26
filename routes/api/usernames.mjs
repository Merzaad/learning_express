import express from 'express'

const usernamesDB = ['a', 'b', 'c', 'd']

const usernames = express.Router()

usernames.get('/usernames', (req, res) => {
  res.json({ routes: ['/:username'] })
})

usernames
  .route('/usernames/:username')
  .get((req, res) => {
    const { username } = req.params
    if (usernamesDB.includes(username)) res.json({ [`username ${username}`]: username })
    else res.status(400).json({ message: `username ${username} not found` })
  })
  .post((req) => {
    const { username } = req.params
    console.log(username)
  })

usernames.param('username', (req, res, next, username) => {
  console.log(username)
  next()
})
export default usernames
