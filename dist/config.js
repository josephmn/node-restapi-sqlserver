"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

// config();
// console.log(process.env.NICKNAME)
var _default = {
  port: process.env.PORT || 3000
};
exports["default"] = _default;