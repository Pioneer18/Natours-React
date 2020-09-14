"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Header.css");

var _Logo = _interopRequireDefault(require("../Logo"));

var _TitleBox = _interopRequireDefault(require("../TitleBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("header", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, null), /*#__PURE__*/_react.default.createElement(_TitleBox.default, null)));
};

var _default = Header;
exports.default = _default;

//# sourceMappingURL=Header.js.map