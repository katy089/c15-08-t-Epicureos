const { profileController } = require('../controllers/user.controller')
const express = require('express');
const router = express.Router();
const {updateUserService} = require('../services/user.service.js')

//Get user profile
router.get('/profile', profileController);

//Update user data
router.put('/users/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const updatedUserData = req.body;

        const updatedUser = await updateUserService(email, updatedUserData);

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//New route for updating user data
router.put('/users/:userId', async (req,res) => {
    try {
        const { userId } = req.params;
        const updatedUserData = req.body;

        const updatedUser = await updateUserService(userId, updatedUserData);

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

module.exports = router;