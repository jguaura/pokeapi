import { Sequelize } from 'sequelize'
import sequelize from '../database/db'

const Pokemon = sequelize.define('pokemons', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: { type: Sequelize.TEXT },
    sprite: { type: Sequelize.TEXT },
    types: { type: Sequelize.ARRAY(Sequelize.TEXT) }
}, {
    timestamps: false
})


export default Pokemon