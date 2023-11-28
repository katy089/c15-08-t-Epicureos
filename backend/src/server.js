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

// server.use('/api', require('./routes/api.routes'))
server.use('/api', ()=>{console.log('Hola, soy una ruta')})

module.exports = server


