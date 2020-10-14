import Sequelize from 'sequelize'
require('dotenv').config()

//? Connect to remote db

const sequelize = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASS,
    {
        host: process.env.HOST,
        dialect: 'postgres',
        dialectOptions: {ssl: {rejectUnauthorized: false}},
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        }
    }
)

export default sequelize