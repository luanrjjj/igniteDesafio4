webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _services_formattingData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/formattingData */ \"./src/services/formattingData.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/luan/Documentos/IgniteDesafio4/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var postPagination = _ref.postPagination,\n      preview = _ref.preview;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(postPagination.next_page),\n      nextPage = _useState[0],\n      setNextPage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(postPagination.results),\n      posts = _useState2[0],\n      setPosts = _useState2[1];\n\n  function loadMorePosts() {\n    return _loadMorePosts.apply(this, arguments);\n  }\n\n  function _loadMorePosts() {\n    _loadMorePosts = Object(_home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(nextPage ? nextPage : '').then(function (response) {\n                return response.json();\n              }).then(function (data) {\n                var formattedData = Object(_services_formattingData__WEBPACK_IMPORTED_MODULE_11__[\"postFormatter\"])(data);\n                setPosts([].concat(Object(_home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(posts), Object(_home_luan_Documentos_IgniteDesafio4_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(formattedData.results)));\n                setNextPage(formattedData.next_page);\n              });\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _loadMorePosts.apply(this, arguments);\n  }\n\n  console.log(300, posts);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n        children: \" Posts| Ignews\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 3\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 2\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.posts,\n      children: [posts.map(function (post) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n            href: \"/post/\".concat(post.uid),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"strong\", {\n                children: post.data.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 7\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                children: post.data.subtitle\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 7\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n                className: _home_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.DateAndAuthor,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__[\"AiOutlineCalendar\"], {\n                  className: _home_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.calendaricon\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 84,\n                  columnNumber: 7\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"time\", {\n                  children: post.first_publication_date\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 7\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__[\"AiOutlineUser\"], {\n                  className: _home_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.usericon\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 7\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                  children: post.data.author\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 87,\n                  columnNumber: 7\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 7\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 7\n            }, _this)\n          }, post.uid, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false);\n      }), nextPage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        className: _home_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.LoadMore,\n        onClick: loadMorePosts,\n        children: \"Carregar mais posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 1\n      }, this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 2\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"CYYbZ9pqCQYAmxp5GtN2z3D6pqk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJwb3N0UGFnaW5hdGlvbiIsInByZXZpZXciLCJ1c2VTdGF0ZSIsIm5leHRfcGFnZSIsIm5leHRQYWdlIiwic2V0TmV4dFBhZ2UiLCJyZXN1bHRzIiwicG9zdHMiLCJzZXRQb3N0cyIsImxvYWRNb3JlUG9zdHMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZm9ybWF0dGVkRGF0YSIsInBvc3RGb3JtYXR0ZXIiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwidXNlUm91dGVyIiwic3R5bGVzIiwibWFwIiwicG9zdCIsInVpZCIsInRpdGxlIiwic3VidGl0bGUiLCJEYXRlQW5kQXV0aG9yIiwiY2FsZW5kYXJpY29uIiwiZmlyc3RfcHVibGljYXRpb25fZGF0ZSIsInVzZXJpY29uIiwiYXV0aG9yIiwiTG9hZE1vcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQThCZSxTQUFTQSxJQUFULE9BQWtEO0FBQUE7O0FBQUE7O0FBQUEsTUFBbkNDLGNBQW1DLFFBQW5DQSxjQUFtQztBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7O0FBQUEsa0JBRWhDQyxzREFBUSxDQUFDRixjQUFjLENBQUNHLFNBQWhCLENBRndCO0FBQUEsTUFFeERDLFFBRndEO0FBQUEsTUFFL0NDLFdBRitDOztBQUFBLG1CQUd0Q0gsc0RBQVEsQ0FBQ0YsY0FBYyxDQUFDTSxPQUFoQixDQUg4QjtBQUFBLE1BR3hEQyxLQUh3RDtBQUFBLE1BR2xEQyxRQUhrRDs7QUFBQSxXQU9sREMsYUFQa0Q7QUFBQTtBQUFBOztBQUFBO0FBQUEsNFVBT2pFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVRQyxLQUFLLENBQUNOLFFBQVEsR0FBR0EsUUFBSCxHQUFZLEVBQXJCLENBQUwsQ0FDTE8sSUFESyxDQUNDLFVBQUFDLFFBQVE7QUFBQSx1QkFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxlQURULEVBRUxGLElBRkssQ0FFQSxVQUFBRyxJQUFJLEVBQUk7QUFDWixvQkFBTUMsYUFBYSxHQUFJQywrRUFBYSxDQUFDRixJQUFELENBQXBDO0FBQ0VOLHdCQUFRLDJLQUFNRCxLQUFOLG1LQUFlUSxhQUFhLENBQUNULE9BQTdCLEdBQVI7QUFDQUQsMkJBQVcsQ0FBQ1UsYUFBYSxDQUFDWixTQUFmLENBQVg7QUFFRCxlQVBHLENBRlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FQaUU7QUFBQTtBQUFBOztBQXFCakVjLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosRUFBZ0JYLEtBQWhCO0FBRUUsTUFBTVksTUFBTSxHQUFHQyw4REFBUyxFQUF4QjtBQUNGLHNCQUVFO0FBQUEsNEJBQ0EscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUtELHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMQyxlQU1EO0FBQUssZUFBUyxFQUFLQyx3REFBTSxDQUFDZCxLQUExQjtBQUFBLGlCQUNJQSxLQUFLLENBQUNlLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsNEJBQ2I7QUFBQSxpQ0FDQSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLGtCQUFhQSxJQUFJLENBQUNDLEdBQWxCLENBQVY7QUFBQSxtQ0FDQTtBQUFBLHNDQUNBO0FBQUEsMEJBQVNELElBQUksQ0FBQ1QsSUFBTCxDQUFVVztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURBLGVBRUE7QUFBQSwwQkFBSUYsSUFBSSxDQUFDVCxJQUFMLENBQVVZO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGQSxlQUdBO0FBQUsseUJBQVMsRUFBR0wsd0RBQU0sQ0FBQ00sYUFBeEI7QUFBQSx3Q0FDQSxxRUFBQyxnRUFBRDtBQUFtQiwyQkFBUyxFQUFLTix3REFBTSxDQUFDTztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURBLGVBRUE7QUFBQSw0QkFBT0wsSUFBSSxDQUFDTTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkEsZUFHQSxxRUFBQyw0REFBRDtBQUFlLDJCQUFTLEVBQUdSLHdEQUFNLENBQUNTO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEEsZUFJQTtBQUFBLDRCQUFJUCxJQUFJLENBQUNULElBQUwsQ0FBVWlCO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsYUFBMkNSLElBQUksQ0FBQ0MsR0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLHlCQURhO0FBQUEsT0FBZCxDQURKLEVBb0JJcEIsUUFBUSxnQkFDYjtBQUFRLGlCQUFTLEVBQUlpQix3REFBTSxDQUFDVyxRQUE1QjtBQUFzQyxlQUFPLEVBQUl2QixhQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURhLEdBS1osSUF6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkM7QUFBQSxrQkFGRjtBQXdDQzs7R0FoRXVCVixJO1VBdUJQcUIsc0Q7OztLQXZCT3JCLEkiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IGFwaVJlc29sdmVyIH0gZnJvbSAnbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9hcGktdXRpbHMnO1xuaW1wb3J0IFByaXNtaWMgZnJvbSAnQHByaXNtaWNpby9jbGllbnQnXG5pbXBvcnQgeyBBaU91dGxpbmVDYWxlbmRhcixBaU91dGxpbmVVc2VyfSBmcm9tICdyZWFjdC1pY29ucy9haSdcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgZ2V0UHJpc21pY0NsaWVudCB9IGZyb20gJy4uL3NlcnZpY2VzL3ByaXNtaWMnO1xuaW1wb3J0IHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IGNvbW1vblN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tbW9uLm1vZHVsZS5zY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHtwb3N0Rm9ybWF0dGVyfSBmcm9tICcuLi9zZXJ2aWNlcy9mb3JtYXR0aW5nRGF0YSdcblxuXG5cbmludGVyZmFjZSBQb3N0IHtcbiBcbiAgdWlkPzogc3RyaW5nO1xuICBmaXJzdF9wdWJsaWNhdGlvbl9kYXRlOiBzdHJpbmcgfCBudWxsO1xuICBkYXRhOiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBzdWJ0aXRsZTogc3RyaW5nO1xuICAgIGF1dGhvcjogc3RyaW5nO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgUG9zdHNQcm9wcyB7XG4gIHBvc3RzOiBQb3N0IFtdXG59XG5cbmludGVyZmFjZSBQb3N0UGFnaW5hdGlvbiB7XG4gIG5leHRfcGFnZTogc3RyaW5nO1xuXG4gIHJlc3VsdHM6IFBvc3RbXTtcbn1cblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHBvc3RQYWdpbmF0aW9uOiBQb3N0UGFnaW5hdGlvbjtcbiAgcHJldmlldzpib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtwb3N0UGFnaW5hdGlvbixwcmV2aWV3fTpIb21lUHJvcHMpIHtcblxuICBjb25zdCBbbmV4dFBhZ2Usc2V0TmV4dFBhZ2VdID0gdXNlU3RhdGUocG9zdFBhZ2luYXRpb24ubmV4dF9wYWdlKTtcbiAgY29uc3QgW3Bvc3RzLHNldFBvc3RzXSA9IHVzZVN0YXRlKHBvc3RQYWdpbmF0aW9uLnJlc3VsdHMpO1xuICBcblxuXG5hc3luYyBmdW5jdGlvbiBsb2FkTW9yZVBvc3RzICgpIHtcblxuICBhd2FpdCBmZXRjaChuZXh0UGFnZSA/IG5leHRQYWdlOicnKVxuICAudGhlbiAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbihkYXRhID0+IHtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gIHBvc3RGb3JtYXR0ZXIoZGF0YSk7XG4gICAgICBzZXRQb3N0cyggWy4uLnBvc3RzLC4uLmZvcm1hdHRlZERhdGEucmVzdWx0c10pXG4gICAgICBzZXROZXh0UGFnZShmb3JtYXR0ZWREYXRhLm5leHRfcGFnZSlcblxuICAgIH0pXG4gIH1cblxuXG5cbmNvbnNvbGUubG9nKDMwMCxwb3N0cylcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxucmV0dXJuIChcblxuICA8PlxuICA8SGVhZD5cbiAgICA8dGl0bGU+IFBvc3RzfCBJZ25ld3M8L3RpdGxlPlxuICA8L0hlYWQ+XG5cbiA8SGVhZGVyLz5cbiA8ZGl2IGNsYXNzTmFtZSA9IHsgc3R5bGVzLnBvc3RzfT5cbiAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgPD5cbiAgICAgIDxMaW5rIGhyZWYgPSB7YC9wb3N0LyR7cG9zdC51aWR9YH0gIGtleSA9IHtwb3N0LnVpZH0gPlxuICAgICAgPGE+XG4gICAgICA8c3Ryb25nPntwb3N0LmRhdGEudGl0bGV9PC9zdHJvbmc+XG4gICAgICA8cD57cG9zdC5kYXRhLnN1YnRpdGxlfTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSB7c3R5bGVzLkRhdGVBbmRBdXRob3J9PiBcbiAgICAgIDxBaU91dGxpbmVDYWxlbmRhciBjbGFzc05hbWUgPSB7IHN0eWxlcy5jYWxlbmRhcmljb24gfT48L0FpT3V0bGluZUNhbGVuZGFyPlxuICAgICAgPHRpbWU+e3Bvc3QuZmlyc3RfcHVibGljYXRpb25fZGF0ZX08L3RpbWU+XG4gICAgICA8QWlPdXRsaW5lVXNlciBjbGFzc05hbWU9IHtzdHlsZXMudXNlcmljb259PjwvQWlPdXRsaW5lVXNlcj5cbiAgICAgIDxwPntwb3N0LmRhdGEuYXV0aG9yfTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8L2E+XG4gICAgICA8L0xpbms+XG48Lz5cbiAgICAgICkpXG4gICAgfVxuXG4gICAge25leHRQYWdlPyAoXG48YnV0dG9uIGNsYXNzTmFtZSA9IHtzdHlsZXMuTG9hZE1vcmV9IG9uQ2xpY2sgPSB7bG9hZE1vcmVQb3N0c30+XG4gIENhcnJlZ2FyIG1haXMgcG9zdHNcbjwvYnV0dG9uPlxuICAgIClcbjpudWxsXG59XG48L2Rpdj5cbiAgXG4gIDwvPlxuICAgIFxuKVxufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcz0gYXN5bmMgKHtcbiBwcmV2aWV3PWZhbHNlLFxuICBwcmV2aWV3RGF0YSxcbn0pID0+IHtcblxuXG4gIGNvbnN0IHByaXNtaWMgPSBnZXRQcmlzbWljQ2xpZW50KCk7XG4gIFxuICBcbiAgXG4gIGNvbnN0IHBvc3RzUmVzcG9uc2UgPSBhd2FpdCBwcmlzbWljLnF1ZXJ5KFxuICAgIFtQcmlzbWljLlByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCdwb3N0JyldLFxuICAgIHtcbiAgICAgIGZldGNoOlsnZG9jdW1lbnQudHlwZScsJ3Bvc3QnXSxcbiAgICAgIHBhZ2VTaXplOjEsXG4gICAgICByZWY6cHJldmlld0RhdGE/LnJlZj8/bnVsbCxcbiAgICB9IFxuICApOyBcblxuICBcbiAgY29uc3QgcG9zdFBhZ2luYXRpb24gPSBwb3N0Rm9ybWF0dGVyKHBvc3RzUmVzcG9uc2UpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge3Bvc3RQYWdpbmF0aW9uLHByZXZpZXcgfSxcbiAgfTtcblxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})