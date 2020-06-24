const postgres = require('postgres')
const { postgres: config } = require('../config')

console.log('Connecting to Database')

module.exports = postgres({
  host: config.host,
  port: config.port,
  username: config.user,
  password: config.password,
  database: config.db,
})
