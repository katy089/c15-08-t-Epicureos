const { transformDate } = require("../helpers/transformDate.helper")
const Availability = require("../models/availability.model")
const { Op } = require('sequelize')

const stripAvailability = async (where) => {
    const result = await Availability.findOne({ where })
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



module.exports = { dateAvailability, addAvailability, stripAvailability, findDate }