
const Qualification = require('../models/qualification.model')
const { findReservation } = require('../services/booking.service')
const { findData } = require('../services/user.service')

const createQualify = async(body) => { // stars, comment, userId, bookingId
   const { bookingId, userId } = body
   
   let id = bookingId
   const booking = await findReservation({id}) 
   if(!booking) { throw new Error('BOOKING_NO_EXIT') }
   
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

const QualifyHistory = async(userId) => {

   const id = userId
   const user = await findData({id})
   if(!user){ throw new Error('USER_DOES_NOT_EXIST') }

   const qualifications = await allQualification({userId})

   return qualifications

}

const createBooking = async(data) => await Qualification.create(data)
const allQualification = async(where) =>  await Qualification.findAll({where})

module.exports = {
   createQualify,
   QualifyHistory
}