"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _db = _interopRequireDefault(require("../database/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Pokemon = _db["default"].define('poketable', {
  id: {
    type: _sequelize.Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize.Sequelize.TEXT
  },
  sprite: {
    type: _sequelize.Sequelize.TEXT
  },
  types: {
    type: _sequelize.Sequelize.ARRAY(_sequelize.Sequelize.TEXT)
  },
  description: {
    type: _sequelize.Sequelize.TEXT
  },
  weakto: {
    type: _sequelize.Sequelize.ARRAY(_sequelize.Sequelize.TEXT)
  },
  number: {
    type: _sequelize.Sequelize.TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Pokemon;
exports["default"] = _default;