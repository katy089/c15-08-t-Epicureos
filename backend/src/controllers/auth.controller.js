const { registerService, loginService, validateUser, recoverPassword, newPassword, updateUserService } = require('../services/auth.service')

const registerTokenController = async (req, res) => {
    try {
        const result = await registerService(req.body)
        res.status(201).json(result)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}

const loginController = async (req, res) => {
    try {
        const data = req.body
        // const dataStr = JSON.stringify(data)
        const dataJson = JSON.parse(data)
        const access = await loginService(dataJson)

        res.status(200).json(access)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}

const validateController = async (req, res) => {
    try {
        const result = await validateUser(req.body)
        res.status(200).json(result)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}

const recoverPasswordController = async (req, res) => {
    try {
        const { email } = req.params
        const result = await recoverPassword(email)
        res.status(200).json(result)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}

const newPasswordController = async (req, res) => {
    try {
        const result = await newPassword(req.body)
        res.status(200).json(result)
    } catch ({ message }) {
        res.status(400).json({ message })
    }

}

const updateUserController = async (req, res) => {
    try {
        const { email } = req.params
        const result = await updateUserService(email);
        res.status(200).json(result);
    } catch ({ message }) {
        res.status(400).json({ message });
    }
}




module.exports = { registerTokenController, loginController, validateController, recoverPasswordController, newPasswordController, updateUserController }
