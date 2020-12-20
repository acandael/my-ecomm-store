module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/products/[productId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hooks/use-cart.js":
/*!***************************!*\
  !*** ./hooks/use-cart.js ***!
  \***************************/
/*! exports provided: CartContext, useCartState, useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartContext\", function() { return CartContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCartState\", function() { return useCartState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCart\", function() { return useCart; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_payments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/payments.js */ \"./lib/payments.js\");\n/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.json */ \"./products.json\");\nvar _products_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../products.json */ \"./products.json\", 1);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst defaultCart = {\n  products: {}\n};\nconst CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nfunction useCartState() {\n  const {\n    0: cart,\n    1: updateCart\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(defaultCart);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const stateFromStorage = window.localStorage.getItem('spacejelly_cart');\n    const data = stateFromStorage && JSON.parse(stateFromStorage);\n\n    if (data) {\n      updateCart(data);\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const data = JSON.stringify(cart);\n    window.localStorage.setItem('spacejelly_cart', data);\n  }, [cart]);\n  const cartItems = Object.keys(cart.products).map(key => {\n    const product = _products_json__WEBPACK_IMPORTED_MODULE_2__.find(({\n      id\n    }) => `${id}` === `${key}`);\n    return _objectSpread(_objectSpread({}, cart.products[key]), {}, {\n      pricePerUnit: product.price\n    });\n  });\n  const subTotal = cartItems.reduce((accumulator, {\n    pricePerUnit,\n    quantity\n  }) => {\n    return accumulator + pricePerUnit * quantity;\n  }, 0);\n  const quantity = cartItems.reduce((accumulator, {\n    quantity\n  }) => {\n    return accumulator + quantity;\n  }, 0);\n\n  function addToCart({\n    id\n  }) {\n    updateCart(prev => {\n      let cart = _objectSpread({}, prev);\n\n      if (cart.products[id]) {\n        cart.products[id].quantity = cart.products[id].quantity + 1;\n      } else {\n        cart.products[id] = {\n          id,\n          quantity: 1\n        };\n      }\n\n      return cart;\n    });\n  }\n\n  function updateItem({\n    id,\n    quantity\n  }) {\n    updateCart(prev => {\n      let cart = _objectSpread({}, prev);\n\n      if (cart.products[id]) {\n        cart.products[id].quantity = quantity;\n      }\n\n      return cart;\n    });\n  }\n\n  function checkout() {\n    Object(_lib_payments_js__WEBPACK_IMPORTED_MODULE_1__[\"initiateCheckout\"])({\n      lineItems: cartItems.map(({\n        id,\n        quantity\n      }) => {\n        return {\n          price: id,\n          quantity\n        };\n      })\n    });\n  }\n\n  return {\n    cart,\n    cartItems,\n    subTotal,\n    quantity,\n    addToCart,\n    updateItem,\n    checkout\n  };\n}\nfunction useCart() {\n  const cart = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(CartContext);\n  return cart;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2UtY2FydC5qcz8zMzM3Il0sIm5hbWVzIjpbImRlZmF1bHRDYXJ0IiwicHJvZHVjdHMiLCJDYXJ0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDYXJ0U3RhdGUiLCJjYXJ0IiwidXBkYXRlQ2FydCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3RhdGVGcm9tU3RvcmFnZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsImNhcnRJdGVtcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJwcm9kdWN0IiwiZmluZCIsImlkIiwicHJpY2VQZXJVbml0IiwicHJpY2UiLCJzdWJUb3RhbCIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwicXVhbnRpdHkiLCJhZGRUb0NhcnQiLCJwcmV2IiwidXBkYXRlSXRlbSIsImNoZWNrb3V0IiwiaW5pdGlhdGVDaGVja291dCIsImxpbmVJdGVtcyIsInVzZUNhcnQiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQSxNQUFNQSxXQUFXLEdBQUc7QUFDbEJDLFVBQVEsRUFBRTtBQURRLENBQXBCO0FBSU8sTUFBTUMsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7QUFFQSxTQUFTQyxZQUFULEdBQXdCO0FBQzdCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFxQkMsc0RBQVEsQ0FBQ1AsV0FBRCxDQUFuQztBQUVBUSx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxnQkFBZ0IsR0FBR0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixpQkFBNUIsQ0FBekI7QUFDQSxVQUFNQyxJQUFJLEdBQUdKLGdCQUFnQixJQUFJSyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sZ0JBQVgsQ0FBakM7O0FBQ0Es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RyxZQUpLO0FBS0xDLGFBTEs7QUFNTEUsY0FOSztBQU9MQztBQVBLLEdBQVA7QUFVRDtBQUdNLFNBQVNHLE9BQVQsR0FBbUI7QUFDeEIsUUFBTWpDLElBQUksR0FBR2tDLHdEQUFVLENBQUNyQyxXQUFELENBQXZCO0FBQ0EsU0FBT0csSUFBUDtBQUNEIiwiZmlsZSI6Ii4vaG9va3MvdXNlLWNhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBpbml0aWF0ZUNoZWNrb3V0IH0gZnJvbSAnLi4vbGliL3BheW1lbnRzLmpzJ1xuXG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi4vcHJvZHVjdHMuanNvbic7XG5cbmNvbnN0IGRlZmF1bHRDYXJ0ID0ge1xuICBwcm9kdWN0czoge31cbn1cblxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydFN0YXRlKCkge1xuICBjb25zdCBbY2FydCwgdXBkYXRlQ2FydF0gPSB1c2VTdGF0ZShkZWZhdWx0Q2FydCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdGF0ZUZyb21TdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzcGFjZWplbGx5X2NhcnQnKVxuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZUZyb21TdG9yYWdlICYmIEpTT04ucGFyc2Uoc3RhdGVGcm9tU3RvcmFnZSlcbiAgICBpZiAoZGF0YSkge1xuICAgICAgdXBkYXRlQ2FydChkYXRhKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoY2FydClcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NwYWNlamVsbHlfY2FydCcsIGRhdGEpXG4gIH0sIFtjYXJ0XSlcblxuICBjb25zdCBjYXJ0SXRlbXMgPSBPYmplY3Qua2V5cyhjYXJ0LnByb2R1Y3RzKS5tYXAoa2V5ID0+IHtcbiAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZmluZCgoeyBpZCB9KSA9PiBgJHtpZH1gID09PSBgJHtrZXl9YCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNhcnQucHJvZHVjdHNba2V5XSxcbiAgICAgIHByaWNlUGVyVW5pdDogcHJvZHVjdC5wcmljZVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc3ViVG90YWwgPSBjYXJ0SXRlbXMucmVkdWNlKChhY2N1bXVsYXRvciwgeyBwcmljZVBlclVuaXQsIHF1YW50aXR5IH0pID0+IHtcbiAgICByZXR1cm4gYWNjdW11bGF0b3IgKyAoIHByaWNlUGVyVW5pdCAqIHF1YW50aXR5ICk7XG4gIH0sIDApO1xuXG4gIGNvbnN0IHF1YW50aXR5ID0gY2FydEl0ZW1zLnJlZHVjZSgoYWNjdW11bGF0b3IsIHsgcXVhbnRpdHkgfSkgPT4ge1xuICAgIHJldHVybiBhY2N1bXVsYXRvciArIHF1YW50aXR5O1xuICB9LCAwKTtcblxuICBmdW5jdGlvbiBhZGRUb0NhcnQoeyBpZCB9KSB7XG4gICAgdXBkYXRlQ2FydCgocHJldikgPT4ge1xuICAgICAgbGV0IGNhcnQgPSB7Li4ucHJldn07XG5cbiAgICAgIGlmICggY2FydC5wcm9kdWN0c1tpZF0gKSB7XG4gICAgICAgIGNhcnQucHJvZHVjdHNbaWRdLnF1YW50aXR5ID0gY2FydC5wcm9kdWN0c1tpZF0ucXVhbnRpdHkgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FydC5wcm9kdWN0c1tpZF0gPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgcXVhbnRpdHk6IDFcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FydDtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlSXRlbSh7aWQsIHF1YW50aXR5fSkge1xuICAgIHVwZGF0ZUNhcnQoKHByZXYpID0+IHtcbiAgICAgIGxldCBjYXJ0ID0gey4uLnByZXZ9O1xuXG4gICAgICBpZiAoIGNhcnQucHJvZHVjdHNbaWRdICkge1xuICAgICAgICBjYXJ0LnByb2R1Y3RzW2lkXS5xdWFudGl0eSA9IHF1YW50aXR5O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FydDtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tvdXQoKSB7XG4gICAgaW5pdGlhdGVDaGVja291dCh7XG4gICAgICBsaW5lSXRlbXM6IGNhcnRJdGVtcy5tYXAoKHsgaWQsIHF1YW50aXR5IH0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcmljZTogaWQsXG4gICAgICAgICAgcXVhbnRpdHlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjYXJ0LFxuICAgIGNhcnRJdGVtcyxcbiAgICBzdWJUb3RhbCxcbiAgICBxdWFudGl0eSxcbiAgICBhZGRUb0NhcnQsXG4gICAgdXBkYXRlSXRlbSxcbiAgICBjaGVja291dFxuICB9XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydCgpIHtcbiAgY29uc3QgY2FydCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xuICByZXR1cm4gY2FydDtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/use-cart.js\n");

