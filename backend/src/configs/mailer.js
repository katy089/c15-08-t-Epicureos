const nodemailer = require('nodemailer')

const smptServices = process.env.SMPT_SERVICES
const smptHost = process.env.SMPT_HOST
const smptPort = process.env.SMPT_PORT
const smptAccount = process.env.SMPT_ACCOUNT
const smptPassword = process.env.SMPT_PASSWORD

const transporter = nodemailer.createTransport({
    service: smptServices,
    host: smptHost,
    port: smptPort,
    secure: true,
    auth: {
        user: smptAccount,
        pass: smptPassword
    },
    tls: {
    rejectUnauthorized: false, // Aquí deshabilitas la verificación del certificado
  },
})

module.exports = { transporter }