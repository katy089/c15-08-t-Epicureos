const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')

class Branch extends Model {}

Branch.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    branch: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        unique: true
    },

},
{
    sequelize,
    modelName: 'branch'
})

module.exports = Branch