/***/ }),

/***/ "./lib/payments.js":
/*!*************************!*\
  !*** ./lib/payments.js ***!
  \*************************/
/*! exports provided: initiateCheckout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initiateCheckout\", function() { return initiateCheckout; });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__[\"loadStripe\"])(\"pk_test_Nl92ZnCPm0x1t0UF9W5Q4Mcf\");\nasync function initiateCheckout({\n  lineItems\n} = {}) {\n  const stripe = await stripePromise;\n  await stripe.redirectToCheckout({\n    mode: 'payment',\n    lineItems,\n    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,\n    cancelUrl: window.location.origin\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcGF5bWVudHMuanM/YTM1ZCJdLCJuYW1lcyI6WyJzdHJpcGVQcm9taXNlIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiLCJpbml0aWF0ZUNoZWNrb3V0IiwibGluZUl0ZW1zIiwic3RyaXBlIiwicmVkaXJlY3RUb0NoZWNrb3V0IiwibW9kZSIsInN1Y2Nlc3NVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImNhbmNlbFVybCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLGFBQWEsR0FBR0Msb0VBQVUsQ0FBQ0Msa0NBQUQsQ0FBaEM7QUFFTyxlQUFlQyxnQkFBZixDQUFnQztBQUFDQztBQUFELElBQWMsRUFBOUMsRUFBaUQ7QUFDdEQsUUFBTUMsTUFBTSxHQUFHLE1BQU1MLGFBQXJCO0FBRUEsUUFBTUssTUFBTSxDQUFDQyxrQkFBUCxDQUEwQjtBQUM5QkMsUUFBSSxFQUFFLFNBRHdCO0FBRTlCSCxhQUY4QjtBQUc5QkksY0FBVSxFQUFHLEdBQUVDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBTyxtQ0FIUjtBQUk5QkMsYUFBUyxFQUFFSCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDO0FBSkcsR0FBMUIsQ0FBTjtBQU1EIiwiZmlsZSI6Ii4vbGliL3BheW1lbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtsb2FkU3RyaXBlfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcydcblxuY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX0FQSV9LRVkpXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWF0ZUNoZWNrb3V0KHtsaW5lSXRlbXN9ID0ge30pe1xuICBjb25zdCBzdHJpcGUgPSBhd2FpdCBzdHJpcGVQcm9taXNlO1xuXG4gIGF3YWl0IHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoe1xuICAgIG1vZGU6ICdwYXltZW50JyxcbiAgICBsaW5lSXRlbXMsXG4gICAgc3VjY2Vzc1VybDogYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0/c2Vzc2lvbl9pZD17Q0hFQ0tPVVRfU0VTU0lPTl9JRH1gLFxuICAgIGNhbmNlbFVybDogd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICB9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/payments.js\n");

/***/ }),

