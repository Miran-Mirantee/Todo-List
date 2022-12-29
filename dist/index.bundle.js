/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    background-color: #F0C987;\n    height: 100vh;\n}\n\n.hidden{\n    display: none!important;\n}\n\n.header.container{\n    display: flex;\n    justify-content: flex-start;\n    background-color: #3C153B;\n    padding: 16px;\n    padding-bottom: 28px;\n    z-index: 1;\n    border-bottom: 12px solid #f5980d;\n    box-shadow: \n        -12px 0px 0 0px #f5980d inset,\n        -24px -12px 0 0px #8B1E3F inset\n    ;\n}\n\n.header.text {\n    font-size: 48px;\n    font-weight: bold;\n    color: white;\n}\n\n.content.container{\n    display: flex;\n    flex-grow: 1;\n}\n\n.sidebar.container{\n    display: flex;\n    flex-direction: column;\n    background-color: #6ba181;\n    padding: 16px;\n    width: 300px;\n    box-shadow: \n        0px 3px 10px 0 #386955 inset\n    ;\n}\n\n.sidebar.top-panel{\n    align-self: normal;\n    padding-bottom: 16px;\n    border-bottom: 2px solid #a6ddd4;\n}\n\n.sidebar.text{\n    font-size: 32px;\n    font-weight: bold;\n    color: #F0C987;\n    text-shadow: 2px 2px 2px #386955;\n}\n\n.sidebar.project-item-list{\n    display: flex;\n    flex-direction: column;\n    margin: 8px 0;\n    padding: 4px;\n    gap: 4px;\n}\n\n.sidebar.project-item{\n    font-weight: bold;\n    color: #dcfcce;\n    /* text-align: center; */\n    padding: 8px 14px;\n    font-size: 24px;\n}\n\n.sidebar.project-item:hover{\n    cursor: pointer;\n    color: #ffd51a;\n    text-shadow: 2px 2px 2px #386955;\n    background-color: #89BD9E;\n}\n\n.sidebar.project-item:active{\n    background-color: transparent;\n    color: #dbb819;\n    text-shadow: none;\n}\n\n.sidebar.project-item.selected{\n    background-color: #DB4C40;\n}\n\n.top-panel{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project.top-panel{\n    gap: 8px;\n}\n\n.bottom-panel{\n    display: flex;\n    gap: 4px;\n    justify-content: end;\n}\n\n.btn-panel{\n    display: flex;\n    gap: 8px;\n}\n\n.add-project.btn{\n    border: none;\n    height: 42px;\n    width: 42px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #1cff41;\n    text-shadow: 1px 1px 1px #386955;\n    background-color: transparent;\n    border-radius: 16px;\n}\n\n.add-project.btn:hover{\n    cursor: pointer;\n    background-color: #89BD9E;\n}\n\n.add-project.btn:active{\n    cursor: pointer;\n    color: #17c734;\n    text-shadow: none;\n    background-color: transparent;\n}\n\n.project.area{\n    display: flex;\n    justify-content: center;\n    flex-grow: 1;\n    box-shadow: \n        0 0 15px 5px #be7303 inset\n    ;\n}\n\n.project.container{\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    width: 1100px;\n    gap: 8px;\n    margin: 32px 0;\n    padding: 8px;\n    background-color: rgb(255, 175, 175);\n}\n\n.project.name{\n    font-size: 36px;\n    width: 700px;\n    border: none;\n    outline: none;\n}\n\n/* temp */\n.project.name:disabled{\n    color: black;\n    background-color: transparent;\n}\n\n.todo.list{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.todo.container{\n    display: flex;\n    justify-content: space-between;\n    gap: 4px;\n    padding: 4px;\n    background-color: rgb(133, 245, 245);\n}\n\n.todo-panel{\n    display: flex;\n    flex-direction: column;\n}\n\n.expand-panel{\n    display: flex;\n    background-color: rgb(233, 250, 160);\n    padding: 4px;\n    height: 100px;\n}\n\n.todo-noDesc-panel{\n    display: flex;\n    gap: 16px;\n    height: 48px;\n    align-items: center\n}\n\ninput.todo{\n    border: none;\n    outline: none;\n}\n\ninput[type=\"date\"].todo,\ninput[type=\"text\"].todo{\n    font-size: 20px;\n    padding: 4px 8px;\n}\n\ninput[type=\"text\"].todo{\n    width: 500px;\n}\n\ninput.todo:disabled{\n    background-color: transparent;\n    color: black;\n}\n\ntextarea#desc{\n    resize: none;\n}\n\ntextarea.todo{\n    resize: none;\n    width: 100%;\n    border: none;\n    outline: none;\n}\n\ntextarea.todo:disabled{\n    background-color: transparent;\n    color: black;\n}\n\n.modal-background{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    /* overflow: auto; enable scroll if needed, is this thing even working? */\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content{\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    gap: 8px;\n    margin: 35vh auto;\n    /* width: 250px;\n    height: 400px; */\n    padding: 8px;\n}\n\n.modal.close.btn{\n    color: black;\n    float: right;\n}\n\n.modal.close.btn:hover,\n.modal.close.btn:focus{\n    cursor: pointer;    \n}\n\n.modal.input-form {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.modal.input-container{\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.todo.container:has(.low){\n    background-color: greenyellow;\n}\n\n.todo.container:has(.medium){\n    background-color: aqua;\n}\n\n.todo.container:has(.high){\n    background-color: palevioletred;\n}\n\n.todo.container:has(.deadline){\n    box-shadow: 0px 0px 0px 3px red inset;\n}\n\n.todo.container:has(.alert){\n    box-shadow: 0px 0px 0px 3px yellow inset;\n}\n\n.todo.container:has(.deadline-passed){\n    box-shadow: 0px 0px 0px 3px gray inset;\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["body{\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    background-color: #F0C987;\n    height: 100vh;\n}\n\n.hidden{\n    display: none!important;\n}\n\n.header.container{\n    display: flex;\n    justify-content: flex-start;\n    background-color: #3C153B;\n    padding: 16px;\n    padding-bottom: 28px;\n    z-index: 1;\n    border-bottom: 12px solid #f5980d;\n    box-shadow: \n        -12px 0px 0 0px #f5980d inset,\n        -24px -12px 0 0px #8B1E3F inset\n    ;\n}\n\n.header.text {\n    font-size: 48px;\n    font-weight: bold;\n    color: white;\n}\n\n.content.container{\n    display: flex;\n    flex-grow: 1;\n}\n\n.sidebar.container{\n    display: flex;\n    flex-direction: column;\n    background-color: #6ba181;\n    padding: 16px;\n    width: 300px;\n    box-shadow: \n        0px 3px 10px 0 #386955 inset\n    ;\n}\n\n.sidebar.top-panel{\n    align-self: normal;\n    padding-bottom: 16px;\n    border-bottom: 2px solid #a6ddd4;\n}\n\n.sidebar.text{\n    font-size: 32px;\n    font-weight: bold;\n    color: #F0C987;\n    text-shadow: 2px 2px 2px #386955;\n}\n\n.sidebar.project-item-list{\n    display: flex;\n    flex-direction: column;\n    margin: 8px 0;\n    padding: 4px;\n    gap: 4px;\n}\n\n.sidebar.project-item{\n    font-weight: bold;\n    color: #dcfcce;\n    /* text-align: center; */\n    padding: 8px 14px;\n    font-size: 24px;\n}\n\n.sidebar.project-item:hover{\n    cursor: pointer;\n    color: #ffd51a;\n    text-shadow: 2px 2px 2px #386955;\n    background-color: #89BD9E;\n}\n\n.sidebar.project-item:active{\n    background-color: transparent;\n    color: #dbb819;\n    text-shadow: none;\n}\n\n.sidebar.project-item.selected{\n    background-color: #DB4C40;\n}\n\n.top-panel{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project.top-panel{\n    gap: 8px;\n}\n\n.bottom-panel{\n    display: flex;\n    gap: 4px;\n    justify-content: end;\n}\n\n.btn-panel{\n    display: flex;\n    gap: 8px;\n}\n\n.add-project.btn{\n    border: none;\n    height: 42px;\n    width: 42px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #1cff41;\n    text-shadow: 1px 1px 1px #386955;\n    background-color: transparent;\n    border-radius: 16px;\n}\n\n.add-project.btn:hover{\n    cursor: pointer;\n    background-color: #89BD9E;\n}\n\n.add-project.btn:active{\n    cursor: pointer;\n    color: #17c734;\n    text-shadow: none;\n    background-color: transparent;\n}\n\n.project.area{\n    display: flex;\n    justify-content: center;\n    flex-grow: 1;\n    box-shadow: \n        0 0 15px 5px #be7303 inset\n    ;\n}\n\n.project.container{\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    width: 1100px;\n    gap: 8px;\n    margin: 32px 0;\n    padding: 8px;\n    background-color: rgb(255, 175, 175);\n}\n\n.project.name{\n    font-size: 36px;\n    width: 700px;\n    border: none;\n    outline: none;\n}\n\n/* temp */\n.project.name:disabled{\n    color: black;\n    background-color: transparent;\n}\n\n.todo.list{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.todo.container{\n    display: flex;\n    justify-content: space-between;\n    gap: 4px;\n    padding: 4px;\n    background-color: rgb(133, 245, 245);\n}\n\n.todo-panel{\n    display: flex;\n    flex-direction: column;\n}\n\n.expand-panel{\n    display: flex;\n    background-color: rgb(233, 250, 160);\n    padding: 4px;\n    height: 100px;\n}\n\n.todo-noDesc-panel{\n    display: flex;\n    gap: 16px;\n    height: 48px;\n    align-items: center\n}\n\ninput.todo{\n    border: none;\n    outline: none;\n}\n\ninput[type=\"date\"].todo,\ninput[type=\"text\"].todo{\n    font-size: 20px;\n    padding: 4px 8px;\n}\n\ninput[type=\"text\"].todo{\n    width: 500px;\n}\n\ninput.todo:disabled{\n    background-color: transparent;\n    color: black;\n}\n\ntextarea#desc{\n    resize: none;\n}\n\ntextarea.todo{\n    resize: none;\n    width: 100%;\n    border: none;\n    outline: none;\n}\n\ntextarea.todo:disabled{\n    background-color: transparent;\n    color: black;\n}\n\n.modal-background{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    /* overflow: auto; enable scroll if needed, is this thing even working? */\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content{\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    gap: 8px;\n    margin: 35vh auto;\n    /* width: 250px;\n    height: 400px; */\n    padding: 8px;\n}\n\n.modal.close.btn{\n    color: black;\n    float: right;\n}\n\n.modal.close.btn:hover,\n.modal.close.btn:focus{\n    cursor: pointer;    \n}\n\n.modal.input-form {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.modal.input-container{\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.todo.container:has(.low){\n    background-color: greenyellow;\n}\n\n.todo.container:has(.medium){\n    background-color: aqua;\n}\n\n.todo.container:has(.high){\n    background-color: palevioletred;\n}\n\n.todo.container:has(.deadline){\n    box-shadow: 0px 0px 0px 3px red inset;\n}\n\n.todo.container:has(.alert){\n    box-shadow: 0px 0px 0px 3px yellow inset;\n}\n\n.todo.container:has(.deadline-passed){\n    box-shadow: 0px 0px 0px 3px gray inset;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isBefore/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isEqual/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isEqual/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isEqual)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */

function isEqual(dirtyLeftDate, dirtyRightDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyLeftDate);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyRightDate);
  return dateLeft.getTime() === dateRight.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/sub/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/sub/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sub)
/* harmony export */ });
/* harmony import */ var _subDays_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subDays/index.js */ "./node_modules/date-fns/esm/subDays/index.js");
/* harmony import */ var _subMonths_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subMonths/index.js */ "./node_modules/date-fns/esm/subMonths/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





/**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */

function sub(date, duration) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  if (!duration || _typeof(duration) !== 'object') return new Date(NaN);
  var years = duration.years ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.years) : 0;
  var months = duration.months ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.months) : 0;
  var weeks = duration.weeks ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.weeks) : 0;
  var days = duration.days ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.days) : 0;
  var hours = duration.hours ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.hours) : 0;
  var minutes = duration.minutes ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.minutes) : 0;
  var seconds = duration.seconds ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.seconds) : 0; // Subtract years and months

  var dateWithoutMonths = (0,_subMonths_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, months + years * 12); // Subtract weeks and days

  var dateWithoutDays = (0,_subDays_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateWithoutMonths, days + weeks * 7); // Subtract hours, minutes and seconds

  var minutestoSub = minutes + hours * 60;
  var secondstoSub = seconds + minutestoSub * 60;
  var mstoSub = secondstoSub * 1000;
  var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
  return finalDate;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/subMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMonths/index.js */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */

function subMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/displayModal.js":
/*!*************************************!*\
  !*** ./src/scripts/displayModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAddProjectModal": () => (/* binding */ displayAddProjectModal),
/* harmony export */   "displayAddTodoModal": () => (/* binding */ displayAddTodoModal)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/scripts/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/scripts/todo.js");
/* harmony import */ var _setAttrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setAttrs */ "./src/scripts/setAttrs.js");
/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayProject */ "./src/scripts/displayProject.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/scripts/storage.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui */ "./src/scripts/ui.js");







// create a field container use in modal
const _createFieldContainer = (form, type, labelTxt, name, required) => {
    // check if the input field has required attribute
    const _checkRequirement = (field) => {
        if (required) {
            field.setAttribute('required', '');
        }
    };

    const container = document.createElement('div');
    container.classList.add('modal', 'input-container');
    const label = document.createElement('label');
    (0,_setAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(label, {'for': name});
    label.textContent = `${labelTxt}:`;

    if (type === "textarea") {
        const field = document.createElement('textarea');
        (0,_setAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(field, {'id': name, 'name': name, 'rows': 5});
        _checkRequirement(field);
        container.append(label, field);
    }
    else {
        const field = document.createElement('input');
        (0,_setAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(field, {'type': type, 'id': name, 'name': name});
        _checkRequirement(field);
        container.append(label, field);
    }

    form.append(container);
};

// create a dropdown container use in modal
const _createPriorityDropDown = (form, labelTxt, name, required) => {
    const container = document.createElement('div');
    container.classList.add('modal', 'input-container');
    const label = document.createElement('label');
    (0,_setAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(label, {'for': name});
    label.textContent = `${labelTxt}:`;
    const select = document.createElement('select');
    (0,_setAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(select, {'id': name, 'name': name});
    if (required) {
        select.setAttribute('required', '');
    }
    for (let i = 1; i <= 3; i++) {
        const option = document.createElement('option');
        let priority;
        let priorityTxt;
        switch(i) {
            case 1:
                priority = 'low';
                priorityTxt = 'Low';
                break;
            case 2:
                priority = 'medium';
                priorityTxt = 'Medium';
                (0,_setAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(option, {'selected': ''});
                break;
            case 3:
                priority = 'high';
                priorityTxt = 'High';
                break;
        }
        (0,_setAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(option, {'value': priority});
        option.textContent = priorityTxt;
        select.append(option);
    }

    container.append(label, select);
    form.append(container);
}

// enable button to be clickable again
const _enableButton = (btn, modal) => {
    btn.classList.toggle('active');
    modal.remove();
};

// display a "add todo to project" modal
const displayAddTodoModal = (project, btn) => {
    const modal = document.createElement('div');
    modal.classList.add('todo', 'modal-background');
    
    const modalContent = document.createElement('div');
    modalContent.classList.add('todo', 'modal-content');

    const topPanel = document.createElement('div');
    topPanel.classList.add('modal', 'top-panel');

    const header = document.createElement('div');
    header.classList.add('modal', 'header');
    header.textContent = 'Add new todo'

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('modal', 'close', 'btn');
    closeBtn.textContent = 'X';
    closeBtn.addEventListener('click', () => _enableButton(btn, modal));

    const inputForm = document.createElement('form');
    (0,_setAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(inputForm, {'action': 'javascript:;', 'method': 'post'});
    inputForm.classList.add('modal', 'input-form');

    // input fields
    _createFieldContainer(inputForm, 'text', 'Title', 'title', true);
    _createFieldContainer(inputForm, 'textarea', 'Description (Optional)', 'desc', false);
    _createFieldContainer(inputForm, 'date', 'Due date (Optional)', 'due_date', false);
    _createPriorityDropDown(inputForm, 'Priority', 'priority', true);

    const bottomPanel = document.createElement('div');
    bottomPanel.classList.add('modal', 'bottom-panel');

    // create new todo
    const createBtn = document.createElement('button');
    (0,_setAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(createBtn, {'type': 'submit'});
    createBtn.classList.add('modal', 'btn', 'create-todo');
    createBtn.textContent = 'Create';
    createBtn.addEventListener('click', () => {
        // check validation
        let titleIsValid = document.getElementById('title').checkValidity();
        let dueDateIsValid = document.getElementById('due_date').checkValidity();
        let priorityIsValid = document.getElementById('priority').checkValidity();
        if (titleIsValid && dueDateIsValid && priorityIsValid) {
            project.addTodo(
                new _todo__WEBPACK_IMPORTED_MODULE_1__["default"](
                    document.getElementById('title').value,
                    document.getElementById('desc').value,
                    document.getElementById('due_date').value,
                    document.getElementById('priority').value
                )
            );
            (0,_storage__WEBPACK_IMPORTED_MODULE_4__.setProject)(project);
            _enableButton(btn, modal)
        }
    });

    // cancel
    const cancelBtn = document.createElement('button')
    ;(0,_setAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(cancelBtn, {'type': 'reset'});
    cancelBtn.classList.add('modal', 'btn', 'cancel');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => _enableButton(btn, modal));
    bottomPanel.append(cancelBtn, createBtn);

    inputForm.append(bottomPanel);
    topPanel.append(header, closeBtn);
    modalContent.append(topPanel, inputForm);
    modal.append(modalContent)
    document.body.append(modal);
};

// display a "add project to a list of projects" modal
const displayAddProjectModal = (btn) => {
    const modal = document.createElement('div');
    modal.classList.add('project', 'modal-background');

    const modalContent = document.createElement('div');
    modalContent.classList.add('project', 'modal-content');

    const topPanel = document.createElement('div');
    topPanel.classList.add('modal', 'top-panel');

    const header = document.createElement('div');
    header.classList.add('modal', 'header');
    header.textContent = 'Add new project'

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('modal', 'close', 'btn');
    closeBtn.textContent = 'X';
    closeBtn.addEventListener('click', () => _enableButton(btn, modal));

    const inputForm = document.createElement('form');
    (0,_setAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(inputForm, {'action': 'javascript:;', 'method': 'post'});
    inputForm.classList.add('modal', 'input-form');

    _createFieldContainer(inputForm, 'text', 'Project Name', 'project_name', true);

    const bottomPanel = document.createElement('div');
    bottomPanel.classList.add('modal', 'bottom-panel');

    // create new project
    const createBtn = document.createElement('button');
    (0,_setAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(createBtn, {'type': 'submit'});
    createBtn.classList.add('modal', 'btn', 'create-project');
    createBtn.textContent = 'Create';
    createBtn.addEventListener('click', () => {
        // check validation
        let projectNameIsValid = document.getElementById('project_name').checkValidity();
        if (projectNameIsValid) {
            let newProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById('project_name').value);

            // change here
            (0,_storage__WEBPACK_IMPORTED_MODULE_4__.setProject)(newProject);

            // display new project
            _enableButton(btn, modal);

            // re-display a list of project in sidebar
            const projectItemList = document.querySelector('.sidebar.project-item-list');
            (0,_ui__WEBPACK_IMPORTED_MODULE_5__.displayProjectListSidebar)(projectItemList);

            // Display project after creating project immediately, if only it's the first project in the list
            if (_storage__WEBPACK_IMPORTED_MODULE_4__.projectList.length == 1) 
                (0,_displayProject__WEBPACK_IMPORTED_MODULE_3__.displayProject)(_storage__WEBPACK_IMPORTED_MODULE_4__.projectList[0]);
        }
    });

    // cancel
    const cancelBtn = document.createElement('button');
    (0,_setAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(cancelBtn, {'type': 'reset'});
    cancelBtn.classList.add('modal', 'btn', 'cancel');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => _enableButton(btn, modal));
    bottomPanel.append(cancelBtn, createBtn);

    inputForm.append(bottomPanel);
    topPanel.append(header, closeBtn);
    modalContent.append(topPanel, inputForm);
    modal.append(modalContent);
    document.body.append(modal);
};



/***/ }),

/***/ "./src/scripts/displayProject.js":
/*!***************************************!*\
  !*** ./src/scripts/displayProject.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProject": () => (/* binding */ displayProject),
/* harmony export */   "unDisplayProject": () => (/* binding */ unDisplayProject)
/* harmony export */ });
/* harmony import */ var _displayModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayModal */ "./src/scripts/displayModal.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/scripts/storage.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/scripts/ui.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/sub/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isEqual/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var _setAttrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setAttrs */ "./src/scripts/setAttrs.js");






// display a project displaying a list of todo
const displayProject = (project) => {
    
    // re-display a list of project in sidebar
    const _refreshSidebar = () => {
        const projectItemList = document.querySelector('.sidebar.project-item-list');
        (0,_ui__WEBPACK_IMPORTED_MODULE_2__.displayProjectListSidebar)(projectItemList);
    }

    // change project's name
    const _changeProjectName = () => {
        projectName.toggleAttribute('disabled');
        project.editName(projectName.value);

        // change project name in storage
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setProject)(project);

        // re-display a list of project in sidebar
        _refreshSidebar();
    };

    // delete project from a list
    const _deleteProject = () => {
        container.remove();

        // delete from storage
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.removeProject)(project);
        
        // re-display a list of project in sidebar
        _refreshSidebar();

        // display first project in the list after deleting, if only it exists
        if (_storage__WEBPACK_IMPORTED_MODULE_1__.projectList[0])
            displayProject(_storage__WEBPACK_IMPORTED_MODULE_1__.projectList[0]);
    };

    // create a list of todo in project
    const _createListofTodo = () => {
        list.classList.add('todo', 'list');
        let length = project.list.length;
        for (let i = 0; i < length; i++) {
            const todoItem = document.createElement('form');
            todoItem.classList.add('todo', 'container');
            (0,_setAttrs__WEBPACK_IMPORTED_MODULE_3__["default"])(todoItem, {'action': 'javascript:;', 'method': 'post'});

            // store all todo
            const todoPanel = document.createElement('div');
            todoPanel.classList.add('todo', 'todo-panel');

            // store all todo except desc
            const noDescPanel = document.createElement('div');
            noDescPanel.classList.add('todo', 'todo-noDesc-panel');

            // store desc
            const expandPanel = document.createElement('div');
            expandPanel.classList.add('todo', 'expand-panel', 'hidden');

            // todo
            const isDone = document.createElement('input');
            isDone.classList.add('todo', 'isDone');
            isDone.addEventListener('click', () => {
                _toggleTodoIsDone(isDone, project.list[i]);
                (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setProject)(project);
            });
            (0,_setAttrs__WEBPACK_IMPORTED_MODULE_3__["default"])(isDone, {'type': 'checkbox', 'name': 'is_done', 'value': project.list[i].isDone});
            if (project.list[i].isDone) {
                isDone.setAttribute('checked', '');
            }
    
            const title = document.createElement('input');
            title.classList.add('todo', 'title');
            (0,_setAttrs__WEBPACK_IMPORTED_MODULE_3__["default"])(title, {'type': 'text', 'name': 'title', 'value': project.list[i].title, 'disabled': ''});
    
            const desc = document.createElement('textarea');
            desc.classList.add('todo', 'desc');
            desc.textContent = project.list[i].desc;
            (0,_setAttrs__WEBPACK_IMPORTED_MODULE_3__["default"])(desc, {'name': 'desc', 'disabled': ''});

            const dueDate = document.createElement('input');
            dueDate.classList.add('todo', 'date');
            (0,_setAttrs__WEBPACK_IMPORTED_MODULE_3__["default"])(dueDate, {'type': 'date', 'name': 'due_date', 'value': project.list[i].dueDate, 'disabled': ''});
            
            // check deadline status
            if (project.list[i].dueDate != '') {
                let status = _checkDeadline(dueDate);
                dueDate.classList.add(status);
            }

            const priority = document.createElement('select');
            priority.classList.add('todo', 'priority', project.list[i].priority);
            (0,_setAttrs__WEBPACK_IMPORTED_MODULE_3__["default"])(priority, {'name': 'priority', 'disabled': ''});
            // create priority options
            for (let j = 1; j <= 3; j++) {
                const option = document.createElement('option');
                let priorityLvl;
                let priorityTxt;

                const _selectCorrectPriority = () => {
                    if (project.list[i].priority === priorityLvl) {
                        (0,_setAttrs__WEBPACK_IMPORTED_MODULE_3__["default"])(option, {'selected': ''});
                    }
                };

                switch(j) {
                    case 1:
                        priorityLvl = 'low';
                        priorityTxt = 'Low';
                        _selectCorrectPriority();
                        break;
                    case 2:
                        priorityLvl = 'medium';
                        priorityTxt = 'Medium';
                        _selectCorrectPriority();
                        break;
                    case 3:
                        priorityLvl = 'high';
                        priorityTxt = 'High';
                        _selectCorrectPriority();
                        break;
                }
                (0,_setAttrs__WEBPACK_IMPORTED_MODULE_3__["default"])(option, {'value': priorityLvl});
                option.textContent = priorityTxt;
                priority.append(option);
            }

            noDescPanel.append(isDone, title, dueDate, priority);
            expandPanel.append(desc);

            // store buttons
            const btnPanel = document.createElement('div');
            btnPanel.classList.add('todo', 'btn-panel');

            // buttons
            const expandBtn = document.createElement('button');
            expandBtn.classList.add('todo', 'expand-todo', 'btn');
            expandBtn.textContent = 'Expand';
            expandBtn.addEventListener('click', () => expandPanel.classList.toggle('hidden'));

            const editBtn = document.createElement('button');
            editBtn.classList.add('todo', 'edit-todo', 'btn', 'not-editable');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => {
                _editTodo(project.list[i], title, desc, dueDate, priority, expandPanel, editBtn);
                (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setProject)(project);
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('todo', 'delete-todo', 'btn');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                _deleteTodo(project.list[i]);
                (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setProject)(project);
            });
    
            todoPanel.append(noDescPanel, expandPanel);
            btnPanel.append(expandBtn, editBtn, deleteBtn);
            todoItem.append(todoPanel, btnPanel);
            list.append(todoItem);
            container.append(list);
        }
    };

    // refresh a list of todo in a project
    const _refreshListofTodo = () => {
        list.innerHTML = '';
        _createListofTodo();
    };

    // delete a todo from the project
    const _deleteTodo = (todo) => {
        project.deleteTodo(todo);
        _refreshListofTodo();
    };

    // add todo to the project
    const _addTodoToProject = (btn) => {
        (0,_displayModal__WEBPACK_IMPORTED_MODULE_0__.displayAddTodoModal)(project, btn);
        const createTodoBtn = document.querySelector('.btn.create-todo');
        createTodoBtn.addEventListener('click', () => _refreshListofTodo());
    };

    // check deadline status and return string
    const _checkDeadline = (dueDate) => {
        let parsedDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(dueDate.value));
        let today = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date());
        let dueDateSubOneDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(parsedDueDate, {days: 1})

        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(parsedDueDate, today)) {
            return 'deadline';
        }
        else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(dueDateSubOneDay, today)) {
            return 'alert';
        }
        else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(parsedDueDate, today)) {
            return 'deadline-passed';
        }
    };

    // edit todo in the project
    const _editTodo = (todo, title, desc, dueDate, priority, expandPanel, editBtn) => {
        expandPanel.classList.remove('hidden');
        title.toggleAttribute('disabled');
        desc.toggleAttribute('disabled');
        dueDate.toggleAttribute('disabled');
        priority.toggleAttribute('disabled');
        // remove old class
        let status = _checkDeadline(dueDate);
        dueDate.classList.remove(status);
        priority.classList.remove(todo.priority);
        
        if (!editBtn.classList.contains('not-editable')) {
            todo.editTodo(title.value, desc.value, dueDate.value, priority.value);
            // add new class after editing
            status = _checkDeadline(dueDate);
            priority.classList.add(todo.priority);
            dueDate.classList.add(status);
        }
        
        editBtn.classList.toggle('not-editable');
    };

    // toggle isDone in todo
    const _toggleTodoIsDone = (input, todo) => {
        todo.toggleIsDone();
        input.setAttribute('value', todo.isDone);
    };

    const container = document.createElement('div');
    container.classList.add('project', 'container');

    const topPanel = document.createElement('div');
    topPanel.classList.add('project', 'top-panel');

    const projectName = document.createElement('input');
    projectName.classList.add('project', 'name')
    ;(0,_setAttrs__WEBPACK_IMPORTED_MODULE_3__["default"])(projectName, {'type': 'text', 'value': project.name, 'name': 'project_name', 'disabled': ''});
    projectName.addEventListener('keypress', (e) => {if (e.key === 'Enter') {_changeProjectName();}});

    container.append(topPanel);

    const list = document.createElement('div');
    _createListofTodo();

    // panel for storing buttons
    const btnPanel = document.createElement('div');
    btnPanel.classList.add('project', 'btn-panel');

    // add todo to project
    const addTodoBtn = document.createElement('button');
    addTodoBtn.classList.add('add-todo', 'btn', 'project');
    addTodoBtn.textContent = "Add todo";
    addTodoBtn.addEventListener('click', () => {
        if (!addTodoBtn.classList.contains('active')) {
            addTodoBtn.classList.add('active');
            _addTodoToProject(addTodoBtn)
        }
    });

    // change project's name
    const changeProjectNameBtn = document.createElement('button');
    changeProjectNameBtn.classList.add('change-name-project', 'btn', 'project');
    changeProjectNameBtn.textContent = 'Change name';
    changeProjectNameBtn.addEventListener('click', () => _changeProjectName());

    // delete project from the list
    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.classList.add('delete-project', 'btn', 'project');
    deleteProjectBtn.textContent = 'Delete project';
    deleteProjectBtn.addEventListener('click', () => _deleteProject());

    btnPanel.append(changeProjectNameBtn, addTodoBtn, deleteProjectBtn);
    topPanel.append(projectName, btnPanel);

    const projectArea = document.querySelector('.project.area');
    projectArea.append(container);
};

