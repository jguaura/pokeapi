"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllPokemons = getAllPokemons;
exports.getOnePokemon = getOnePokemon;

var _Pokemon = _interopRequireDefault(require("../models/Pokemon.model"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAllPokemons(_x, _x2) {
  return _getAllPokemons.apply(this, arguments);
}

function _getAllPokemons() {
  _getAllPokemons = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$query, offset, limit, type, response;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$query = req.query, offset = _req$query.offset, limit = _req$query.limit, type = _req$query.type;
            _context.prev = 1;
            _context.next = 4;
            return _Pokemon["default"].findAndCountAll({
              limit: limit,
              offset: offset,
              type: type,
              where: type && {
                types: _defineProperty({}, _sequelize.Op.contains, [type])
              },
              order: [['id', 'ASC']]
            });

          case 4:
            response = _context.sent;
            response && res.json(response);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0.message);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _getAllPokemons.apply(this, arguments);
}

function getOnePokemon(_x3, _x4) {
  return _getOnePokemon.apply(this, arguments);
}

function _getOnePokemon() {
  _getOnePokemon = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Pokemon["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            response = _context2.sent;
            response && res.json({
              data: [response]
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(400).json({
              message: _context2.t0.message
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getOnePokemon.apply(this, arguments);
}