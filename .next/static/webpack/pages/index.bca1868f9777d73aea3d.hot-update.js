webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _services_formattingData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/formattingData */ \"./src/services/formattingData.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/luan/Documentos/IgniteDesafio4/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var postPagination = _ref.postPagination,\n      preview = _ref.preview;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(postPagination.next_page),\n      nextPage = _useState[0],\n      setNextPage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(postPagination.results),\n      posts = _useState2[0],\n      setPosts = _useState2[1];\n\n  function loadMorePosts() {\n    return _loadMorePosts.apply(this, arguments);\n  }\n\n  function _loadMorePosts() {\n    _loadMorePosts = Object(_home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(nextPage ? nextPage : '').then(function (response) {\n                return response.json();\n              }).then(function (data) {\n                var formattedData = Object(_services_formattingData__WEBPACK_IMPORTED_MODULE_11__[\"postFormatter\"])(data);\n                setPosts([].concat(Object(_home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(posts), Object(_home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(formattedData.results)));\n                setNextPage(formattedData.next_page);\n              });\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _loadMorePosts.apply(this, arguments);\n  }\n\n  console.log(300, posts);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n        children: \" Posts| Ignews\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 3\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 2\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container,\n      children: [posts.map(function (post) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n            href: \"/post/\".concat(post.uid),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"strong\", {\n                children: post.data.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 7\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                children: post.data.subtitle\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 7\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n                className: _home_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.DateAndAuthor,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__[\"AiOutlineCalendar\"], {\n                  className: _home_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.calendaricon\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 84,\n                  columnNumber: 7\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"time\", {\n                  children: post.first_publication_date\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 7\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__[\"AiOutlineUser\"], {\n                  className: _home_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.usericon\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 7\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                  children: post.data.author\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 87,\n                  columnNumber: 7\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 7\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 7\n            }, _this)\n          }, post.uid, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false);\n      }), nextPage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        className: _home_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.LoadMore,\n        onClick: loadMorePosts,\n        children: \"Carregar mais posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 1\n      }, this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 2\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"CYYbZ9pqCQYAmxp5GtN2z3D6pqk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJwb3N0UGFnaW5hdGlvbiIsInByZXZpZXciLCJ1c2VTdGF0ZSIsIm5leHRfcGFnZSIsIm5leHRQYWdlIiwic2V0TmV4dFBhZ2UiLCJyZXN1bHRzIiwicG9zdHMiLCJzZXRQb3N0cyIsImxvYWRNb3JlUG9zdHMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZm9ybWF0dGVkRGF0YSIsInBvc3RGb3JtYXR0ZXIiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwidXNlUm91dGVyIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFwIiwicG9zdCIsInVpZCIsInRpdGxlIiwic3VidGl0bGUiLCJEYXRlQW5kQXV0aG9yIiwiY2FsZW5kYXJpY29uIiwiZmlyc3RfcHVibGljYXRpb25fZGF0ZSIsInVzZXJpY29uIiwiYXV0aG9yIiwiTG9hZE1vcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQThCZSxTQUFTQSxJQUFULE9BQWtEO0FBQUE7O0FBQUE7O0FBQUEsTUFBbkNDLGNBQW1DLFFBQW5DQSxjQUFtQztBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7O0FBQUEsa0JBRWhDQyxzREFBUSxDQUFDRixjQUFjLENBQUNHLFNBQWhCLENBRndCO0FBQUEsTUFFeERDLFFBRndEO0FBQUEsTUFFL0NDLFdBRitDOztBQUFBLG1CQUd0Q0gsc0RBQVEsQ0FBQ0YsY0FBYyxDQUFDTSxPQUFoQixDQUg4QjtBQUFBLE1BR3hEQyxLQUh3RDtBQUFBLE1BR2xEQyxRQUhrRDs7QUFBQSxXQU9sREMsYUFQa0Q7QUFBQTtBQUFBOztBQUFBO0FBQUEsNFVBT2pFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVRQyxLQUFLLENBQUNOLFFBQVEsR0FBR0EsUUFBSCxHQUFZLEVBQXJCLENBQUwsQ0FDTE8sSUFESyxDQUNDLFVBQUFDLFFBQVE7QUFBQSx1QkFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxlQURULEVBRUxGLElBRkssQ0FFQSxVQUFBRyxJQUFJLEVBQUk7QUFDWixvQkFBTUMsYUFBYSxHQUFJQywrRUFBYSxDQUFDRixJQUFELENBQXBDO0FBQ0VOLHdCQUFRLDJLQUFNRCxLQUFOLG1LQUFlUSxhQUFhLENBQUNULE9BQTdCLEdBQVI7QUFDQUQsMkJBQVcsQ0FBQ1UsYUFBYSxDQUFDWixTQUFmLENBQVg7QUFFRCxlQVBHLENBRlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FQaUU7QUFBQTtBQUFBOztBQXFCakVjLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosRUFBZ0JYLEtBQWhCO0FBRUUsTUFBTVksTUFBTSxHQUFHQyw4REFBUyxFQUF4QjtBQUNGLHNCQUVFO0FBQUEsNEJBQ0EscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUtELHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMQyxlQU1EO0FBQUssZUFBUyxFQUFLQyx3REFBTSxDQUFDQyxTQUExQjtBQUFBLGlCQUNJZixLQUFLLENBQUNnQixHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLDRCQUNiO0FBQUEsaUNBQ0EscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxrQkFBYUEsSUFBSSxDQUFDQyxHQUFsQixDQUFWO0FBQUEsbUNBQ0E7QUFBQSxzQ0FDQTtBQUFBLDBCQUFTRCxJQUFJLENBQUNWLElBQUwsQ0FBVVk7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEQSxlQUVBO0FBQUEsMEJBQUlGLElBQUksQ0FBQ1YsSUFBTCxDQUFVYTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkEsZUFHQTtBQUFLLHlCQUFTLEVBQUdOLHdEQUFNLENBQUNPLGFBQXhCO0FBQUEsd0NBQ0EscUVBQUMsZ0VBQUQ7QUFBbUIsMkJBQVMsRUFBS1Asd0RBQU0sQ0FBQ1E7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEQSxlQUVBO0FBQUEsNEJBQU9MLElBQUksQ0FBQ007QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZBLGVBR0EscUVBQUMsNERBQUQ7QUFBZSwyQkFBUyxFQUFHVCx3REFBTSxDQUFDVTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhBLGVBSUE7QUFBQSw0QkFBSVAsSUFBSSxDQUFDVixJQUFMLENBQVVrQjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLGFBQTJDUixJQUFJLENBQUNDLEdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSx5QkFEYTtBQUFBLE9BQWQsQ0FESixFQW9CSXJCLFFBQVEsZ0JBQ2I7QUFBUSxpQkFBUyxFQUFJaUIsd0RBQU0sQ0FBQ1ksUUFBNUI7QUFBc0MsZUFBTyxFQUFJeEIsYUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEYSxHQUtaLElBekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5DO0FBQUEsa0JBRkY7QUF3Q0M7O0dBaEV1QlYsSTtVQXVCUHFCLHNEOzs7S0F2Qk9yQixJIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBhcGlSZXNvbHZlciB9IGZyb20gJ25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvYXBpLXV0aWxzJztcbmltcG9ydCBQcmlzbWljIGZyb20gJ0BwcmlzbWljaW8vY2xpZW50J1xuaW1wb3J0IHsgQWlPdXRsaW5lQ2FsZW5kYXIsQWlPdXRsaW5lVXNlcn0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tICcuLi9zZXJ2aWNlcy9wcmlzbWljJztcbmltcG9ydCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgIExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBjb21tb25TdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbW1vbi5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaG9tZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCB7cG9zdEZvcm1hdHRlcn0gZnJvbSAnLi4vc2VydmljZXMvZm9ybWF0dGluZ0RhdGEnXG5cblxuXG5pbnRlcmZhY2UgUG9zdCB7XG4gXG4gIHVpZD86IHN0cmluZztcbiAgZmlyc3RfcHVibGljYXRpb25fZGF0ZTogc3RyaW5nIHwgbnVsbDtcbiAgZGF0YToge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgc3VidGl0bGU6IHN0cmluZztcbiAgICBhdXRob3I6IHN0cmluZztcbiAgfTtcbn1cblxuaW50ZXJmYWNlIFBvc3RzUHJvcHMge1xuICBwb3N0czogUG9zdCBbXVxufVxuXG5pbnRlcmZhY2UgUG9zdFBhZ2luYXRpb24ge1xuICBuZXh0X3BhZ2U6IHN0cmluZztcblxuICByZXN1bHRzOiBQb3N0W107XG59XG5cbmludGVyZmFjZSBIb21lUHJvcHMge1xuICBwb3N0UGFnaW5hdGlvbjogUG9zdFBhZ2luYXRpb247XG4gIHByZXZpZXc6Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7cG9zdFBhZ2luYXRpb24scHJldmlld306SG9tZVByb3BzKSB7XG5cbiAgY29uc3QgW25leHRQYWdlLHNldE5leHRQYWdlXSA9IHVzZVN0YXRlKHBvc3RQYWdpbmF0aW9uLm5leHRfcGFnZSk7XG4gIGNvbnN0IFtwb3N0cyxzZXRQb3N0c10gPSB1c2VTdGF0ZShwb3N0UGFnaW5hdGlvbi5yZXN1bHRzKTtcbiAgXG5cblxuYXN5bmMgZnVuY3Rpb24gbG9hZE1vcmVQb3N0cyAoKSB7XG5cbiAgYXdhaXQgZmV0Y2gobmV4dFBhZ2UgPyBuZXh0UGFnZTonJylcbiAgLnRoZW4gKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oZGF0YSA9PiB7XG4gICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9ICBwb3N0Rm9ybWF0dGVyKGRhdGEpO1xuICAgICAgc2V0UG9zdHMoIFsuLi5wb3N0cywuLi5mb3JtYXR0ZWREYXRhLnJlc3VsdHNdKVxuICAgICAgc2V0TmV4dFBhZ2UoZm9ybWF0dGVkRGF0YS5uZXh0X3BhZ2UpXG5cbiAgICB9KVxuICB9XG5cblxuXG5jb25zb2xlLmxvZygzMDAscG9zdHMpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbnJldHVybiAoXG5cbiAgPD5cbiAgPEhlYWQ+XG4gICAgPHRpdGxlPiBQb3N0c3wgSWduZXdzPC90aXRsZT5cbiAgPC9IZWFkPlxuXG4gPEhlYWRlci8+XG4gPGRpdiBjbGFzc05hbWUgPSB7IHN0eWxlcy5jb250YWluZXJ9PlxuICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICA8PlxuICAgICAgPExpbmsgaHJlZiA9IHtgL3Bvc3QvJHtwb3N0LnVpZH1gfSAga2V5ID0ge3Bvc3QudWlkfSA+XG4gICAgICA8YT5cbiAgICAgIDxzdHJvbmc+e3Bvc3QuZGF0YS50aXRsZX08L3N0cm9uZz5cbiAgICAgIDxwPntwb3N0LmRhdGEuc3VidGl0bGV9PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9IHtzdHlsZXMuRGF0ZUFuZEF1dGhvcn0+IFxuICAgICAgPEFpT3V0bGluZUNhbGVuZGFyIGNsYXNzTmFtZSA9IHsgc3R5bGVzLmNhbGVuZGFyaWNvbiB9PjwvQWlPdXRsaW5lQ2FsZW5kYXI+XG4gICAgICA8dGltZT57cG9zdC5maXJzdF9wdWJsaWNhdGlvbl9kYXRlfTwvdGltZT5cbiAgICAgIDxBaU91dGxpbmVVc2VyIGNsYXNzTmFtZT0ge3N0eWxlcy51c2VyaWNvbn0+PC9BaU91dGxpbmVVc2VyPlxuICAgICAgPHA+e3Bvc3QuZGF0YS5hdXRob3J9PC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbjwvPlxuICAgICAgKSlcbiAgICB9XG5cbiAgICB7bmV4dFBhZ2U/IChcbjxidXR0b24gY2xhc3NOYW1lID0ge3N0eWxlcy5Mb2FkTW9yZX0gb25DbGljayA9IHtsb2FkTW9yZVBvc3RzfT5cbiAgQ2FycmVnYXIgbWFpcyBwb3N0c1xuPC9idXR0b24+XG4gICAgKVxuOm51bGxcbn1cbjwvZGl2PlxuICBcbiAgPC8+XG4gICAgXG4pXG59XG5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzPSBhc3luYyAoe1xuIHByZXZpZXc9ZmFsc2UsXG4gIHByZXZpZXdEYXRhLFxufSkgPT4ge1xuXG5cbiAgY29uc3QgcHJpc21pYyA9IGdldFByaXNtaWNDbGllbnQoKTtcbiAgXG4gIFxuICBcbiAgY29uc3QgcG9zdHNSZXNwb25zZSA9IGF3YWl0IHByaXNtaWMucXVlcnkoXG4gICAgW1ByaXNtaWMuUHJlZGljYXRlcy5hdCgnZG9jdW1lbnQudHlwZScsJ3Bvc3QnKV0sXG4gICAge1xuICAgICAgZmV0Y2g6Wydkb2N1bWVudC50eXBlJywncG9zdCddLFxuICAgICAgcGFnZVNpemU6MSxcbiAgICAgIHJlZjpwcmV2aWV3RGF0YT8ucmVmPz9udWxsLFxuICAgIH0gXG4gICk7IFxuXG4gIFxuICBjb25zdCBwb3N0UGFnaW5hdGlvbiA9IHBvc3RGb3JtYXR0ZXIocG9zdHNSZXNwb25zZSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7cG9zdFBhZ2luYXRpb24scHJldmlldyB9LFxuICB9O1xuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})