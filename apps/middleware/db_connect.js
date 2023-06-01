const mysql = require('mysql')
require('dotenv').config();

// Connect database
const connection = mysql.createConnection({
  host: process.env.DB_Host,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

module.exports = connection
