const { reservationController, showReservationController, deleteReservationController } = require('../controllers/booking.controller')

const { Router } = require('express')

const router = Router()

router.post('/createBooking', reservationController )
router.get('/showReservation/:userId', showReservationController )
router.delete('/deleteReservation', deleteReservationController )

module.exports = router