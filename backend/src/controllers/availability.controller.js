const { 
    addAvailability, 
    dateAvailability, 
    stripAvailability, 
    AvailabilityDates, 
    disableDates
} = require("../services/availability.service")

const seeDateAvailabilityController = async (req, res) => {
    try {
        const result = await dateAvailability()
        res.status(200).json(result)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}

const seeStripAvailabilityController = async (req, res) => {
    try {
        const strip = req.params
        const result = await stripAvailability(strip)
        res.status(200).json(result)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}

const addAvailabilityController = async (req, res) => {
    try {
        const data = req.body
        const result = await addAvailability(data)
        res.status(200).json(result)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}

//create 7 days - super user o admin
const createAvailabilityDates = async (req, res) => {
    try {
        const result = await AvailabilityDates()
        res.status(200).json(result)         
    } catch ({ message }) {
        res.status(400).json({ message })        
    }

}

//super user o admin
const disablePreviousDates = async (req, res) => {
    try {
        const result = await disableDates()
        res.status(200).json(result)         
    } catch ({ message }) {
        res.status(400).json({ message })        
    } 

}



module.exports = { 
    seeStripAvailabilityController, 
    addAvailabilityController, 
    seeDateAvailabilityController, 
    createAvailabilityDates, 
    disablePreviousDates
}