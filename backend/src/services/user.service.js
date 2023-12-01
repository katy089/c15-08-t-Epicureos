const User = require('../models/user.model')

<<<<<<< HEAD
const findEmail = async (where) => {

    const result = await User.findOne({where})

}
=======
const findData = async (where) => await User.findOne({ where }) 
>>>>>>> 25e23170661f6a880ebb3f21d0cd9606c06565ea

const createUser = async (data) => {
    const newUser = await User.create(data)
    return newUser
}


module.exports = { findData, createUser }