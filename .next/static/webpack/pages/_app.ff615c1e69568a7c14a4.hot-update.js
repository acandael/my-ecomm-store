webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Nav/Nav.js":
/*!*******************************!*\
  !*** ./components/Nav/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _hooks_use_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-cart */ \"./hooks/use-cart.js\");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav.module.css */ \"./components/Nav/Nav.module.css\");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/acandael/Tutorials/space-jelly-store/components/Nav/Nav.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Nav = function Nav() {\n  _s();\n\n  var _useCart = Object(_hooks_use_cart__WEBPACK_IMPORTED_MODULE_2__[\"useCart\"])(),\n      subTotal = _useCart.subTotal,\n      checkout = _useCart.checkout;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.nav,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navTitle,\n      children: \"Space Jelly Shop\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navCart,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Link, {\n        href: \"/cart\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaShoppingCart\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 14\n          }, _this), \" $\", subTotal]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Nav, \"Rqwx1JPUUxmO8C0pZ3Pb76GSiLk=\", false, function () {\n  return [_hooks_use_cart__WEBPACK_IMPORTED_MODULE_2__[\"useCart\"]];\n});\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTmF2LmpzPzhmZjAiXSwibmFtZXMiOlsiTmF2IiwidXNlQ2FydCIsInN1YlRvdGFsIiwiY2hlY2tvdXQiLCJzdHlsZXMiLCJuYXYiLCJuYXZUaXRsZSIsIm5hdkNhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGlCQUNhQywrREFBTyxFQURwQjtBQUFBLE1BQ1RDLFFBRFMsWUFDVEEsUUFEUztBQUFBLE1BQ0NDLFFBREQsWUFDQ0EsUUFERDs7QUFFaEIsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHNEQUFNLENBQUNDLEdBQXZCO0FBQUEsNEJBQ0U7QUFBRyxlQUFTLEVBQUVELHNEQUFNLENBQUNFLFFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFHLGVBQVMsRUFBRUYsc0RBQU0sQ0FBQ0csT0FBckI7QUFBQSw2QkFDRSxxRUFBQyxJQUFEO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBQSwrQkFDRTtBQUFBLGtDQUFHLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUgsUUFBd0JMLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQWREOztHQUFNRixHO1VBQ3lCQyx1RDs7O0tBRHpCRCxHO0FBZ0JTQSxrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2L05hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhU2hvcHBpbmdDYXJ0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5pbXBvcnQge3VzZUNhcnR9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1jYXJ0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2Lm1vZHVsZS5jc3MnO1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IHtzdWJUb3RhbCwgY2hlY2tvdXR9ID0gdXNlQ2FydCgpO1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5hdlRpdGxlfT5cbiAgICAgICAgU3BhY2UgSmVsbHkgU2hvcFxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubmF2Q2FydH0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxuICAgICAgICAgIDxhPjxGYVNob3BwaW5nQ2FydCAvPiAke3N1YlRvdGFsfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9wPlxuICAgIDwvbmF2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav/Nav.js\n");

/***/ })

})