const unDisplayProject = () => {
    const projectContainer = document.querySelector('.project.container');
    if (projectContainer)
        projectContainer.remove();
};




/***/ }),

/***/ "./src/scripts/project.js":
/*!********************************!*\
  !*** ./src/scripts/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class project{
    constructor(name) {
        this.list = [];
        this.timeCreated = (new Date()).toISOString();
        this.name = name;
    }

    addTodo(todo) {
        this.list.push(todo);
    }

    deleteTodo(todo) {
        let index = this.list.indexOf(todo);
        this.list.splice(index, 1);
    }

    editName(newName) {
        this.name = newName;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);

/***/ }),

/***/ "./src/scripts/setAttrs.js":
/*!*********************************!*\
  !*** ./src/scripts/setAttrs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function setAttributes(element, attrs) {
    for (let key in attrs) {
        element.setAttribute(key, attrs[key]);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setAttributes);

/***/ }),

/***/ "./src/scripts/storage.js":
/*!********************************!*\
  !*** ./src/scripts/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "setProject": () => (/* binding */ setProject)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/scripts/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/scripts/project.js");



const projectList = [];
const projectId = [];

// store project id into the localStorage
const _storeId = (id) => {
    // check for duplicate
    if (projectId.indexOf(id) == -1) {
        projectId.push(id);
        localStorage.setItem('projectId', JSON.stringify(projectId));
    }
};

// remove project id from the localStorage
const _removeId = (id) => {
    let index = projectId.indexOf(id);
    projectId.splice(index, 1);
    localStorage.setItem('projectId', JSON.stringify(projectId));
};

// get data from localStorage
const _getStorage = () => {
    projectList.length = 0;
    console.log(localStorage.length);
    if (localStorage.length != 0) {
        const projectId = JSON.parse(localStorage.getItem('projectId'));
        console.log(projectId);
        let length = projectId.length;
        for (let i = 0; i < length; i++) {
            
            // giving a project from local storage a class
            const projectFromStorage = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]();
            for (let key of Object.keys(projectFromStorage)) {
                const projectData = JSON.parse(localStorage.getItem(projectId[i]));
                projectFromStorage[key] = projectData[key];
            }
    
            // giving a todo from local storage a class
            for (let item of projectFromStorage.list) {
                const todoFromStorage = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]();
                for (let key of Object.keys(todoFromStorage)) {
                    todoFromStorage[key] = item[key];
                }
                let index = projectFromStorage.list.indexOf(item);
                projectFromStorage.list[index] = todoFromStorage;
            }
            projectList.push(projectFromStorage);
    
        }
        console.log(projectList);
    }
};

// add/edit project in the localStorage
const setProject = (newProject) => {
    localStorage.setItem(newProject.timeCreated, JSON.stringify(newProject));
    _storeId(newProject.timeCreated);
    _getStorage();
};

// delete project from the localStorage
const removeProject = (oldProject) => {
    localStorage.removeItem(oldProject.timeCreated);
    _removeId(oldProject.timeCreated);
    _getStorage();
};

// initialize
if (localStorage.length == 0) {
    localStorage.setItem('projectId', JSON.stringify(projectId));
}
else {
    const idData = JSON.parse(localStorage.getItem('projectId'));
    for (let id of idData) {
        projectId.push(id);
    }
}
// always create default project if no project is present in the list
if (projectId.length == 0) {
    const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]('Default');
    setProject(defaultProject);
}

_getStorage();





/***/ }),

/***/ "./src/scripts/todo.js":
/*!*****************************!*\
  !*** ./src/scripts/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class todo {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = false;
    }

    toggleIsDone() {
        this.isDone = !this.isDone;
    }

    editTodo(newTitle, newDesc, newDueDate, newPriority) {
        this.title = newTitle;
        this.desc = newDesc;
        this.dueDate = newDueDate;
        this.priority = newPriority;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);

/***/ }),

/***/ "./src/scripts/ui.js":
/*!***************************!*\
  !*** ./src/scripts/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjectListSidebar": () => (/* binding */ displayProjectListSidebar)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/scripts/storage.js");
/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProject */ "./src/scripts/displayProject.js");
/* harmony import */ var _displayModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayModal */ "./src/scripts/displayModal.js");




// create a list of projects 
const _createProjectArea = (content) => {
    const projectListContainer = document.createElement('div');
    projectListContainer.classList.add('project', 'area');
    content.append(projectListContainer);
};

// create a button for adding new project to the list
const _createAddProjectBtn = (sidebar) => {
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-project', 'btn', 'fa-solid', 'fa-plus', 'fa-2xl');
    addBtn.addEventListener('click', () => {
        if (!addBtn.classList.contains('active')) {
            addBtn.classList.toggle('active');
            (0,_displayModal__WEBPACK_IMPORTED_MODULE_2__.displayAddProjectModal)(addBtn);
        }
    });
    sidebar.append(addBtn);
};

// remove all the children in a list of project in sidebar
const _refreshProjectListSidebar = () => {
    const projectItemList = document.querySelector('.sidebar.project-item-list');
    projectItemList.innerHTML = '';
};

// display a list of project in sidebar
const displayProjectListSidebar = (container) => {
    const currentProjects = document.querySelectorAll('.sidebar.project-item');
    let selectedIndex = 0;
    // find index of current selected project
    for (let i = 0; i < currentProjects.length; i++) {
        if (currentProjects[i].classList.contains('selected'))
            selectedIndex = i;
    }
    _refreshProjectListSidebar();
    for (let i = 0; i < _storage__WEBPACK_IMPORTED_MODULE_0__.projectList.length; i++) {
        const project = document.createElement('div');
        project.classList.add('sidebar', 'project-item');
        project.textContent = _storage__WEBPACK_IMPORTED_MODULE_0__.projectList[i].name;        

        // if changing project's name or added new project
        if (_storage__WEBPACK_IMPORTED_MODULE_0__.projectList.length >= currentProjects.length) {
            // highlight (previously) selected project
            if (i == selectedIndex) 
                project.classList.add('selected');
        }
        // if deleting current project
        else {
            // highlight the first project
            if (i == 0)
                project.classList.add('selected');
        }
        
        // show selected project
        project.addEventListener('click', () => {
            (0,_displayProject__WEBPACK_IMPORTED_MODULE_1__.unDisplayProject)();
            (0,_displayProject__WEBPACK_IMPORTED_MODULE_1__.displayProject)(_storage__WEBPACK_IMPORTED_MODULE_0__.projectList[i]);
            const selectedProject = document.querySelector('.sidebar.project-item.selected');
            selectedProject.classList.remove('selected');
            project.classList.add('selected');
        });
        container.append(project);
    }
};

// create header of website
const header = (() => {
    const container = document.createElement('div');
    container.classList.add('header', 'container');
    const text = document.createElement('div');
    text.classList.add('header', 'text');
    text.textContent = 'My Todo List';
    container.append(text);
    document.body.append(container);
})();

// create content of website
const content = (() => {
    const container = document.createElement('div');
    container.classList.add('content', 'container');
    _createProjectArea(container);
    document.body.append(container);

    // display first (default) project if it exists
    if (_storage__WEBPACK_IMPORTED_MODULE_0__.projectList[0])
        (0,_displayProject__WEBPACK_IMPORTED_MODULE_1__.displayProject)(_storage__WEBPACK_IMPORTED_MODULE_0__.projectList[0]);
})();

