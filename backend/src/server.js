const express = require('express')
const cors = require('cors')

const server = express()

if(process.env.DEV) {
    console.log('DEVELOPMENT-MODE!!!')
    const morgan = require('morgan')
    server.use(morgan('dev'))
}

// Middlewares
server.use(cors())
server.use(express.json())

server.use('/api/v1', require('./routes/api.routes'))


module.exports = server


