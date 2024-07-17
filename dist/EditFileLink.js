"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/EditFileLink.tsx

var EditFileLink = function EditFileLink(_ref) {
  var file = _ref.file,
    name = _ref.name,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "text-blue-600 py-2" : _ref$className;
  if (process.env.NODE_ENV !== "development") {
    return null;
  }
  var linkText = name ? "Open ".concat(name, " in VSCode") : "Open in VSCode";
  return /*#__PURE__*/_react["default"].createElement("a", {
    className: className,
    href: "vscode://".concat(file)
  }, linkText);
};
var _default = exports["default"] = EditFileLink;