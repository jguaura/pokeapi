// Models
import Pokemon from '../models/Pokemon.model'
import { Op } from 'sequelize'

export async function getAllPokemons(req, res) {

    const { offset, limit, type } = req.query   

    try {
        const response = await Pokemon.findAndCountAll({
            attributes: ['id', 'name', 'sprite', 'types'],
            limit: limit,
            offset: offset,
            type: type,
            where: type && {
                types: { [Op.contains] : [type] },
            },
            order: [
                ['id', 'ASC']
            ],
        })
        response && res.json(response)
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
