const { profileController } = require('../controllers/user.controller')
const express = require('express');
const router = express.Router();
const {updateUserData} = require('../services/user.service.js')

//Get user profile
router.get('/profile', profileController);

//Update user data
router.patch('/user', async (req, res) => {
    try {

        const updatedUser = await updateUserData(req.body);

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



module.exports = router;