const { loginService } = require('../services/login.service')

const loginController = async (req, res) => {
    try {
        const access = await loginService(req.body)
        res.status(201).json(access)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}

module.exports = { loginController }