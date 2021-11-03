'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
            models.Post.belongsTo(models.User, {
                foreignKey: 'userId',
            })
            models.Post.belongsToMany(models.Tag, {
                through: 'PostsTags',
            })
        }
    }
    Post.init(
        {
            title: DataTypes.STRING,
            body: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Post',
        }
    )
    return Post
}
