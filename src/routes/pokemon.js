import { Router } from 'express'
import { customWare } from '../utils/util'

const router = Router()

import {getAllPokemons, getOnePokemon} from '../controllers/Pokemon.controller'

router.get('/', customWare, getAllPokemons)
router.get('/:id', customWare, getOnePokemon)


export default router