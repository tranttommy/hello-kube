const express = require('express')
const { secret } = require('./config')

const app = express()

const postgresMiddleware = require('./middleware/postgres')
const helloRoutes = require('./routes/hello')

app.use('/hello', postgresMiddleware, helloRoutes)
app.use('/secret', (req, res) => res.send({ secret }))

module.exports = app
