import express from 'express'

const routes = express.Router()

routes.get('/', (req, res) => {
  res.json({ routes: ['/:id'] })
})
routes
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params
    if (Number(id)) res.json({ parameter: id })
    else res.send('404')
  })
  .post((req) => {
    const { id } = req.params
    console.log(id)
  })

export default routes
