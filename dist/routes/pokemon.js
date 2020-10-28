"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _util = require("../utils/util");

var _Pokemon = require("../controllers/Pokemon.controller");

var router = (0, _express.Router)();

/**
 * @swagger
 * /:
 * get:
 *  description: used to get the list of all pokemons
 *  responses:
 *    '200':
 *      description: successful response
 */
router.get('/', _util.customWare, _Pokemon.getAllPokemons);
router.get('/:id', _util.customWare, _Pokemon.getOnePokemon);
var _default = router;
exports["default"] = _default;