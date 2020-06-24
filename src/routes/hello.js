module.exports = require('express').Router()
  .get('/', (req, res) => res.send({ hello: 'world' }))

  .get('/time', async (req, res) => res.send({ now: (await req.sql`SELECT NOW()`)[0].now }))
