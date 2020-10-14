"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config(); //? Connect to remote db


var sequelize = new _sequelize["default"]('d5334k36nomd4s', 'nqqupfbfsrwvgx', 'bc8e372dfcf6aafdd4ac8808d033379f20597e07c4d3e61a6f2594875900dddc', {
  host: process.env.HOST || 'ec2-75-101-232-85.compute-1.amazonaws.com',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  }
});
var _default = sequelize;
exports["default"] = _default;