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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/post/[slug].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Header/header.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Header/header.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header_header__3Qn1F\",\n\t\"logoHeader\": \"header_logoHeader__28mx9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLm1vZHVsZS5zY3NzPzc3YmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlYWRlci9oZWFkZXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJoZWFkZXJfaGVhZGVyX18zUW4xRlwiLFxuXHRcImxvZ29IZWFkZXJcIjogXCJoZWFkZXJfbG9nb0hlYWRlcl9fMjhteDlcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/header.module.scss\n");

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.module.scss */ \"./src/components/Header/header.module.scss\");\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/luan/Documentos/IgniteDesafio4/src/components/Header/index.tsx\";\n\nfunction Header() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logoHeader,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/images/Logo.png\",\n          alt: \"logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 3\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4P2FlZWIiXSwibmFtZXMiOlsiSGVhZGVyIiwic3R5bGVzIiwiaGVhZGVyIiwibG9nb0hlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUllLFNBQVNBLE1BQVQsR0FBa0I7QUFFL0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUlDLDBEQUFNLENBQUNDLE1BQXpCO0FBQUEsMkJBQ0U7QUFBTyxlQUFTLEVBQUdELDBEQUFNLENBQUNFLFVBQTFCO0FBQUEsNkJBQ0U7QUFBRyxZQUFJLEVBQUUsR0FBVDtBQUFBLCtCQUNOO0FBQU0sYUFBRyxFQUFFLGtCQUFYO0FBQThCLGFBQUcsRUFBRztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5zY3NzJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmhlYWRlcn0+XG4gICAgICA8ZGl2ICAgY2xhc3NOYW1lPSB7c3R5bGVzLmxvZ29IZWFkZXJ9PlxuICAgICAgICA8YSBocmVmPSBcIi9cIj5cbiAgPGltZyAgc3JjID0nL2ltYWdlcy9Mb2dvLnBuZycgYWx0ID0gXCJsb2dvXCIvPlxuICA8L2E+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n");

/***/ }),

/***/ "./src/pages/post/[slug].tsx":
/*!***********************************!*\
  !*** ./src/pages/post/[slug].tsx ***!
  \***********************************/
