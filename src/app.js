const express = require('express')

const app = express()

const postgresMiddleware = require('./middleware/postgres')

const helloRoutes = require('./routes/hello')
const dbRoutes = require('./routes/db')
const secretRoutes = require('./routes/secret')

app.use('/', helloRoutes)
app.use('/db', postgresMiddleware, dbRoutes)
app.use('/secret', secretRoutes)

module.exports = app
