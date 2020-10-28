import { Router } from 'express'
import { customWare } from '../utils/util'

const router = Router()

import {getAllPokemons, getOnePokemon} from '../controllers/Pokemon.controller'
/**
 * @swagger
 * /:
 * get:
 *  description: used to get the list of all pokemons
 *  responses:
 *    '200':
 *      description: successful response
 */
router.get('/', customWare, getAllPokemons)
router.get('/:id', customWare, getOnePokemon)


export default router