const mysql = require('mysql')

// Connect database
const connection = mysql.createConnection({
  host: 'process.evn.DB_Host',
  user: 'process.evn.DB_USER',
  password: 'process.evn.DB_PASSWORD',
  database: 'process.evn.DB_NAME',
})

module.exports = connection