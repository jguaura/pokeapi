import { Sequelize } from 'sequelize'
import sequelize from '../database/db'


/**
 * @swagger
 * definitions:
 *  Pokemon:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *      name:
 *        type: string
 *      sprite:
 *        type: string
 *      types:
 *        type: array
 *      description:
 *        type: string
 *      weakto:
 *        type: array   
 */
const Pokemon = sequelize.define('poketable', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: { type: Sequelize.TEXT },
    sprite: { type: Sequelize.TEXT },
    types: { type: Sequelize.ARRAY(Sequelize.TEXT) },
    description: { type: Sequelize.TEXT },
    weakto: { type: Sequelize.ARRAY(Sequelize.TEXT) },
    number: { type: Sequelize.TEXT }
}, {
    timestamps: false,
    freezeTableName: true
})


export default Pokemon