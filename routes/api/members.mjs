import express from 'express'

const membersDB = [1, 2, 3, 4]

const members = express.Router()

members.get('/members', (req, res) => {
  res.json({ routes: ['/:id'] })
})

members
  .route('/members/:id')
  .get((req, res) => {
    const idNumber = Number(req.params.id)
    console.log(idNumber)
    if (membersDB.includes(idNumber)) res.json({ [`member${idNumber}`]: membersDB[idNumber - 1] })
    else res.status(400).json({ message: `memeber ${idNumber} not found` })
  })
  .post((req) => {
    const { id } = req.params
    console.log(id)
  })

members.param('id', (req, res, next, id) => {
  const idNumber = Number(id)
  console.log(idNumber)
  next()
})
export default members
