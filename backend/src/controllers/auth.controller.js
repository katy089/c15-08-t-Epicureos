const { registerService, loginService } = require('../services/auth.service')

const registerTokenController = async (req, res) => {
    try {
        const result = await registerService(req.body)
        res.status(201).json(result)
    } catch ({message}) {
        res.status(400).json({message})
    }
}


const loginController = async (req, res) => {
    try {
        const access = await loginService(req.body)
        res.status(20).json(access)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}




module.exports = { registerTokenController, loginController }