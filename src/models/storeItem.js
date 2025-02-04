const { Sequelize } = require('sequelize');

const sequelize = require('../util/database');

const StoreItem = sequelize.define(
    'StoreItem',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    }
);

module.exports = StoreItem;
