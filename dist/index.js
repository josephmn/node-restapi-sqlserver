"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import './database/connection';
_app["default"].listen(_app["default"].get('port'));

console.log('server in port', _app["default"].get('port'));