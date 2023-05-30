const mysql = require('mysql')

// Connect database
const connection = mysql.createConnection({
  host: 'process.evn.DB_Host',
  user: 'process.evn.DB',
  password: 'process.evn.DB',
  database: 'process.evn.DB'
})

module.exports = connection