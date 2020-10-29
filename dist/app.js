"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _pokemon = _interopRequireDefault(require("./routes/pokemon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import responseTime from 'response-time'
// Routes import
// Swagger options
var options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "testesr12123",
      version: "0.1.0",
      description: "lremessaskdkasdakdwmkalwfakmdks",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html"
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com"
      }
    },
    servers: [{
      url: "http://localhost:8080/api"
    }]
  },
  apis: ['./app.js']
};
var specs = (0, _swaggerJsdoc["default"])(options); // Initialization

var app = (0, _express["default"])(); // Middlewares

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", ["https://pokedex.jguaura.ml", "https://www.pokedex.jguaura.ml", "https://jguaura.ml"]);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); // app.use(cors())

app.use((0, _morgan["default"])('dev'));
app.use((0, _compression["default"])());
app.use((0, _express.json)()); // Routes use

app.use('/api/documentation', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
app.use('/api/pokemon', _pokemon["default"]);
var _default = app;
exports["default"] = _default;