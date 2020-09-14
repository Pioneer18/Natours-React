"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./TitleBox.css");

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TitleBox = function TitleBox(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "title-box"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading-primary"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "heading-primary-main"
  }, "Outdoors"), /*#__PURE__*/_react.default.createElement("span", {
    className: "heading-primary-sub"
  }, "is where life happens")), /*#__PURE__*/_react.default.createElement(_Button.default, null)));
};

var _default = TitleBox;
exports.default = _default;

//# sourceMappingURL=TitleBox.js.map