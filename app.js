const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

// will fail
// const x =

app.use(express.static('dist'))

// health endpoint
app.get('/health', (req, res) => {
  res.send('ok')
})

// version endpoint
app.get('/version', (req, res) => {
  res.send('7')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
