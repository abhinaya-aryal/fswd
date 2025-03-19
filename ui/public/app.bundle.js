/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _IssueList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueList.jsx */ \"./src/IssueList.jsx\");\n/* eslint-disable import/no-import-module-exports */\n\n\n\nif (false) {}\nreact_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById(\"content\")).render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueList_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n\n//# sourceURL=webpack://fswd-ui/./src/App.jsx?");

/***/ }),

/***/ "./src/IssueAdd.jsx":
/*!**************************!*\
  !*** ./src/IssueAdd.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IssueAdd)\n/* harmony export */ });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction IssueAdd(_ref) {\n  let {\n    createIssue\n  } = _ref;\n  function handleSubmit(e) {\n    e.preventDefault();\n    const form = document.forms.issueAdd;\n    const issue = {\n      owner: form.owner.value,\n      title: form.title.value,\n      due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10)\n    };\n    createIssue(issue);\n    form.owner.value = \"\";\n    form.title.value = \"\";\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    name: \"issueAdd\",\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    name: \"owner\",\n    placeholder: \"Owner\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    name: \"title\",\n    placeholder: \"Title\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\"\n  }, \"Add\"));\n}\nIssueAdd.propTypes = {\n  createIssue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired\n};\n\n//# sourceURL=webpack://fswd-ui/./src/IssueAdd.jsx?");

/***/ }),

/***/ "./src/IssueFilter.jsx":
/*!*****************************!*\
  !*** ./src/IssueFilter.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IssueFilter)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IssueFilter() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"This is a placeholder for the issue filter.\");\n}\n\n//# sourceURL=webpack://fswd-ui/./src/IssueFilter.jsx?");

/***/ }),

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IssueList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphQLFetch.js */ \"./src/graphQLFetch.js\");\n/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueFilter.jsx */ \"./src/IssueFilter.jsx\");\n/* harmony import */ var _IssueTable_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueTable.jsx */ \"./src/IssueTable.jsx\");\n/* harmony import */ var _IssueAdd_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssueAdd.jsx */ \"./src/IssueAdd.jsx\");\n\n\n\n\n\nfunction IssueList() {\n  const [issues, setIssues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const loadData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {\n    const query = `\n      query {\n        issueList {\n          id\n          title\n          status\n          owner\n          created\n          effort\n          due\n        }\n      }\n    `;\n    const data = await (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(query);\n    if (data) {\n      setIssues(data.issueList);\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    loadData();\n  }, [loadData]);\n  const createIssue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async issue => {\n    const query = `mutation issueAdd($issue: IssueInput!) {\n      issueAdd(issue: $issue)  {\n        id\n      }\n    }`;\n    const data = await (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(query, {\n      issue\n    });\n    if (data) {\n      loadData();\n    }\n  }, [loadData]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Issue Tracker\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueTable_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    issues: issues\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueAdd_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    createIssue: createIssue\n  }));\n}\n\n//# sourceURL=webpack://fswd-ui/./src/IssueList.jsx?");

/***/ }),

/***/ "./src/IssueTable.jsx":
/*!****************************!*\
  !*** ./src/IssueTable.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IssueTable)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IssueRow(_ref) {\n  let {\n    issue\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, issue.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, issue.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, issue.owner), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, issue.created.toDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, issue.effort), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, issue.due ? issue.due.toDateString() : \"\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, issue.title));\n}\nfunction IssueTable(_ref2) {\n  let {\n    issues\n  } = _ref2;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"table\", {\n    className: \"bordered-table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"ID\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"Status\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"Owner\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"Created\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"Effort\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"Due Date\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"Title\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tbody\", null, issues.map(issue => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IssueRow, {\n    key: issue.id,\n    issue: issue\n  }))));\n}\n\n//# sourceURL=webpack://fswd-ui/./src/IssueTable.jsx?");

/***/ }),

/***/ "./src/graphQLFetch.js":
/*!*****************************!*\
  !*** ./src/graphQLFetch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ graphQLFetch)\n/* harmony export */ });\nconst dateRegex = /^\\d{4}-\\d{2}-\\d{2}/;\nfunction jsonDateReviver(key, value) {\n  if (dateRegex.test(value)) return new Date(value);\n  return value;\n}\nasync function graphQLFetch(query) {\n  let variables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  try {\n    const response = await fetch(window.ENV.api, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        query,\n        variables\n      })\n    });\n    const body = await response.text();\n    const result = JSON.parse(body, jsonDateReviver);\n    if (result.errors) {\n      const error = result.errors[0];\n      if (error.extensions.code === \"BAD_USER_INPUT\") {\n        const details = error.extensions.exception.errors.join(\"\\n \");\n        console.error(`${error.message}:\\n ${details}`);\n      } else {\n        console.error(`${error.extensions.code}: ${error.message}`);\n      }\n      return null;\n    }\n    return result.data;\n  } catch (e) {\n    console.error(`Error in sending data to server: ${e.message}`);\n    return null;\n  }\n}\n\n//# sourceURL=webpack://fswd-ui/./src/graphQLFetch.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfswd_ui"] = self["webpackChunkfswd_ui"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/App.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;