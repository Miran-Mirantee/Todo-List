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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(122, 248, 122);\n    height: 100vh;\n}\n\n.hidden{\n    display: none!important;\n}\n\n.header.container{\n    display: flex;\n    justify-content: center;\n    background-color: white;\n    padding: 16px;\n}\n\n.header.text {\n    font-size: 24px;\n    font-weight: bold;\n}\n\n.content.container{\n    display: flex;\n    flex-grow: 1;\n}\n\n.sidebar.container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: aquamarine;\n    padding: 16px;\n}\n\n.sidebar.project-item-list{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 24px;\n    padding: 4px;\n    gap: 16px;\n    width: 80%;\n    background-color: lightcoral;\n}\n\n.sidebar.project-item{\n    font-weight: bold;\n}\n\n.sidebar.project-item:hover{\n    cursor: pointer;\n    color: gold;\n}\n\n.top-panel{\n    display: flex;\n    justify-content: space-between;\n}\n\n.project.top-panel{\n    gap: 8px;\n}\n\n.bottom-panel{\n    display: flex;\n    gap: 4px;\n    justify-content: end;\n}\n\n.btn-panel{\n    display: flex;\n    gap: 4px;\n}\n\n.add-project.btn{\n    bottom: 24px;\n    right: 24px;\n}\n\n.project.area{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 16px;\n    width: 100%;\n\n    /* temp */\n    /* height: 100vh; */\n    gap: 32px;\n}\n\n.project.container{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    padding: 8px;\n    background-color: rgb(255, 175, 175);\n}\n\n.project.name{\n    font-size: 1.5rem;\n    border: none;\n    outline: none;\n}\n\n/* temp */\n.project.name:disabled{\n    color: black;\n    background-color: transparent;\n}\n\n.todo.list{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.todo.container{\n    display: flex;\n    gap: 4px;\n    padding: 4px;\n    background-color: rgb(133, 245, 245);\n}\n\n.todo-panel{\n    display: flex;\n    flex-direction: column;\n}\n\n.expand-panel{\n    display: flex;\n    background-color: rgb(233, 250, 160);\n    padding: 4px;\n    height: 100px;\n}\n\n.todo-noDesc-panel{\n    display: flex;\n    gap: 16px;\n}\n\ninput.todo{\n    border: none;\n    outline: none;\n}\n\ninput.todo:disabled{\n    background-color: transparent;\n    color: black;\n}\n\ntextarea#desc{\n    resize: none;\n}\n\ntextarea.todo{\n    resize: none;\n    width: 100%;\n    border: none;\n    outline: none;\n}\n\ntextarea.todo:disabled{\n    background-color: transparent;\n    color: black;\n}\n\n.modal-background{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    /* overflow: auto; enable scroll if needed, is this thing even working? */\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content{\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    gap: 8px;\n    margin: 35vh auto;\n    /* width: 250px;\n    height: 400px; */\n    padding: 8px;\n}\n\n.modal.close.btn{\n    color: black;\n    float: right;\n}\n\n.modal.close.btn:hover,\n.modal.close.btn:focus{\n    cursor: pointer;    \n}\n\n.modal.input-form {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.modal.input-container{\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.todo.container:has(.low){\n    background-color: greenyellow;\n}\n\n.todo.container:has(.medium){\n    background-color: aqua;\n}\n\n.todo.container:has(.high){\n    background-color: palevioletred;\n}\n\n.todo.container:has(.deadline){\n    box-shadow: 0px 0px 0px 3px red inset;\n}\n\n.todo.container:has(.alert){\n    box-shadow: 0px 0px 0px 3px yellow inset;\n}\n\n.todo.container:has(.deadline-passed){\n    box-shadow: 0px 0px 0px 3px gray inset;\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,4BAA4B;IAC5B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,SAAS;IACT,UAAU;IACV,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,WAAW;;IAEX,SAAS;IACT,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;AACjB;;AAEA,SAAS;AACT;IACI,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,yEAAyE;IACzE,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,QAAQ;IACR,iBAAiB;IACjB;oBACgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,sCAAsC;AAC1C","sourcesContent":["body{\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(122, 248, 122);\n    height: 100vh;\n}\n\n.hidden{\n    display: none!important;\n}\n\n.header.container{\n    display: flex;\n    justify-content: center;\n    background-color: white;\n    padding: 16px;\n}\n\n.header.text {\n    font-size: 24px;\n    font-weight: bold;\n}\n\n.content.container{\n    display: flex;\n    flex-grow: 1;\n}\n\n.sidebar.container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: aquamarine;\n    padding: 16px;\n}\n\n.sidebar.project-item-list{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 24px;\n    padding: 4px;\n    gap: 16px;\n    width: 80%;\n    background-color: lightcoral;\n}\n\n.sidebar.project-item{\n    font-weight: bold;\n}\n\n.sidebar.project-item:hover{\n    cursor: pointer;\n    color: gold;\n}\n\n.top-panel{\n    display: flex;\n    justify-content: space-between;\n}\n\n.project.top-panel{\n    gap: 8px;\n}\n\n.bottom-panel{\n    display: flex;\n    gap: 4px;\n    justify-content: end;\n}\n\n.btn-panel{\n    display: flex;\n    gap: 4px;\n}\n\n.add-project.btn{\n    bottom: 24px;\n    right: 24px;\n}\n\n.project.area{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 16px;\n    width: 100%;\n\n    /* temp */\n    /* height: 100vh; */\n    gap: 32px;\n}\n\n.project.container{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    padding: 8px;\n    background-color: rgb(255, 175, 175);\n}\n\n.project.name{\n    font-size: 1.5rem;\n    border: none;\n    outline: none;\n}\n\n/* temp */\n.project.name:disabled{\n    color: black;\n    background-color: transparent;\n}\n\n.todo.list{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.todo.container{\n    display: flex;\n    gap: 4px;\n    padding: 4px;\n    background-color: rgb(133, 245, 245);\n}\n\n.todo-panel{\n    display: flex;\n    flex-direction: column;\n}\n\n.expand-panel{\n    display: flex;\n    background-color: rgb(233, 250, 160);\n    padding: 4px;\n    height: 100px;\n}\n\n.todo-noDesc-panel{\n    display: flex;\n    gap: 16px;\n}\n\ninput.todo{\n    border: none;\n    outline: none;\n}\n\ninput.todo:disabled{\n    background-color: transparent;\n    color: black;\n}\n\ntextarea#desc{\n    resize: none;\n}\n\ntextarea.todo{\n    resize: none;\n    width: 100%;\n    border: none;\n    outline: none;\n}\n\ntextarea.todo:disabled{\n    background-color: transparent;\n    color: black;\n}\n\n.modal-background{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    /* overflow: auto; enable scroll if needed, is this thing even working? */\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content{\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    gap: 8px;\n    margin: 35vh auto;\n    /* width: 250px;\n    height: 400px; */\n    padding: 8px;\n}\n\n.modal.close.btn{\n    color: black;\n    float: right;\n}\n\n.modal.close.btn:hover,\n.modal.close.btn:focus{\n    cursor: pointer;    \n}\n\n.modal.input-form {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.modal.input-container{\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.todo.container:has(.low){\n    background-color: greenyellow;\n}\n\n.todo.container:has(.medium){\n    background-color: aqua;\n}\n\n.todo.container:has(.high){\n    background-color: palevioletred;\n}\n\n.todo.container:has(.deadline){\n    box-shadow: 0px 0px 0px 3px red inset;\n}\n\n.todo.container:has(.alert){\n    box-shadow: 0px 0px 0px 3px yellow inset;\n}\n\n.todo.container:has(.deadline-passed){\n    box-shadow: 0px 0px 0px 3px gray inset;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/scripts/storage.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui */ "./src/scripts/ui.js");






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
            (0,_storage__WEBPACK_IMPORTED_MODULE_3__.setProject)(project);
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
            (0,_storage__WEBPACK_IMPORTED_MODULE_3__.setProject)(newProject);

            // display new project
            _enableButton(btn, modal);

            // re-display a list of project in sidebar
            const projectItemList = document.querySelector('.sidebar.project-item-list');
            (0,_ui__WEBPACK_IMPORTED_MODULE_4__.displayProjectListSidebar)(projectItemList);
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

    // change project's name
    const _changeProjectName = () => {
        projectName.toggleAttribute('disabled');
        project.editName(projectName.value);

        // change project name in storage
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setProject)(project);
    };

    // delete project from a list
    const _deleteProject = () => {
        container.remove();

        // delete from storage
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.removeProject)(project);
        
        // re-display a list of project in sidebar
        const projectItemList = document.querySelector('.sidebar.project-item-list');
        (0,_ui__WEBPACK_IMPORTED_MODULE_2__.displayProjectListSidebar)(projectItemList);
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

    topPanel.append(projectName, changeProjectNameBtn, addTodoBtn, deleteProjectBtn);

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
    addBtn.classList.add('add-project', 'btn');
    addBtn.textContent = 'Add Project';
    addBtn.addEventListener('click', () => {
        if (!addBtn.classList.contains('active')) {
            addBtn.classList.toggle('active');
            (0,_displayModal__WEBPACK_IMPORTED_MODULE_2__.displayAddProjectModal)(addBtn);
        }
    });
    sidebar.prepend(addBtn);
};

