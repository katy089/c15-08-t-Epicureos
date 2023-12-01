const { registerService } = require('../services/auth.service')

const tokenController = async (req, res) => {
    try {
        const result = await registerService(req.body)
        res.status(201).json(result)
    } catch ({message}) {
        res.status(400).json({message})
    }
}

module.exports = { tokenController }