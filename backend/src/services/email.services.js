const { transporter } = require('../configs/mailer')
const cron = require('node-cron');

const sendRegisterNotification = async ({ email, validator }) => {
    await transporter.sendMail({
        from: `"Epicureos" <${process.env.STM_ACCOUNT}>`,
        to: email,
        subject: 'Confirmación de registro',
        html: `
              <h3>ACTIVA TU CUENTA</H3>
              <H4>Codigo de activación</h4>
              <h3>${validator}</h3>
        `
    })
    return true

}

const sendWelcomeMessage = async ({ email }) => {
    await transporter.sendMail({
        from: `"Epicureos" <${process.env.STM_ACCOUNT}>`,
        to: email,
        subject: 'Bienvenido a Epicureos',
        html: `
                <h2>Ya podes acceder a tu cuenta Epicureos</h2>     
        `
    })
    return true
}

const sendRecoverMessage = async ({ email, validator }) => {
    await transporter.sendMail({
        from: `"Epicureos" <${process.env.STM_ACCOUNT}>`,
        to: email,
        subject: 'Confirmación de registro',
        html: `
              <h3>RECUPERA TU CUENTA</H3>
              <H4>Codigo de recuperación</h4>
              <h3>${validator}</h3>
        `
    })
    return true

}

const sendRecoveredMessage = async ({ email }) => {
    await transporter.sendMail({
        from: `"Epicureos" <${process.env.STM_ACCOUNT}>`,
        to: email,
        subject: 'Cuenta recuperada bienvenido a Epicureos',
        html: `
                <h2>Ya podes acceder a tu cuenta Epicureos</h2>     
        `
    })
    return true
}

const sendBookingNotification = async ({ email, message }) => {
    await transporter.sendMail({
        from: `"Epicureos" <${process.env.STM_ACCOUNT}>`,
        to: email,
        subject: 'Notificación de reserva confirmada',
        html: `<h3>Se registró con éxito una reserva: </h3> 
        <h3> ID:${message.id} en la fecha ${message.date} a las ${message.time}. </h3>`
    })
    return true
}
const sendBookingCancelledNotification = async ({ email, message }) => {
    await transporter.sendMail({
        from: `"Epicureos" <${process.env.STM_ACCOUNT}>`,
        to: email,
        subject: 'Notificación de reserva cancelada',
        html: `<h3>Le recordamos que su reservación:</h3> 
        <h3>ID: ${message.id} de la fecha ${message.date}
        a las ${message.schedule}, fue cancelada con éxito. </h3>`
    })
}

const sendBookingCRecoverNotification = async ({ email, message, date, schedule }) => {

   const tomorrow = date.setDate(date.getDate() - 1)

   cron.schedule('0 * * * *', async () => {
      
    await transporter.sendMail({
          from: `"Epicureos" <${process.env.STM_ACCOUNT}>`,
          to: email,
          subject: 'Notificación de reserva cancelada',
          html: `<h3>Le recordamos que su reservación:</h3> 
          <h3>ID: ${message.id} de la fecha ${message.date}
          a las ${message.schedule}, fue cancelada con éxito. </h3>`
      })
   
   }, {
   scheduled: true,
   timezone: "America/Sao_Paulo"
   });

    
}

module.exports = {
    sendRegisterNotification,
    sendWelcomeMessage,
    sendRecoverMessage,
    sendRecoveredMessage,
    sendBookingNotification,
    sendBookingCancelledNotification,
    sendBookingCRecoverNotification
}

