"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config(); //? Connect to remote db


var sequelize = new _sequelize["default"](process.env.POSTGRE_DB, process.env.POSTGRE_USER, process.env.POSTGRE_PASS, {
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