const { addAvailability, dateAvailability, stripAvailability } = require("../services/availability.service")


const seePlaceAvailabilityController = async (req, res) => {
    try {
        const reservation = req.body
        const result = await booking(reservation)
        res.status(200).json(result)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}
const seeDateAvailabilityController = async (req, res) => {
    try {
        const reservation = req.body
        const result = await dateAvailability(reservation)
        res.status(200).json(result)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}
const seeStripAvailabilityController = async (req, res) => {
    try {
        const reservation = req.body
        const result = await stripAvailability(reservation)
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

module.exports = { seeStripAvailabilityController, addAvailabilityController, seeDateAvailabilityController, seePlaceAvailabilityController }