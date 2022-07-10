require('dotenv').config()

const mysql = require('mysql')

const pool = mysql.createPool({
    host: process.env.HOST,
    port: process.env.PORT_DB,
    user: process.env.USER,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE
})

module.exports = pool;