'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.put = exports.post = exports.get = undefined;

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { var callNext = step.bind(null, "next"); var callThrow = step.bind(null, "throw"); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(callNext, callThrow); } } callNext(); }); }; }

const debug = (0, _debug3.default)('lark-router');

const get = exports.get = (function () {
    var ref = _asyncToGenerator(function* (ctx) {
        debug("Example: GET /methods");
        ctx.body = 'GET /methods';
    });

    return function get(_x) {
        return ref.apply(this, arguments);
    };
})();

const post = exports.post = (function () {
    var ref = _asyncToGenerator(function* (ctx) {
        debug("Example: POST /methods");
        ctx.body = 'POST /methods';
    });

    return function post(_x2) {
        return ref.apply(this, arguments);
    };
})();

const put = exports.put = (function () {
    var ref = _asyncToGenerator(function* (ctx) {
        debug("Example: PUT /methods");
        ctx.body = 'PUT /methods';
    });

    return function put(_x3) {
        return ref.apply(this, arguments);
    };
})();