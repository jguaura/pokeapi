import { Router } from 'express'

const router = Router()

import {getAllPokemons, getOnePokemon, getPokemonByType} from '../controllers/Pokemon.controller'

router.get('/', getAllPokemons)
router.get('/:id', getOnePokemon)
router.post('/', getPokemonByType)
export default router