/***/ "./pages/products/[productId].js":
/*!***************************************!*\
  !*** ./pages/products/[productId].js ***!
  \***************************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Product; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Product.module.css */ \"./styles/Product.module.css\");\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_use_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-cart */ \"./hooks/use-cart.js\");\n/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../products.json */ \"./products.json\");\nvar _products_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../products.json */ \"./products.json\", 1);\n\nvar _jsxFileName = \"/Users/acandael/Tutorials/space-jelly-store/pages/products/[productId].js\";\n\n\n\n\n{\n  /**\n   * @lesson-13-todo Exercise 2\n   * If we want to make each product available at\n   * their own individual page, how can we update\n   * our page to accept dynamic routes?\n   */\n}\nfunction Product({\n  product\n}) {\n  const {\n    id,\n    title,\n    description,\n    image,\n    price\n  } = product;\n  const {\n    addToCart\n  } = Object(_hooks_use_cart__WEBPACK_IMPORTED_MODULE_3__[\"useCart\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [title, \" - Space Jelly\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.productImage,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: image,\n          alt: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n          children: description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n          children: [\"$\", price.toFixed(2)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,\n            onClick: () => {\n              addToCart({\n                id\n              });\n            },\n            children: \"Buy\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: [\"Powered by\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/vercel.svg\",\n          alt: \"Vercel Logo\",\n          className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\nasync function getStaticProps({\n  params = {}\n}) {\n  const product = _products_json__WEBPACK_IMPORTED_MODULE_4__.find(({\n    id\n  }) => `${id}` === `${params.productId}`);\n  return {\n    props: {\n      product\n    }\n  };\n}\nasync function getStaticPaths() {\n  const paths = _products_json__WEBPACK_IMPORTED_MODULE_4__.map(product => {\n    const {\n      id\n    } = product;\n    return {\n      params: {\n        productId: id\n      }\n    };\n  });\n  return {\n    paths,\n    fallback: false\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy9bcHJvZHVjdElkXS5qcz9lNGI4Il0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJwcmljZSIsImFkZFRvQ2FydCIsInVzZUNhcnQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwicHJvZHVjdEltYWdlIiwidG9GaXhlZCIsImJ1dHRvbiIsImZvb3RlciIsImxvZ28iLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInByb2R1Y3RzIiwiZmluZCIsInByb2R1Y3RJZCIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsIm1hcCIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUs7QUFFVSxTQUFTQSxPQUFULENBQWlCO0FBQUNDO0FBQUQsQ0FBakIsRUFBNEI7QUFDekMsUUFBTTtBQUFDQyxNQUFEO0FBQUtDLFNBQUw7QUFBWUMsZUFBWjtBQUF5QkMsU0FBekI7QUFBZ0NDO0FBQWhDLE1BQXlDTCxPQUEvQztBQUVBLFFBQU07QUFBQ007QUFBRCxNQUFjQywrREFBTyxFQUEzQjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxpRUFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQSxtQkFBU1AsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQU0sZUFBUyxFQUFFTSxpRUFBTSxDQUFDRSxJQUF4QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUYsaUVBQU0sQ0FBQ0csWUFBdkI7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBRVAsS0FBVjtBQUFpQixhQUFHLEVBQUVGO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFBLGdDQUNFO0FBQUEsb0JBQ0lBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUcsbUJBQVMsRUFBRU0saUVBQU0sQ0FBQ0wsV0FBckI7QUFBQSxvQkFDSUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLGVBU0U7QUFBRyxtQkFBUyxFQUFFSyxpRUFBTSxDQUFDTCxXQUFyQjtBQUFBLDBCQUNLRSxLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkLENBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGLGVBbUJFO0FBQUEsaUNBQ0U7QUFBUSxxQkFBUyxFQUFFSixpRUFBTSxDQUFDSyxNQUExQjtBQUFrQyxtQkFBTyxFQUFFLE1BQU07QUFDL0NQLHVCQUFTLENBQUM7QUFBQ0w7QUFBRCxlQUFELENBQVQ7QUFDRCxhQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUF5Q0U7QUFBUSxlQUFTLEVBQUVPLGlFQUFNLENBQUNNLE1BQTFCO0FBQUEsNkJBQ0U7QUFDRSxZQUFJLEVBQUMsd0dBRFA7QUFFRSxjQUFNLEVBQUMsUUFGVDtBQUdFLFdBQUcsRUFBQyxxQkFITjtBQUFBLGlDQUthLEdBTGIsZUFNRTtBQUFLLGFBQUcsRUFBQyxhQUFUO0FBQXVCLGFBQUcsRUFBQyxhQUEzQjtBQUF5QyxtQkFBUyxFQUFFTixpRUFBTSxDQUFDTztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzREQ7QUFFTSxlQUFlQyxjQUFmLENBQThCO0FBQUVDLFFBQU0sR0FBRztBQUFYLENBQTlCLEVBQStDO0FBQ3BELFFBQU1qQixPQUFPLEdBQUdrQiwyQ0FBUSxDQUFDQyxJQUFULENBQWMsQ0FBQztBQUFFbEI7QUFBRixHQUFELEtBQWEsR0FBRUEsRUFBRyxFQUFOLEtBQWEsR0FBRWdCLE1BQU0sQ0FBQ0csU0FBVSxFQUExRCxDQUFoQjtBQUNBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xyQjtBQURLO0FBREYsR0FBUDtBQUtEO0FBRU0sZUFBZXNCLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsS0FBSyxHQUFHTCwyQ0FBUSxDQUFDTSxHQUFULENBQWN4QixPQUFELElBQWE7QUFDdEMsVUFBTTtBQUFFQztBQUFGLFFBQVNELE9BQWY7QUFDQSxXQUFPO0FBQ0xpQixZQUFNLEVBQUU7QUFDTkcsaUJBQVMsRUFBRW5CO0FBREw7QUFESCxLQUFQO0FBS0QsR0FQYSxDQUFkO0FBU0EsU0FBTztBQUNMc0IsU0FESztBQUVMRSxZQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9bcHJvZHVjdElkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1Byb2R1Y3QubW9kdWxlLmNzcydcblxuaW1wb3J0IHt1c2VDYXJ0fSBmcm9tICcuLi8uLi9ob29rcy91c2UtY2FydCdcblxuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uLy4uL3Byb2R1Y3RzLmpzb24nO1xuXG57LyoqXG4gICogQGxlc3Nvbi0xMy10b2RvIEV4ZXJjaXNlIDJcbiAgKiBJZiB3ZSB3YW50IHRvIG1ha2UgZWFjaCBwcm9kdWN0IGF2YWlsYWJsZSBhdFxuICAqIHRoZWlyIG93biBpbmRpdmlkdWFsIHBhZ2UsIGhvdyBjYW4gd2UgdXBkYXRlXG4gICogb3VyIHBhZ2UgdG8gYWNjZXB0IGR5bmFtaWMgcm91dGVzP1xuICAqL31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdCh7cHJvZHVjdH0pIHtcbiAgY29uc3Qge2lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlLCBwcmljZX0gPSBwcm9kdWN0O1xuXG4gIGNvbnN0IHthZGRUb0NhcnR9ID0gdXNlQ2FydCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57IHRpdGxlIH0gLSBTcGFjZSBKZWxseTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltYWdlfT5cbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgeyB0aXRsZSB9XG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIHsgZGVzY3JpcHRpb24gfVxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICR7IHByaWNlLnRvRml4ZWQoMikgfVxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIHsvKipcbiAgICAgICAgICAgICogQGxlc3Nvbi0xMy10b2RvIEV4ZXJjaXNlIDVcbiAgICAgICAgICAgICogT25jZSB3ZSBoYXZlIG91ciBhZGQgdG8gY2FydCBmdW5jdGlvbiwgaG93IGNhblxuICAgICAgICAgICAgKiB3ZSBhZGQgYW4gaXRlbSB0byBvdXIgY3VzdG9tZXIncyBjYXJ0IGFueSB0aW1lXG4gICAgICAgICAgICAqIHRoZXkgY2xpY2sgdGhlIEJ1eSBidXR0b24/XG4gICAgICAgICAgICAqL31cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGFkZFRvQ2FydCh7aWR9KVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIEJ1eVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyA9IHt9IH0pIHtcbiAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbmQoKHsgaWQgfSkgPT4gYCR7aWR9YCA9PT0gYCR7cGFyYW1zLnByb2R1Y3RJZH1gKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBwcm9kdWN0O1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcHJvZHVjdElkOiBpZCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2VcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/[productId].js\n");