/*! exports provided: default, getStaticPaths, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/prismic */ \"./src/services/prismic.ts\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/post/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"react-icons/ai\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"react-icons/bi\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/luan/Documentos/IgniteDesafio4/src/pages/post/[slug].tsx\";\n\n\n\n\n\nfunction Post({\n  post\n}) {\n  const totalTimeReading = () => {\n    let totalWord;\n    let totalTime;\n    post.data.content.map(item => {\n      totalWord += item.body[0].text;\n    });\n    totalTime = Math.ceil(totalWord.toString().length / 200);\n    return totalTime;\n  };\n\n  const totalTime = totalTimeReading();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.banner,\n        src: post.data.banner.url,\n        alt: \"banner\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 3\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.post,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n          children: post.data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.DateAndAuthor,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__[\"AiOutlineCalendar\"], {\n            className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.calendaricon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n            children: post.first_publication_date\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__[\"AiOutlineUser\"], {\n            className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.usericon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: post.data.author\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__[\"BiTimeFive\"], {\n            className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.clockicon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [totalTime, \" min\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postContent,\n          children: post.data.content.map(item => {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.bodyText,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heading,\n                  children: item.heading\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 82,\n                  columnNumber: 11\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,\n                  children: item.body[0].text\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 11\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 9\n              }, this)\n            }, void 0, false);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 3\n    }, this)]\n  }, void 0, true);\n}\nconst getStaticPaths = async () => {\n  const prismic = Object(_services_prismic__WEBPACK_IMPORTED_MODULE_1__[\"getPrismicClient\"])(); //const posts = await prismic.query();\n\n  return {\n    paths: [],\n    fallback: 'blocking'\n  };\n};\nconst getStaticProps = async ({\n  params\n}) => {\n  const {\n    slug\n  } = params;\n  const prismic = Object(_services_prismic__WEBPACK_IMPORTED_MODULE_1__[\"getPrismicClient\"])();\n  const response = await prismic.getByUID('post', String(slug), {});\n  const post = {\n    first_publication_date: new Date(response.first_publication_date).toLocaleDateString('pt-br', {\n      day: '2-digit',\n      month: 'long',\n      year: 'numeric'\n    }),\n    data: {\n      author: response.data.author,\n      title: response.data.title,\n      banner: response.data.banner,\n      content: response.data.content.map(item => {\n        return {\n          heading: item.heading,\n          body: item.body\n        };\n      }) //content:RichText.asHtml(response.data.content)\n\n    }\n  };\n  return {\n    props: {\n      post\n    },\n    redirect: 60 * 30\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcG9zdC9bc2x1Z10udHN4PzQ2NzMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJ0b3RhbFRpbWVSZWFkaW5nIiwidG90YWxXb3JkIiwidG90YWxUaW1lIiwiZGF0YSIsImNvbnRlbnQiLCJtYXAiLCJpdGVtIiwiYm9keSIsInRleHQiLCJNYXRoIiwiY2VpbCIsInRvU3RyaW5nIiwibGVuZ3RoIiwic3R5bGVzIiwiY29udGFpbmVyIiwiYmFubmVyIiwidXJsIiwidGl0bGUiLCJEYXRlQW5kQXV0aG9yIiwiY2FsZW5kYXJpY29uIiwiZmlyc3RfcHVibGljYXRpb25fZGF0ZSIsInVzZXJpY29uIiwiYXV0aG9yIiwiY2xvY2tpY29uIiwicG9zdENvbnRlbnQiLCJib2R5VGV4dCIsImhlYWRpbmciLCJnZXRTdGF0aWNQYXRocyIsInByaXNtaWMiLCJnZXRQcmlzbWljQ2xpZW50IiwicGF0aHMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwic2x1ZyIsInJlc3BvbnNlIiwiZ2V0QnlVSUQiLCJTdHJpbmciLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwicHJvcHMiLCJyZWRpcmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBd0JlLFNBQVNBLElBQVQsQ0FBYztBQUFDQztBQUFELENBQWQsRUFBZ0M7QUFJN0MsUUFBTUMsZ0JBQWdCLEdBQUksTUFBTTtBQUNoQyxRQUFJQyxTQUFKO0FBQ0EsUUFBSUMsU0FBSjtBQUVDSCxRQUFJLENBQUNJLElBQUwsQ0FBVUMsT0FBVixDQUFrQkMsR0FBbEIsQ0FBc0JDLElBQUksSUFBSTtBQUM3QkwsZUFBUyxJQUFJSyxJQUFJLENBQUNDLElBQUwsQ0FBVSxDQUFWLEVBQWFDLElBQTFCO0FBRUQsS0FIQTtBQUlETixhQUFTLEdBQUdPLElBQUksQ0FBQ0MsSUFB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QUdDLDBFQUFnQixFQUFoQztBQUNBLFFBQU1NLFFBQVEsR0FBRyxNQUFNUCxPQUFPLENBQUNRLFFBQVIsQ0FBaUIsTUFBakIsRUFBd0JDLE1BQU0sQ0FBQ0gsSUFBRCxDQUE5QixFQUFxQyxFQUFyQyxDQUF2QjtBQUtBLFFBQU1uQyxJQUFJLEdBQUc7QUFDWHFCLDBCQUFzQixFQUFDLElBQUlrQixJQUFKLENBQVNILFFBQVEsQ0FBQ2Ysc0JBQWxCLEVBQTBDbUIsa0JBQTFDLENBQTZELE9BQTdELEVBQXFFO0FBQzFGQyxTQUFHLEVBQUMsU0FEc0Y7QUFFMUZDLFdBQUssRUFBRSxNQUZtRjtBQUcxRkMsVUFBSSxFQUFFO0FBSG9GLEtBQXJFLENBRFo7QUFNWHZDLFFBQUksRUFBRTtBQUNObUIsWUFBTSxFQUFDYSxRQUFRLENBQUNoQyxJQUFULENBQWNtQixNQURmO0FBRU5MLFdBQUssRUFBQ2tCLFFBQVEsQ0FBQ2hDLElBQVQsQ0FBY2MsS0FGZDtBQUdORixZQUFNLEVBQUNvQixRQUFRLENBQUNoQyxJQUFULENBQWNZLE1BSGY7QUFJSlgsYUFBTyxFQUFDK0IsUUFBUSxDQUFDaEMsSUFBVCxDQUFjQyxPQUFkLENBQXNCQyxHQUF0QixDQUEyQkMsSUFBSSxJQUFJO0FBQ3pDLGVBQU87QUFDTG9CLGlCQUFPLEVBQUNwQixJQUFJLENBQUNvQixPQURSO0FBRUxuQixjQUFJLEVBQUNELElBQUksQ0FBQ0M7QUFGTCxTQUFQO0FBSUQsT0FMTyxDQUpKLENBV047O0FBWE07QUFOSyxHQUFiO0FBd0JBLFNBQU87QUFDTG9DLFNBQUssRUFBRTtBQUNMNUM7QUFESyxLQURGO0FBSUw2QyxZQUFRLEVBQUMsS0FBRztBQUpQLEdBQVA7QUFNQSxDQXhDSyIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb3N0L1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcblxuaW1wb3J0IHsgZ2V0UHJpc21pY0NsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ByaXNtaWMnO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tICdwcmlzbWljLWRvbSc7XG5pbXBvcnQgY29tbW9uU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jb21tb24ubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Bvc3QubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBoZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IEFpT3V0bGluZUNhbGVuZGFyLEFpT3V0bGluZVVzZXJ9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xuaW1wb3J0IHsgQmlUaW1lRml2ZX0gZnJvbSAncmVhY3QtaWNvbnMvYmknO1xuXG5cbmludGVyZmFjZSBQb3N0IHtcbiAgZmlyc3RfcHVibGljYXRpb25fZGF0ZTogc3RyaW5nIHwgbnVsbDtcbiAgZGF0YToge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgYmFubmVyOiB7XG4gICAgICB1cmw6IHN0cmluZztcbiAgICB9O1xuICAgIGF1dGhvcjogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgIGhlYWRpbmc6IHN0cmluZztcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgfVtdO1xuICAgIH1bXTtcbiAgfTtcbn1cblxuaW50ZXJmYWNlIFBvc3RQcm9wcyB7XG4gIHBvc3Q6IFBvc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3Qoe3Bvc3R9OlBvc3RQcm9wcykge1xuIFxuXG5cbiAgY29uc3QgdG90YWxUaW1lUmVhZGluZyA9ICAoKSA9PiB7IFxuICBsZXQgdG90YWxXb3JkXG4gIGxldCB0b3RhbFRpbWVcbiAgXG4gICBwb3N0LmRhdGEuY29udGVudC5tYXAoaXRlbSA9PiB7XG4gICAgdG90YWxXb3JkICs9IGl0ZW0uYm9keVswXS50ZXh0XG5cbiAgfSlcbiAgdG90YWxUaW1lID0gTWF0aC5jZWlsKHRvdGFsV29yZC50b1N0cmluZygpLmxlbmd0aC8yMDApXG5yZXR1cm4gdG90YWxUaW1lXG59XG4gIFxuXG4gY29uc3QgdG90YWxUaW1lID0gdG90YWxUaW1lUmVhZGluZygpXG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8SGVhZGVyLz5cbiAgXG4gIDxtYWluIGNsYXNzTmFtZSA9IHtzdHlsZXMuY29udGFpbmVyfT5cbiAgPGltZyBjbGFzc05hbWU9IHtzdHlsZXMuYmFubmVyfSBzcmMgPSB7cG9zdC5kYXRhLmJhbm5lci51cmx9IGFsdCA9IFwiYmFubmVyXCIvPlxuICBcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWUgPSB7c3R5bGVzLnBvc3R9PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cG9zdC5kYXRhLnRpdGxlfTwvaDE+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSB7c3R5bGVzLkRhdGVBbmRBdXRob3J9PiBcblxuICAgICAgPEFpT3V0bGluZUNhbGVuZGFyIGNsYXNzTmFtZSA9IHsgc3R5bGVzLmNhbGVuZGFyaWNvbiB9PjwvQWlPdXRsaW5lQ2FsZW5kYXI+XG4gICAgICA8dGltZT57cG9zdC5maXJzdF9wdWJsaWNhdGlvbl9kYXRlfTwvdGltZT5cbiAgICAgIDxBaU91dGxpbmVVc2VyIGNsYXNzTmFtZT0ge3N0eWxlcy51c2VyaWNvbn0+PC9BaU91dGxpbmVVc2VyPlxuICAgICAgPHA+e3Bvc3QuZGF0YS5hdXRob3J9PC9wPlxuICAgICAgPEJpVGltZUZpdmUgY2xhc3NOYW1lPSB7c3R5bGVzLmNsb2NraWNvbn0vPlxuICAgICAgPHA+e3RvdGFsVGltZX0gbWluPC9wPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWUgPSAge3N0eWxlcy5wb3N0Q29udGVudH0+XG4gICAgICAgXG4gICAgICAgIHtwb3N0LmRhdGEuY29udGVudC5tYXAoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge3N0eWxlcy5ib2R5VGV4dH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lID0ge3N0eWxlcy5oZWFkaW5nfT5cbiAgICAgICAgICB7aXRlbS5oZWFkaW5nfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWUgPSB7c3R5bGVzLnRleHR9PlxuICAgICAgICAgICAge2l0ZW0uYm9keVswXS50ZXh0fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgIClcbiAgICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICBcbiAgICA8L2FydGljbGU+XG4gIDwvbWFpbj5cblxuIFxuICAgXG4gICA8Lz5cbiAgKVxuICBcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcmlzbWljID0gZ2V0UHJpc21pY0NsaWVudCgpO1xuICAvL2NvbnN0IHBvc3RzID0gYXdhaXQgcHJpc21pYy5xdWVyeSgpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IFtdLFxuICAgIGZhbGxiYWNrOidibG9ja2luZydcbiAgfVxuIH07XG5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHtwYXJhbXN9KSA9PiB7XG4gIFxuICBjb25zdCB7c2x1Z30gPSBwYXJhbXNcbiBcbiAgY29uc3QgcHJpc21pYyA9IGdldFByaXNtaWNDbGllbnQoKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcmlzbWljLmdldEJ5VUlEKCdwb3N0JyxTdHJpbmcoc2x1Zykse30pO1xuXG5cblxuXG4gIGNvbnN0IHBvc3QgPSB7XG4gICAgZmlyc3RfcHVibGljYXRpb25fZGF0ZTpuZXcgRGF0ZShyZXNwb25zZS5maXJzdF9wdWJsaWNhdGlvbl9kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ3B0LWJyJyx7XG4gICAgICBkYXk6JzItZGlnaXQnLFxuICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgIHllYXI6ICdudW1lcmljJ1xuICAgIH0pLFxuICAgIGRhdGE6IHsgXG4gICAgYXV0aG9yOnJlc3BvbnNlLmRhdGEuYXV0aG9yLFxuICAgIHRpdGxlOnJlc3BvbnNlLmRhdGEudGl0bGUsXG4gICAgYmFubmVyOnJlc3BvbnNlLmRhdGEuYmFubmVyLFxuICAgICAgY29udGVudDpyZXNwb25zZS5kYXRhLmNvbnRlbnQubWFwIChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoZWFkaW5nOml0ZW0uaGVhZGluZyxcbiAgICAgICAgICBib2R5Oml0ZW0uYm9keVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIFxuICAgIC8vY29udGVudDpSaWNoVGV4dC5hc0h0bWwocmVzcG9uc2UuZGF0YS5jb250ZW50KVxuICB9LFxuICAgXG4gIH1cblxuXG4gXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RcbiAgICB9LFxuICAgIHJlZGlyZWN0OjYwKjMwLFxuICB9XG4gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/post/[slug].tsx\n");

