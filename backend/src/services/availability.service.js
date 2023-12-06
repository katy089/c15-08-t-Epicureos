const Availability = require("../models/availability.model")


const booking = async (where) =>  {
    const result = await Availability.findOne(where)
    const session = {
        strip1: result.strip1,
        people1: result.people1,
        strip2: result.strip2,
        people2: result.people2
    }
    if(session.strip1){
        if(session.strip1 === 0){
            return false
        } else {
            // const subtraction = session.people1 - session.strip1
            if(session.strip1 >= 0 && session.people1 === 40){
                return false
            } else{
                if(session.strip1 >= 0 && session.people1 >= 0 && session.people1 <= 40){
                    return true
                }
            }
        }
    }else{
        if(session.strip2 === 0){
            return false
        } else {
            // const subtraction = session.people2 - session.strip2
            if(session.strip2 >= 0 && session.people2 === 40){
                return false
            } else{
                if(session.strip2 >= 0 && session.people2 >= 0 && session.people2 <= 40){
                    return true
                }
            }
        }
    }
}

const addAvailability = async (data) => await Availability.create(data)

module.exports = { booking, addAvailability }