/***/ }),

/***/ "./products.json":
/*!***********************!*\
  !*** ./products.json ***!
  \***********************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":\\\"price_1I063TGpFFIgtGQjJtklgzz7\\\",\\\"title\\\":\\\"Space Jelly Tshirt\\\",\\\"description\\\":\\\"Bring Cosmo the space Jellyfish to your wardrobe with this high quality tshirt.\\\",\\\"image\\\":\\\"/images/spacejelly-tshirt.jpg\\\",\\\"price\\\":20},{\\\"id\\\":\\\"price_1I0650GpFFIgtGQjCdQfwV2H\\\",\\\"title\\\":\\\"Space Jelly Stickers\\\",\\\"description\\\":\\\"Add some flare to your laptop with a sticker of Cosmo the Space Jellyfish.\\\",\\\"image\\\":\\\"/images/spacejelly-stickers.jpg\\\",\\\"price\\\":10},{\\\"id\\\":\\\"price_1I0666GpFFIgtGQjNqLCTANY\\\",\\\"title\\\":\\\"Space Jelly Combo\\\",\\\"description\\\":\\\"Show your love for Cosmo with a tshirt and sticker combo pack!\\\",\\\"image\\\":\\\"/images/spacejelly-combo.jpg\\\",\\\"price\\\":25}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Byb2R1Y3RzLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./products.json\n");

/***/ }),

