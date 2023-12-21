const Bookings = require('../models/bookings.model')
const { findDate, stripAvailability } = require('./availability.service')
const { transformDate } = require('../helpers/transformDate.helper')
const { findData } = require('./user.service')
const { literal } = require('sequelize')
const moment = require('moment')
const { sendBookingNotification, sendBookingCancelledNotification } = require('./email.services')

const createReservation = async (data) => {
    const { date, ...restData } = data
    const dateTransformed = transformDate(date)
    const availability = await findDate({ date: dateTransformed })
    const user = await findData({ id: data.userId })
    if (!user) {
        throw new Error('NON_EXISTENT_USER')
    }
    if (!availability) {
        throw new Error('DATE_NO_AVAILABLE')
    }
    const strips = await stripAvailability({ date })
    if (restData.strip === "strip1") {
        if (restData.diners > strips.strip1) {
            throw new Error('QUANTITY_NOT_AVAILABLE')
        }
    } else {
        if (restData.diners > strips.strip2) {
            throw new Error('QUANTITY_NOT_AVAILABLE')
        }
    }
    const newBooking = { date: transformDate(date), ...restData }
    const result = await Bookings.create(newBooking)
    if (restData.strip === "strip1") {
        const people1 = restData.diners
        await availability.increment({ people1: people1 }, { where: { date: dateTransformed } })
    } else {
        const people2 = restData.diners
        await availability.increment({ people2: people2 }, { where: { date: dateTransformed } })
    }
    const email = user.email
    const message = {
        date,
        time: result.schedule,
        id: result.id.slice(-7)
    }
    await sendBookingNotification({ email, message })
    return result.id.slice(-7)
}

const findReservation = async (data) => {
    const reservation = await Bookings.findOne({
        where: literal(`right(id::text, 7) = '${data.reservationId}'`)
    })
    if (!reservation) {
        throw new Error('NON_EXISTENT_RESERVATION')
    }
    return reservation
}

const findUserReservation = async (data) => {
    const user = await findData(data.reservationId)
    if (!user) {
        throw new Error('NON_EXISTENT_USER')
    }
    const reservations = await Bookings.findAll({ where: { userId: data.userId } })
    if (!reservations) {
        throw new Error('NON_EXISTENT_RESERVATION')
    }
    return reservations
}

const deleteReservation = async (data) => {
    const reservation = await findReservation(data)
    if (!reservation) {
        throw new Error('NON_EXISTENT_RESERVATION')
    }
    const availability = await findDate({ date: reservation.date })

    if (reservation.strip === "strip1") {
        await availability.decrement({ people1: reservation.diners }, { where: { date: reservation.date } })
    } else {
        await availability.decrement({ people2: reservation.diners }, { where: { date: reservation.date } })
    }
    await Bookings.update({ status: "cancelled" }, { where: { id: reservation.id } })
    const user = await findData({ id: reservation.userId })
    const email = user.email
    const dateTransformed = moment(reservation.date).format('DD/MM/YYYY')
    const message = {
        id: data.reservationId,
        date: dateTransformed,
        schedule: reservation.schedule
    }
    await sendBookingCancelledNotification({ email, message })

    const result = {
        id: reservation.id,
        date: reservation.date,
        schedule: reservation.schedule,
        strip: reservation.strip,
        diners: reservation.diners
    }

    return result
}

const findBooking = async (where) => await Bookings.findOne(where)


module.exports = { createReservation, findReservation, deleteReservation, findUserReservation, findBooking }