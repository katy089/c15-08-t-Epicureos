const User = require('../models/user.model')

const findEmail = async (where) => {

<<<<<<< HEAD
    const result = await User.findOne({where: {email: email }})
    return result
=======
    const result = await User.findOne({where})

>>>>>>> 6320e7dde1fd6ea8d95cedfec63c35901f9d607f
}

const createUser = async (data) => {
    const newUser = await User.create(data)
    return newUser
}


module.exports = { findEmail, createUser }