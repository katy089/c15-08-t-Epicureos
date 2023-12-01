const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const bcrypt = require('bcryptjs')
const { hashPassword } = require('../libs/handleEncrypt')
 

class User extends Model {}

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        require: true,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
        
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    validator: {
        type: DataTypes.STRING,
    }
},
{
    sequelize,
    modelName: 'user'
}
)

//hook
User.beforeCreate(async (user) => {
  const hashedPassword = await hashPassword(user.password);
  user.password = hashedPassword;
});


module.exports = User;


