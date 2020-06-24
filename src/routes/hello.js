module.exports = require('express').Router()
  .get('/', (req, res) => res.send({ hello: 'world' }))