// remove all the children in a list of project in sidebar
const _refreshProjectListSidebar = () => {
    const projectItemList = document.querySelector('.sidebar.project-item-list');
    projectItemList.innerHTML = '';
};

// display a list of project in sidebar
const displayProjectListSidebar = (container) => {
    _refreshProjectListSidebar();
    for (let i = 0; i < _storage__WEBPACK_IMPORTED_MODULE_0__.projectList.length; i++) {
        const project = document.createElement('div');
        project.classList.add('sidebar', 'project-item');
        project.textContent = _storage__WEBPACK_IMPORTED_MODULE_0__.projectList[i].name;
        // show selected project
        project.addEventListener('click', () => {
            (0,_displayProject__WEBPACK_IMPORTED_MODULE_1__.unDisplayProject)();
            (0,_displayProject__WEBPACK_IMPORTED_MODULE_1__.displayProject)(_storage__WEBPACK_IMPORTED_MODULE_0__.projectList[i]);
        });
        container.append(project);
    }
};

const header = (() => {
    const container = document.createElement('div');
    container.classList.add('header', 'container');
    const text = document.createElement('div');
    text.classList.add('header', 'text');
    text.textContent = 'My Todo List';
    container.append(text);
    document.body.append(container);
})();

const content = (() => {
    const container = document.createElement('div');
    container.classList.add('content', 'container');
    _createProjectArea(container);
    document.body.append(container);

    // display first (default) project if it exists
    if (_storage__WEBPACK_IMPORTED_MODULE_0__.projectList[0])
        (0,_displayProject__WEBPACK_IMPORTED_MODULE_1__.displayProject)(_storage__WEBPACK_IMPORTED_MODULE_0__.projectList[0]);
})();

