
// template
const express = require('express')
const cors = require('cors')
const port = 3200

// call db config to server js
const sequelize = require('./db.config')
sequelize.sync().then(()=> console.log('database ready'))

// declare user endpoint (mikir)
const userEndpoint = require('./routes/users')

// template
const app = express()
app.use(cors())
app.use(express.json())

// using user endpoint (mikir)
app.use('/', userEndpoint)

//template
app.listen(port, () => console.log('running server on port', port))

