const { secret } = require('../config')

module.exports = require('express').Router()
  .get('/', (req, res) => res.send({ secret }))
