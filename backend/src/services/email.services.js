const { transporter } = require('../configs/mailer')

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
        html: `<h3>Le recordamos su reservación de la fecha ${message.date}
        y hora ${message.time}`
    })
    return true
}

module.exports = {
    sendRegisterNotification,
    sendWelcomeMessage,
    sendRecoverMessage,
    sendRecoveredMessage,
    sendBookingNotification
}

