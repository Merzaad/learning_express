const generalMiddleware = (req, res, next) => {
  console.log('query', req.query)
  next()
}

export default generalMiddleware
