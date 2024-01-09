const express = require('express')
const cors = require('cors')
const cron = require('node-cron');
const { AvailabilityDates } = require('./services/availability.service');

const server = express()

if(process.env.DEV) {
    console.log('DEVELOPMENT-MODE!!!')
    const morgan = require('morgan')
    server.use(morgan('dev'))
}

// Middlewares
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/api/v1', require('./routes/api.routes'))

cron.schedule('0 0 * * *', () => {
  AvailabilityDates();
});

module.exports = server


