let requestCount = 0
const requestCounter = (req, res, next) => {
  requestCount++
  console.log(`requests: ${requestCount}`)
  next()
}

export default requestCounter
