"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

// import './database/connection';
_app["default"].listen(_app["default"].get('port'));

console.log('server in port', _app["default"].get('port'));