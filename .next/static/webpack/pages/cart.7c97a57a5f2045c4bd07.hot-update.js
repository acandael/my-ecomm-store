webpackHotUpdate_N_E("pages/cart",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Cart.module.css */ \"./styles/Cart.module.css\");\n/* harmony import */ var _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Table */ \"./components/Table/index.js\");\n/* harmony import */ var _hooks_use_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-cart */ \"./hooks/use-cart.js\");\n\nvar _jsxFileName = \"/Users/acandael/Tutorials/space-jelly-store/pages/cart.js\";\n\n\n\n\n\nvar columns = [{\n  columnId: 'title',\n  Header: 'Product Name'\n}, {\n  columnId: 'quantity',\n  Header: 'Quantity'\n}, {\n  columnId: 'pricePerUnit',\n  Header: 'Price Per Item'\n}, {\n  columnId: 'total',\n  Header: 'Item Total'\n}];\nfunction Home() {\n  var data = [{\n    id: 'my-product',\n    title: 'My Cool Product',\n    quantity: 1,\n    pricePerUnit: 10.00,\n    total: 10.00\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Shopping Cart - Space Jelly\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaShoppingCart\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this), \" Cart\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Table__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.table,\n        data: data,\n        columns: columns\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.checkout,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,\n          children: \"Check Out\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: [\"Powered by\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/vercel.svg\",\n          alt: \"Vercel Logo\",\n          className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, this);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcz82MTAzIl0sIm5hbWVzIjpbImNvbHVtbnMiLCJjb2x1bW5JZCIsIkhlYWRlciIsIkhvbWUiLCJkYXRhIiwiaWQiLCJ0aXRsZSIsInF1YW50aXR5IiwicHJpY2VQZXJVbml0IiwidG90YWwiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGFibGUiLCJjaGVja291dCIsImJ1dHRvbiIsImZvb3RlciIsImxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsVUFBUSxFQUFFLE9BRFo7QUFFRUMsUUFBTSxFQUFFO0FBRlYsQ0FEYyxFQUtkO0FBQ0VELFVBQVEsRUFBRSxVQURaO0FBRUVDLFFBQU0sRUFBRTtBQUZWLENBTGMsRUFTZDtBQUNFRCxVQUFRLEVBQUUsY0FEWjtBQUVFQyxRQUFNLEVBQUU7QUFGVixDQVRjLEVBYWQ7QUFDRUQsVUFBUSxFQUFFLE9BRFo7QUFFRUMsUUFBTSxFQUFFO0FBRlYsQ0FiYyxDQUFoQjtBQW1CZSxTQUFTQyxJQUFULEdBQWdCO0FBRzdCLE1BQU1DLElBQUksR0FBRyxDQUNYO0FBQ0VDLE1BQUUsRUFBRSxZQUROO0FBRUVDLFNBQUssRUFBRSxpQkFGVDtBQUdFQyxZQUFRLEVBQUUsQ0FIWjtBQUlFQyxnQkFBWSxFQUFFLEtBSmhCO0FBS0VDLFNBQUssRUFBRTtBQUxULEdBRFcsQ0FBYjtBQVVBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQU0sZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxJQUF4QjtBQUFBLDhCQUVFO0FBQUksaUJBQVMsRUFBRUYsOERBQU0sQ0FBQ0osS0FBdEI7QUFBQSxnQ0FDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBTUUscUVBQUMseURBQUQ7QUFBTyxpQkFBUyxFQUFFSSw4REFBTSxDQUFDRyxLQUF6QjtBQUFnQyxZQUFJLEVBQUVULElBQXRDO0FBQTRDLGVBQU8sRUFBRUo7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBUUU7QUFBRyxpQkFBUyxFQUFFVSw4REFBTSxDQUFDSSxRQUFyQjtBQUFBLCtCQUVFO0FBQVEsbUJBQVMsRUFBRUosOERBQU0sQ0FBQ0ssTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFzQkU7QUFBUSxlQUFTLEVBQUVMLDhEQUFNLENBQUNNLE1BQTFCO0FBQUEsNkJBQ0U7QUFDRSxZQUFJLEVBQUMsd0dBRFA7QUFFRSxjQUFNLEVBQUMsUUFGVDtBQUdFLFdBQUcsRUFBQyxxQkFITjtBQUFBLGlDQUthLEdBTGIsZUFNRTtBQUFLLGFBQUcsRUFBQyxhQUFUO0FBQXVCLGFBQUcsRUFBQyxhQUEzQjtBQUF5QyxtQkFBUyxFQUFFTiw4REFBTSxDQUFDTztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQ0Q7S0FoRHVCZCxJIiwiZmlsZSI6Ii4vcGFnZXMvY2FydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IEZhU2hvcHBpbmdDYXJ0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ2FydC5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZSc7XG5cbmltcG9ydCB7dXNlQ2FydH0gZnJvbSAnLi4vaG9va3MvdXNlLWNhcnQnXG5cbmNvbnN0IGNvbHVtbnMgPSBbXG4gIHtcbiAgICBjb2x1bW5JZDogJ3RpdGxlJyxcbiAgICBIZWFkZXI6ICdQcm9kdWN0IE5hbWUnXG4gIH0sXG4gIHtcbiAgICBjb2x1bW5JZDogJ3F1YW50aXR5JyxcbiAgICBIZWFkZXI6ICdRdWFudGl0eSdcbiAgfSxcbiAge1xuICAgIGNvbHVtbklkOiAncHJpY2VQZXJVbml0JyxcbiAgICBIZWFkZXI6ICdQcmljZSBQZXIgSXRlbSdcbiAgfSxcbiAge1xuICAgIGNvbHVtbklkOiAndG90YWwnLFxuICAgIEhlYWRlcjogJ0l0ZW0gVG90YWwnXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cblxuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIGlkOiAnbXktcHJvZHVjdCcsXG4gICAgICB0aXRsZTogJ015IENvb2wgUHJvZHVjdCcsXG4gICAgICBxdWFudGl0eTogMSxcbiAgICAgIHByaWNlUGVyVW5pdDogMTAuMDAsXG4gICAgICB0b3RhbDogMTAuMDBcbiAgICB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2hvcHBpbmcgQ2FydCAtIFNwYWNlIEplbGx5PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cblxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIDxGYVNob3BwaW5nQ2FydCAvPiBDYXJ0XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfSBkYXRhPXtkYXRhfSBjb2x1bW5zPXtjb2x1bW5zfSAvPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrb3V0fT5cbiAgICAgICAgICBcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgICBDaGVjayBPdXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cart.js\n");

/***/ })

})