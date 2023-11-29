const { registerService } = require('../services/auth.service')

const registerTokenController = async (req, res) => {
    try {
        const result = await registerService(req.body)
        res.status(201).json(result)
    } catch ({message}) {
        res.status(400).json({message})
    }
}

module.exports = { registerTokenController }