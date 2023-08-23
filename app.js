const express = require('express')
const app = express()
const port = 80

app.get('/health', (req, res) => {
  res.send('OK')
})

app.get('/', (req, res) => {
  res.send('fisrt server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
