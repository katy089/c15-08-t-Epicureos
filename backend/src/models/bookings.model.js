const { Model, DataTypes } = require('sequelize')
const {sequelize} = require('../database')
const Branch = require('./branch.model')
const User = require('./user.model')

class Bookings extends Model {}

Bookings.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    date: {
<<<<<<< HEAD
        type: DataTypes.STRING,
=======
        type: DataTypes.DATEONLY,
>>>>>>> b13382350903523918d113fa679437ce95800ec8
        allowNull: false,
    },
    schedule: {
        type: DataTypes.ENUM,
        values: ['11:30', '12:00', '12:30', '13:00', '20:30', '21:00', '21:30','22:00'],
    },
    strip: {
        type: DataTypes.STRING,
        values: ['strip1', 'strip2']
    },
    diners: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.ENUM,
        values: ['reserved', 'arrive', 'cancelled', 'ghost'],
        defaultValue: 'reserved'
    },
    userId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'id'
        }
    },   
    branchId: {
        type: DataTypes.INTEGER,
        references: {
            model: Branch,
            key: 'id'
        }
    }
},
{
    sequelize,
    modelName: 'bookings'
})

module.exports = Bookings;