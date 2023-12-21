const { reservationController, showReservationController, deleteReservationController, findReservationByIdController } = require('../controllers/booking.controller')

const { Router } = require('express')

const router = Router()

router.post('/createBooking', reservationController )
router.get('/showReservation/:userId', showReservationController )
router.delete('/deleteReservation/reservationId', deleteReservationController )
router.get('/findReservation/:reservationId', findReservationByIdController )

module.exports = router