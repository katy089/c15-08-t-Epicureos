const { registerService, loginService } = require('../services/auth.service')
const { findData } = require('../services/user.service')

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
        res.status(200).json(access)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}

const profileController = async (req,res) => {
    try {
        const user = await findData(req.body)
        res.status(200).json(user)
    } catch ({message}) {
        res.status(400).json({message})        
    }
}

module.exports = { registerTokenController, loginController, profileController }