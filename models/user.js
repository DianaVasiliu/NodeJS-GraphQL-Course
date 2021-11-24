'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            models.User.hasMany(models.Post)
        }
    }
    User.init(
        {
            email: DataTypes.STRING,
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'User',
        }
    )
    return User
}
