const { sequelize } = require('../database/index')
const { Model, DataTypes } = require('sequelize')
const User = require('./user.model')
const Bookings = require('./bookings.model')
const Branch = require('./branch.model')

class Qualification extends Model {}

Qualification.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    stars: {
        type: DataTypes.ENUM,
        values: ['1', '2', '3', '4', '5'],
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM,
        values: ['enabled', 'disabled'],
        defaultValue: 'disabled'
    },
    userId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'id'
        }
    },
    bookingId: {
        type: DataTypes.UUID,
        references: {
            model: Bookings,
            key: 'id'
        }
    },
    branchId: {
    type: DataTypes.INTEGER,
    references: {
        model: Branch,
        key: 'id'
    },
    }
},
{
    sequelize,
    modelName: 'qualification'
})

module.exports = Qualification;




