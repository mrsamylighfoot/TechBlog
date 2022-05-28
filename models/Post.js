const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        body: DataTypes.STRING,
        userId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                    model: 'User',
                    key: 'id'
            },
        },
    },
    { 
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post',
    }
);

module.exports = Post;