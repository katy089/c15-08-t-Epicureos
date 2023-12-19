const { addAvailability, dateAvailability, stripAvailability } = require("../services/availability.service")

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

module.exports = { seeStripAvailabilityController, addAvailabilityController, seeDateAvailabilityController }