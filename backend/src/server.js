const express = require('express')
const cors = require('cors')
const cron = require('node-cron');
const { disablePreviousDates, createAvailabilityDates } = require('./controllers/availability.controller');

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

cron.schedule('* */1 * * *', async () => {
      await createAvailabilityDates();

}, {
   scheduled: true,
   timezone: "America/Sao_Paulo"
 }
);

cron.schedule('* */1 * * *', async () => {
   await disablePreviousDates()
}, {
   scheduled: true,
   timezone: "America/Sao_Paulo"
 }
);

module.exports = server