/***/ }),

/***/ "./src/pages/post/post.module.scss":
/*!*****************************************!*\
  !*** ./src/pages/post/post.module.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"post_container__3BS1P\",\n\t\"banner\": \"post_banner__3a1mH\",\n\t\"title\": \"post_title__3tPRa\",\n\t\"post\": \"post_post__198qE\",\n\t\"bodyText\": \"post_bodyText__2U_KT\",\n\t\"heading\": \"post_heading__ELMBH\",\n\t\"text\": \"post_text__3Tg7u\",\n\t\"DateAndAuthor\": \"post_DateAndAuthor__3DgeV\",\n\t\"calendaricon\": \"post_calendaricon__3P0G1\",\n\t\"usericon\": \"post_usericon__18N9q\",\n\t\"clockicon\": \"post_clockicon__gusDs\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcG9zdC9wb3N0Lm1vZHVsZS5zY3NzP2ViMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb3N0L3Bvc3QubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJwb3N0X2NvbnRhaW5lcl9fM0JTMVBcIixcblx0XCJiYW5uZXJcIjogXCJwb3N0X2Jhbm5lcl9fM2ExbUhcIixcblx0XCJ0aXRsZVwiOiBcInBvc3RfdGl0bGVfXzN0UFJhXCIsXG5cdFwicG9zdFwiOiBcInBvc3RfcG9zdF9fMTk4cUVcIixcblx0XCJib2R5VGV4dFwiOiBcInBvc3RfYm9keVRleHRfXzJVX0tUXCIsXG5cdFwiaGVhZGluZ1wiOiBcInBvc3RfaGVhZGluZ19fRUxNQkhcIixcblx0XCJ0ZXh0XCI6IFwicG9zdF90ZXh0X18zVGc3dVwiLFxuXHRcIkRhdGVBbmRBdXRob3JcIjogXCJwb3N0X0RhdGVBbmRBdXRob3JfXzNEZ2VWXCIsXG5cdFwiY2FsZW5kYXJpY29uXCI6IFwicG9zdF9jYWxlbmRhcmljb25fXzNQMEcxXCIsXG5cdFwidXNlcmljb25cIjogXCJwb3N0X3VzZXJpY29uX18xOE45cVwiLFxuXHRcImNsb2NraWNvblwiOiBcInBvc3RfY2xvY2tpY29uX19ndXNEc1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/post/post.module.scss\n");

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/*! exports provided: getPrismicClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPrismicClient\", function() { return getPrismicClient; });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default.a.client(process.env.PRISMIC_API_ENDPOINT, {\n    req\n  });\n  return prismic;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcHJpc21pYy50cz84YzUwIl0sIm5hbWVzIjpbImdldFByaXNtaWNDbGllbnQiLCJyZXEiLCJwcmlzbWljIiwiUHJpc21pYyIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUlDX0FQSV9FTkRQT0lOVCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdPLFNBQVNBLGdCQUFULENBQTBCQyxHQUExQixFQUF3RDtBQUM3RCxRQUFNQyxPQUFPLEdBQUdDLHdEQUFPLENBQUNDLE1BQVIsQ0FBZUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG9CQUEzQixFQUFpRDtBQUMvRE47QUFEK0QsR0FBakQsQ0FBaEI7QUFJQSxTQUFPQyxPQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcHJpc21pYy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlzbWljIGZyb20gJ0BwcmlzbWljaW8vY2xpZW50JztcbmltcG9ydCB7IERlZmF1bHRDbGllbnQgfSBmcm9tICdAcHJpc21pY2lvL2NsaWVudC90eXBlcy9jbGllbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpc21pY0NsaWVudChyZXE/OiB1bmtub3duKTogRGVmYXVsdENsaWVudCB7XG4gIGNvbnN0IHByaXNtaWMgPSBQcmlzbWljLmNsaWVudChwcm9jZXNzLmVudi5QUklTTUlDX0FQSV9FTkRQT0lOVCwge1xuICAgIHJlcSxcbiAgfSk7XG5cbiAgcmV0dXJuIHByaXNtaWM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/prismic.ts\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prismicio/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21pY2lvL2NsaWVudFwiPzdiNTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtaWNpby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21pY2lvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prismicio/client\n");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/ai\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9haVwiPzQ4OTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvYWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/ai\n");

/***/ }),

/***/ "react-icons/bi":
/*!*********************************!*\
  !*** external "react-icons/bi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/bi\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9iaVwiPzEyNDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvYmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9iaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/bi\n");

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