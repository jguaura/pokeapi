import { Router } from 'express'
import { customWare } from '../utils/util'

const router = Router()

import {getAllPokemons, getOnePokemon, getPokemonByType} from '../controllers/Pokemon.controller'

router.get('/', customWare, getAllPokemons)
router.get('/:id', getOnePokemon)
router.post('/', getPokemonByType)
export default router