const sidebar = (() => {
    const content = document.querySelector('.content.container');
    const container = document.createElement('div');
    container.classList.add('sidebar', 'container');
    content.prepend(container);

    const projectItemList = document.createElement('div');
    projectItemList.classList.add('sidebar', 'project-item-list');
    container.append(projectItemList);

    _createAddProjectBtn(container);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSwrQ0FBK0MsZ0JBQWdCLGlCQUFpQixvQkFBb0IsNkJBQTZCLDJDQUEyQyxvQkFBb0IsR0FBRyxZQUFZLDhCQUE4QixHQUFHLHNCQUFzQixvQkFBb0IsOEJBQThCLDhCQUE4QixvQkFBb0IsR0FBRyxrQkFBa0Isc0JBQXNCLHdCQUF3QixHQUFHLHVCQUF1QixvQkFBb0IsbUJBQW1CLEdBQUcsdUJBQXVCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLG1DQUFtQyxvQkFBb0IsR0FBRywrQkFBK0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsbUJBQW1CLG1CQUFtQixnQkFBZ0IsaUJBQWlCLG1DQUFtQyxHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyxnQ0FBZ0Msc0JBQXNCLGtCQUFrQixHQUFHLGVBQWUsb0JBQW9CLHFDQUFxQyxHQUFHLHVCQUF1QixlQUFlLEdBQUcsa0JBQWtCLG9CQUFvQixlQUFlLDJCQUEyQixHQUFHLGVBQWUsb0JBQW9CLGVBQWUsR0FBRyxxQkFBcUIsbUJBQW1CLGtCQUFrQixHQUFHLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQixvQkFBb0Isa0JBQWtCLDBDQUEwQyxrQkFBa0IsR0FBRyx1QkFBdUIsb0JBQW9CLDZCQUE2QixlQUFlLG1CQUFtQiwyQ0FBMkMsR0FBRyxrQkFBa0Isd0JBQXdCLG1CQUFtQixvQkFBb0IsR0FBRyx1Q0FBdUMsbUJBQW1CLG9DQUFvQyxHQUFHLGVBQWUsb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsb0JBQW9CLG9CQUFvQixlQUFlLG1CQUFtQiwyQ0FBMkMsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QixHQUFHLGtCQUFrQixvQkFBb0IsMkNBQTJDLG1CQUFtQixvQkFBb0IsR0FBRyx1QkFBdUIsb0JBQW9CLGdCQUFnQixHQUFHLGVBQWUsbUJBQW1CLG9CQUFvQixHQUFHLHdCQUF3QixvQ0FBb0MsbUJBQW1CLEdBQUcsa0JBQWtCLG1CQUFtQixHQUFHLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixvQkFBb0IsR0FBRywyQkFBMkIsb0NBQW9DLG1CQUFtQixHQUFHLHNCQUFzQixvQkFBb0IsOEJBQThCLDBCQUEwQixzQkFBc0IsaUJBQWlCLGNBQWMsYUFBYSxrQkFBa0IsbUJBQW1CLHlCQUF5QixrR0FBa0csR0FBRyxtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsZUFBZSx3QkFBd0Isc0JBQXNCLHFCQUFxQixxQkFBcUIsR0FBRyxxQkFBcUIsbUJBQW1CLG1CQUFtQixHQUFHLG9EQUFvRCwwQkFBMEIsR0FBRyx1QkFBdUIsb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsMkJBQTJCLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLDhCQUE4QixvQ0FBb0MsR0FBRyxpQ0FBaUMsNkJBQTZCLEdBQUcsK0JBQStCLHNDQUFzQyxHQUFHLG1DQUFtQyw0Q0FBNEMsR0FBRyxnQ0FBZ0MsK0NBQStDLEdBQUcsMENBQTBDLDZDQUE2QyxHQUFHLFNBQVMsc0ZBQXNGLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLCtCQUErQixnQkFBZ0IsaUJBQWlCLG9CQUFvQiw2QkFBNkIsMkNBQTJDLG9CQUFvQixHQUFHLFlBQVksOEJBQThCLEdBQUcsc0JBQXNCLG9CQUFvQiw4QkFBOEIsOEJBQThCLG9CQUFvQixHQUFHLGtCQUFrQixzQkFBc0Isd0JBQXdCLEdBQUcsdUJBQXVCLG9CQUFvQixtQkFBbUIsR0FBRyx1QkFBdUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsbUNBQW1DLG9CQUFvQixHQUFHLCtCQUErQixvQkFBb0IsNkJBQTZCLDBCQUEwQixtQkFBbUIsbUJBQW1CLGdCQUFnQixpQkFBaUIsbUNBQW1DLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLGdDQUFnQyxzQkFBc0Isa0JBQWtCLEdBQUcsZUFBZSxvQkFBb0IscUNBQXFDLEdBQUcsdUJBQXVCLGVBQWUsR0FBRyxrQkFBa0Isb0JBQW9CLGVBQWUsMkJBQTJCLEdBQUcsZUFBZSxvQkFBb0IsZUFBZSxHQUFHLHFCQUFxQixtQkFBbUIsa0JBQWtCLEdBQUcsa0JBQWtCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG9CQUFvQixrQkFBa0IsMENBQTBDLGtCQUFrQixHQUFHLHVCQUF1QixvQkFBb0IsNkJBQTZCLGVBQWUsbUJBQW1CLDJDQUEyQyxHQUFHLGtCQUFrQix3QkFBd0IsbUJBQW1CLG9CQUFvQixHQUFHLHVDQUF1QyxtQkFBbUIsb0NBQW9DLEdBQUcsZUFBZSxvQkFBb0IsNkJBQTZCLGVBQWUsR0FBRyxvQkFBb0Isb0JBQW9CLGVBQWUsbUJBQW1CLDJDQUEyQyxHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLEdBQUcsa0JBQWtCLG9CQUFvQiwyQ0FBMkMsbUJBQW1CLG9CQUFvQixHQUFHLHVCQUF1QixvQkFBb0IsZ0JBQWdCLEdBQUcsZUFBZSxtQkFBbUIsb0JBQW9CLEdBQUcsd0JBQXdCLG9DQUFvQyxtQkFBbUIsR0FBRyxrQkFBa0IsbUJBQW1CLEdBQUcsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLG9CQUFvQixHQUFHLDJCQUEyQixvQ0FBb0MsbUJBQW1CLEdBQUcsc0JBQXNCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHNCQUFzQixpQkFBaUIsY0FBYyxhQUFhLGtCQUFrQixtQkFBbUIseUJBQXlCLGtHQUFrRyxHQUFHLG1CQUFtQixvQkFBb0IsNkJBQTZCLDhCQUE4QixlQUFlLHdCQUF3QixzQkFBc0IscUJBQXFCLHFCQUFxQixHQUFHLHFCQUFxQixtQkFBbUIsbUJBQW1CLEdBQUcsb0RBQW9ELDBCQUEwQixHQUFHLHVCQUF1QixvQkFBb0IsNkJBQTZCLGVBQWUsR0FBRywyQkFBMkIsb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsOEJBQThCLG9DQUFvQyxHQUFHLGlDQUFpQyw2QkFBNkIsR0FBRywrQkFBK0Isc0NBQXNDLEdBQUcsbUNBQW1DLDRDQUE0QyxHQUFHLGdDQUFnQywrQ0FBK0MsR0FBRywwQ0FBMEMsNkNBQTZDLEdBQUcscUJBQXFCO0FBQ2hsVDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ptRDtBQUNYO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkIsZUFBZSxtRUFBUzs7QUFFeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q21EO0FBQ1g7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQixlQUFlLG1FQUFTOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TGlDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEs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O1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQmVmb3JlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNFcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1YkRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGlzcGxheU1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2Rpc3BsYXlQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvc2V0QXR0cnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAyNDgsIDEyMik7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGVhZGVyLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uaGVhZGVyLnRleHQge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudC5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnNpZGViYXIuY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uc2lkZWJhci5wcm9qZWN0LWl0ZW0tbGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyNHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLnNpZGViYXIucHJvamVjdC1pdGVte1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNpZGViYXIucHJvamVjdC1pdGVtOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBnb2xkO1xcbn1cXG5cXG4udG9wLXBhbmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0LnRvcC1wYW5lbHtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5ib3R0b20tcGFuZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmJ0bi1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC5idG57XFxuICAgIGJvdHRvbTogMjRweDtcXG4gICAgcmlnaHQ6IDI0cHg7XFxufVxcblxcbi5wcm9qZWN0LmFyZWF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgLyogdGVtcCAqL1xcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBnYXA6IDMycHg7XFxufVxcblxcbi5wcm9qZWN0LmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTc1LCAxNzUpO1xcbn1cXG5cXG4ucHJvamVjdC5uYW1le1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiB0ZW1wICovXFxuLnByb2plY3QubmFtZTpkaXNhYmxlZHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRvZG8ubGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMywgMjQ1LCAyNDUpO1xcbn1cXG5cXG4udG9kby1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmV4cGFuZC1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjUwLCAxNjApO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi50b2RvLW5vRGVzYy1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG5pbnB1dC50b2Rve1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0LnRvZG86ZGlzYWJsZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbnRleHRhcmVhI2Rlc2N7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEudG9kb3tcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYS50b2RvOmRpc2FibGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubW9kYWwtYmFja2dyb3VuZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgZW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQsIGlzIHRoaXMgdGhpbmcgZXZlbiB3b3JraW5nPyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbjogMzV2aCBhdXRvO1xcbiAgICAvKiB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7ICovXFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLm1vZGFsLmNsb3NlLmJ0bntcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5tb2RhbC5jbG9zZS5idG46aG92ZXIsXFxuLm1vZGFsLmNsb3NlLmJ0bjpmb2N1c3tcXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgICBcXG59XFxuXFxuLm1vZGFsLmlucHV0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLm1vZGFsLmlucHV0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcjpoYXMoLmxvdyl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cXG4udG9kby5jb250YWluZXI6aGFzKC5tZWRpdW0pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4udG9kby5jb250YWluZXI6aGFzKC5oaWdoKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcXG59XFxuXFxuLnRvZG8uY29udGFpbmVyOmhhcyguZGVhZGxpbmUpe1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAzcHggcmVkIGluc2V0O1xcbn1cXG5cXG4udG9kby5jb250YWluZXI6aGFzKC5hbGVydCl7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCB5ZWxsb3cgaW5zZXQ7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcjpoYXMoLmRlYWRsaW5lLXBhc3NlZCl7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCBncmF5IGluc2V0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXOztJQUVYLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlFQUF5RTtJQUN6RSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCO29CQUNnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAyNDgsIDEyMik7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGVhZGVyLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uaGVhZGVyLnRleHQge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudC5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnNpZGViYXIuY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uc2lkZWJhci5wcm9qZWN0LWl0ZW0tbGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyNHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLnNpZGViYXIucHJvamVjdC1pdGVte1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNpZGViYXIucHJvamVjdC1pdGVtOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBnb2xkO1xcbn1cXG5cXG4udG9wLXBhbmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0LnRvcC1wYW5lbHtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5ib3R0b20tcGFuZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmJ0bi1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC5idG57XFxuICAgIGJvdHRvbTogMjRweDtcXG4gICAgcmlnaHQ6IDI0cHg7XFxufVxcblxcbi5wcm9qZWN0LmFyZWF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgLyogdGVtcCAqL1xcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBnYXA6IDMycHg7XFxufVxcblxcbi5wcm9qZWN0LmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTc1LCAxNzUpO1xcbn1cXG5cXG4ucHJvamVjdC5uYW1le1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiB0ZW1wICovXFxuLnByb2plY3QubmFtZTpkaXNhYmxlZHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRvZG8ubGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMywgMjQ1LCAyNDUpO1xcbn1cXG5cXG4udG9kby1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmV4cGFuZC1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjUwLCAxNjApO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi50b2RvLW5vRGVzYy1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG5pbnB1dC50b2Rve1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0LnRvZG86ZGlzYWJsZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbnRleHRhcmVhI2Rlc2N7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEudG9kb3tcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYS50b2RvOmRpc2FibGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubW9kYWwtYmFja2dyb3VuZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgZW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQsIGlzIHRoaXMgdGhpbmcgZXZlbiB3b3JraW5nPyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbjogMzV2aCBhdXRvO1xcbiAgICAvKiB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7ICovXFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLm1vZGFsLmNsb3NlLmJ0bntcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5tb2RhbC5jbG9zZS5idG46aG92ZXIsXFxuLm1vZGFsLmNsb3NlLmJ0bjpmb2N1c3tcXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgICBcXG59XFxuXFxuLm1vZGFsLmlucHV0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLm1vZGFsLmlucHV0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcjpoYXMoLmxvdyl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cXG4udG9kby5jb250YWluZXI6aGFzKC5tZWRpdW0pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4udG9kby5jb250YWluZXI6aGFzKC5oaWdoKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcXG59XFxuXFxuLnRvZG8uY29udGFpbmVyOmhhcyguZGVhZGxpbmUpe1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAzcHggcmVkIGluc2V0O1xcbn1cXG5cXG4udG9kby5jb250YWluZXI6aGFzKC5hbGVydCl7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCB5ZWxsb3cgaW5zZXQ7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcjpoYXMoLmRlYWRsaW5lLXBhc3NlZCl7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCBncmF5IGluc2V0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtb250aHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbW9udGhzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA1IG1vbnRocyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA1KVxuICogLy89PiBTdW4gRmViIDAxIDIwMTUgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNb250aHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBtb250aHMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICB2YXIgZGF5T2ZNb250aCA9IGRhdGUuZ2V0RGF0ZSgpOyAvLyBUaGUgSlMgRGF0ZSBvYmplY3Qgc3VwcG9ydHMgZGF0ZSBtYXRoIGJ5IGFjY2VwdGluZyBvdXQtb2YtYm91bmRzIHZhbHVlcyBmb3JcbiAgLy8gbW9udGgsIGRheSwgZXRjLiBGb3IgZXhhbXBsZSwgbmV3IERhdGUoMjAyMCwgMCwgMCkgcmV0dXJucyAzMSBEZWMgMjAxOSBhbmRcbiAgLy8gbmV3IERhdGUoMjAyMCwgMTMsIDEpIHJldHVybnMgMSBGZWIgMjAyMS4gIFRoaXMgaXMgKmFsbW9zdCogdGhlIGJlaGF2aW9yIHdlXG4gIC8vIHdhbnQgZXhjZXB0IHRoYXQgZGF0ZXMgd2lsbCB3cmFwIGFyb3VuZCB0aGUgZW5kIG9mIGEgbW9udGgsIG1lYW5pbmcgdGhhdFxuICAvLyBuZXcgRGF0ZSgyMDIwLCAxMywgMzEpIHdpbGwgcmV0dXJuIDMgTWFyIDIwMjEgbm90IDI4IEZlYiAyMDIxIGFzIGRlc2lyZWQuIFNvXG4gIC8vIHdlJ2xsIGRlZmF1bHQgdG8gdGhlIGVuZCBvZiB0aGUgZGVzaXJlZCBtb250aCBieSBhZGRpbmcgMSB0byB0aGUgZGVzaXJlZFxuICAvLyBtb250aCBhbmQgdXNpbmcgYSBkYXRlIG9mIDAgdG8gYmFjayB1cCBvbmUgZGF5IHRvIHRoZSBlbmQgb2YgdGhlIGRlc2lyZWRcbiAgLy8gbW9udGguXG5cbiAgdmFyIGVuZE9mRGVzaXJlZE1vbnRoID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xuICBlbmRPZkRlc2lyZWRNb250aC5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyBhbW91bnQgKyAxLCAwKTtcbiAgdmFyIGRheXNJbk1vbnRoID0gZW5kT2ZEZXNpcmVkTW9udGguZ2V0RGF0ZSgpO1xuXG4gIGlmIChkYXlPZk1vbnRoID49IGRheXNJbk1vbnRoKSB7XG4gICAgLy8gSWYgd2UncmUgYWxyZWFkeSBhdCB0aGUgZW5kIG9mIHRoZSBtb250aCwgdGhlbiB0aGlzIGlzIHRoZSBjb3JyZWN0IGRhdGVcbiAgICAvLyBhbmQgd2UncmUgZG9uZS5cbiAgICByZXR1cm4gZW5kT2ZEZXNpcmVkTW9udGg7XG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlLCB3ZSBub3cga25vdyB0aGF0IHNldHRpbmcgdGhlIG9yaWdpbmFsIGRheS1vZi1tb250aCB2YWx1ZSB3b24ndFxuICAgIC8vIGNhdXNlIGFuIG92ZXJmbG93LCBzbyBzZXQgdGhlIGRlc2lyZWQgZGF5LW9mLW1vbnRoLiBOb3RlIHRoYXQgd2UgY2FuJ3RcbiAgICAvLyBqdXN0IHNldCB0aGUgZGF0ZSBvZiBgZW5kT2ZEZXNpcmVkTW9udGhgIGJlY2F1c2UgdGhhdCBvYmplY3QgbWF5IGhhdmUgaGFkXG4gICAgLy8gaXRzIHRpbWUgY2hhbmdlZCBpbiB0aGUgdW51c3VhbCBjYXNlIHdoZXJlIHdoZXJlIGEgRFNUIHRyYW5zaXRpb24gd2FzIG9uXG4gICAgLy8gdGhlIGxhc3QgZGF5IG9mIHRoZSBtb250aCBhbmQgaXRzIGxvY2FsIHRpbWUgd2FzIGluIHRoZSBob3VyIHNraXBwZWQgb3JcbiAgICAvLyByZXBlYXRlZCBuZXh0IHRvIGEgRFNUIHRyYW5zaXRpb24uICBTbyB3ZSB1c2UgYGRhdGVgIGluc3RlYWQgd2hpY2ggaXNcbiAgICAvLyBndWFyYW50ZWVkIHRvIHN0aWxsIGhhdmUgdGhlIG9yaWdpbmFsIHRpbWUuXG4gICAgZGF0ZS5zZXRGdWxsWWVhcihlbmRPZkRlc2lyZWRNb250aC5nZXRGdWxsWWVhcigpLCBlbmRPZkRlc2lyZWRNb250aC5nZXRNb250aCgpLCBkYXlPZk1vbnRoKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQmVmb3JlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYmVmb3JlIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQmVmb3JlKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPCBkYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRXF1YWxcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBlcXVhbD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgZXF1YWw/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgZXF1YWxcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDIgSnVseSAyMDE0IDA2OjMwOjQ1LjAwMCBhbmQgMiBKdWx5IDIwMTQgMDY6MzA6NDUuNTAwIGVxdWFsP1xuICogY29uc3QgcmVzdWx0ID0gaXNFcXVhbChcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgNiwgMzAsIDQ1LCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgNiwgMzAsIDQ1LCA1MDApXG4gKiApXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFcXVhbChkaXJ0eUxlZnREYXRlLCBkaXJ0eVJpZ2h0RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5TGVmdERhdGUpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5UmlnaHREYXRlKTtcbiAgcmV0dXJuIGRhdGVMZWZ0LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsOyAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCBzdWJEYXlzIGZyb20gXCIuLi9zdWJEYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTW9udGhzIGZyb20gXCIuLi9zdWJNb250aHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7RHVyYXRpb259IGR1cmF0aW9uIC0gdGhlIG9iamVjdCB3aXRoIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkXG4gKlxuICogfCBLZXkgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgeWVhcnMgICB8IEFtb3VudCBvZiB5ZWFycyB0byBiZSBzdWJ0cmFjdGVkICAgfFxuICogfCBtb250aHMgIHwgQW1vdW50IG9mIG1vbnRocyB0byBiZSBzdWJ0cmFjdGVkICB8XG4gKiB8IHdlZWtzICAgfCBBbW91bnQgb2Ygd2Vla3MgdG8gYmUgc3VidHJhY3RlZCAgIHxcbiAqIHwgZGF5cyAgICB8IEFtb3VudCBvZiBkYXlzIHRvIGJlIHN1YnRyYWN0ZWQgICAgfFxuICogfCBob3VycyAgIHwgQW1vdW50IG9mIGhvdXJzIHRvIGJlIHN1YnRyYWN0ZWQgICB8XG4gKiB8IG1pbnV0ZXMgfCBBbW91bnQgb2YgbWludXRlcyB0byBiZSBzdWJ0cmFjdGVkIHxcbiAqIHwgc2Vjb25kcyB8IEFtb3VudCBvZiBzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQgfFxuICpcbiAqIEFsbCB2YWx1ZXMgZGVmYXVsdCB0byAwXG4gKlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgdGhlIGZvbGxvd2luZyBkdXJhdGlvbiBmcm9tIDE1IEp1bmUgMjAxNyAxNToyOToyMFxuICogY29uc3QgcmVzdWx0ID0gc3ViKG5ldyBEYXRlKDIwMTcsIDUsIDE1LCAxNSwgMjksIDIwKSwge1xuICogICB5ZWFyczogMixcbiAqICAgbW9udGhzOiA5LFxuICogICB3ZWVrczogMSxcbiAqICAgZGF5czogNyxcbiAqICAgaG91cnM6IDUsXG4gKiAgIG1pbnV0ZXM6IDksXG4gKiAgIHNlY29uZHM6IDMwXG4gKiB9KVxuICogLy89PiBNb24gU2VwIDEgMjAxNCAxMDoxOTo1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1YihkYXRlLCBkdXJhdGlvbikge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgaWYgKCFkdXJhdGlvbiB8fCBfdHlwZW9mKGR1cmF0aW9uKSAhPT0gJ29iamVjdCcpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgeWVhcnMgPSBkdXJhdGlvbi55ZWFycyA/IHRvSW50ZWdlcihkdXJhdGlvbi55ZWFycykgOiAwO1xuICB2YXIgbW9udGhzID0gZHVyYXRpb24ubW9udGhzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLm1vbnRocykgOiAwO1xuICB2YXIgd2Vla3MgPSBkdXJhdGlvbi53ZWVrcyA/IHRvSW50ZWdlcihkdXJhdGlvbi53ZWVrcykgOiAwO1xuICB2YXIgZGF5cyA9IGR1cmF0aW9uLmRheXMgPyB0b0ludGVnZXIoZHVyYXRpb24uZGF5cykgOiAwO1xuICB2YXIgaG91cnMgPSBkdXJhdGlvbi5ob3VycyA/IHRvSW50ZWdlcihkdXJhdGlvbi5ob3VycykgOiAwO1xuICB2YXIgbWludXRlcyA9IGR1cmF0aW9uLm1pbnV0ZXMgPyB0b0ludGVnZXIoZHVyYXRpb24ubWludXRlcykgOiAwO1xuICB2YXIgc2Vjb25kcyA9IGR1cmF0aW9uLnNlY29uZHMgPyB0b0ludGVnZXIoZHVyYXRpb24uc2Vjb25kcykgOiAwOyAvLyBTdWJ0cmFjdCB5ZWFycyBhbmQgbW9udGhzXG5cbiAgdmFyIGRhdGVXaXRob3V0TW9udGhzID0gc3ViTW9udGhzKGRhdGUsIG1vbnRocyArIHllYXJzICogMTIpOyAvLyBTdWJ0cmFjdCB3ZWVrcyBhbmQgZGF5c1xuXG4gIHZhciBkYXRlV2l0aG91dERheXMgPSBzdWJEYXlzKGRhdGVXaXRob3V0TW9udGhzLCBkYXlzICsgd2Vla3MgKiA3KTsgLy8gU3VidHJhY3QgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHNcblxuICB2YXIgbWludXRlc3RvU3ViID0gbWludXRlcyArIGhvdXJzICogNjA7XG4gIHZhciBzZWNvbmRzdG9TdWIgPSBzZWNvbmRzICsgbWludXRlc3RvU3ViICogNjA7XG4gIHZhciBtc3RvU3ViID0gc2Vjb25kc3RvU3ViICogMTAwMDtcbiAgdmFyIGZpbmFsRGF0ZSA9IG5ldyBEYXRlKGRhdGVXaXRob3V0RGF5cy5nZXRUaW1lKCkgLSBtc3RvU3ViKTtcbiAgcmV0dXJuIGZpbmFsRGF0ZTtcbn0iLCJpbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1YkRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDEwIGRheXMgZnJvbSAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gc3ViRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IEZyaSBBdWcgMjIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1YkRheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGREYXlzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNb250aHMgZnJvbSBcIi4uL2FkZE1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbW9udGhzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbW9udGhzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNSBtb250aHMgZnJvbSAxIEZlYnJ1YXJ5IDIwMTU6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNb250aHMobmV3IERhdGUoMjAxNSwgMSwgMSksIDUpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1vbnRocyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1vbnRocyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIi4vc2V0QXR0cnNcIjtcbmltcG9ydCB7IHNldFByb2plY3QgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdExpc3RTaWRlYmFyIH0gZnJvbSBcIi4vdWlcIjtcblxuLy8gY3JlYXRlIGEgZmllbGQgY29udGFpbmVyIHVzZSBpbiBtb2RhbFxuY29uc3QgX2NyZWF0ZUZpZWxkQ29udGFpbmVyID0gKGZvcm0sIHR5cGUsIGxhYmVsVHh0LCBuYW1lLCByZXF1aXJlZCkgPT4ge1xuICAgIC8vIGNoZWNrIGlmIHRoZSBpbnB1dCBmaWVsZCBoYXMgcmVxdWlyZWQgYXR0cmlidXRlXG4gICAgY29uc3QgX2NoZWNrUmVxdWlyZW1lbnQgPSAoZmllbGQpID0+IHtcbiAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdpbnB1dC1jb250YWluZXInKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgc2V0QXR0cmlidXRlcyhsYWJlbCwgeydmb3InOiBuYW1lfSk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHtsYWJlbFR4dH06YDtcblxuICAgIGlmICh0eXBlID09PSBcInRleHRhcmVhXCIpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKGZpZWxkLCB7J2lkJzogbmFtZSwgJ25hbWUnOiBuYW1lLCAncm93cyc6IDV9KTtcbiAgICAgICAgX2NoZWNrUmVxdWlyZW1lbnQoZmllbGQpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsLCBmaWVsZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHNldEF0dHJpYnV0ZXMoZmllbGQsIHsndHlwZSc6IHR5cGUsICdpZCc6IG5hbWUsICduYW1lJzogbmFtZX0pO1xuICAgICAgICBfY2hlY2tSZXF1aXJlbWVudChmaWVsZCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobGFiZWwsIGZpZWxkKTtcbiAgICB9XG5cbiAgICBmb3JtLmFwcGVuZChjb250YWluZXIpO1xufTtcblxuLy8gY3JlYXRlIGEgZHJvcGRvd24gY29udGFpbmVyIHVzZSBpbiBtb2RhbFxuY29uc3QgX2NyZWF0ZVByaW9yaXR5RHJvcERvd24gPSAoZm9ybSwgbGFiZWxUeHQsIG5hbWUsIHJlcXVpcmVkKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2lucHV0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGxhYmVsLCB7J2Zvcic6IG5hbWV9KTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke2xhYmVsVHh0fTpgO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNldEF0dHJpYnV0ZXMoc2VsZWN0LCB7J2lkJzogbmFtZSwgJ25hbWUnOiBuYW1lfSk7XG4gICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGxldCBwcmlvcml0eTtcbiAgICAgICAgbGV0IHByaW9yaXR5VHh0O1xuICAgICAgICBzd2l0Y2goaSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gJ2xvdyc7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlUeHQgPSAnTG93JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5VHh0ID0gJ01lZGl1bSc7XG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhvcHRpb24sIHsnc2VsZWN0ZWQnOiAnJ30pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5VHh0ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHNldEF0dHJpYnV0ZXMob3B0aW9uLCB7J3ZhbHVlJzogcHJpb3JpdHl9KTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHlUeHQ7XG4gICAgICAgIHNlbGVjdC5hcHBlbmQob3B0aW9uKTtcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsLCBzZWxlY3QpO1xuICAgIGZvcm0uYXBwZW5kKGNvbnRhaW5lcik7XG59XG5cbi8vIGVuYWJsZSBidXR0b24gdG8gYmUgY2xpY2thYmxlIGFnYWluXG5jb25zdCBfZW5hYmxlQnV0dG9uID0gKGJ0biwgbW9kYWwpID0+IHtcbiAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgbW9kYWwucmVtb3ZlKCk7XG59O1xuXG4vLyBkaXNwbGF5IGEgXCJhZGQgdG9kbyB0byBwcm9qZWN0XCIgbW9kYWxcbmNvbnN0IGRpc3BsYXlBZGRUb2RvTW9kYWwgPSAocHJvamVjdCwgYnRuKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ21vZGFsLWJhY2tncm91bmQnKTtcbiAgICBcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgndG9kbycsICdtb2RhbC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCB0b3BQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcFBhbmVsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ3RvcC1wYW5lbCcpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2hlYWRlcicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdBZGQgbmV3IHRvZG8nXG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdjbG9zZScsICdidG4nKTtcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9lbmFibGVCdXR0b24oYnRuLCBtb2RhbCkpO1xuXG4gICAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHNldEF0dHJpYnV0ZXMoaW5wdXRGb3JtLCB7J2FjdGlvbic6ICdqYXZhc2NyaXB0OjsnLCAnbWV0aG9kJzogJ3Bvc3QnfSk7XG4gICAgaW5wdXRGb3JtLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2lucHV0LWZvcm0nKTtcblxuICAgIC8vIGlucHV0IGZpZWxkc1xuICAgIF9jcmVhdGVGaWVsZENvbnRhaW5lcihpbnB1dEZvcm0sICd0ZXh0JywgJ1RpdGxlJywgJ3RpdGxlJywgdHJ1ZSk7XG4gICAgX2NyZWF0ZUZpZWxkQ29udGFpbmVyKGlucHV0Rm9ybSwgJ3RleHRhcmVhJywgJ0Rlc2NyaXB0aW9uIChPcHRpb25hbCknLCAnZGVzYycsIGZhbHNlKTtcbiAgICBfY3JlYXRlRmllbGRDb250YWluZXIoaW5wdXRGb3JtLCAnZGF0ZScsICdEdWUgZGF0ZSAoT3B0aW9uYWwpJywgJ2R1ZV9kYXRlJywgZmFsc2UpO1xuICAgIF9jcmVhdGVQcmlvcml0eURyb3BEb3duKGlucHV0Rm9ybSwgJ1ByaW9yaXR5JywgJ3ByaW9yaXR5JywgdHJ1ZSk7XG5cbiAgICBjb25zdCBib3R0b21QYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvdHRvbVBhbmVsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2JvdHRvbS1wYW5lbCcpO1xuXG4gICAgLy8gY3JlYXRlIG5ldyB0b2RvXG4gICAgY29uc3QgY3JlYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2V0QXR0cmlidXRlcyhjcmVhdGVCdG4sIHsndHlwZSc6ICdzdWJtaXQnfSk7XG4gICAgY3JlYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2J0bicsICdjcmVhdGUtdG9kbycpO1xuICAgIGNyZWF0ZUJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUnO1xuICAgIGNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgdmFsaWRhdGlvblxuICAgICAgICBsZXQgdGl0bGVJc1ZhbGlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykuY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgICBsZXQgZHVlRGF0ZUlzVmFsaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlX2RhdGUnKS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIGxldCBwcmlvcml0eUlzVmFsaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIGlmICh0aXRsZUlzVmFsaWQgJiYgZHVlRGF0ZUlzVmFsaWQgJiYgcHJpb3JpdHlJc1ZhbGlkKSB7XG4gICAgICAgICAgICBwcm9qZWN0LmFkZFRvZG8oXG4gICAgICAgICAgICAgICAgbmV3IHRvZG8oXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYycpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlX2RhdGUnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2V0UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIF9lbmFibGVCdXR0b24oYnRuLCBtb2RhbClcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gY2FuY2VsXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzZXRBdHRyaWJ1dGVzKGNhbmNlbEJ0biwgeyd0eXBlJzogJ3Jlc2V0J30pO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdidG4nLCAnY2FuY2VsJyk7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2VuYWJsZUJ1dHRvbihidG4sIG1vZGFsKSk7XG4gICAgYm90dG9tUGFuZWwuYXBwZW5kKGNhbmNlbEJ0biwgY3JlYXRlQnRuKTtcblxuICAgIGlucHV0Rm9ybS5hcHBlbmQoYm90dG9tUGFuZWwpO1xuICAgIHRvcFBhbmVsLmFwcGVuZChoZWFkZXIsIGNsb3NlQnRuKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kKHRvcFBhbmVsLCBpbnB1dEZvcm0pO1xuICAgIG1vZGFsLmFwcGVuZChtb2RhbENvbnRlbnQpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobW9kYWwpO1xufTtcblxuLy8gZGlzcGxheSBhIFwiYWRkIHByb2plY3QgdG8gYSBsaXN0IG9mIHByb2plY3RzXCIgbW9kYWxcbmNvbnN0IGRpc3BsYXlBZGRQcm9qZWN0TW9kYWwgPSAoYnRuKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ21vZGFsLWJhY2tncm91bmQnKTtcblxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ21vZGFsLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRvcFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9wUGFuZWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAndG9wLXBhbmVsJyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgcHJvamVjdCdcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2Nsb3NlJywgJ2J0bicpO1xuICAgIGNsb3NlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2VuYWJsZUJ1dHRvbihidG4sIG1vZGFsKSk7XG5cbiAgICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgc2V0QXR0cmlidXRlcyhpbnB1dEZvcm0sIHsnYWN0aW9uJzogJ2phdmFzY3JpcHQ6OycsICdtZXRob2QnOiAncG9zdCd9KTtcbiAgICBpbnB1dEZvcm0uY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnaW5wdXQtZm9ybScpO1xuXG4gICAgX2NyZWF0ZUZpZWxkQ29udGFpbmVyKGlucHV0Rm9ybSwgJ3RleHQnLCAnUHJvamVjdCBOYW1lJywgJ3Byb2plY3RfbmFtZScsIHRydWUpO1xuXG4gICAgY29uc3QgYm90dG9tUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3R0b21QYW5lbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdib3R0b20tcGFuZWwnKTtcblxuICAgIC8vIGNyZWF0ZSBuZXcgcHJvamVjdFxuICAgIGNvbnN0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNldEF0dHJpYnV0ZXMoY3JlYXRlQnRuLCB7J3R5cGUnOiAnc3VibWl0J30pO1xuICAgIGNyZWF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdidG4nLCAnY3JlYXRlLXByb2plY3QnKTtcbiAgICBjcmVhdGVCdG4udGV4dENvbnRlbnQgPSAnQ3JlYXRlJztcbiAgICBjcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIGNoZWNrIHZhbGlkYXRpb25cbiAgICAgICAgbGV0IHByb2plY3ROYW1lSXNWYWxpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0X25hbWUnKS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZUlzVmFsaWQpIHtcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfbmFtZScpLnZhbHVlKTtcblxuICAgICAgICAgICAgLy8gY2hhbmdlIGhlcmVcbiAgICAgICAgICAgIHNldFByb2plY3QobmV3UHJvamVjdCk7XG5cbiAgICAgICAgICAgIC8vIGRpc3BsYXkgbmV3IHByb2plY3RcbiAgICAgICAgICAgIF9lbmFibGVCdXR0b24oYnRuLCBtb2RhbCk7XG5cbiAgICAgICAgICAgIC8vIHJlLWRpc3BsYXkgYSBsaXN0IG9mIHByb2plY3QgaW4gc2lkZWJhclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXIucHJvamVjdC1pdGVtLWxpc3QnKTtcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0TGlzdFNpZGViYXIocHJvamVjdEl0ZW1MaXN0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gY2FuY2VsXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2V0QXR0cmlidXRlcyhjYW5jZWxCdG4sIHsndHlwZSc6ICdyZXNldCd9KTtcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnYnRuJywgJ2NhbmNlbCcpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9lbmFibGVCdXR0b24oYnRuLCBtb2RhbCkpO1xuICAgIGJvdHRvbVBhbmVsLmFwcGVuZChjYW5jZWxCdG4sIGNyZWF0ZUJ0bik7XG5cbiAgICBpbnB1dEZvcm0uYXBwZW5kKGJvdHRvbVBhbmVsKTtcbiAgICB0b3BQYW5lbC5hcHBlbmQoaGVhZGVyLCBjbG9zZUJ0bik7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZCh0b3BQYW5lbCwgaW5wdXRGb3JtKTtcbiAgICBtb2RhbC5hcHBlbmQobW9kYWxDb250ZW50KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtb2RhbCk7XG59O1xuXG5leHBvcnQge1xuICAgIGRpc3BsYXlBZGRQcm9qZWN0TW9kYWwsIFxuICAgIGRpc3BsYXlBZGRUb2RvTW9kYWwsXG59OyIsImltcG9ydCB7IGRpc3BsYXlBZGRUb2RvTW9kYWwgfSBmcm9tIFwiLi9kaXNwbGF5TW9kYWxcIjtcbmltcG9ydCB7IHNldFByb2plY3QsIHJlbW92ZVByb2plY3QgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdExpc3RTaWRlYmFyIH0gZnJvbSBcIi4vdWlcIjtcbmltcG9ydCB7IHN1YiwgcGFyc2VJU08sIGlzQmVmb3JlLCBpc0VxdWFsLCBzdGFydE9mRGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiLi9zZXRBdHRyc1wiO1xuXG4vLyBkaXNwbGF5IGEgcHJvamVjdCBkaXNwbGF5aW5nIGEgbGlzdCBvZiB0b2RvXG5jb25zdCBkaXNwbGF5UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG5cbiAgICAvLyBjaGFuZ2UgcHJvamVjdCdzIG5hbWVcbiAgICBjb25zdCBfY2hhbmdlUHJvamVjdE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHByb2plY3ROYW1lLnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgcHJvamVjdC5lZGl0TmFtZShwcm9qZWN0TmFtZS52YWx1ZSk7XG5cbiAgICAgICAgLy8gY2hhbmdlIHByb2plY3QgbmFtZSBpbiBzdG9yYWdlXG4gICAgICAgIHNldFByb2plY3QocHJvamVjdCk7XG4gICAgfTtcblxuICAgIC8vIGRlbGV0ZSBwcm9qZWN0IGZyb20gYSBsaXN0XG4gICAgY29uc3QgX2RlbGV0ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgICAvLyBkZWxldGUgZnJvbSBzdG9yYWdlXG4gICAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgIFxuICAgICAgICAvLyByZS1kaXNwbGF5IGEgbGlzdCBvZiBwcm9qZWN0IGluIHNpZGViYXJcbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXIucHJvamVjdC1pdGVtLWxpc3QnKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RMaXN0U2lkZWJhcihwcm9qZWN0SXRlbUxpc3QpO1xuICAgIH07XG5cbiAgICAvLyBjcmVhdGUgYSBsaXN0IG9mIHRvZG8gaW4gcHJvamVjdFxuICAgIGNvbnN0IF9jcmVhdGVMaXN0b2ZUb2RvID0gKCkgPT4ge1xuICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnbGlzdCcpO1xuICAgICAgICBsZXQgbGVuZ3RoID0gcHJvamVjdC5saXN0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ2NvbnRhaW5lcicpO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh0b2RvSXRlbSwgeydhY3Rpb24nOiAnamF2YXNjcmlwdDo7JywgJ21ldGhvZCc6ICdwb3N0J30pO1xuXG4gICAgICAgICAgICAvLyBzdG9yZSBhbGwgdG9kb1xuICAgICAgICAgICAgY29uc3QgdG9kb1BhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b2RvUGFuZWwuY2xhc3NMaXN0LmFkZCgndG9kbycsICd0b2RvLXBhbmVsJyk7XG5cbiAgICAgICAgICAgIC8vIHN0b3JlIGFsbCB0b2RvIGV4Y2VwdCBkZXNjXG4gICAgICAgICAgICBjb25zdCBub0Rlc2NQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbm9EZXNjUGFuZWwuY2xhc3NMaXN0LmFkZCgndG9kbycsICd0b2RvLW5vRGVzYy1wYW5lbCcpO1xuXG4gICAgICAgICAgICAvLyBzdG9yZSBkZXNjXG4gICAgICAgICAgICBjb25zdCBleHBhbmRQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZXhwYW5kUGFuZWwuY2xhc3NMaXN0LmFkZCgndG9kbycsICdleHBhbmQtcGFuZWwnLCAnaGlkZGVuJyk7XG5cbiAgICAgICAgICAgIC8vIHRvZG9cbiAgICAgICAgICAgIGNvbnN0IGlzRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpc0RvbmUuY2xhc3NMaXN0LmFkZCgndG9kbycsICdpc0RvbmUnKTtcbiAgICAgICAgICAgIGlzRG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBfdG9nZ2xlVG9kb0lzRG9uZShpc0RvbmUsIHByb2plY3QubGlzdFtpXSk7XG4gICAgICAgICAgICAgICAgc2V0UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhpc0RvbmUsIHsndHlwZSc6ICdjaGVja2JveCcsICduYW1lJzogJ2lzX2RvbmUnLCAndmFsdWUnOiBwcm9qZWN0Lmxpc3RbaV0uaXNEb25lfSk7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5saXN0W2ldLmlzRG9uZSkge1xuICAgICAgICAgICAgICAgIGlzRG9uZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ3RpdGxlJyk7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHRpdGxlLCB7J3R5cGUnOiAndGV4dCcsICduYW1lJzogJ3RpdGxlJywgJ3ZhbHVlJzogcHJvamVjdC5saXN0W2ldLnRpdGxlLCAnZGlzYWJsZWQnOiAnJ30pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnZGVzYycpO1xuICAgICAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QubGlzdFtpXS5kZXNjO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhkZXNjLCB7J25hbWUnOiAnZGVzYycsICdkaXNhYmxlZCc6ICcnfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ2RhdGUnKTtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoZHVlRGF0ZSwgeyd0eXBlJzogJ2RhdGUnLCAnbmFtZSc6ICdkdWVfZGF0ZScsICd2YWx1ZSc6IHByb2plY3QubGlzdFtpXS5kdWVEYXRlLCAnZGlzYWJsZWQnOiAnJ30pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjaGVjayBkZWFkbGluZSBzdGF0dXNcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lmxpc3RbaV0uZHVlRGF0ZSAhPSAnJykge1xuICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSBfY2hlY2tEZWFkbGluZShkdWVEYXRlKTtcbiAgICAgICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoc3RhdHVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAncHJpb3JpdHknLCBwcm9qZWN0Lmxpc3RbaV0ucHJpb3JpdHkpO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhwcmlvcml0eSwgeyduYW1lJzogJ3ByaW9yaXR5JywgJ2Rpc2FibGVkJzogJyd9KTtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBwcmlvcml0eSBvcHRpb25zXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHlMdmw7XG4gICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5VHh0O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgX3NlbGVjdENvcnJlY3RQcmlvcml0eSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3QubGlzdFtpXS5wcmlvcml0eSA9PT0gcHJpb3JpdHlMdmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMob3B0aW9uLCB7J3NlbGVjdGVkJzogJyd9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2goaikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUx2bCA9ICdsb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlUeHQgPSAnTG93JztcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RDb3JyZWN0UHJpb3JpdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUx2bCA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlUeHQgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RDb3JyZWN0UHJpb3JpdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUx2bCA9ICdoaWdoJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VHh0ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdENvcnJlY3RQcmlvcml0eSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMob3B0aW9uLCB7J3ZhbHVlJzogcHJpb3JpdHlMdmx9KTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eVR4dDtcbiAgICAgICAgICAgICAgICBwcmlvcml0eS5hcHBlbmQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9EZXNjUGFuZWwuYXBwZW5kKGlzRG9uZSwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIGV4cGFuZFBhbmVsLmFwcGVuZChkZXNjKTtcblxuICAgICAgICAgICAgLy8gc3RvcmUgYnV0dG9uc1xuICAgICAgICAgICAgY29uc3QgYnRuUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ0blBhbmVsLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnYnRuLXBhbmVsJyk7XG5cbiAgICAgICAgICAgIC8vIGJ1dHRvbnNcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZXhwYW5kQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnZXhwYW5kLXRvZG8nLCAnYnRuJyk7XG4gICAgICAgICAgICBleHBhbmRCdG4udGV4dENvbnRlbnQgPSAnRXhwYW5kJztcbiAgICAgICAgICAgIGV4cGFuZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGV4cGFuZFBhbmVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpKTtcblxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ2VkaXQtdG9kbycsICdidG4nLCAnbm90LWVkaXRhYmxlJyk7XG4gICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgICAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBfZWRpdFRvZG8ocHJvamVjdC5saXN0W2ldLCB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGV4cGFuZFBhbmVsLCBlZGl0QnRuKTtcbiAgICAgICAgICAgICAgICBzZXRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnZGVsZXRlLXRvZG8nLCAnYnRuJyk7XG4gICAgICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBfZGVsZXRlVG9kbyhwcm9qZWN0Lmxpc3RbaV0pO1xuICAgICAgICAgICAgICAgIHNldFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIHRvZG9QYW5lbC5hcHBlbmQobm9EZXNjUGFuZWwsIGV4cGFuZFBhbmVsKTtcbiAgICAgICAgICAgIGJ0blBhbmVsLmFwcGVuZChleHBhbmRCdG4sIGVkaXRCdG4sIGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICB0b2RvSXRlbS5hcHBlbmQodG9kb1BhbmVsLCBidG5QYW5lbCk7XG4gICAgICAgICAgICBsaXN0LmFwcGVuZCh0b2RvSXRlbSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKGxpc3QpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHJlZnJlc2ggYSBsaXN0IG9mIHRvZG8gaW4gYSBwcm9qZWN0XG4gICAgY29uc3QgX3JlZnJlc2hMaXN0b2ZUb2RvID0gKCkgPT4ge1xuICAgICAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBfY3JlYXRlTGlzdG9mVG9kbygpO1xuICAgIH07XG5cbiAgICAvLyBkZWxldGUgYSB0b2RvIGZyb20gdGhlIHByb2plY3RcbiAgICBjb25zdCBfZGVsZXRlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIHByb2plY3QuZGVsZXRlVG9kbyh0b2RvKTtcbiAgICAgICAgX3JlZnJlc2hMaXN0b2ZUb2RvKCk7XG4gICAgfTtcblxuICAgIC8vIGFkZCB0b2RvIHRvIHRoZSBwcm9qZWN0XG4gICAgY29uc3QgX2FkZFRvZG9Ub1Byb2plY3QgPSAoYnRuKSA9PiB7XG4gICAgICAgIGRpc3BsYXlBZGRUb2RvTW9kYWwocHJvamVjdCwgYnRuKTtcbiAgICAgICAgY29uc3QgY3JlYXRlVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4uY3JlYXRlLXRvZG8nKTtcbiAgICAgICAgY3JlYXRlVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9yZWZyZXNoTGlzdG9mVG9kbygpKTtcbiAgICB9O1xuXG4gICAgLy8gY2hlY2sgZGVhZGxpbmUgc3RhdHVzIGFuZCByZXR1cm4gc3RyaW5nXG4gICAgY29uc3QgX2NoZWNrRGVhZGxpbmUgPSAoZHVlRGF0ZSkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VkRHVlRGF0ZSA9IHN0YXJ0T2ZEYXkocGFyc2VJU08oZHVlRGF0ZS52YWx1ZSkpO1xuICAgICAgICBsZXQgdG9kYXkgPSBzdGFydE9mRGF5KG5ldyBEYXRlKCkpO1xuICAgICAgICBsZXQgZHVlRGF0ZVN1Yk9uZURheSA9IHN1YihwYXJzZWREdWVEYXRlLCB7ZGF5czogMX0pXG5cbiAgICAgICAgaWYgKGlzRXF1YWwocGFyc2VkRHVlRGF0ZSwgdG9kYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2RlYWRsaW5lJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0VxdWFsKGR1ZURhdGVTdWJPbmVEYXksIHRvZGF5KSkge1xuICAgICAgICAgICAgcmV0dXJuICdhbGVydCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNCZWZvcmUocGFyc2VkRHVlRGF0ZSwgdG9kYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2RlYWRsaW5lLXBhc3NlZCc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZWRpdCB0b2RvIGluIHRoZSBwcm9qZWN0XG4gICAgY29uc3QgX2VkaXRUb2RvID0gKHRvZG8sIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgZXhwYW5kUGFuZWwsIGVkaXRCdG4pID0+IHtcbiAgICAgICAgZXhwYW5kUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHRpdGxlLnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgZGVzYy50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGR1ZURhdGUudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICBwcmlvcml0eS50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIC8vIHJlbW92ZSBvbGQgY2xhc3NcbiAgICAgICAgbGV0IHN0YXR1cyA9IF9jaGVja0RlYWRsaW5lKGR1ZURhdGUpO1xuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5yZW1vdmUoc3RhdHVzKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSh0b2RvLnByaW9yaXR5KTtcbiAgICAgICAgXG4gICAgICAgIGlmICghZWRpdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ25vdC1lZGl0YWJsZScpKSB7XG4gICAgICAgICAgICB0b2RvLmVkaXRUb2RvKHRpdGxlLnZhbHVlLCBkZXNjLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSk7XG4gICAgICAgICAgICAvLyBhZGQgbmV3IGNsYXNzIGFmdGVyIGVkaXRpbmdcbiAgICAgICAgICAgIHN0YXR1cyA9IF9jaGVja0RlYWRsaW5lKGR1ZURhdGUpO1xuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCh0b2RvLnByaW9yaXR5KTtcbiAgICAgICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChzdGF0dXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ25vdC1lZGl0YWJsZScpO1xuICAgIH07XG5cbiAgICAvLyB0b2dnbGUgaXNEb25lIGluIHRvZG9cbiAgICBjb25zdCBfdG9nZ2xlVG9kb0lzRG9uZSA9IChpbnB1dCwgdG9kbykgPT4ge1xuICAgICAgICB0b2RvLnRvZ2dsZUlzRG9uZSgpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdG9kby5pc0RvbmUpO1xuICAgIH07XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICdjb250YWluZXInKTtcblxuICAgIGNvbnN0IHRvcFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9wUGFuZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICd0b3AtcGFuZWwnKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ25hbWUnKVxuICAgIHNldEF0dHJpYnV0ZXMocHJvamVjdE5hbWUsIHsndHlwZSc6ICd0ZXh0JywgJ3ZhbHVlJzogcHJvamVjdC5uYW1lLCAnbmFtZSc6ICdwcm9qZWN0X25hbWUnLCAnZGlzYWJsZWQnOiAnJ30pO1xuICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtfY2hhbmdlUHJvamVjdE5hbWUoKTt9fSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKHRvcFBhbmVsKTtcblxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfY3JlYXRlTGlzdG9mVG9kbygpO1xuXG4gICAgLy8gYWRkIHRvZG8gdG8gcHJvamVjdFxuICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvJywgJ2J0bicsICdwcm9qZWN0Jyk7XG4gICAgYWRkVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIHRvZG9cIjtcbiAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoIWFkZFRvZG9CdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgYWRkVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIF9hZGRUb2RvVG9Qcm9qZWN0KGFkZFRvZG9CdG4pXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGNoYW5nZSBwcm9qZWN0J3MgbmFtZVxuICAgIGNvbnN0IGNoYW5nZVByb2plY3ROYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2hhbmdlUHJvamVjdE5hbWVCdG4uY2xhc3NMaXN0LmFkZCgnY2hhbmdlLW5hbWUtcHJvamVjdCcsICdidG4nLCAncHJvamVjdCcpO1xuICAgIGNoYW5nZVByb2plY3ROYW1lQnRuLnRleHRDb250ZW50ID0gJ0NoYW5nZSBuYW1lJztcbiAgICBjaGFuZ2VQcm9qZWN0TmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9jaGFuZ2VQcm9qZWN0TmFtZSgpKTtcblxuICAgIC8vIGRlbGV0ZSBwcm9qZWN0IGZyb20gdGhlIGxpc3RcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdCcsICdidG4nLCAncHJvamVjdCcpO1xuICAgIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlIHByb2plY3QnO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfZGVsZXRlUHJvamVjdCgpKTtcblxuICAgIHRvcFBhbmVsLmFwcGVuZChwcm9qZWN0TmFtZSwgY2hhbmdlUHJvamVjdE5hbWVCdG4sIGFkZFRvZG9CdG4sIGRlbGV0ZVByb2plY3RCdG4pO1xuXG4gICAgY29uc3QgcHJvamVjdEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC5hcmVhJyk7XG4gICAgcHJvamVjdEFyZWEuYXBwZW5kKGNvbnRhaW5lcik7XG59O1xuXG5jb25zdCB1bkRpc3BsYXlQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC5jb250YWluZXInKTtcbiAgICBpZiAocHJvamVjdENvbnRhaW5lcilcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmUoKTtcbn07XG5cbmV4cG9ydCB7XG4gICAgZGlzcGxheVByb2plY3QsXG4gICAgdW5EaXNwbGF5UHJvamVjdCxcbn07XG4iLCJjbGFzcyBwcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICAgIHRoaXMudGltZUNyZWF0ZWQgPSAobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBhZGRUb2RvKHRvZG8pIHtcbiAgICAgICAgdGhpcy5saXN0LnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgZGVsZXRlVG9kbyh0b2RvKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubGlzdC5pbmRleE9mKHRvZG8pO1xuICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBlZGl0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0OyIsImZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cnMpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldEF0dHJpYnV0ZXM7IiwiaW1wb3J0IHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuY29uc3QgcHJvamVjdElkID0gW107XG5cbi8vIHN0b3JlIHByb2plY3QgaWQgaW50byB0aGUgbG9jYWxTdG9yYWdlXG5jb25zdCBfc3RvcmVJZCA9IChpZCkgPT4ge1xuICAgIC8vIGNoZWNrIGZvciBkdXBsaWNhdGVcbiAgICBpZiAocHJvamVjdElkLmluZGV4T2YoaWQpID09IC0xKSB7XG4gICAgICAgIHByb2plY3RJZC5wdXNoKGlkKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RJZCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RJZCkpO1xuICAgIH1cbn07XG5cbi8vIHJlbW92ZSBwcm9qZWN0IGlkIGZyb20gdGhlIGxvY2FsU3RvcmFnZVxuY29uc3QgX3JlbW92ZUlkID0gKGlkKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gcHJvamVjdElkLmluZGV4T2YoaWQpO1xuICAgIHByb2plY3RJZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0SWQnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0SWQpKTtcbn07XG5cbi8vIGdldCBkYXRhIGZyb20gbG9jYWxTdG9yYWdlXG5jb25zdCBfZ2V0U3RvcmFnZSA9ICgpID0+IHtcbiAgICBwcm9qZWN0TGlzdC5sZW5ndGggPSAwO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5sZW5ndGgpO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoICE9IDApIHtcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdElkJykpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SWQpO1xuICAgICAgICBsZXQgbGVuZ3RoID0gcHJvamVjdElkLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBnaXZpbmcgYSBwcm9qZWN0IGZyb20gbG9jYWwgc3RvcmFnZSBhIGNsYXNzXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RnJvbVN0b3JhZ2UgPSBuZXcgcHJvamVjdCgpO1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHByb2plY3RGcm9tU3RvcmFnZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdElkW2ldKSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEZyb21TdG9yYWdlW2tleV0gPSBwcm9qZWN0RGF0YVtrZXldO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gZ2l2aW5nIGEgdG9kbyBmcm9tIGxvY2FsIHN0b3JhZ2UgYSBjbGFzc1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBwcm9qZWN0RnJvbVN0b3JhZ2UubGlzdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Gcm9tU3RvcmFnZSA9IG5ldyB0b2RvKCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRvZG9Gcm9tU3RvcmFnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Zyb21TdG9yYWdlW2tleV0gPSBpdGVtW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHByb2plY3RGcm9tU3RvcmFnZS5saXN0LmluZGV4T2YoaXRlbSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEZyb21TdG9yYWdlLmxpc3RbaW5kZXhdID0gdG9kb0Zyb21TdG9yYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0RnJvbVN0b3JhZ2UpO1xuICAgIFxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgICB9XG59O1xuXG4vLyBhZGQvZWRpdCBwcm9qZWN0IGluIHRoZSBsb2NhbFN0b3JhZ2VcbmNvbnN0IHNldFByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld1Byb2plY3QudGltZUNyZWF0ZWQsIEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3QpKTtcbiAgICBfc3RvcmVJZChuZXdQcm9qZWN0LnRpbWVDcmVhdGVkKTtcbiAgICBfZ2V0U3RvcmFnZSgpO1xufTtcblxuLy8gZGVsZXRlIHByb2plY3QgZnJvbSB0aGUgbG9jYWxTdG9yYWdlXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKG9sZFByb2plY3QpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShvbGRQcm9qZWN0LnRpbWVDcmVhdGVkKTtcbiAgICBfcmVtb3ZlSWQob2xkUHJvamVjdC50aW1lQ3JlYXRlZCk7XG4gICAgX2dldFN0b3JhZ2UoKTtcbn07XG5cbi8vIGluaXRpYWxpemVcbmlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID09IDApIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdElkJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdElkKSk7XG59XG5lbHNlIHtcbiAgICBjb25zdCBpZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0SWQnKSk7XG4gICAgZm9yIChsZXQgaWQgb2YgaWREYXRhKSB7XG4gICAgICAgIHByb2plY3RJZC5wdXNoKGlkKTtcbiAgICB9XG59XG4vLyBhbHdheXMgY3JlYXRlIGRlZmF1bHQgcHJvamVjdCBpZiBubyBwcm9qZWN0IGlzIHByZXNlbnQgaW4gdGhlIGxpc3RcbmlmIChwcm9qZWN0SWQubGVuZ3RoID09IDApIHtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBwcm9qZWN0KCdEZWZhdWx0Jyk7XG4gICAgc2V0UHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG59XG5cbl9nZXRTdG9yYWdlKCk7XG5cbmV4cG9ydCB7XG4gICAgc2V0UHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIHByb2plY3RMaXN0LFxufTtcblxuIiwiY2xhc3MgdG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmlzRG9uZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRvZ2dsZUlzRG9uZSgpIHtcbiAgICAgICAgdGhpcy5pc0RvbmUgPSAhdGhpcy5pc0RvbmU7XG4gICAgfVxuXG4gICAgZWRpdFRvZG8obmV3VGl0bGUsIG5ld0Rlc2MsIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgdGhpcy5kZXNjID0gbmV3RGVzYztcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9kbzsiLCJpbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0LCB1bkRpc3BsYXlQcm9qZWN0IH0gZnJvbSBcIi4vZGlzcGxheVByb2plY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlBZGRQcm9qZWN0TW9kYWwgfSBmcm9tICcuL2Rpc3BsYXlNb2RhbCc7XG5cbi8vIGNyZWF0ZSBhIGxpc3Qgb2YgcHJvamVjdHMgXG5jb25zdCBfY3JlYXRlUHJvamVjdEFyZWEgPSAoY29udGVudCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdExpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICdhcmVhJyk7XG4gICAgY29udGVudC5hcHBlbmQocHJvamVjdExpc3RDb250YWluZXIpO1xufTtcblxuLy8gY3JlYXRlIGEgYnV0dG9uIGZvciBhZGRpbmcgbmV3IHByb2plY3QgdG8gdGhlIGxpc3RcbmNvbnN0IF9jcmVhdGVBZGRQcm9qZWN0QnRuID0gKHNpZGViYXIpID0+IHtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QnLCAnYnRuJyk7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICghYWRkQnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGFkZEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRpc3BsYXlBZGRQcm9qZWN0TW9kYWwoYWRkQnRuKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHNpZGViYXIucHJlcGVuZChhZGRCdG4pO1xufTtcblxuLy8gcmVtb3ZlIGFsbCB0aGUgY2hpbGRyZW4gaW4gYSBsaXN0IG9mIHByb2plY3QgaW4gc2lkZWJhclxuY29uc3QgX3JlZnJlc2hQcm9qZWN0TGlzdFNpZGViYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXIucHJvamVjdC1pdGVtLWxpc3QnKTtcbiAgICBwcm9qZWN0SXRlbUxpc3QuaW5uZXJIVE1MID0gJyc7XG59O1xuXG4vLyBkaXNwbGF5IGEgbGlzdCBvZiBwcm9qZWN0IGluIHNpZGViYXJcbmNvbnN0IGRpc3BsYXlQcm9qZWN0TGlzdFNpZGViYXIgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgX3JlZnJlc2hQcm9qZWN0TGlzdFNpZGViYXIoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJywgJ3Byb2plY3QtaXRlbScpO1xuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdExpc3RbaV0ubmFtZTtcbiAgICAgICAgLy8gc2hvdyBzZWxlY3RlZCBwcm9qZWN0XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB1bkRpc3BsYXlQcm9qZWN0KCk7XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0TGlzdFtpXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHByb2plY3QpO1xuICAgIH1cbn07XG5cbmNvbnN0IGhlYWRlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicsICdjb250YWluZXInKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInLCAndGV4dCcpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSAnTXkgVG9kbyBMaXN0JztcbiAgICBjb250YWluZXIuYXBwZW5kKHRleHQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XG59KSgpO1xuXG5jb25zdCBjb250ZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcsICdjb250YWluZXInKTtcbiAgICBfY3JlYXRlUHJvamVjdEFyZWEoY29udGFpbmVyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgLy8gZGlzcGxheSBmaXJzdCAoZGVmYXVsdCkgcHJvamVjdCBpZiBpdCBleGlzdHNcbiAgICBpZiAocHJvamVjdExpc3RbMF0pXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RMaXN0WzBdKTtcbn0pKCk7XG5cbmNvbnN0IHNpZGViYXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC5jb250YWluZXInKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicsICdjb250YWluZXInKTtcbiAgICBjb250ZW50LnByZXBlbmQoY29udGFpbmVyKTtcblxuICAgIGNvbnN0IHByb2plY3RJdGVtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RJdGVtTGlzdC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJywgJ3Byb2plY3QtaXRlbS1saXN0Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZChwcm9qZWN0SXRlbUxpc3QpO1xuXG4gICAgX2NyZWF0ZUFkZFByb2plY3RCdG4oY29udGFpbmVyKTtcbiAgICBkaXNwbGF5UHJvamVjdExpc3RTaWRlYmFyKHByb2plY3RJdGVtTGlzdCk7XG59KSgpO1xuXG5leHBvcnQge1xuICAgIGRpc3BsYXlQcm9qZWN0TGlzdFNpZGViYXIsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vdWlcIjtcbmltcG9ydCBcIi4uL3N0eWxlL3N0eWxlLmNzc1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==