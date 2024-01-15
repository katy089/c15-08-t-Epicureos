
const { BOOKING_QUALIFY, BOOKING_STATUS } = require('../configs/constants')
const Bookings = require('../models/bookings.model')
const Qualification = require('../models/qualification.model')
const User = require('../models/user.model')
const { findBooking  } = require('../services/booking.service')
const { findData } = require('../services/user.service')
const { Op } = require('sequelize');

const createQualify = async(body) => { // stars, comment, userId, bookingId
   const { bookingId, userId } = body
   
   let id = bookingId
   const bookings = await findBooking ({id}) 
   if(!bookings) { throw new Error('BOOKING_NO_EXIT') }

   const booking = await findBookingQualification ({bookingId}) 
   if(booking) { throw new Error('BOOKING_HAS_ALREADY_BEEN_RATED') }
   
   id = userId
   const user = await findData({id})
   if(!user){ throw new Error('USER_DOES_NOT_EXIST') }

   const newQualify = await createBooking({...body})

   bookings.qualify = BOOKING_QUALIFY.DISABLED
   await bookings.save()

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

const allQualification = async() =>  {
   const result = await Qualification.findAll({
      attributes: ['id', 'stars', 'comment'],
      include: [
         {
            model: User,
            as: 'user',
            attributes: ['firstname', 'lastname']

         }
      ]  
   })
   return result
}


const needToQualify = async(params) => {
   
   const userId = params.userId
   const verify = await findData({id: userId})
   if (!verify) throw new Error('NON_EXISTENT_USER')

   const today = new Date
   const toQualify = await Bookings.findOne({
     where: { 
      userId, 
      status: { [Op.notIn]: [BOOKING_STATUS.CANCELLED, BOOKING_STATUS.GHOST] }, 
      qualify: BOOKING_QUALIFY.ENABLED,
      date: {[Op.lt]: today}
     },
     order: [['date', 'DESC']],
   })

   if(!toQualify) return 'ok'

   const result = {
      id: toQualify.id,
      date: toQualify.date,
      userId,
   }

   await Bookings.update(
   { qualify: BOOKING_QUALIFY.DISABLED },     
   {
     where: { 
      userId, 
      id: { [Op.ne]: toQualify.id },
      status: { [Op.notIn]: [BOOKING_STATUS.CANCELLED, BOOKING_STATUS.GHOST] }, 
      qualify: BOOKING_QUALIFY.ENABLED,
      date: {[Op.lt]: today}
     },
     order: [['date', 'DESC']],
   })

   return result

}

module.exports = {
   createQualify,
   qualifyHistory,
   needToQualify
}