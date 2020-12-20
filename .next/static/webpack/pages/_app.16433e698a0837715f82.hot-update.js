webpackHotUpdate_N_E("pages/_app",{

/***/ "./hooks/use-cart.js":
/*!***************************!*\
  !*** ./hooks/use-cart.js ***!
  \***************************/
/*! exports provided: CartContext, useCartState, useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartContext\", function() { return CartContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCartState\", function() { return useCartState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCart\", function() { return useCart; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_payments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/payments.js */ \"./lib/payments.js\");\n/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.json */ \"./products.json\");\nvar _products_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../products.json */ \"./products.json\", 1);\n\n\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar defaultCart = {\n  products: {}\n};\nvar CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nfunction useCartState() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(defaultCart),\n      cart = _useState[0],\n      updateCart = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var stateFromStorage = window.localStorage.getItem('spacejelly_cart');\n    var data = stateFromStorage && JSON.parse(stateFromStorage);\n\n    if (data) {\n      updateCart(data);\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var data = JSON.stringify(cart);\n    window.localStorage.setItem('spacejelly_cart', data);\n  }, [cart]);\n  var cartItems = Object.keys(cart.products).map(function (key) {\n    var product = _products_json__WEBPACK_IMPORTED_MODULE_3__.find(function (_ref) {\n      var id = _ref.id;\n      return \"\".concat(id) === \"\".concat(key);\n    });\n    return _objectSpread(_objectSpread({}, cart.products[key]), {}, {\n      pricePerUnit: product.price\n    });\n  });\n  var subTotal = cartItems.reduce(function (accumulator, _ref2) {\n    var pricePerUnit = _ref2.pricePerUnit,\n        quantity = _ref2.quantity;\n    return accumulator + pricePerUnit * quantity;\n  }, 0);\n  var quantity = cartItems.reduce(function (accumulator, _ref3) {\n    var quantity = _ref3.quantity;\n    return accumulator + quantity;\n  }, 0);\n\n  function addToCart(_ref4) {\n    var id = _ref4.id;\n    updateCart(function (prev) {\n      var cart = _objectSpread({}, prev);\n\n      if (cart.products[id]) {\n        cart.products[id].quantity = cart.products[id].quantity + 1;\n      } else {\n        cart.products[id] = {\n          id: id,\n          quantity: 1\n        };\n      }\n\n      return cart;\n    });\n  }\n\n  function checkout() {\n    Object(_lib_payments_js__WEBPACK_IMPORTED_MODULE_2__[\"initiateCheckout\"])({\n      lineItems: cartItems.map(function (_ref5) {\n        var id = _ref5.id,\n            quantity = _ref5.quantity;\n        return {\n          price: id,\n          quantity: quantity\n        };\n      })\n    });\n  }\n\n  return {\n    cart: cart,\n    subTotal: subTotal,\n    quantity: quantity,\n    addToCart: addToCart,\n    checkout: checkout\n  };\n}\n\n_s(useCartState, \"x+QvYJ952F60vNclMWRVBmNS9jg=\");\n\nfunction useCart() {\n  _s2();\n\n  var cart = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(CartContext);\n  return cart;\n}\n\n_s2(useCart, \"QchebOVKze+CH1FRHiU38Fd0/kM=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLWNhcnQuanM/MzMzNyJdLCJuYW1lcyI6WyJkZWZhdWx0Q2FydCIsInByb2R1Y3RzIiwiQ2FydENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2FydFN0YXRlIiwidXNlU3RhdGUiLCJjYXJ0IiwidXBkYXRlQ2FydCIsInVzZUVmZmVjdCIsInN0YXRlRnJvbVN0b3JhZ2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldEl0ZW0iLCJjYXJ0SXRlbXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwicHJvZHVjdCIsImZpbmQiLCJpZCIsInByaWNlUGVyVW5pdCIsInByaWNlIiwic3ViVG90YWwiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsInF1YW50aXR5IiwiYWRkVG9DYXJ0IiwicHJldiIsImNoZWNrb3V0IiwiaW5pdGlhdGVDaGVja291dCIsImxpbmVJdGVtcyIsInVzZUNhcnQiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRUEsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCQyxVQUFRLEVBQUU7QUFEUSxDQUFwQjtBQUlPLElBQU1DLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDO0FBRUEsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNGQyxzREFBUSxDQUFDTCxXQUFELENBRE47QUFBQSxNQUN0Qk0sSUFEc0I7QUFBQSxNQUNoQkMsVUFEZ0I7O0FBRzdCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxnQkFBZ0IsR0FBR0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixpQkFBNUIsQ0FBekI7QUFDQSxRQUFNQyxJQUFJLEdBQUdKLGdCQUFnQixJQUFJSyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sZ0JBQVgsQ0FBakM7O0FBQ0Es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Q0EsU0FBT0ksSUFBUDtBQUNEOztJQUhlK0IsTyIsImZpbGUiOiIuL2hvb2tzL3VzZS1jYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgaW5pdGlhdGVDaGVja291dCB9IGZyb20gJy4uL2xpYi9wYXltZW50cy5qcydcblxuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uL3Byb2R1Y3RzLmpzb24nO1xuXG5jb25zdCBkZWZhdWx0Q2FydCA9IHtcbiAgcHJvZHVjdHM6IHt9XG59XG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhcnRTdGF0ZSgpIHtcbiAgY29uc3QgW2NhcnQsIHVwZGF0ZUNhcnRdID0gdXNlU3RhdGUoZGVmYXVsdENhcnQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVGcm9tU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3BhY2VqZWxseV9jYXJ0JylcbiAgICBjb25zdCBkYXRhID0gc3RhdGVGcm9tU3RvcmFnZSAmJiBKU09OLnBhcnNlKHN0YXRlRnJvbVN0b3JhZ2UpXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHVwZGF0ZUNhcnQoZGF0YSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGNhcnQpXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzcGFjZWplbGx5X2NhcnQnLCBkYXRhKVxuICB9LCBbY2FydF0pXG5cbiAgY29uc3QgY2FydEl0ZW1zID0gT2JqZWN0LmtleXMoY2FydC5wcm9kdWN0cykubWFwKGtleSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbmQoKHsgaWQgfSkgPT4gYCR7aWR9YCA9PT0gYCR7a2V5fWApO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jYXJ0LnByb2R1Y3RzW2tleV0sXG4gICAgICBwcmljZVBlclVuaXQ6IHByb2R1Y3QucHJpY2VcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHN1YlRvdGFsID0gY2FydEl0ZW1zLnJlZHVjZSgoYWNjdW11bGF0b3IsIHsgcHJpY2VQZXJVbml0LCBxdWFudGl0eSB9KSA9PiB7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgKCBwcmljZVBlclVuaXQgKiBxdWFudGl0eSApO1xuICB9LCAwKTtcblxuICBjb25zdCBxdWFudGl0eSA9IGNhcnRJdGVtcy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCB7IHF1YW50aXR5IH0pID0+IHtcbiAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBxdWFudGl0eTtcbiAgfSwgMCk7XG5cbiAgZnVuY3Rpb24gYWRkVG9DYXJ0KHsgaWQgfSkge1xuICAgIHVwZGF0ZUNhcnQoKHByZXYpID0+IHtcbiAgICAgIGxldCBjYXJ0ID0gey4uLnByZXZ9O1xuXG4gICAgICBpZiAoIGNhcnQucHJvZHVjdHNbaWRdICkge1xuICAgICAgICBjYXJ0LnByb2R1Y3RzW2lkXS5xdWFudGl0eSA9IGNhcnQucHJvZHVjdHNbaWRdLnF1YW50aXR5ICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcnQucHJvZHVjdHNbaWRdID0ge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHF1YW50aXR5OiAxXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhcnQ7XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrb3V0KCkge1xuICAgIGluaXRpYXRlQ2hlY2tvdXQoe1xuICAgICAgbGluZUl0ZW1zOiBjYXJ0SXRlbXMubWFwKCh7IGlkLCBxdWFudGl0eSB9KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJpY2U6IGlkLFxuICAgICAgICAgIHF1YW50aXR5XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2FydCxcbiAgICBzdWJUb3RhbCxcbiAgICBxdWFudGl0eSxcbiAgICBhZGRUb0NhcnQsXG4gICAgY2hlY2tvdXRcbiAgfVxuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhcnQoKSB7XG4gIGNvbnN0IGNhcnQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcbiAgcmV0dXJuIGNhcnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/use-cart.js\n");

/***/ })

})