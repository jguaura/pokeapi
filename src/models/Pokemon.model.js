import { Sequelize } from 'sequelize'
import sequelize from '../database/db'

const Pokemon = sequelize.define('poketable', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: { type: Sequelize.TEXT },
    sprite: { type: Sequelize.TEXT },
    types: { type: Sequelize.ARRAY(Sequelize.TEXT) },
    description: { type: Sequelize.TEXT },
    weakto: { type: Sequelize.ARRAY(Sequelize.TEXT) }
}, {
    timestamps: false,
    freezeTableName: true
})


export default Pokemon