/***/ "./styles/Product.module.css":
/*!***********************************!*\
  !*** ./styles/Product.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Product_container__1_5DU\",\n\t\"main\": \"Product_main__2AJqi\",\n\t\"productImage\": \"Product_productImage__zCvtJ\",\n\t\"footer\": \"Product_footer__nJ0ub\",\n\t\"logo\": \"Product_logo__20jfq\",\n\t\"button\": \"Product_button__20HXd\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvUHJvZHVjdC5tb2R1bGUuY3NzPzYxNzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL1Byb2R1Y3QubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlByb2R1Y3RfY29udGFpbmVyX18xXzVEVVwiLFxuXHRcIm1haW5cIjogXCJQcm9kdWN0X21haW5fXzJBSnFpXCIsXG5cdFwicHJvZHVjdEltYWdlXCI6IFwiUHJvZHVjdF9wcm9kdWN0SW1hZ2VfX3pDdnRKXCIsXG5cdFwiZm9vdGVyXCI6IFwiUHJvZHVjdF9mb290ZXJfX25KMHViXCIsXG5cdFwibG9nb1wiOiBcIlByb2R1Y3RfbG9nb19fMjBqZnFcIixcblx0XCJidXR0b25cIjogXCJQcm9kdWN0X2J1dHRvbl9fMjBIWGRcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Product.module.css\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@stripe/stripe-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3RyaXBlL3N0cmlwZS1qc1wiPzk3ODkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHN0cmlwZS9zdHJpcGUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3N0cmlwZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@stripe/stripe-js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });