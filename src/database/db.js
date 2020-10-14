import Sequelize from 'sequelize'
require('dotenv').config()

//? Connect to remote db

const sequelize = new Sequelize(
    process.env.POSTGRE_DB,
    process.env.POSTGRE_USER,
    process.env.POSTGRE_PASS,
    {
        host: process.env.HOST || 'ec2-75-101-232-85.compute-1.amazonaws.com',
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