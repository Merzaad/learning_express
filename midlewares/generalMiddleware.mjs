const generalMiddleware = (req, res, next) => {
  console.log('general middleware')
  next()
}

export default generalMiddleware
