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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/prismic */ \"./src/services/prismic.ts\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/post/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"react-icons/ai\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"react-icons/bi\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/luan/Documentos/IgniteDesafio4/src/pages/post/[slug].tsx\";\n\n\n\n\n\nfunction Post({\n  post\n}) {\n  const totalTimeReading = () => {\n    let totalWord;\n    let totalTime;\n    post.data.content.map(item => {\n      totalWord += item.body[0].text;\n    });\n    totalTime = Math.ceil(totalWord.toString().length / 200);\n    return totalTime;\n  };\n\n  const totalTime = totalTimeReading();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.banner,\n        src: post.data.banner.url,\n        alt: \"banner\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 3\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.post,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n          children: post.data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.DateAndAuthor,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__[\"AiOutlineCalendar\"], {\n            className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.calendaricon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n            children: post.first_publication_date\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__[\"AiOutlineUser\"], {\n            className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.usericon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: post.data.author\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__[\"BiTimeFive\"], {\n            className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.clockicon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [totalTime, \" min\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postContent,\n          children: post.data.content.map(item => {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.bodyText,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heading,\n                  children: item.heading\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 83,\n                  columnNumber: 11\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,\n                  children: item.body[0].text\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 11\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 9\n              }, this)\n            }, void 0, false);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 3\n    }, this)]\n  }, void 0, true);\n}\nconst getStaticPaths = async () => {\n  const prismic = Object(_services_prismic__WEBPACK_IMPORTED_MODULE_1__[\"getPrismicClient\"])(); //const posts = await prismic.query();\n\n  return {\n    paths: [],\n    fallback: 'blocking'\n  };\n};\nconst getStaticProps = async ({\n  params\n}) => {\n  const {\n    slug\n  } = params;\n  const prismic = Object(_services_prismic__WEBPACK_IMPORTED_MODULE_1__[\"getPrismicClient\"])();\n  const response = await prismic.getByUID('post', String(slug), {});\n  const post = {\n    first_publication_date: response.first_publication_date,\n    last_publication_date: response.last_publication_date,\n    uid: response.uid,\n    data: {\n      author: response.data.author,\n      title: response.data.title,\n      subtitle: response.data.subtitle,\n      banner: response.data.banner,\n      content: response.data.content.map(item => {\n        return {\n          heading: item.heading,\n          body: item.body\n        };\n      })\n    }\n  };\n  return {\n    props: {\n      post\n    },\n    redirect: 60 * 30\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcG9zdC9bc2x1Z10udHN4PzQ2NzMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJ0b3RhbFRpbWVSZWFkaW5nIiwidG90YWxXb3JkIiwidG90YWxUaW1lIiwiZGF0YSIsImNvbnRlbnQiLCJtYXAiLCJpdGVtIiwiYm9keSIsInRleHQiLCJNYXRoIiwiY2VpbCIsInRvU3RyaW5nIiwibGVuZ3RoIiwic3R5bGVzIiwiY29udGFpbmVyIiwiYmFubmVyIiwidXJsIiwidGl0bGUiLCJEYXRlQW5kQXV0aG9yIiwiY2FsZW5kYXJpY29uIiwiZmlyc3RfcHVibGljYXRpb25fZGF0ZSIsInVzZXJpY29uIiwiYXV0aG9yIiwiY2xvY2tpY29uIiwicG9zdENvbnRlbnQiLCJib2R5VGV4dCIsImhlYWRpbmciLCJnZXRTdGF0aWNQYXRocyIsInByaXNtaWMiLCJnZXRQcmlzbWljQ2xpZW50IiwicGF0aHMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwic2x1ZyIsInJlc3BvbnNlIiwiZ2V0QnlVSUQiLCJTdHJpbmciLCJsYXN0X3B1YmxpY2F0aW9uX2RhdGUiLCJ1aWQiLCJzdWJ0aXRsZSIsInByb3BzIiwicmVkaXJlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQXlCZSxTQUFTQSxJQUFULENBQWM7QUFBQ0M7QUFBRCxDQUFkLEVBQWdDO0FBSTdDLFFBQU1DLGdCQUFnQixHQUFJLE1BQU07QUFDaEMsUUFBSUMsU0FBSjtBQUNBLFFBQUlDLFNBQUo7QUFFQ0gsUUFBSSxDQUFDSSxJQUFMLENBQVVDLE9BQVYsQ0FBa0JDLEdBQWxCLENBQXNCQyxJQUFJLElBQUk7QUFDN0JMLGVBQVMsSUFBSUssSUFBSSxDQUFDQyxJQUFMLENBQVUsQ0FBVixFQUFhQyxJQUExQjtBQUVELEtBSEE7QUFJRE4sYUFBUyxHQUFHTyxJQUFJLENBQUNDLElBQUwsQ0FBVVQs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Z0IsRUFBaEM7QUFDQSxRQUFNTSxRQUFRLEdBQUcsTUFBTVAsT0FBTyxDQUFDUSxRQUFSLENBQWlCLE1BQWpCLEVBQXdCQyxNQUFNLENBQUNILElBQUQsQ0FBOUIsRUFBcUMsRUFBckMsQ0FBdkI7QUFLQSxRQUFNbkMsSUFBSSxHQUFHO0FBQ1hxQiwwQkFBc0IsRUFBQ2UsUUFBUSxDQUFDZixzQkFEckI7QUFFWGtCLHlCQUFxQixFQUFFSCxRQUFRLENBQUNHLHFCQUZyQjtBQUdYQyxPQUFHLEVBQUNKLFFBQVEsQ0FBQ0ksR0FIRjtBQUlYcEMsUUFBSSxFQUFFO0FBQ0htQixZQUFNLEVBQUNhLFFBQVEsQ0FBQ2hDLElBQVQsQ0FBY21CLE1BRGxCO0FBRUhMLFdBQUssRUFBQ2tCLFFBQVEsQ0FBQ2hDLElBQVQsQ0FBY2MsS0FGakI7QUFHSHVCLGNBQVEsRUFBQ0wsUUFBUSxDQUFDaEMsSUFBVCxDQUFjcUMsUUFIcEI7QUFJSHpCLFlBQU0sRUFBQ29CLFFBQVEsQ0FBQ2hDLElBQVQsQ0FBY1ksTUFKbEI7QUFLSFgsYUFBTyxFQUFDK0IsUUFBUSxDQUFDaEMsSUFBVCxDQUFjQyxPQUFkLENBQXNCQyxHQUF0QixDQUEyQkMsSUFBSSxJQUFJO0FBQzFDLGVBQU87QUFDTG9CLGlCQUFPLEVBQUNwQixJQUFJLENBQUNvQixPQURSO0FBRUxuQixjQUFJLEVBQUNELElBQUksQ0FBQ0M7QUFGTCxTQUFQO0FBSUQsT0FMUTtBQUxMO0FBSkssR0FBYjtBQXNCQSxTQUFPO0FBQ0xrQyxTQUFLLEVBQUU7QUFDTDFDO0FBREssS0FERjtBQUlMMkMsWUFBUSxFQUFDLEtBQUc7QUFKUCxHQUFQO0FBTUEsQ0F0Q0siLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdC9bc2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5cbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcmlzbWljJztcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSAncHJpc21pYy1kb20nO1xuaW1wb3J0IGNvbW1vblN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvY29tbW9uLm1vZHVsZS5zY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wb3N0Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgaGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBBaU91dGxpbmVDYWxlbmRhcixBaU91dGxpbmVVc2VyfSBmcm9tICdyZWFjdC1pY29ucy9haSdcbmltcG9ydCB7IEJpVGltZUZpdmV9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcblxuXG5pbnRlcmZhY2UgUG9zdCB7XG4gIGZpcnN0X3B1YmxpY2F0aW9uX2RhdGU6IHN0cmluZyB8IG51bGw7XG4gIGxhc3RfcHVibGljYXRpb25fZGF0ZTogc3RyaW5nIHxudWxsO1xuICBkYXRhOiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBiYW5uZXI6IHtcbiAgICAgIHVybDogc3RyaW5nO1xuICAgIH07XG4gICAgYXV0aG9yOiBzdHJpbmc7XG4gICAgY29udGVudDoge1xuICAgICAgaGVhZGluZzogc3RyaW5nO1xuICAgICAgYm9keToge1xuICAgICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICB9W107XG4gICAgfVtdO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgUG9zdFByb3BzIHtcbiAgcG9zdDogUG9zdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7cG9zdH06UG9zdFByb3BzKSB7XG4gXG5cblxuICBjb25zdCB0b3RhbFRpbWVSZWFkaW5nID0gICgpID0+IHsgXG4gIGxldCB0b3RhbFdvcmRcbiAgbGV0IHRvdGFsVGltZVxuICBcbiAgIHBvc3QuZGF0YS5jb250ZW50Lm1hcChpdGVtID0+IHtcbiAgICB0b3RhbFdvcmQgKz0gaXRlbS5ib2R5WzBdLnRleHRcblxuICB9KVxuICB0b3RhbFRpbWUgPSBNYXRoLmNlaWwodG90YWxXb3JkLnRvU3RyaW5nKCkubGVuZ3RoLzIwMClcbnJldHVybiB0b3RhbFRpbWVcbn1cbiAgXG5cbiBjb25zdCB0b3RhbFRpbWUgPSB0b3RhbFRpbWVSZWFkaW5nKClcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkZXIvPlxuICBcbiAgPG1haW4gY2xhc3NOYW1lID0ge3N0eWxlcy5jb250YWluZXJ9PlxuICA8aW1nIGNsYXNzTmFtZT0ge3N0eWxlcy5iYW5uZXJ9IHNyYyA9IHtwb3N0LmRhdGEuYmFubmVyLnVybH0gYWx0ID0gXCJiYW5uZXJcIi8+XG4gIFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZSA9IHtzdHlsZXMucG9zdH0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntwb3N0LmRhdGEudGl0bGV9PC9oMT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9IHtzdHlsZXMuRGF0ZUFuZEF1dGhvcn0+IFxuXG4gICAgICA8QWlPdXRsaW5lQ2FsZW5kYXIgY2xhc3NOYW1lID0geyBzdHlsZXMuY2FsZW5kYXJpY29uIH0+PC9BaU91dGxpbmVDYWxlbmRhcj5cbiAgICAgIDx0aW1lPntwb3N0LmZpcnN0X3B1YmxpY2F0aW9uX2RhdGV9PC90aW1lPlxuICAgICAgPEFpT3V0bGluZVVzZXIgY2xhc3NOYW1lPSB7c3R5bGVzLnVzZXJpY29ufT48L0FpT3V0bGluZVVzZXI+XG4gICAgICA8cD57cG9zdC5kYXRhLmF1dGhvcn08L3A+XG4gICAgICA8QmlUaW1lRml2ZSBjbGFzc05hbWU9IHtzdHlsZXMuY2xvY2tpY29ufS8+XG4gICAgICA8cD57dG90YWxUaW1lfSBtaW48L3A+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9ICB7c3R5bGVzLnBvc3RDb250ZW50fT5cbiAgICAgICBcbiAgICAgICAge3Bvc3QuZGF0YS5jb250ZW50Lm1hcChpdGVtID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSB7c3R5bGVzLmJvZHlUZXh0fT5cbiAgICAgICAgICA8cCBjbGFzc05hbWUgPSB7c3R5bGVzLmhlYWRpbmd9PlxuICAgICAgICAgIHtpdGVtLmhlYWRpbmd9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IHtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICB7aXRlbS5ib2R5WzBdLnRleHR9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgKVxuICAgICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgIFxuICAgIDwvYXJ0aWNsZT5cbiAgPC9tYWluPlxuXG4gXG4gICBcbiAgIDwvPlxuICApXG4gIFxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByaXNtaWMgPSBnZXRQcmlzbWljQ2xpZW50KCk7XG4gIC8vY29uc3QgcG9zdHMgPSBhd2FpdCBwcmlzbWljLnF1ZXJ5KCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogW10sXG4gICAgZmFsbGJhY2s6J2Jsb2NraW5nJ1xuICB9XG4gfTtcblxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoe3BhcmFtc30pID0+IHtcbiAgXG4gIGNvbnN0IHtzbHVnfSA9IHBhcmFtc1xuIFxuICBjb25zdCBwcmlzbWljID0gZ2V0UHJpc21pY0NsaWVudCgpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByaXNtaWMuZ2V0QnlVSUQoJ3Bvc3QnLFN0cmluZyhzbHVnKSx7fSk7XG5cblxuXG5cbiAgY29uc3QgcG9zdCA9IHtcbiAgICBmaXJzdF9wdWJsaWNhdGlvbl9kYXRlOnJlc3BvbnNlLmZpcnN0X3B1YmxpY2F0aW9uX2RhdGUsXG4gICAgbGFzdF9wdWJsaWNhdGlvbl9kYXRlOiByZXNwb25zZS5sYXN0X3B1YmxpY2F0aW9uX2RhdGUsXG4gICAgdWlkOnJlc3BvbnNlLnVpZCxcbiAgICBkYXRhOiB7IFxuICAgICAgIGF1dGhvcjpyZXNwb25zZS5kYXRhLmF1dGhvcixcbiAgICAgICB0aXRsZTpyZXNwb25zZS5kYXRhLnRpdGxlLFxuICAgICAgIHN1YnRpdGxlOnJlc3BvbnNlLmRhdGEuc3VidGl0bGUsXG4gICAgICAgYmFubmVyOnJlc3BvbnNlLmRhdGEuYmFubmVyLFxuICAgICAgIGNvbnRlbnQ6cmVzcG9uc2UuZGF0YS5jb250ZW50Lm1hcCAoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGVhZGluZzppdGVtLmhlYWRpbmcsXG4gICAgICAgICAgYm9keTppdGVtLmJvZHlcbiAgICAgICAgfVxuICAgICAgfSlcbiBcbiAgfSxcbiAgIFxuICB9XG5cblxuIFxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0XG4gICAgfSxcbiAgICByZWRpcmVjdDo2MCozMCxcbiAgfVxuIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/post/[slug].tsx\n");

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