import bodyParser from 'body-parser'
import express from 'express'
import api from './api/index.js'

const PORT = 5173
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(bodyParser.json())
app.use('/api', api)

app.listen(PORT, 'localhost', () => {
  console.log('Listening at http://localhost:' + PORT)
})
