import express from 'express'

const routes = express.Router()

routes.get('/', (req, res) => {
  res.json({ routes: ['/:id'] })
})

const counter = () => {
  let x = 0
  return { getState: () => x, increaseState: () => x++ }
}
const list = {}
const { getState, increaseState } = counter()
routes
  .route('/:id')
  .get((req, res) => {
    res.json(list)
  })
  .post((req) => {
    const { id } = req.params
    console.log(id)
  })

routes.param('id', (req, res, next, id) => {
  if (Number(id)) {
    increaseState()
    console.log(getState())
    list[id] = getState()
    next()
  } else res.send('404')
})
export default routes
