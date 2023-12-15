const { createReservation, findReservation, deleteReservation, findUserReservation } = require('../services/booking.service')

const reservationController = async (req, res) => {
    try {
        const booking = req.body
        const result = await createReservation(booking)
        res.status(200).json(result)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}
const showReservationController = async (req, res) => {
    try {
        const reservation = req.params
        const result = await findUserReservation(reservation)
        res.status(200).json(result)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}
const findReservationByIdController = async (req, res) => {
    try {
        const reservation = req.params
        const result = await findReservation(reservation)
        res.status(200).json(result)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}
const deleteReservationController = async (req, res) => {
    try {
        const reservation = req.body
        const result = await deleteReservation(reservation)
        res.status(200).json(result)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}

module.exports = { reservationController, showReservationController, deleteReservationController, findReservationByIdController }