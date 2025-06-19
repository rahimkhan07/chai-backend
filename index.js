require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('<h1>rkhancom</h1>')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login At Here...</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>RKHANYTCOM</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
