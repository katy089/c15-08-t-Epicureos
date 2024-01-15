const { transformDate } = require("../helpers/transformDate.helper")
const Availability = require("../models/availability.model")
const { Op } = require('sequelize')
const { addDays } = require('date-fns');
const { AVALIABILITY_STATUS } = require("../configs/constants");

const stripAvailability = async (data) => {
    const dateTransformed = transformDate(data.date)
    const result = await Availability.findOne({ where: { date: dateTransformed } })

    const session = {
        strip1: result.strip1,
        people1: result.people1,
        strip2: result.strip2,
        people2: result.people2
    }
    const subtractionStrip1 = session.strip1 - session.people1
    const subtractionStrip2 = session.strip2 - session.people2
    const amountOfPlaces = {
        strip1: subtractionStrip1,
        strip2: subtractionStrip2
    }
    if (subtractionStrip1 === 0 && subtractionStrip2 === 0) {
        return amountOfPlaces
    } else {
        return amountOfPlaces
    }
}

const dateAvailability = async () => {
    const result = await Availability.findAll({
        where: {
            status: "enabled",
            [Op.or]: [
                { people1: { [Op.gte]: 0, [Op.lt]: 40 } },
                { people2: { [Op.gte]: 0, [Op.lt]: 40 } },
            ],
        },
    })
    const formattedResult = result.map(availability => availability.date)
    return formattedResult
}

const findDate = async (where) => await Availability.findOne({ where })


const addAvailability = async (data) => {
    const { date, ...restData } = data
    const dateTransformed = transformDate(date)
    const newAvailability = { date: dateTransformed, ...restData }
    const availability = await Availability.create(newAvailability)
    return availability
}

const availabilityDates = async() => {

    const today = new Date()
    const Week = addDays(today, 6); 
    let currentDate = today;
    
    while (currentDate <= Week) {
      await Availability.findOrCreate({ where: { date: currentDate } });
      currentDate = addDays(currentDate, 1); 
    }
    console.log('ok')
    
    return true

}

const disableDates = async() => {

    const today = new Date()

    await Availability.update(
      { status: AVALIABILITY_STATUS.DISABLED},     
      {
       where: { 
       date: {[Op.lt]: today},
       status: AVALIABILITY_STATUS.ENABLED,
      }
   })
   console.log('delete')
   
   return true
}

module.exports = { 
    dateAvailability, 
    addAvailability, 
    stripAvailability, 
    findDate, 
    availabilityDates, 
    disableDates 
}



