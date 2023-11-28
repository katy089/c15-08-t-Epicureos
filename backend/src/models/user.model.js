const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')
 

class User extends Model {}

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        require: true,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }

},
{
    sequelize,
    modelName: 'user'
}
)

module.exports = User;