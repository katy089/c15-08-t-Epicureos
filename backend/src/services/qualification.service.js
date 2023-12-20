
const Qualification = require('../models/qualification.model')
const { findBooking  } = require('../services/booking.service')
const { findData } = require('../services/user.service')

const createQualify = async(body) => { // stars, comment, userId, bookingId
   const { bookingId, userId } = body
   
   let id = bookingId
   const booking = await findBooking ({id}) 
   if(!booking) { throw new Error('BOOKING_NO_EXIT') }

   const bookings = await findBookingQualification ({bookingId}) 
   if(bookings) { throw new Error('BOOKING_HAS_ALREADY_BEEN_RATED') }
   
   id = userId
   const user = await findData({id})
   if(!user){ throw new Error('USER_DOES_NOT_EXIST') }

   const newQualify = await createBooking({...body})

   const session = {
       id: newQualify.id,
       stars: newQualify.stars, 
       comment: newQualify.comment, 
       status: newQualify.status, 
       userId: newQualify.userId,  
       bookingId: newQualify.bookingId, 
   }
   
   return session
}

const qualifyHistory = async() => {

   const qualifications = await allQualification()

   return qualifications

}

const createBooking = async(data) => await Qualification.create(data)
const findBookingQualification = async(where) => await Qualification.findOne(where)
const allQualification = async(where) =>  await Qualification.findAll({where})

module.exports = {
   createQualify,
   qualifyHistory
}