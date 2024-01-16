const { showProfile, updateUserData } = require('../services/user.service')

const profileController = async (req, res) => {
    try {
        const user = req.body
        const result = await showProfile(user)
        res.status(200).json(result)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}
const updateProfileController = async (req, res) => {
    try {
        const updatedUser = await updateUserData(req.body)
        res.status(200).json(updatedUser)
    } catch ({ message }) {
        res.status(400).json({ message })
    }
}

module.exports = { profileController, updateProfileController }