// create sidebar of website
const sidebar = (() => {
    const content = document.querySelector('.content.container');
    const container = document.createElement('div');
    container.classList.add('sidebar', 'container');
    content.prepend(container);

    const topPanel = document.createElement('div');
    topPanel.classList.add('sidebar', 'top-panel');

    const topPanelTxt = document.createElement('div');
    topPanelTxt.classList.add('sidebar', 'text');
    topPanelTxt.textContent = 'Projects';
    topPanel.append(topPanelTxt);
    
    const projectItemList = document.createElement('div');
    projectItemList.classList.add('sidebar', 'project-item-list');
    container.append(topPanel, projectItemList);

    _createAddProjectBtn(topPanel);
    displayProjectListSidebar(projectItemList);
})();



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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/scripts/ui.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/style.css */ "./src/style/style.css");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FB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Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsb0RBQWM7QUFDdEIsUUFBUSwrREFBYyxDQUFDLG9EQUFjO0FBQ3JDLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7VUNsSEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNCZWZvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0VxdWFsL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9kaXNwbGF5TW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGlzcGxheVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9zZXRBdHRycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEM5ODc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGVhZGVyLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MxNTNCO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMTJweCBzb2xpZCAjZjU5ODBkO1xcbiAgICBib3gtc2hhZG93OiBcXG4gICAgICAgIC0xMnB4IDBweCAwIDBweCAjZjU5ODBkIGluc2V0LFxcbiAgICAgICAgLTI0cHggLTEycHggMCAwcHggIzhCMUUzRiBpbnNldFxcbiAgICA7XFxufVxcblxcbi5oZWFkZXIudGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRlbnQuY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5zaWRlYmFyLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiYTE4MTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBib3gtc2hhZG93OiBcXG4gICAgICAgIDBweCAzcHggMTBweCAwICMzODY5NTUgaW5zZXRcXG4gICAgO1xcbn1cXG5cXG4uc2lkZWJhci50b3AtcGFuZWx7XFxuICAgIGFsaWduLXNlbGY6IG5vcm1hbDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYTZkZGQ0O1xcbn1cXG5cXG4uc2lkZWJhci50ZXh0e1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI0YwQzk4NztcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMzODY5NTU7XFxufVxcblxcbi5zaWRlYmFyLnByb2plY3QtaXRlbS1saXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDhweCAwO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4uc2lkZWJhci5wcm9qZWN0LWl0ZW17XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI2RjZmNjZTtcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uc2lkZWJhci5wcm9qZWN0LWl0ZW06aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICNmZmQ1MWE7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMzg2OTU1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODlCRDlFO1xcbn1cXG5cXG4uc2lkZWJhci5wcm9qZWN0LWl0ZW06YWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNkYmI4MTk7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci5wcm9qZWN0LWl0ZW0uc2VsZWN0ZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQjRDNDA7XFxufVxcblxcbi50b3AtcGFuZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QudG9wLXBhbmVse1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmJvdHRvbS1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uYnRuLXBhbmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LmJ0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDQycHg7XFxuICAgIHdpZHRoOiA0MnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICMxY2ZmNDE7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMzg2OTU1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LmJ0bjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODlCRDlFO1xcbn1cXG5cXG4uYWRkLXByb2plY3QuYnRuOmFjdGl2ZXtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzE3YzczNDtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucHJvamVjdC5hcmVhe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBib3gtc2hhZG93OiBcXG4gICAgICAgIDAgMCAxNXB4IDVweCAjYmU3MzAzIGluc2V0XFxuICAgIDtcXG59XFxuXFxuLnByb2plY3QuY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMTEwMHB4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luOiAzMnB4IDA7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTc1LCAxNzUpO1xcbn1cXG5cXG4ucHJvamVjdC5uYW1le1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiB0ZW1wICovXFxuLnByb2plY3QubmFtZTpkaXNhYmxlZHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRvZG8ubGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDRweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCAyNDUsIDI0NSk7XFxufVxcblxcbi50b2RvLXBhbmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXhwYW5kLXBhbmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyNTAsIDE2MCk7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLnRvZG8tbm9EZXNjLXBhbmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbn1cXG5cXG5pbnB1dC50b2Rve1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXS50b2RvLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXS50b2Rve1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXS50b2Rve1xcbiAgICB3aWR0aDogNTAwcHg7XFxufVxcblxcbmlucHV0LnRvZG86ZGlzYWJsZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbnRleHRhcmVhI2Rlc2N7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEudG9kb3tcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYS50b2RvOmRpc2FibGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubW9kYWwtYmFja2dyb3VuZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgZW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQsIGlzIHRoaXMgdGhpbmcgZXZlbiB3b3JraW5nPyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbjogMzV2aCBhdXRvO1xcbiAgICAvKiB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7ICovXFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLm1vZGFsLmNsb3NlLmJ0bntcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5tb2RhbC5jbG9zZS5idG46aG92ZXIsXFxuLm1vZGFsLmNsb3NlLmJ0bjpmb2N1c3tcXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgICBcXG59XFxuXFxuLm1vZGFsLmlucHV0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLm1vZGFsLmlucHV0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcjpoYXMoLmxvdyl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cXG4udG9kby5jb250YWluZXI6aGFzKC5tZWRpdW0pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4udG9kby5jb250YWluZXI6aGFzKC5oaWdoKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcXG59XFxuXFxuLnRvZG8uY29udGFpbmVyOmhhcyguZGVhZGxpbmUpe1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAzcHggcmVkIGluc2V0O1xcbn1cXG5cXG4udG9kby5jb250YWluZXI6aGFzKC5hbGVydCl7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCB5ZWxsb3cgaW5zZXQ7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcjpoYXMoLmRlYWRsaW5lLXBhc3NlZCl7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCBncmF5IGluc2V0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDOzs7SUFHQTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTtJQUNaOztJQUVBO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1o7O0lBRUE7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixRQUFRO0lBQ1IsY0FBYztJQUNkLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBLFNBQVM7QUFDVDtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsUUFBUTtJQUNSLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlFQUF5RTtJQUN6RSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCO29CQUNnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBDOTg3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcXG59XFxuXFxuLmhlYWRlci5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNDMTUzQjtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDI4cHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvcmRlci1ib3R0b206IDEycHggc29saWQgI2Y1OTgwZDtcXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICAtMTJweCAwcHggMCAwcHggI2Y1OTgwZCBpbnNldCxcXG4gICAgICAgIC0yNHB4IC0xMnB4IDAgMHB4ICM4QjFFM0YgaW5zZXRcXG4gICAgO1xcbn1cXG5cXG4uaGVhZGVyLnRleHQge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250ZW50LmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uc2lkZWJhci5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YmExODE7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICAwcHggM3B4IDEwcHggMCAjMzg2OTU1IGluc2V0XFxuICAgIDtcXG59XFxuXFxuLnNpZGViYXIudG9wLXBhbmVse1xcbiAgICBhbGlnbi1zZWxmOiBub3JtYWw7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2E2ZGRkNDtcXG59XFxuXFxuLnNpZGViYXIudGV4dHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICNGMEM5ODc7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMzg2OTU1O1xcbn1cXG5cXG4uc2lkZWJhci5wcm9qZWN0LWl0ZW0tbGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnNpZGViYXIucHJvamVjdC1pdGVte1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICNkY2ZjY2U7XFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gICAgcGFkZGluZzogOHB4IDE0cHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLnNpZGViYXIucHJvamVjdC1pdGVtOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjZmZkNTFhO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzM4Njk1NTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg5QkQ5RTtcXG59XFxuXFxuLnNpZGViYXIucHJvamVjdC1pdGVtOmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjZGJiODE5O1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnNpZGViYXIucHJvamVjdC1pdGVtLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREI0QzQwO1xcbn1cXG5cXG4udG9wLXBhbmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LnRvcC1wYW5lbHtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5ib3R0b20tcGFuZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmJ0bi1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC5idG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiA0MnB4O1xcbiAgICB3aWR0aDogNDJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMWNmZjQxO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzM4Njk1NTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC5idG46aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg5QkQ5RTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LmJ0bjphY3RpdmV7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICMxN2M3MzQ7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnByb2plY3QuYXJlYXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICAwIDAgMTVweCA1cHggI2JlNzMwMyBpbnNldFxcbiAgICA7XFxufVxcblxcbi5wcm9qZWN0LmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDExMDBweDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbjogMzJweCAwO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE3NSwgMTc1KTtcXG59XFxuXFxuLnByb2plY3QubmFtZXtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogdGVtcCAqL1xcbi5wcm9qZWN0Lm5hbWU6ZGlzYWJsZWR7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50b2RvLmxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4udG9kby5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMywgMjQ1LCAyNDUpO1xcbn1cXG5cXG4udG9kby1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmV4cGFuZC1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjUwLCAxNjApO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi50b2RvLW5vRGVzYy1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG59XFxuXFxuaW5wdXQudG9kb3tcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0udG9kbyxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0udG9kb3tcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0udG9kb3tcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG5pbnB1dC50b2RvOmRpc2FibGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG50ZXh0YXJlYSNkZXNje1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhLnRvZG97XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEudG9kbzpkaXNhYmxlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLm1vZGFsLWJhY2tncm91bmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87IGVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkLCBpcyB0aGlzIHRoaW5nIGV2ZW4gd29ya2luZz8gKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGdhcDogOHB4O1xcbiAgICBtYXJnaW46IDM1dmggYXV0bztcXG4gICAgLyogd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4OyAqL1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5tb2RhbC5jbG9zZS5idG57XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4ubW9kYWwuY2xvc2UuYnRuOmhvdmVyLFxcbi5tb2RhbC5jbG9zZS5idG46Zm9jdXN7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgICAgXFxufVxcblxcbi5tb2RhbC5pbnB1dC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5tb2RhbC5pbnB1dC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4udG9kby5jb250YWluZXI6aGFzKC5sb3cpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxuLnRvZG8uY29udGFpbmVyOmhhcygubWVkaXVtKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuLnRvZG8uY29udGFpbmVyOmhhcyguaGlnaCl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcjpoYXMoLmRlYWRsaW5lKXtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4IHJlZCBpbnNldDtcXG59XFxuXFxuLnRvZG8uY29udGFpbmVyOmhhcyguYWxlcnQpe1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAzcHggeWVsbG93IGluc2V0O1xcbn1cXG5cXG4udG9kby5jb250YWluZXI6aGFzKC5kZWFkbGluZS1wYXNzZWQpe1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAzcHggZ3JheSBpbnNldDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1vbnRocyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNSBtb250aHMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgNSlcbiAqIC8vPT4gU3VuIEZlYiAwMSAyMDE1IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTW9udGhzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgbW9udGhzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgdmFyIGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKTsgLy8gVGhlIEpTIERhdGUgb2JqZWN0IHN1cHBvcnRzIGRhdGUgbWF0aCBieSBhY2NlcHRpbmcgb3V0LW9mLWJvdW5kcyB2YWx1ZXMgZm9yXG4gIC8vIG1vbnRoLCBkYXksIGV0Yy4gRm9yIGV4YW1wbGUsIG5ldyBEYXRlKDIwMjAsIDAsIDApIHJldHVybnMgMzEgRGVjIDIwMTkgYW5kXG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAxKSByZXR1cm5zIDEgRmViIDIwMjEuICBUaGlzIGlzICphbG1vc3QqIHRoZSBiZWhhdmlvciB3ZVxuICAvLyB3YW50IGV4Y2VwdCB0aGF0IGRhdGVzIHdpbGwgd3JhcCBhcm91bmQgdGhlIGVuZCBvZiBhIG1vbnRoLCBtZWFuaW5nIHRoYXRcbiAgLy8gbmV3IERhdGUoMjAyMCwgMTMsIDMxKSB3aWxsIHJldHVybiAzIE1hciAyMDIxIG5vdCAyOCBGZWIgMjAyMSBhcyBkZXNpcmVkLiBTb1xuICAvLyB3ZSdsbCBkZWZhdWx0IHRvIHRoZSBlbmQgb2YgdGhlIGRlc2lyZWQgbW9udGggYnkgYWRkaW5nIDEgdG8gdGhlIGRlc2lyZWRcbiAgLy8gbW9udGggYW5kIHVzaW5nIGEgZGF0ZSBvZiAwIHRvIGJhY2sgdXAgb25lIGRheSB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkXG4gIC8vIG1vbnRoLlxuXG4gIHZhciBlbmRPZkRlc2lyZWRNb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgZW5kT2ZEZXNpcmVkTW9udGguc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgYW1vdW50ICsgMSwgMCk7XG4gIHZhciBkYXlzSW5Nb250aCA9IGVuZE9mRGVzaXJlZE1vbnRoLmdldERhdGUoKTtcblxuICBpZiAoZGF5T2ZNb250aCA+PSBkYXlzSW5Nb250aCkge1xuICAgIC8vIElmIHdlJ3JlIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgbW9udGgsIHRoZW4gdGhpcyBpcyB0aGUgY29ycmVjdCBkYXRlXG4gICAgLy8gYW5kIHdlJ3JlIGRvbmUuXG4gICAgcmV0dXJuIGVuZE9mRGVzaXJlZE1vbnRoO1xuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSwgd2Ugbm93IGtub3cgdGhhdCBzZXR0aW5nIHRoZSBvcmlnaW5hbCBkYXktb2YtbW9udGggdmFsdWUgd29uJ3RcbiAgICAvLyBjYXVzZSBhbiBvdmVyZmxvdywgc28gc2V0IHRoZSBkZXNpcmVkIGRheS1vZi1tb250aC4gTm90ZSB0aGF0IHdlIGNhbid0XG4gICAgLy8ganVzdCBzZXQgdGhlIGRhdGUgb2YgYGVuZE9mRGVzaXJlZE1vbnRoYCBiZWNhdXNlIHRoYXQgb2JqZWN0IG1heSBoYXZlIGhhZFxuICAgIC8vIGl0cyB0aW1lIGNoYW5nZWQgaW4gdGhlIHVudXN1YWwgY2FzZSB3aGVyZSB3aGVyZSBhIERTVCB0cmFuc2l0aW9uIHdhcyBvblxuICAgIC8vIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGggYW5kIGl0cyBsb2NhbCB0aW1lIHdhcyBpbiB0aGUgaG91ciBza2lwcGVkIG9yXG4gICAgLy8gcmVwZWF0ZWQgbmV4dCB0byBhIERTVCB0cmFuc2l0aW9uLiAgU28gd2UgdXNlIGBkYXRlYCBpbnN0ZWFkIHdoaWNoIGlzXG4gICAgLy8gZ3VhcmFudGVlZCB0byBzdGlsbCBoYXZlIHRoZSBvcmlnaW5hbCB0aW1lLlxuICAgIGRhdGUuc2V0RnVsbFllYXIoZW5kT2ZEZXNpcmVkTW9udGguZ2V0RnVsbFllYXIoKSwgZW5kT2ZEZXNpcmVkTW9udGguZ2V0TW9udGgoKSwgZGF5T2ZNb250aCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGJlZm9yZSB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYmVmb3JlIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0JlZm9yZShkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIDwgZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0VxdWFsXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgZXF1YWw/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGVxdWFsP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGVxdWFsXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyIEp1bHkgMjAxNCAwNjozMDo0NS4wMDAgYW5kIDIgSnVseSAyMDE0IDA2OjMwOjQ1LjUwMCBlcXVhbD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzRXF1YWwoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDYsIDMwLCA0NSwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDYsIDMwLCA0NSwgNTAwKVxuICogKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRXF1YWwoZGlydHlMZWZ0RGF0ZSwgZGlydHlSaWdodERhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eUxlZnREYXRlKTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eVJpZ2h0RGF0ZSk7XG4gIHJldHVybiBkYXRlTGVmdC5nZXRUaW1lKCkgPT09IGRhdGVSaWdodC5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgc3ViRGF5cyBmcm9tIFwiLi4vc3ViRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1vbnRocyBmcm9tIFwiLi4vc3ViTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge0R1cmF0aW9ufSBkdXJhdGlvbiAtIHRoZSBvYmplY3Qgd2l0aCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gYmUgc3VidHJhY3RlZFxuICpcbiAqIHwgS2V5ICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IHllYXJzICAgfCBBbW91bnQgb2YgeWVhcnMgdG8gYmUgc3VidHJhY3RlZCAgIHxcbiAqIHwgbW9udGhzICB8IEFtb3VudCBvZiBtb250aHMgdG8gYmUgc3VidHJhY3RlZCAgfFxuICogfCB3ZWVrcyAgIHwgQW1vdW50IG9mIHdlZWtzIHRvIGJlIHN1YnRyYWN0ZWQgICB8XG4gKiB8IGRheXMgICAgfCBBbW91bnQgb2YgZGF5cyB0byBiZSBzdWJ0cmFjdGVkICAgIHxcbiAqIHwgaG91cnMgICB8IEFtb3VudCBvZiBob3VycyB0byBiZSBzdWJ0cmFjdGVkICAgfFxuICogfCBtaW51dGVzIHwgQW1vdW50IG9mIG1pbnV0ZXMgdG8gYmUgc3VidHJhY3RlZCB8XG4gKiB8IHNlY29uZHMgfCBBbW91bnQgb2Ygc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkIHxcbiAqXG4gKiBBbGwgdmFsdWVzIGRlZmF1bHQgdG8gMFxuICpcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IHRoZSBmb2xsb3dpbmcgZHVyYXRpb24gZnJvbSAxNSBKdW5lIDIwMTcgMTU6Mjk6MjBcbiAqIGNvbnN0IHJlc3VsdCA9IHN1YihuZXcgRGF0ZSgyMDE3LCA1LCAxNSwgMTUsIDI5LCAyMCksIHtcbiAqICAgeWVhcnM6IDIsXG4gKiAgIG1vbnRoczogOSxcbiAqICAgd2Vla3M6IDEsXG4gKiAgIGRheXM6IDcsXG4gKiAgIGhvdXJzOiA1LFxuICogICBtaW51dGVzOiA5LFxuICogICBzZWNvbmRzOiAzMFxuICogfSlcbiAqIC8vPT4gTW9uIFNlcCAxIDIwMTQgMTA6MTk6NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWIoZGF0ZSwgZHVyYXRpb24pIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIGlmICghZHVyYXRpb24gfHwgX3R5cGVvZihkdXJhdGlvbikgIT09ICdvYmplY3QnKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIHllYXJzID0gZHVyYXRpb24ueWVhcnMgPyB0b0ludGVnZXIoZHVyYXRpb24ueWVhcnMpIDogMDtcbiAgdmFyIG1vbnRocyA9IGR1cmF0aW9uLm1vbnRocyA/IHRvSW50ZWdlcihkdXJhdGlvbi5tb250aHMpIDogMDtcbiAgdmFyIHdlZWtzID0gZHVyYXRpb24ud2Vla3MgPyB0b0ludGVnZXIoZHVyYXRpb24ud2Vla3MpIDogMDtcbiAgdmFyIGRheXMgPSBkdXJhdGlvbi5kYXlzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLmRheXMpIDogMDtcbiAgdmFyIGhvdXJzID0gZHVyYXRpb24uaG91cnMgPyB0b0ludGVnZXIoZHVyYXRpb24uaG91cnMpIDogMDtcbiAgdmFyIG1pbnV0ZXMgPSBkdXJhdGlvbi5taW51dGVzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLm1pbnV0ZXMpIDogMDtcbiAgdmFyIHNlY29uZHMgPSBkdXJhdGlvbi5zZWNvbmRzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLnNlY29uZHMpIDogMDsgLy8gU3VidHJhY3QgeWVhcnMgYW5kIG1vbnRoc1xuXG4gIHZhciBkYXRlV2l0aG91dE1vbnRocyA9IHN1Yk1vbnRocyhkYXRlLCBtb250aHMgKyB5ZWFycyAqIDEyKTsgLy8gU3VidHJhY3Qgd2Vla3MgYW5kIGRheXNcblxuICB2YXIgZGF0ZVdpdGhvdXREYXlzID0gc3ViRGF5cyhkYXRlV2l0aG91dE1vbnRocywgZGF5cyArIHdlZWtzICogNyk7IC8vIFN1YnRyYWN0IGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzXG5cbiAgdmFyIG1pbnV0ZXN0b1N1YiA9IG1pbnV0ZXMgKyBob3VycyAqIDYwO1xuICB2YXIgc2Vjb25kc3RvU3ViID0gc2Vjb25kcyArIG1pbnV0ZXN0b1N1YiAqIDYwO1xuICB2YXIgbXN0b1N1YiA9IHNlY29uZHN0b1N1YiAqIDEwMDA7XG4gIHZhciBmaW5hbERhdGUgPSBuZXcgRGF0ZShkYXRlV2l0aG91dERheXMuZ2V0VGltZSgpIC0gbXN0b1N1Yik7XG4gIHJldHVybiBmaW5hbERhdGU7XG59IiwiaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCAxMCBkYXlzIGZyb20gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1YkRheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBGcmkgQXVnIDIyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJEYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkRGF5cyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTW9udGhzIGZyb20gXCIuLi9hZGRNb250aHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1vbnRocyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1vbnRocyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDUgbW9udGhzIGZyb20gMSBGZWJydWFyeSAyMDE1OlxuICogY29uc3QgcmVzdWx0ID0gc3ViTW9udGhzKG5ldyBEYXRlKDIwMTUsIDEsIDEpLCA1KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNb250aHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNb250aHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB0b2RvIGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIuL3NldEF0dHJzXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdCB9IGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCwgc2V0UHJvamVjdCB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0TGlzdFNpZGViYXIgfSBmcm9tIFwiLi91aVwiO1xuXG4vLyBjcmVhdGUgYSBmaWVsZCBjb250YWluZXIgdXNlIGluIG1vZGFsXG5jb25zdCBfY3JlYXRlRmllbGRDb250YWluZXIgPSAoZm9ybSwgdHlwZSwgbGFiZWxUeHQsIG5hbWUsIHJlcXVpcmVkKSA9PiB7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGlucHV0IGZpZWxkIGhhcyByZXF1aXJlZCBhdHRyaWJ1dGVcbiAgICBjb25zdCBfY2hlY2tSZXF1aXJlbWVudCA9IChmaWVsZCkgPT4ge1xuICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2lucHV0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGxhYmVsLCB7J2Zvcic6IG5hbWV9KTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke2xhYmVsVHh0fTpgO1xuXG4gICAgaWYgKHR5cGUgPT09IFwidGV4dGFyZWFcIikge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHNldEF0dHJpYnV0ZXMoZmllbGQsIHsnaWQnOiBuYW1lLCAnbmFtZSc6IG5hbWUsICdyb3dzJzogNX0pO1xuICAgICAgICBfY2hlY2tSZXF1aXJlbWVudChmaWVsZCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobGFiZWwsIGZpZWxkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgc2V0QXR0cmlidXRlcyhmaWVsZCwgeyd0eXBlJzogdHlwZSwgJ2lkJzogbmFtZSwgJ25hbWUnOiBuYW1lfSk7XG4gICAgICAgIF9jaGVja1JlcXVpcmVtZW50KGZpZWxkKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChsYWJlbCwgZmllbGQpO1xuICAgIH1cblxuICAgIGZvcm0uYXBwZW5kKGNvbnRhaW5lcik7XG59O1xuXG4vLyBjcmVhdGUgYSBkcm9wZG93biBjb250YWluZXIgdXNlIGluIG1vZGFsXG5jb25zdCBfY3JlYXRlUHJpb3JpdHlEcm9wRG93biA9IChmb3JtLCBsYWJlbFR4dCwgbmFtZSwgcmVxdWlyZWQpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnaW5wdXQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHNldEF0dHJpYnV0ZXMobGFiZWwsIHsnZm9yJzogbmFtZX0pO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7bGFiZWxUeHR9OmA7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2V0QXR0cmlidXRlcyhzZWxlY3QsIHsnaWQnOiBuYW1lLCAnbmFtZSc6IG5hbWV9KTtcbiAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbGV0IHByaW9yaXR5O1xuICAgICAgICBsZXQgcHJpb3JpdHlUeHQ7XG4gICAgICAgIHN3aXRjaChpKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPSAnbG93JztcbiAgICAgICAgICAgICAgICBwcmlvcml0eVR4dCA9ICdMb3cnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlUeHQgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKG9wdGlvbiwgeydzZWxlY3RlZCc6ICcnfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlUeHQgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc2V0QXR0cmlidXRlcyhvcHRpb24sIHsndmFsdWUnOiBwcmlvcml0eX0pO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eVR4dDtcbiAgICAgICAgc2VsZWN0LmFwcGVuZChvcHRpb24pO1xuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmQobGFiZWwsIHNlbGVjdCk7XG4gICAgZm9ybS5hcHBlbmQoY29udGFpbmVyKTtcbn1cblxuLy8gZW5hYmxlIGJ1dHRvbiB0byBiZSBjbGlja2FibGUgYWdhaW5cbmNvbnN0IF9lbmFibGVCdXR0b24gPSAoYnRuLCBtb2RhbCkgPT4ge1xuICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBtb2RhbC5yZW1vdmUoKTtcbn07XG5cbi8vIGRpc3BsYXkgYSBcImFkZCB0b2RvIHRvIHByb2plY3RcIiBtb2RhbFxuY29uc3QgZGlzcGxheUFkZFRvZG9Nb2RhbCA9IChwcm9qZWN0LCBidG4pID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnbW9kYWwtYmFja2dyb3VuZCcpO1xuICAgIFxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ21vZGFsLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRvcFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9wUGFuZWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAndG9wLXBhbmVsJyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgdG9kbydcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2Nsb3NlJywgJ2J0bicpO1xuICAgIGNsb3NlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2VuYWJsZUJ1dHRvbihidG4sIG1vZGFsKSk7XG5cbiAgICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgc2V0QXR0cmlidXRlcyhpbnB1dEZvcm0sIHsnYWN0aW9uJzogJ2phdmFzY3JpcHQ6OycsICdtZXRob2QnOiAncG9zdCd9KTtcbiAgICBpbnB1dEZvcm0uY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnaW5wdXQtZm9ybScpO1xuXG4gICAgLy8gaW5wdXQgZmllbGRzXG4gICAgX2NyZWF0ZUZpZWxkQ29udGFpbmVyKGlucHV0Rm9ybSwgJ3RleHQnLCAnVGl0bGUnLCAndGl0bGUnLCB0cnVlKTtcbiAgICBfY3JlYXRlRmllbGRDb250YWluZXIoaW5wdXRGb3JtLCAndGV4dGFyZWEnLCAnRGVzY3JpcHRpb24gKE9wdGlvbmFsKScsICdkZXNjJywgZmFsc2UpO1xuICAgIF9jcmVhdGVGaWVsZENvbnRhaW5lcihpbnB1dEZvcm0sICdkYXRlJywgJ0R1ZSBkYXRlIChPcHRpb25hbCknLCAnZHVlX2RhdGUnLCBmYWxzZSk7XG4gICAgX2NyZWF0ZVByaW9yaXR5RHJvcERvd24oaW5wdXRGb3JtLCAnUHJpb3JpdHknLCAncHJpb3JpdHknLCB0cnVlKTtcblxuICAgIGNvbnN0IGJvdHRvbVBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm90dG9tUGFuZWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnYm90dG9tLXBhbmVsJyk7XG5cbiAgICAvLyBjcmVhdGUgbmV3IHRvZG9cbiAgICBjb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGNyZWF0ZUJ0biwgeyd0eXBlJzogJ3N1Ym1pdCd9KTtcbiAgICBjcmVhdGVCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnYnRuJywgJ2NyZWF0ZS10b2RvJyk7XG4gICAgY3JlYXRlQnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSc7XG4gICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBjaGVjayB2YWxpZGF0aW9uXG4gICAgICAgIGxldCB0aXRsZUlzVmFsaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIGxldCBkdWVEYXRlSXNWYWxpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVfZGF0ZScpLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgbGV0IHByaW9yaXR5SXNWYWxpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgaWYgKHRpdGxlSXNWYWxpZCAmJiBkdWVEYXRlSXNWYWxpZCAmJiBwcmlvcml0eUlzVmFsaWQpIHtcbiAgICAgICAgICAgIHByb2plY3QuYWRkVG9kbyhcbiAgICAgICAgICAgICAgICBuZXcgdG9kbyhcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVfZGF0ZScpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgX2VuYWJsZUJ1dHRvbihidG4sIG1vZGFsKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBjYW5jZWxcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHNldEF0dHJpYnV0ZXMoY2FuY2VsQnRuLCB7J3R5cGUnOiAncmVzZXQnfSk7XG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2J0bicsICdjYW5jZWwnKTtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfZW5hYmxlQnV0dG9uKGJ0biwgbW9kYWwpKTtcbiAgICBib3R0b21QYW5lbC5hcHBlbmQoY2FuY2VsQnRuLCBjcmVhdGVCdG4pO1xuXG4gICAgaW5wdXRGb3JtLmFwcGVuZChib3R0b21QYW5lbCk7XG4gICAgdG9wUGFuZWwuYXBwZW5kKGhlYWRlciwgY2xvc2VCdG4pO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmQodG9wUGFuZWwsIGlucHV0Rm9ybSk7XG4gICAgbW9kYWwuYXBwZW5kKG1vZGFsQ29udGVudClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtb2RhbCk7XG59O1xuXG4vLyBkaXNwbGF5IGEgXCJhZGQgcHJvamVjdCB0byBhIGxpc3Qgb2YgcHJvamVjdHNcIiBtb2RhbFxuY29uc3QgZGlzcGxheUFkZFByb2plY3RNb2RhbCA9IChidG4pID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnLCAnbW9kYWwtYmFja2dyb3VuZCcpO1xuXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnLCAnbW9kYWwtY29udGVudCcpO1xuXG4gICAgY29uc3QgdG9wUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BQYW5lbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICd0b3AtcGFuZWwnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdoZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnQWRkIG5ldyBwcm9qZWN0J1xuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnY2xvc2UnLCAnYnRuJyk7XG4gICAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfZW5hYmxlQnV0dG9uKGJ0biwgbW9kYWwpKTtcblxuICAgIGNvbnN0IGlucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGlucHV0Rm9ybSwgeydhY3Rpb24nOiAnamF2YXNjcmlwdDo7JywgJ21ldGhvZCc6ICdwb3N0J30pO1xuICAgIGlucHV0Rm9ybS5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdpbnB1dC1mb3JtJyk7XG5cbiAgICBfY3JlYXRlRmllbGRDb250YWluZXIoaW5wdXRGb3JtLCAndGV4dCcsICdQcm9qZWN0IE5hbWUnLCAncHJvamVjdF9uYW1lJywgdHJ1ZSk7XG5cbiAgICBjb25zdCBib3R0b21QYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvdHRvbVBhbmVsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2JvdHRvbS1wYW5lbCcpO1xuXG4gICAgLy8gY3JlYXRlIG5ldyBwcm9qZWN0XG4gICAgY29uc3QgY3JlYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2V0QXR0cmlidXRlcyhjcmVhdGVCdG4sIHsndHlwZSc6ICdzdWJtaXQnfSk7XG4gICAgY3JlYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2J0bicsICdjcmVhdGUtcHJvamVjdCcpO1xuICAgIGNyZWF0ZUJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUnO1xuICAgIGNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgdmFsaWRhdGlvblxuICAgICAgICBsZXQgcHJvamVjdE5hbWVJc1ZhbGlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfbmFtZScpLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgaWYgKHByb2plY3ROYW1lSXNWYWxpZCkge1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9uYW1lJykudmFsdWUpO1xuXG4gICAgICAgICAgICAvLyBjaGFuZ2UgaGVyZVxuICAgICAgICAgICAgc2V0UHJvamVjdChuZXdQcm9qZWN0KTtcblxuICAgICAgICAgICAgLy8gZGlzcGxheSBuZXcgcHJvamVjdFxuICAgICAgICAgICAgX2VuYWJsZUJ1dHRvbihidG4sIG1vZGFsKTtcblxuICAgICAgICAgICAgLy8gcmUtZGlzcGxheSBhIGxpc3Qgb2YgcHJvamVjdCBpbiBzaWRlYmFyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci5wcm9qZWN0LWl0ZW0tbGlzdCcpO1xuICAgICAgICAgICAgZGlzcGxheVByb2plY3RMaXN0U2lkZWJhcihwcm9qZWN0SXRlbUxpc3QpO1xuXG4gICAgICAgICAgICAvLyBEaXNwbGF5IHByb2plY3QgYWZ0ZXIgY3JlYXRpbmcgcHJvamVjdCBpbW1lZGlhdGVseSwgaWYgb25seSBpdCdzIHRoZSBmaXJzdCBwcm9qZWN0IGluIHRoZSBsaXN0XG4gICAgICAgICAgICBpZiAocHJvamVjdExpc3QubGVuZ3RoID09IDEpIFxuICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RMaXN0WzBdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gY2FuY2VsXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2V0QXR0cmlidXRlcyhjYW5jZWxCdG4sIHsndHlwZSc6ICdyZXNldCd9KTtcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnYnRuJywgJ2NhbmNlbCcpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9lbmFibGVCdXR0b24oYnRuLCBtb2RhbCkpO1xuICAgIGJvdHRvbVBhbmVsLmFwcGVuZChjYW5jZWxCdG4sIGNyZWF0ZUJ0bik7XG5cbiAgICBpbnB1dEZvcm0uYXBwZW5kKGJvdHRvbVBhbmVsKTtcbiAgICB0b3BQYW5lbC5hcHBlbmQoaGVhZGVyLCBjbG9zZUJ0bik7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZCh0b3BQYW5lbCwgaW5wdXRGb3JtKTtcbiAgICBtb2RhbC5hcHBlbmQobW9kYWxDb250ZW50KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtb2RhbCk7XG59O1xuXG5leHBvcnQge1xuICAgIGRpc3BsYXlBZGRQcm9qZWN0TW9kYWwsIFxuICAgIGRpc3BsYXlBZGRUb2RvTW9kYWwsXG59OyIsImltcG9ydCB7IGRpc3BsYXlBZGRUb2RvTW9kYWwgfSBmcm9tIFwiLi9kaXNwbGF5TW9kYWxcIjtcbmltcG9ydCB7IHNldFByb2plY3QsIHJlbW92ZVByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RMaXN0U2lkZWJhciB9IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQgeyBzdWIsIHBhcnNlSVNPLCBpc0JlZm9yZSwgaXNFcXVhbCwgc3RhcnRPZkRheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIi4vc2V0QXR0cnNcIjtcblxuLy8gZGlzcGxheSBhIHByb2plY3QgZGlzcGxheWluZyBhIGxpc3Qgb2YgdG9kb1xuY29uc3QgZGlzcGxheVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIFxuICAgIC8vIHJlLWRpc3BsYXkgYSBsaXN0IG9mIHByb2plY3QgaW4gc2lkZWJhclxuICAgIGNvbnN0IF9yZWZyZXNoU2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXIucHJvamVjdC1pdGVtLWxpc3QnKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RMaXN0U2lkZWJhcihwcm9qZWN0SXRlbUxpc3QpO1xuICAgIH1cblxuICAgIC8vIGNoYW5nZSBwcm9qZWN0J3MgbmFtZVxuICAgIGNvbnN0IF9jaGFuZ2VQcm9qZWN0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcHJvamVjdE5hbWUudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICBwcm9qZWN0LmVkaXROYW1lKHByb2plY3ROYW1lLnZhbHVlKTtcblxuICAgICAgICAvLyBjaGFuZ2UgcHJvamVjdCBuYW1lIGluIHN0b3JhZ2VcbiAgICAgICAgc2V0UHJvamVjdChwcm9qZWN0KTtcblxuICAgICAgICAvLyByZS1kaXNwbGF5IGEgbGlzdCBvZiBwcm9qZWN0IGluIHNpZGViYXJcbiAgICAgICAgX3JlZnJlc2hTaWRlYmFyKCk7XG4gICAgfTtcblxuICAgIC8vIGRlbGV0ZSBwcm9qZWN0IGZyb20gYSBsaXN0XG4gICAgY29uc3QgX2RlbGV0ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgICAvLyBkZWxldGUgZnJvbSBzdG9yYWdlXG4gICAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgIFxuICAgICAgICAvLyByZS1kaXNwbGF5IGEgbGlzdCBvZiBwcm9qZWN0IGluIHNpZGViYXJcbiAgICAgICAgX3JlZnJlc2hTaWRlYmFyKCk7XG5cbiAgICAgICAgLy8gZGlzcGxheSBmaXJzdCBwcm9qZWN0IGluIHRoZSBsaXN0IGFmdGVyIGRlbGV0aW5nLCBpZiBvbmx5IGl0IGV4aXN0c1xuICAgICAgICBpZiAocHJvamVjdExpc3RbMF0pXG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0TGlzdFswXSk7XG4gICAgfTtcblxuICAgIC8vIGNyZWF0ZSBhIGxpc3Qgb2YgdG9kbyBpbiBwcm9qZWN0XG4gICAgY29uc3QgX2NyZWF0ZUxpc3RvZlRvZG8gPSAoKSA9PiB7XG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgndG9kbycsICdsaXN0Jyk7XG4gICAgICAgIGxldCBsZW5ndGggPSBwcm9qZWN0Lmxpc3QubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnY29udGFpbmVyJyk7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHRvZG9JdGVtLCB7J2FjdGlvbic6ICdqYXZhc2NyaXB0OjsnLCAnbWV0aG9kJzogJ3Bvc3QnfSk7XG5cbiAgICAgICAgICAgIC8vIHN0b3JlIGFsbCB0b2RvXG4gICAgICAgICAgICBjb25zdCB0b2RvUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvZG9QYW5lbC5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ3RvZG8tcGFuZWwnKTtcblxuICAgICAgICAgICAgLy8gc3RvcmUgYWxsIHRvZG8gZXhjZXB0IGRlc2NcbiAgICAgICAgICAgIGNvbnN0IG5vRGVzY1BhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub0Rlc2NQYW5lbC5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ3RvZG8tbm9EZXNjLXBhbmVsJyk7XG5cbiAgICAgICAgICAgIC8vIHN0b3JlIGRlc2NcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBleHBhbmRQYW5lbC5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ2V4cGFuZC1wYW5lbCcsICdoaWRkZW4nKTtcblxuICAgICAgICAgICAgLy8gdG9kb1xuICAgICAgICAgICAgY29uc3QgaXNEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlzRG9uZS5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ2lzRG9uZScpO1xuICAgICAgICAgICAgaXNEb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIF90b2dnbGVUb2RvSXNEb25lKGlzRG9uZSwgcHJvamVjdC5saXN0W2ldKTtcbiAgICAgICAgICAgICAgICBzZXRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKGlzRG9uZSwgeyd0eXBlJzogJ2NoZWNrYm94JywgJ25hbWUnOiAnaXNfZG9uZScsICd2YWx1ZSc6IHByb2plY3QubGlzdFtpXS5pc0RvbmV9KTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lmxpc3RbaV0uaXNEb25lKSB7XG4gICAgICAgICAgICAgICAgaXNEb25lLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAndGl0bGUnKTtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXModGl0bGUsIHsndHlwZSc6ICd0ZXh0JywgJ25hbWUnOiAndGl0bGUnLCAndmFsdWUnOiBwcm9qZWN0Lmxpc3RbaV0udGl0bGUsICdkaXNhYmxlZCc6ICcnfSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgndG9kbycsICdkZXNjJyk7XG4gICAgICAgICAgICBkZXNjLnRleHRDb250ZW50ID0gcHJvamVjdC5saXN0W2ldLmRlc2M7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKGRlc2MsIHsnbmFtZSc6ICdkZXNjJywgJ2Rpc2FibGVkJzogJyd9KTtcblxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnZGF0ZScpO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhkdWVEYXRlLCB7J3R5cGUnOiAnZGF0ZScsICduYW1lJzogJ2R1ZV9kYXRlJywgJ3ZhbHVlJzogcHJvamVjdC5saXN0W2ldLmR1ZURhdGUsICdkaXNhYmxlZCc6ICcnfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNoZWNrIGRlYWRsaW5lIHN0YXR1c1xuICAgICAgICAgICAgaWYgKHByb2plY3QubGlzdFtpXS5kdWVEYXRlICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IF9jaGVja0RlYWRsaW5lKGR1ZURhdGUpO1xuICAgICAgICAgICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChzdGF0dXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kbycsICdwcmlvcml0eScsIHByb2plY3QubGlzdFtpXS5wcmlvcml0eSk7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHByaW9yaXR5LCB7J25hbWUnOiAncHJpb3JpdHknLCAnZGlzYWJsZWQnOiAnJ30pO1xuICAgICAgICAgICAgLy8gY3JlYXRlIHByaW9yaXR5IG9wdGlvbnNcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDM7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIGxldCBwcmlvcml0eUx2bDtcbiAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHlUeHQ7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBfc2VsZWN0Q29ycmVjdFByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdC5saXN0W2ldLnByaW9yaXR5ID09PSBwcmlvcml0eUx2bCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhvcHRpb24sIHsnc2VsZWN0ZWQnOiAnJ30pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaChqKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5THZsID0gJ2xvdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVR4dCA9ICdMb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdENvcnJlY3RQcmlvcml0eSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5THZsID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVR4dCA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdENvcnJlY3RQcmlvcml0eSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5THZsID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlUeHQgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0Q29ycmVjdFByaW9yaXR5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhvcHRpb24sIHsndmFsdWUnOiBwcmlvcml0eUx2bH0pO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5VHh0O1xuICAgICAgICAgICAgICAgIHByaW9yaXR5LmFwcGVuZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub0Rlc2NQYW5lbC5hcHBlbmQoaXNEb25lLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgZXhwYW5kUGFuZWwuYXBwZW5kKGRlc2MpO1xuXG4gICAgICAgICAgICAvLyBzdG9yZSBidXR0b25zXG4gICAgICAgICAgICBjb25zdCBidG5QYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnRuUGFuZWwuY2xhc3NMaXN0LmFkZCgndG9kbycsICdidG4tcGFuZWwnKTtcblxuICAgICAgICAgICAgLy8gYnV0dG9uc1xuICAgICAgICAgICAgY29uc3QgZXhwYW5kQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBleHBhbmRCdG4uY2xhc3NMaXN0LmFkZCgndG9kbycsICdleHBhbmQtdG9kbycsICdidG4nKTtcbiAgICAgICAgICAgIGV4cGFuZEJ0bi50ZXh0Q29udGVudCA9ICdFeHBhbmQnO1xuICAgICAgICAgICAgZXhwYW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZXhwYW5kUGFuZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJykpO1xuXG4gICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnZWRpdC10b2RvJywgJ2J0bicsICdub3QtZWRpdGFibGUnKTtcbiAgICAgICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIF9lZGl0VG9kbyhwcm9qZWN0Lmxpc3RbaV0sIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgZXhwYW5kUGFuZWwsIGVkaXRCdG4pO1xuICAgICAgICAgICAgICAgIHNldFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgndG9kbycsICdkZWxldGUtdG9kbycsICdidG4nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIF9kZWxldGVUb2RvKHByb2plY3QubGlzdFtpXSk7XG4gICAgICAgICAgICAgICAgc2V0UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgdG9kb1BhbmVsLmFwcGVuZChub0Rlc2NQYW5lbCwgZXhwYW5kUGFuZWwpO1xuICAgICAgICAgICAgYnRuUGFuZWwuYXBwZW5kKGV4cGFuZEJ0biwgZWRpdEJ0biwgZGVsZXRlQnRuKTtcbiAgICAgICAgICAgIHRvZG9JdGVtLmFwcGVuZCh0b2RvUGFuZWwsIGJ0blBhbmVsKTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kKHRvZG9JdGVtKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQobGlzdCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gcmVmcmVzaCBhIGxpc3Qgb2YgdG9kbyBpbiBhIHByb2plY3RcbiAgICBjb25zdCBfcmVmcmVzaExpc3RvZlRvZG8gPSAoKSA9PiB7XG4gICAgICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIF9jcmVhdGVMaXN0b2ZUb2RvKCk7XG4gICAgfTtcblxuICAgIC8vIGRlbGV0ZSBhIHRvZG8gZnJvbSB0aGUgcHJvamVjdFxuICAgIGNvbnN0IF9kZWxldGVUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgICAgcHJvamVjdC5kZWxldGVUb2RvKHRvZG8pO1xuICAgICAgICBfcmVmcmVzaExpc3RvZlRvZG8oKTtcbiAgICB9O1xuXG4gICAgLy8gYWRkIHRvZG8gdG8gdGhlIHByb2plY3RcbiAgICBjb25zdCBfYWRkVG9kb1RvUHJvamVjdCA9IChidG4pID0+IHtcbiAgICAgICAgZGlzcGxheUFkZFRvZG9Nb2RhbChwcm9qZWN0LCBidG4pO1xuICAgICAgICBjb25zdCBjcmVhdGVUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi5jcmVhdGUtdG9kbycpO1xuICAgICAgICBjcmVhdGVUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX3JlZnJlc2hMaXN0b2ZUb2RvKCkpO1xuICAgIH07XG5cbiAgICAvLyBjaGVjayBkZWFkbGluZSBzdGF0dXMgYW5kIHJldHVybiBzdHJpbmdcbiAgICBjb25zdCBfY2hlY2tEZWFkbGluZSA9IChkdWVEYXRlKSA9PiB7XG4gICAgICAgIGxldCBwYXJzZWREdWVEYXRlID0gc3RhcnRPZkRheShwYXJzZUlTTyhkdWVEYXRlLnZhbHVlKSk7XG4gICAgICAgIGxldCB0b2RheSA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoKSk7XG4gICAgICAgIGxldCBkdWVEYXRlU3ViT25lRGF5ID0gc3ViKHBhcnNlZER1ZURhdGUsIHtkYXlzOiAxfSlcblxuICAgICAgICBpZiAoaXNFcXVhbChwYXJzZWREdWVEYXRlLCB0b2RheSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnZGVhZGxpbmUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRXF1YWwoZHVlRGF0ZVN1Yk9uZURheSwgdG9kYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2FsZXJ0JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0JlZm9yZShwYXJzZWREdWVEYXRlLCB0b2RheSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnZGVhZGxpbmUtcGFzc2VkJztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBlZGl0IHRvZG8gaW4gdGhlIHByb2plY3RcbiAgICBjb25zdCBfZWRpdFRvZG8gPSAodG9kbywgdGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBleHBhbmRQYW5lbCwgZWRpdEJ0bikgPT4ge1xuICAgICAgICBleHBhbmRQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgdGl0bGUudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICBkZXNjLnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgZHVlRGF0ZS50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHByaW9yaXR5LnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgLy8gcmVtb3ZlIG9sZCBjbGFzc1xuICAgICAgICBsZXQgc3RhdHVzID0gX2NoZWNrRGVhZGxpbmUoZHVlRGF0ZSk7XG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LnJlbW92ZShzdGF0dXMpO1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKHRvZG8ucHJpb3JpdHkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFlZGl0QnRuLmNsYXNzTGlzdC5jb250YWlucygnbm90LWVkaXRhYmxlJykpIHtcbiAgICAgICAgICAgIHRvZG8uZWRpdFRvZG8odGl0bGUudmFsdWUsIGRlc2MudmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlKTtcbiAgICAgICAgICAgIC8vIGFkZCBuZXcgY2xhc3MgYWZ0ZXIgZWRpdGluZ1xuICAgICAgICAgICAgc3RhdHVzID0gX2NoZWNrRGVhZGxpbmUoZHVlRGF0ZSk7XG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKHRvZG8ucHJpb3JpdHkpO1xuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKHN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnbm90LWVkaXRhYmxlJyk7XG4gICAgfTtcblxuICAgIC8vIHRvZ2dsZSBpc0RvbmUgaW4gdG9kb1xuICAgIGNvbnN0IF90b2dnbGVUb2RvSXNEb25lID0gKGlucHV0LCB0b2RvKSA9PiB7XG4gICAgICAgIHRvZG8udG9nZ2xlSXNEb25lKCk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0b2RvLmlzRG9uZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdG9wUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BQYW5lbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ3RvcC1wYW5lbCcpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnLCAnbmFtZScpXG4gICAgc2V0QXR0cmlidXRlcyhwcm9qZWN0TmFtZSwgeyd0eXBlJzogJ3RleHQnLCAndmFsdWUnOiBwcm9qZWN0Lm5hbWUsICduYW1lJzogJ3Byb2plY3RfbmFtZScsICdkaXNhYmxlZCc6ICcnfSk7XG4gICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge2lmIChlLmtleSA9PT0gJ0VudGVyJykge19jaGFuZ2VQcm9qZWN0TmFtZSgpO319KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQodG9wUGFuZWwpO1xuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF9jcmVhdGVMaXN0b2ZUb2RvKCk7XG5cbiAgICAvLyBwYW5lbCBmb3Igc3RvcmluZyBidXR0b25zXG4gICAgY29uc3QgYnRuUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG5QYW5lbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ2J0bi1wYW5lbCcpO1xuXG4gICAgLy8gYWRkIHRvZG8gdG8gcHJvamVjdFxuICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvJywgJ2J0bicsICdwcm9qZWN0Jyk7XG4gICAgYWRkVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIHRvZG9cIjtcbiAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoIWFkZFRvZG9CdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgYWRkVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIF9hZGRUb2RvVG9Qcm9qZWN0KGFkZFRvZG9CdG4pXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGNoYW5nZSBwcm9qZWN0J3MgbmFtZVxuICAgIGNvbnN0IGNoYW5nZVByb2plY3ROYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2hhbmdlUHJvamVjdE5hbWVCdG4uY2xhc3NMaXN0LmFkZCgnY2hhbmdlLW5hbWUtcHJvamVjdCcsICdidG4nLCAncHJvamVjdCcpO1xuICAgIGNoYW5nZVByb2plY3ROYW1lQnRuLnRleHRDb250ZW50ID0gJ0NoYW5nZSBuYW1lJztcbiAgICBjaGFuZ2VQcm9qZWN0TmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9jaGFuZ2VQcm9qZWN0TmFtZSgpKTtcblxuICAgIC8vIGRlbGV0ZSBwcm9qZWN0IGZyb20gdGhlIGxpc3RcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdCcsICdidG4nLCAncHJvamVjdCcpO1xuICAgIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlIHByb2plY3QnO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfZGVsZXRlUHJvamVjdCgpKTtcblxuICAgIGJ0blBhbmVsLmFwcGVuZChjaGFuZ2VQcm9qZWN0TmFtZUJ0biwgYWRkVG9kb0J0biwgZGVsZXRlUHJvamVjdEJ0bik7XG4gICAgdG9wUGFuZWwuYXBwZW5kKHByb2plY3ROYW1lLCBidG5QYW5lbCk7XG5cbiAgICBjb25zdCBwcm9qZWN0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmFyZWEnKTtcbiAgICBwcm9qZWN0QXJlYS5hcHBlbmQoY29udGFpbmVyKTtcbn07XG5cbmNvbnN0IHVuRGlzcGxheVByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmNvbnRhaW5lcicpO1xuICAgIGlmIChwcm9qZWN0Q29udGFpbmVyKVxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZSgpO1xufTtcblxuZXhwb3J0IHtcbiAgICBkaXNwbGF5UHJvamVjdCxcbiAgICB1bkRpc3BsYXlQcm9qZWN0LFxufTtcbiIsImNsYXNzIHByb2plY3R7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy50aW1lQ3JlYXRlZCA9IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICB0aGlzLmxpc3QucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICBkZWxldGVUb2RvKHRvZG8pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5saXN0LmluZGV4T2YodG9kbyk7XG4gICAgICAgIHRoaXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGVkaXROYW1lKG5ld05hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7IiwiZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRycykge1xuICAgIGZvciAobGV0IGtleSBpbiBhdHRycykge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0QXR0cmlidXRlczsiLCJpbXBvcnQgdG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5jb25zdCBwcm9qZWN0SWQgPSBbXTtcblxuLy8gc3RvcmUgcHJvamVjdCBpZCBpbnRvIHRoZSBsb2NhbFN0b3JhZ2VcbmNvbnN0IF9zdG9yZUlkID0gKGlkKSA9PiB7XG4gICAgLy8gY2hlY2sgZm9yIGR1cGxpY2F0ZVxuICAgIGlmIChwcm9qZWN0SWQuaW5kZXhPZihpZCkgPT0gLTEpIHtcbiAgICAgICAgcHJvamVjdElkLnB1c2goaWQpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdElkJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdElkKSk7XG4gICAgfVxufTtcblxuLy8gcmVtb3ZlIHByb2plY3QgaWQgZnJvbSB0aGUgbG9jYWxTdG9yYWdlXG5jb25zdCBfcmVtb3ZlSWQgPSAoaWQpID0+IHtcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0SWQuaW5kZXhPZihpZCk7XG4gICAgcHJvamVjdElkLnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RJZCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RJZCkpO1xufTtcblxuLy8gZ2V0IGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2VcbmNvbnN0IF9nZXRTdG9yYWdlID0gKCkgPT4ge1xuICAgIHByb2plY3RMaXN0Lmxlbmd0aCA9IDA7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmxlbmd0aCk7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggIT0gMCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0SWQnKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJZCk7XG4gICAgICAgIGxldCBsZW5ndGggPSBwcm9qZWN0SWQubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGdpdmluZyBhIHByb2plY3QgZnJvbSBsb2NhbCBzdG9yYWdlIGEgY2xhc3NcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RGcm9tU3RvcmFnZSA9IG5ldyBwcm9qZWN0KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocHJvamVjdEZyb21TdG9yYWdlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0SWRbaV0pKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RnJvbVN0b3JhZ2Vba2V5XSA9IHByb2plY3REYXRhW2tleV07XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvLyBnaXZpbmcgYSB0b2RvIGZyb20gbG9jYWwgc3RvcmFnZSBhIGNsYXNzXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHByb2plY3RGcm9tU3RvcmFnZS5saXN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0Zyb21TdG9yYWdlID0gbmV3IHRvZG8oKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXModG9kb0Zyb21TdG9yYWdlKSkge1xuICAgICAgICAgICAgICAgICAgICB0b2RvRnJvbVN0b3JhZ2Vba2V5XSA9IGl0ZW1ba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcHJvamVjdEZyb21TdG9yYWdlLmxpc3QuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RnJvbVN0b3JhZ2UubGlzdFtpbmRleF0gPSB0b2RvRnJvbVN0b3JhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3RGcm9tU3RvcmFnZSk7XG4gICAgXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICAgIH1cbn07XG5cbi8vIGFkZC9lZGl0IHByb2plY3QgaW4gdGhlIGxvY2FsU3RvcmFnZVxuY29uc3Qgc2V0UHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3UHJvamVjdC50aW1lQ3JlYXRlZCwgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdCkpO1xuICAgIF9zdG9yZUlkKG5ld1Byb2plY3QudGltZUNyZWF0ZWQpO1xuICAgIF9nZXRTdG9yYWdlKCk7XG59O1xuXG4vLyBkZWxldGUgcHJvamVjdCBmcm9tIHRoZSBsb2NhbFN0b3JhZ2VcbmNvbnN0IHJlbW92ZVByb2plY3QgPSAob2xkUHJvamVjdCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG9sZFByb2plY3QudGltZUNyZWF0ZWQpO1xuICAgIF9yZW1vdmVJZChvbGRQcm9qZWN0LnRpbWVDcmVhdGVkKTtcbiAgICBfZ2V0U3RvcmFnZSgpO1xufTtcblxuLy8gaW5pdGlhbGl6ZVxuaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT0gMCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0SWQnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0SWQpKTtcbn1cbmVsc2Uge1xuICAgIGNvbnN0IGlkRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RJZCcpKTtcbiAgICBmb3IgKGxldCBpZCBvZiBpZERhdGEpIHtcbiAgICAgICAgcHJvamVjdElkLnB1c2goaWQpO1xuICAgIH1cbn1cbi8vIGFsd2F5cyBjcmVhdGUgZGVmYXVsdCBwcm9qZWN0IGlmIG5vIHByb2plY3QgaXMgcHJlc2VudCBpbiB0aGUgbGlzdFxuaWYgKHByb2plY3RJZC5sZW5ndGggPT0gMCkge1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IHByb2plY3QoJ0RlZmF1bHQnKTtcbiAgICBzZXRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbn1cblxuX2dldFN0b3JhZ2UoKTtcblxuZXhwb3J0IHtcbiAgICBzZXRQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgcHJvamVjdExpc3QsXG59O1xuXG4iLCJjbGFzcyB0b2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaXNEb25lID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdG9nZ2xlSXNEb25lKCkge1xuICAgICAgICB0aGlzLmlzRG9uZSA9ICF0aGlzLmlzRG9uZTtcbiAgICB9XG5cbiAgICBlZGl0VG9kbyhuZXdUaXRsZSwgbmV3RGVzYywgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICB0aGlzLmRlc2MgPSBuZXdEZXNjO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0b2RvOyIsImltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3QsIHVuRGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdFwiO1xuaW1wb3J0IHsgZGlzcGxheUFkZFByb2plY3RNb2RhbCB9IGZyb20gJy4vZGlzcGxheU1vZGFsJztcblxuLy8gY3JlYXRlIGEgbGlzdCBvZiBwcm9qZWN0cyBcbmNvbnN0IF9jcmVhdGVQcm9qZWN0QXJlYSA9IChjb250ZW50KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ2FyZWEnKTtcbiAgICBjb250ZW50LmFwcGVuZChwcm9qZWN0TGlzdENvbnRhaW5lcik7XG59O1xuXG4vLyBjcmVhdGUgYSBidXR0b24gZm9yIGFkZGluZyBuZXcgcHJvamVjdCB0byB0aGUgbGlzdFxuY29uc3QgX2NyZWF0ZUFkZFByb2plY3RCdG4gPSAoc2lkZWJhcikgPT4ge1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdCcsICdidG4nLCAnZmEtc29saWQnLCAnZmEtcGx1cycsICdmYS0yeGwnKTtcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICghYWRkQnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGFkZEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRpc3BsYXlBZGRQcm9qZWN0TW9kYWwoYWRkQnRuKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHNpZGViYXIuYXBwZW5kKGFkZEJ0bik7XG59O1xuXG4vLyByZW1vdmUgYWxsIHRoZSBjaGlsZHJlbiBpbiBhIGxpc3Qgb2YgcHJvamVjdCBpbiBzaWRlYmFyXG5jb25zdCBfcmVmcmVzaFByb2plY3RMaXN0U2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci5wcm9qZWN0LWl0ZW0tbGlzdCcpO1xuICAgIHByb2plY3RJdGVtTGlzdC5pbm5lckhUTUwgPSAnJztcbn07XG5cbi8vIGRpc3BsYXkgYSBsaXN0IG9mIHByb2plY3QgaW4gc2lkZWJhclxuY29uc3QgZGlzcGxheVByb2plY3RMaXN0U2lkZWJhciA9IChjb250YWluZXIpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci5wcm9qZWN0LWl0ZW0nKTtcbiAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgLy8gZmluZCBpbmRleCBvZiBjdXJyZW50IHNlbGVjdGVkIHByb2plY3RcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY3VycmVudFByb2plY3RzW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSlcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPSBpO1xuICAgIH1cbiAgICBfcmVmcmVzaFByb2plY3RMaXN0U2lkZWJhcigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInLCAncHJvamVjdC1pdGVtJyk7XG4gICAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdFtpXS5uYW1lOyAgICAgICAgXG5cbiAgICAgICAgLy8gaWYgY2hhbmdpbmcgcHJvamVjdCdzIG5hbWUgb3IgYWRkZWQgbmV3IHByb2plY3RcbiAgICAgICAgaWYgKHByb2plY3RMaXN0Lmxlbmd0aCA+PSBjdXJyZW50UHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBoaWdobGlnaHQgKHByZXZpb3VzbHkpIHNlbGVjdGVkIHByb2plY3RcbiAgICAgICAgICAgIGlmIChpID09IHNlbGVjdGVkSW5kZXgpIFxuICAgICAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBkZWxldGluZyBjdXJyZW50IHByb2plY3RcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBoaWdobGlnaHQgdGhlIGZpcnN0IHByb2plY3RcbiAgICAgICAgICAgIGlmIChpID09IDApXG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBzaG93IHNlbGVjdGVkIHByb2plY3RcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHVuRGlzcGxheVByb2plY3QoKTtcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RMaXN0W2ldKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLnByb2plY3QtaXRlbS5zZWxlY3RlZCcpO1xuICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHByb2plY3QpO1xuICAgIH1cbn07XG5cbi8vIGNyZWF0ZSBoZWFkZXIgb2Ygd2Vic2l0ZVxuY29uc3QgaGVhZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJywgJ2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicsICd0ZXh0Jyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9ICdNeSBUb2RvIExpc3QnO1xuICAgIGNvbnRhaW5lci5hcHBlbmQodGV4dCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGFpbmVyKTtcbn0pKCk7XG5cbi8vIGNyZWF0ZSBjb250ZW50IG9mIHdlYnNpdGVcbmNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50JywgJ2NvbnRhaW5lcicpO1xuICAgIF9jcmVhdGVQcm9qZWN0QXJlYShjb250YWluZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XG5cbiAgICAvLyBkaXNwbGF5IGZpcnN0IChkZWZhdWx0KSBwcm9qZWN0IGlmIGl0IGV4aXN0c1xuICAgIGlmIChwcm9qZWN0TGlzdFswXSlcbiAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdExpc3RbMF0pO1xufSkoKTtcblxuLy8gY3JlYXRlIHNpZGViYXIgb2Ygd2Vic2l0ZVxuY29uc3Qgc2lkZWJhciA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LmNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJywgJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRlbnQucHJlcGVuZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgdG9wUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BQYW5lbC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJywgJ3RvcC1wYW5lbCcpO1xuXG4gICAgY29uc3QgdG9wUGFuZWxUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BQYW5lbFR4dC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJywgJ3RleHQnKTtcbiAgICB0b3BQYW5lbFR4dC50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgdG9wUGFuZWwuYXBwZW5kKHRvcFBhbmVsVHh0KTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0SXRlbUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0SXRlbUxpc3QuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicsICdwcm9qZWN0LWl0ZW0tbGlzdCcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQodG9wUGFuZWwsIHByb2plY3RJdGVtTGlzdCk7XG5cbiAgICBfY3JlYXRlQWRkUHJvamVjdEJ0bih0b3BQYW5lbCk7XG4gICAgZGlzcGxheVByb2plY3RMaXN0U2lkZWJhcihwcm9qZWN0SXRlbUxpc3QpO1xufSkoKTtcblxuZXhwb3J0IHtcbiAgICBkaXNwbGF5UHJvamVjdExpc3RTaWRlYmFyLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3VpXCI7XG5pbXBvcnQgXCIuLi9zdHlsZS9zdHlsZS5jc3NcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=