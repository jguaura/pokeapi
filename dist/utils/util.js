"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customWare = customWare;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function customWare(_x, _x2, _x3) {
  return _customWare.apply(this, arguments);
}

function _customWare() {
  _customWare = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var cache, key;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cache = {};
            key = req.url;

            if (cache[key]) {
              res.send('from cache');
            } else {
              res.sendResponse = res.send;

              res.send = function (body) {
                cache[key] = body;
                res.sendResponse(body);
              };

              next();
            }

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _customWare.apply(this, arguments);
}