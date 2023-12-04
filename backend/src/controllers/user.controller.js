const { showProfile } = require('../services/user.service')

const profileController = async (req, res) => {
    try {
        const user = req.body
        const result = await showProfile(user)
        res.status(200).json(result)
    } catch ({ message }) {
        res.status(400).json({ message })
    }

}

module.exports = { profileController }