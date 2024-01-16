const { profileController, updateProfileController } = require('../controllers/user.controller')
const express = require('express');
const router = express.Router();

//Get user profile
router.get('/profile', profileController);

//Update user data
router.patch('/user', updateProfileController);



module.exports = router;