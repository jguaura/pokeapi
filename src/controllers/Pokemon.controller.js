// Models
import Pokemon from '../models/Pokemon.model'
import { Op } from 'sequelize'

export async function getAllPokemons(req, res) {
    const { offset, limit } = req.query

    try {
        const response = await Pokemon.findAndCountAll({
            limit: limit,
            offset: offset,
            order: [
                ['id', 'ASC']
            ],
        })
        response && res.json({response})
    } catch (err) {
        console.log(err.message)
    }
}

export async function getOnePokemon (req, res) {
    const { id } = req.params 
    try {
        const response = await Pokemon.findOne({
            where: { id: id }
        })
        response && res.json({data: [response]})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

export async function getPokemonByType (req, res) {
    const { type } = req.body
    console.log(type)
    try {
        const response = await Pokemon.findAll({
            where: {
                types: { [Op.contains] : [type] }
            }
            
        })
        response && res.json({response})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}