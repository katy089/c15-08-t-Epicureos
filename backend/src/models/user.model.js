const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')
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
        type: DataTypes.INTEGER,
    },
    status: {
        type:DataTypes.ENUM,
        values: ['activated', 'pending', 'recover'],
        defaultValue: 'pending'
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


