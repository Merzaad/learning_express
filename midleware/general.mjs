const genralMiddleware = (req, res, next) => {
  console.log('query', req.query)
  next()
}

export default genralMiddleware
