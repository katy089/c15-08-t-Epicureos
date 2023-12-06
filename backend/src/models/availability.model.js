const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const Branch = require('./branch.model')

class Availability extends  Model {}

Availability.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    date: { // 5/12
        type: DataTypes.STRING,
        allowNull: false,        
    },
    strip1: {
        type: DataTypes.INTEGER,
        defaultValue: 40,
        validate: {
            min: 0,
            max: 40
        }
    },
    strip2: {
        type: DataTypes.INTEGER,
        defaultValue: 40,
        validate: {
            min: 0,
            max: 40
        }
    },
    status: {
        type: DataTypes.ENUM,
        values: ['enabled', 'disabled'],
        defaultValue: 'enabled'
    },
    people1: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 40
        }
    },
    people2: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 40
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
    modelName: 'availability'
})

module.exports = Availability;