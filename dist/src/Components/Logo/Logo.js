"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _logoWhite = _interopRequireDefault(require("../../Images/logo-white.png"));

require("./Logo.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logoWhite.default,
    alt: "Logo",
    className: "logo"
  })));
};

var _default = Logo;
exports.default = _default;

//# sourceMappingURL=Logo.js.map