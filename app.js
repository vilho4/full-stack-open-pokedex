const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// version endpoint
app.get('/version', (req, res) => {
  res.send('3, render hook uusiksi')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
