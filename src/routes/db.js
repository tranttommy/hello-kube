module.exports = require('express').Router()
  .get('/', async (req, res) => res.send({ now: (await req.sql`SELECT NOW()`)[0].now }))
