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
    date: { 
        type: DataTypes.DATEONLY,
        allowNull: false,        
    },
    strip1: {
        type: DataTypes.INTEGER,
        defaultValue: 40,
        
    },
    strip2: {
        type: DataTypes.INTEGER,
        defaultValue: 40,
        
    },
    status: {
        type: DataTypes.ENUM,
        values: ['enabled', 'disabled'],
        defaultValue: 'enabled'
    },
    people1: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
       
    },
    people2: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
     
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