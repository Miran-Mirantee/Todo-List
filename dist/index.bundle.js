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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    background-color: #F0C987;\n    height: 100vh;\n}\n\n.hidden{\n    display: none!important;\n}\n\n.header.container{\n    display: flex;\n    justify-content: flex-start;\n    background-color: #3C153B;\n    padding: 16px;\n    padding-bottom: 28px;\n    z-index: 1;\n    border-bottom: 12px solid #f5980d;\n    box-shadow: \n        -12px 0px 0 0px #f5980d inset,\n        -24px -12px 0 0px #8B1E3F inset\n    ;\n}\n\n.header.text {\n    font-size: 48px;\n    font-weight: bold;\n    color: white;\n}\n\n.content.container{\n    display: flex;\n    flex-grow: 1;\n}\n\n.sidebar.container{\n    display: flex;\n    flex-direction: column;\n    background-color: #6ba181;\n    padding: 16px;\n    width: 300px;\n    box-shadow: \n        0px 5px 2px 0 #386955 inset\n    ;\n}\n\n.sidebar.top-panel{\n    align-self: normal;\n    padding-bottom: 16px;\n    border-bottom: 2px solid #a6ddd4;\n}\n\n.sidebar.text{\n    font-size: 32px;\n    font-weight: bold;\n    color: #F0C987;\n    text-shadow: 2px 2px 2px #386955;\n}\n\n.sidebar.project-item-list{\n    display: flex;\n    flex-direction: column;\n    margin: 8px 0;\n    padding: 4px;\n    gap: 8px;\n}\n\n.sidebar.project-item{\n    font-weight: bold;\n    color: #dcfcce;\n    /* text-align: center; */\n    border-radius: 8px;\n    padding: 8px 14px;\n    font-size: 24px;\n}\n\n.sidebar.project-item:hover{\n    cursor: pointer;\n    color: #ffd51a;\n    text-shadow: 2px 2px 2px #386955;\n    background-color: #89BD9E;\n}\n\n.sidebar.project-item:active{\n    background-color: transparent;\n    color: #dbb819;\n    text-shadow: none;\n}\n\n.sidebar.project-item.selected{\n    color: white;\n    text-shadow: 2px 2px 2px #8b1f15;\n    background-color: #DB4C40;\n}\n\n.sidebar.project-item.selected:hover{\n    color: #ffd51a;\n    background-color: #f55647;\n}\n\n.sidebar.project-item.selected:active{\n    color: #dbb819;\n    text-shadow: none;\n    background-color: #DB4C40;\n}\n\n.top-panel{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.bottom-panel{\n    display: flex;\n    gap: 4px;\n    justify-content: end;\n}\n\n.btn-panel{\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.top-panel > .btn-panel > .btn{\n    box-shadow: 2px 2px 0px 0px #911d13;\n}\n\n.top-panel > .btn-panel > .btn:active{\n    transform: translate(1px, 1px);\n    box-shadow: none;\n}\n\n.btn{\n    border: none;\n    background-color: #ffd51a;\n    padding: 8px;\n    border-radius: 6px;\n    color: #3C153B;\n    font-size: 18px;\n    font-weight: bold;\n    text-shadow: 1px 1px 0px #b89600;\n}\n\n.btn:hover{\n    cursor: pointer;\n    background-color: #ffe260;\n}\n\n.btn:active{\n    background-color: #ffd51a;\n    color: #1b051b;\n    text-shadow: none;\n}\n\n.add-project.btn{\n    height: 42px;\n    width: 42px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #1cff41;\n    text-shadow: 1px 1px 1px #386955;\n    background-color: transparent;\n    border-radius: 16px;\n    font-size: 32px; \n}\n\n.add-project.btn:hover{\n    background-color: #89BD9E;\n}\n\n.add-project.btn:active{\n    color: #17c734;\n    text-shadow: none;\n    background-color: transparent;\n}\n\n.project.area{\n    display: flex;\n    justify-content: center;\n    flex-grow: 1;\n    box-shadow: \n        0 5px 2px 0px #be7303 inset\n    ;\n}\n\n.add-todo.btn > i,\n.delete-project.btn,\n.change-name-project.btn{\n    font-size: 24px;\n}\n\n.add-todo.btn{\n    display: flex;\n    align-items: center;\n    gap: 4px;\n}\n\n.project.container{\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    width: 1100px;\n    margin: 48px 0;\n    background-color: #89BD9E;\n    border-radius: 16px;\n    overflow: hidden;\n    box-shadow: \n        5px 5px 3px 0 #be7303\n    ;\n}\n\n.project.top-panel{\n    gap: 8px;\n    padding: 8px 16px;\n    background-color: #DB4C40;\n    border-radius: 16px 16px 0 0;\n    box-shadow: \n        0px 0px 6px 2px #386955\n    ;\n}\n\n.project.name{\n    font-size: 36px;\n    font-weight: bold;\n    width: 700px;\n    border: none;\n    outline: none;\n}\n\n.project.name:disabled{\n    color: white;\n    text-shadow: 2px 2px 2px #8b1f15;\n    background-color: transparent;\n}\n\n.todo.list{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    padding: 18px 12px;\n}\n\n.todo.container{\n    display: flex;\n    justify-content: space-between;\n    gap: 4px;\n    padding: 4px;\n    background-color: rgb(133, 245, 245);\n}\n\n.todo-panel{\n    display: flex;\n    flex-direction: column;\n}\n\n.expand-panel{\n    display: flex;\n    background-color: rgb(233, 250, 160);\n    padding: 4px;\n    height: 100px;\n}\n\n.todo-noDesc-panel{\n    display: flex;\n    gap: 16px;\n    height: 48px;\n    align-items: center\n}\n\ninput.todo{\n    border: none;\n    outline: none;\n}\n\ninput[type=\"date\"].todo,\ninput[type=\"text\"].todo{\n    font-size: 20px;\n    padding: 4px 8px;\n}\n\ninput[type=\"text\"].todo{\n    width: 500px;\n}\n\ninput.todo:disabled{\n    background-color: transparent;\n    color: black;\n}\n\ntextarea#desc{\n    resize: none;\n}\n\ntextarea.todo{\n    resize: none;\n    width: 100%;\n    border: none;\n    outline: none;\n}\n\ntextarea.todo:disabled{\n    background-color: transparent;\n    color: black;\n}\n\n.modal-background{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    /* overflow: auto; enable scroll if needed, is this thing even working? */\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content{\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    gap: 8px;\n    margin: 35vh auto;\n    /* width: 250px;\n    height: 400px; */\n    padding: 8px;\n}\n\n.modal.close.btn{\n    color: black;\n    float: right;\n}\n\n.modal.close.btn:hover,\n.modal.close.btn:focus{\n    cursor: pointer;    \n}\n\n.modal.input-form {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.modal.input-container{\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.todo.container:has(.low){\n    background-color: greenyellow;\n}\n\n.todo.container:has(.medium){\n    background-color: aqua;\n}\n\n.todo.container:has(.high){\n    background-color: palevioletred;\n}\n\n.todo.container:has(.deadline){\n    box-shadow: 0px 0px 0px 3px red inset;\n}\n\n.todo.container:has(.alert){\n    box-shadow: 0px 0px 0px 3px yellow inset;\n}\n\n.todo.container:has(.deadline-passed){\n    box-shadow: 0px 0px 0px 3px gray inset;\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,yBAAyB;IACzB,aAAa;IACb,oBAAoB;IACpB,UAAU;IACV,iCAAiC;IACjC;;;IAGA;AACJ;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,aAAa;IACb,YAAY;IACZ;;IAEA;AACJ;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,wBAAwB;IACxB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,gCAAgC;IAChC,yBAAyB;AAC7B;;AAEA;IACI,6BAA6B;IAC7B,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,gCAAgC;IAChC,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ;;IAEA;AACJ;;AAEA;;;IAGI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,aAAa;IACb,cAAc;IACd,yBAAyB;IACzB,mBAAmB;IACnB,gBAAgB;IAChB;;IAEA;AACJ;;AAEA;IACI,QAAQ;IACR,iBAAiB;IACjB,yBAAyB;IACzB,4BAA4B;IAC5B;;IAEA;AACJ;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,QAAQ;IACR,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,YAAY;IACZ;AACJ;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;;IAEI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,yEAAyE;IACzE,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,QAAQ;IACR,iBAAiB;IACjB;oBACgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,sCAAsC;AAC1C","sourcesContent":["body{\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    background-color: #F0C987;\n    height: 100vh;\n}\n\n.hidden{\n    display: none!important;\n}\n\n.header.container{\n    display: flex;\n    justify-content: flex-start;\n    background-color: #3C153B;\n    padding: 16px;\n    padding-bottom: 28px;\n    z-index: 1;\n    border-bottom: 12px solid #f5980d;\n    box-shadow: \n        -12px 0px 0 0px #f5980d inset,\n        -24px -12px 0 0px #8B1E3F inset\n    ;\n}\n\n.header.text {\n    font-size: 48px;\n    font-weight: bold;\n    color: white;\n}\n\n.content.container{\n    display: flex;\n    flex-grow: 1;\n}\n\n.sidebar.container{\n    display: flex;\n    flex-direction: column;\n    background-color: #6ba181;\n    padding: 16px;\n    width: 300px;\n    box-shadow: \n        0px 5px 2px 0 #386955 inset\n    ;\n}\n\n.sidebar.top-panel{\n    align-self: normal;\n    padding-bottom: 16px;\n    border-bottom: 2px solid #a6ddd4;\n}\n\n.sidebar.text{\n    font-size: 32px;\n    font-weight: bold;\n    color: #F0C987;\n    text-shadow: 2px 2px 2px #386955;\n}\n\n.sidebar.project-item-list{\n    display: flex;\n    flex-direction: column;\n    margin: 8px 0;\n    padding: 4px;\n    gap: 8px;\n}\n\n.sidebar.project-item{\n    font-weight: bold;\n    color: #dcfcce;\n    /* text-align: center; */\n    border-radius: 8px;\n    padding: 8px 14px;\n    font-size: 24px;\n}\n\n.sidebar.project-item:hover{\n    cursor: pointer;\n    color: #ffd51a;\n    text-shadow: 2px 2px 2px #386955;\n    background-color: #89BD9E;\n}\n\n.sidebar.project-item:active{\n    background-color: transparent;\n    color: #dbb819;\n    text-shadow: none;\n}\n\n.sidebar.project-item.selected{\n    color: white;\n    text-shadow: 2px 2px 2px #8b1f15;\n    background-color: #DB4C40;\n}\n\n.sidebar.project-item.selected:hover{\n    color: #ffd51a;\n    background-color: #f55647;\n}\n\n.sidebar.project-item.selected:active{\n    color: #dbb819;\n    text-shadow: none;\n    background-color: #DB4C40;\n}\n\n.top-panel{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.bottom-panel{\n    display: flex;\n    gap: 4px;\n    justify-content: end;\n}\n\n.btn-panel{\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.top-panel > .btn-panel > .btn{\n    box-shadow: 2px 2px 0px 0px #911d13;\n}\n\n.top-panel > .btn-panel > .btn:active{\n    transform: translate(1px, 1px);\n    box-shadow: none;\n}\n\n.btn{\n    border: none;\n    background-color: #ffd51a;\n    padding: 8px;\n    border-radius: 6px;\n    color: #3C153B;\n    font-size: 18px;\n    font-weight: bold;\n    text-shadow: 1px 1px 0px #b89600;\n}\n\n.btn:hover{\n    cursor: pointer;\n    background-color: #ffe260;\n}\n\n.btn:active{\n    background-color: #ffd51a;\n    color: #1b051b;\n    text-shadow: none;\n}\n\n.add-project.btn{\n    height: 42px;\n    width: 42px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #1cff41;\n    text-shadow: 1px 1px 1px #386955;\n    background-color: transparent;\n    border-radius: 16px;\n    font-size: 32px; \n}\n\n.add-project.btn:hover{\n    background-color: #89BD9E;\n}\n\n.add-project.btn:active{\n    color: #17c734;\n    text-shadow: none;\n    background-color: transparent;\n}\n\n.project.area{\n    display: flex;\n    justify-content: center;\n    flex-grow: 1;\n    box-shadow: \n        0 5px 2px 0px #be7303 inset\n    ;\n}\n\n.add-todo.btn > i,\n.delete-project.btn,\n.change-name-project.btn{\n    font-size: 24px;\n}\n\n.add-todo.btn{\n    display: flex;\n    align-items: center;\n    gap: 4px;\n}\n\n.project.container{\n    display: flex;\n    flex-direction: column;\n    align-self: flex-start;\n    width: 1100px;\n    margin: 48px 0;\n    background-color: #89BD9E;\n    border-radius: 16px;\n    overflow: hidden;\n    box-shadow: \n        5px 5px 3px 0 #be7303\n    ;\n}\n\n.project.top-panel{\n    gap: 8px;\n    padding: 8px 16px;\n    background-color: #DB4C40;\n    border-radius: 16px 16px 0 0;\n    box-shadow: \n        0px 0px 6px 2px #386955\n    ;\n}\n\n.project.name{\n    font-size: 36px;\n    font-weight: bold;\n    width: 700px;\n    border: none;\n    outline: none;\n}\n\n.project.name:disabled{\n    color: white;\n    text-shadow: 2px 2px 2px #8b1f15;\n    background-color: transparent;\n}\n\n.todo.list{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    padding: 18px 12px;\n}\n\n.todo.container{\n    display: flex;\n    justify-content: space-between;\n    gap: 4px;\n    padding: 4px;\n    background-color: rgb(133, 245, 245);\n}\n\n.todo-panel{\n    display: flex;\n    flex-direction: column;\n}\n\n.expand-panel{\n    display: flex;\n    background-color: rgb(233, 250, 160);\n    padding: 4px;\n    height: 100px;\n}\n\n.todo-noDesc-panel{\n    display: flex;\n    gap: 16px;\n    height: 48px;\n    align-items: center\n}\n\ninput.todo{\n    border: none;\n    outline: none;\n}\n\ninput[type=\"date\"].todo,\ninput[type=\"text\"].todo{\n    font-size: 20px;\n    padding: 4px 8px;\n}\n\ninput[type=\"text\"].todo{\n    width: 500px;\n}\n\ninput.todo:disabled{\n    background-color: transparent;\n    color: black;\n}\n\ntextarea#desc{\n    resize: none;\n}\n\ntextarea.todo{\n    resize: none;\n    width: 100%;\n    border: none;\n    outline: none;\n}\n\ntextarea.todo:disabled{\n    background-color: transparent;\n    color: black;\n}\n\n.modal-background{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    /* overflow: auto; enable scroll if needed, is this thing even working? */\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content{\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    gap: 8px;\n    margin: 35vh auto;\n    /* width: 250px;\n    height: 400px; */\n    padding: 8px;\n}\n\n.modal.close.btn{\n    color: black;\n    float: right;\n}\n\n.modal.close.btn:hover,\n.modal.close.btn:focus{\n    cursor: pointer;    \n}\n\n.modal.input-form {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.modal.input-container{\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.todo.container:has(.low){\n    background-color: greenyellow;\n}\n\n.todo.container:has(.medium){\n    background-color: aqua;\n}\n\n.todo.container:has(.high){\n    background-color: palevioletred;\n}\n\n.todo.container:has(.deadline){\n    box-shadow: 0px 0px 0px 3px red inset;\n}\n\n.todo.container:has(.alert){\n    box-shadow: 0px 0px 0px 3px yellow inset;\n}\n\n.todo.container:has(.deadline-passed){\n    box-shadow: 0px 0px 0px 3px gray inset;\n}\n"],"sourceRoot":""}]);
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
    const addTodoIcon = document.createElement('i');
    addTodoIcon.classList.add('fa-solid', 'fa-list-check');
    const addTodoTxt = document.createElement('div');
    addTodoTxt.textContent = 'Add task';
    addTodoBtn.append(addTodoIcon, addTodoTxt);
    addTodoBtn.addEventListener('click', () => {
        if (!addTodoBtn.classList.contains('active')) {
            addTodoBtn.classList.add('active');
            _addTodoToProject(addTodoBtn)
        }
    });

    // change project's name
    const changeProjectNameBtn = document.createElement('button');
    changeProjectNameBtn.classList.add('change-name-project', 'btn', 'project', 'fa-solid', 'fa-pen-to-square');
    changeProjectNameBtn.addEventListener('click', () => _changeProjectName());

    // delete project from the list
    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.classList.add('delete-project', 'btn', 'project', 'fa-solid', 'fa-trash');
    deleteProjectBtn.addEventListener('click', () => _deleteProject());

    btnPanel.append(addTodoBtn, changeProjectNameBtn, deleteProjectBtn);
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
    if (localStorage.length != 0) {
        const projectId = JSON.parse(localStorage.getItem('projectId'));
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
    addBtn.classList.add('add-project', 'btn', 'fa-solid', 'fa-plus');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssTUFBTSxPQUFPLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFL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O0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RUFBZ0I7QUFDNUIsWUFBWSwrREFBYyxDQUFDLGlEQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG9EQUFjO0FBQ3RCLFFBQVEsK0RBQWMsQ0FBQyxvREFBYztBQUNyQyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDbEhEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQmVmb3JlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNFcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1YkRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGlzcGxheU1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2Rpc3BsYXlQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvc2V0QXR0cnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBDOTg3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcXG59XFxuXFxuLmhlYWRlci5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNDMTUzQjtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDI4cHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvcmRlci1ib3R0b206IDEycHggc29saWQgI2Y1OTgwZDtcXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICAtMTJweCAwcHggMCAwcHggI2Y1OTgwZCBpbnNldCxcXG4gICAgICAgIC0yNHB4IC0xMnB4IDAgMHB4ICM4QjFFM0YgaW5zZXRcXG4gICAgO1xcbn1cXG5cXG4uaGVhZGVyLnRleHQge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250ZW50LmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uc2lkZWJhci5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YmExODE7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICAwcHggNXB4IDJweCAwICMzODY5NTUgaW5zZXRcXG4gICAgO1xcbn1cXG5cXG4uc2lkZWJhci50b3AtcGFuZWx7XFxuICAgIGFsaWduLXNlbGY6IG5vcm1hbDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYTZkZGQ0O1xcbn1cXG5cXG4uc2lkZWJhci50ZXh0e1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI0YwQzk4NztcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMzODY5NTU7XFxufVxcblxcbi5zaWRlYmFyLnByb2plY3QtaXRlbS1saXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDhweCAwO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uc2lkZWJhci5wcm9qZWN0LWl0ZW17XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI2RjZmNjZTtcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5zaWRlYmFyLnByb2plY3QtaXRlbTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogI2ZmZDUxYTtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMzODY5NTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OUJEOUU7XFxufVxcblxcbi5zaWRlYmFyLnByb2plY3QtaXRlbTphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogI2RiYjgxOTtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyLnByb2plY3QtaXRlbS5zZWxlY3RlZHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzhiMWYxNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RCNEM0MDtcXG59XFxuXFxuLnNpZGViYXIucHJvamVjdC1pdGVtLnNlbGVjdGVkOmhvdmVye1xcbiAgICBjb2xvcjogI2ZmZDUxYTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NTY0NztcXG59XFxuXFxuLnNpZGViYXIucHJvamVjdC1pdGVtLnNlbGVjdGVkOmFjdGl2ZXtcXG4gICAgY29sb3I6ICNkYmI4MTk7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREI0QzQwO1xcbn1cXG5cXG4udG9wLXBhbmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib3R0b20tcGFuZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmJ0bi1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi50b3AtcGFuZWwgPiAuYnRuLXBhbmVsID4gLmJ0bntcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAwcHggMHB4ICM5MTFkMTM7XFxufVxcblxcbi50b3AtcGFuZWwgPiAuYnRuLXBhbmVsID4gLmJ0bjphY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMXB4KTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmJ0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNTFhO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgY29sb3I6ICMzQzE1M0I7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCAjYjg5NjAwO1xcbn1cXG5cXG4uYnRuOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmUyNjA7XFxufVxcblxcbi5idG46YWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNTFhO1xcbiAgICBjb2xvcjogIzFiMDUxYjtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJvamVjdC5idG57XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgd2lkdGg6IDQycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogIzFjZmY0MTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMzODY5NTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBmb250LXNpemU6IDMycHg7IFxcbn1cXG5cXG4uYWRkLXByb2plY3QuYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODlCRDlFO1xcbn1cXG5cXG4uYWRkLXByb2plY3QuYnRuOmFjdGl2ZXtcXG4gICAgY29sb3I6ICMxN2M3MzQ7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnByb2plY3QuYXJlYXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICAwIDVweCAycHggMHB4ICNiZTczMDMgaW5zZXRcXG4gICAgO1xcbn1cXG5cXG4uYWRkLXRvZG8uYnRuID4gaSxcXG4uZGVsZXRlLXByb2plY3QuYnRuLFxcbi5jaGFuZ2UtbmFtZS1wcm9qZWN0LmJ0bntcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8uYnRue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnByb2plY3QuY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMTEwMHB4O1xcbiAgICBtYXJnaW46IDQ4cHggMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg5QkQ5RTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICA1cHggNXB4IDNweCAwICNiZTczMDNcXG4gICAgO1xcbn1cXG5cXG4ucHJvamVjdC50b3AtcGFuZWx7XFxuICAgIGdhcDogOHB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RCNEM0MDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICAwcHggMHB4IDZweCAycHggIzM4Njk1NVxcbiAgICA7XFxufVxcblxcbi5wcm9qZWN0Lm5hbWV7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC5uYW1lOmRpc2FibGVke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjOGIxZjE1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRvZG8ubGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHBhZGRpbmc6IDE4cHggMTJweDtcXG59XFxuXFxuLnRvZG8uY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogNHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzMsIDI0NSwgMjQ1KTtcXG59XFxuXFxuLnRvZG8tcGFuZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5leHBhbmQtcGFuZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDI1MCwgMTYwKTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4udG9kby1ub0Rlc2MtcGFuZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTZweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxufVxcblxcbmlucHV0LnRvZG97XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLnRvZG8sXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLnRvZG97XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLnRvZG97XFxuICAgIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuaW5wdXQudG9kbzpkaXNhYmxlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxudGV4dGFyZWEjZGVzY3tcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYS50b2Rve1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhLnRvZG86ZGlzYWJsZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5tb2RhbC1iYWNrZ3JvdW5ke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyBlbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCwgaXMgdGhpcyB0aGluZyBldmVuIHdvcmtpbmc/ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luOiAzNXZoIGF1dG87XFxuICAgIC8qIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDsgKi9cXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ubW9kYWwuY2xvc2UuYnRue1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLm1vZGFsLmNsb3NlLmJ0bjpob3ZlcixcXG4ubW9kYWwuY2xvc2UuYnRuOmZvY3Vze1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICAgIFxcbn1cXG5cXG4ubW9kYWwuaW5wdXQtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4ubW9kYWwuaW5wdXQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnRvZG8uY29udGFpbmVyOmhhcygubG93KXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcjpoYXMoLm1lZGl1bSl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcjpoYXMoLmhpZ2gpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xcbn1cXG5cXG4udG9kby5jb250YWluZXI6aGFzKC5kZWFkbGluZSl7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCByZWQgaW5zZXQ7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcjpoYXMoLmFsZXJ0KXtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4IHllbGxvdyBpbnNldDtcXG59XFxuXFxuLnRvZG8uY29udGFpbmVyOmhhcyguZGVhZGxpbmUtcGFzc2VkKXtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4IGdyYXkgaW5zZXQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFD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RUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBDOTg3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcXG59XFxuXFxuLmhlYWRlci5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNDMTUzQjtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDI4cHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvcmRlci1ib3R0b206IDEycHggc29saWQgI2Y1OTgwZDtcXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICAtMTJweCAwcHggMCAwcHggI2Y1OTgwZCBpbnNldCxcXG4gICAgICAgIC0yNHB4IC0xMnB4IDAgMHB4ICM4QjFFM0YgaW5zZXRcXG4gICAgO1xcbn1cXG5cXG4uaGVhZGVyLnRleHQge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250ZW50LmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uc2lkZWJhci5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YmExODE7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICAwcHggNXB4IDJweCAwICMzODY5NTUgaW5zZXRcXG4gICAgO1xcbn1cXG5cXG4uc2lkZWJhci50b3AtcGFuZWx7XFxuICAgIGFsaWduLXNlbGY6IG5vcm1hbDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYTZkZGQ0O1xcbn1cXG5cXG4uc2lkZWJhci50ZXh0e1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI0YwQzk4NztcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMzODY5NTU7XFxufVxcblxcbi5zaWRlYmFyLnByb2plY3QtaXRlbS1saXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDhweCAwO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uc2lkZWJhci5wcm9qZWN0LWl0ZW17XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI2RjZmNjZTtcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5zaWRlYmFyLnByb2plY3QtaXRlbTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogI2ZmZDUxYTtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMzODY5NTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OUJEOUU7XFxufVxcblxcbi5zaWRlYmFyLnByb2plY3QtaXRlbTphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogI2RiYjgxOTtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyLnByb2plY3QtaXRlbS5zZWxlY3RlZHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzhiMWYxNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RCNEM0MDtcXG59XFxuXFxuLnNpZGViYXIucHJvamVjdC1pdGVtLnNlbGVjdGVkOmhvdmVye1xcbiAgICBjb2xvcjogI2ZmZDUxYTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NTY0NztcXG59XFxuXFxuLnNpZGViYXIucHJvamVjdC1pdGVtLnNlbGVjdGVkOmFjdGl2ZXtcXG4gICAgY29sb3I6ICNkYmI4MTk7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREI0QzQwO1xcbn1cXG5cXG4udG9wLXBhbmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib3R0b20tcGFuZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmJ0bi1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi50b3AtcGFuZWwgPiAuYnRuLXBhbmVsID4gLmJ0bntcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAwcHggMHB4ICM5MTFkMTM7XFxufVxcblxcbi50b3AtcGFuZWwgPiAuYnRuLXBhbmVsID4gLmJ0bjphY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMXB4KTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmJ0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNTFhO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgY29sb3I6ICMzQzE1M0I7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCAjYjg5NjAwO1xcbn1cXG5cXG4uYnRuOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmUyNjA7XFxufVxcblxcbi5idG46YWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNTFhO1xcbiAgICBjb2xvcjogIzFiMDUxYjtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJvamVjdC5idG57XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgd2lkdGg6IDQycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogIzFjZmY0MTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMzODY5NTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBmb250LXNpemU6IDMycHg7IFxcbn1cXG5cXG4uYWRkLXByb2plY3QuYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODlCRDlFO1xcbn1cXG5cXG4uYWRkLXByb2plY3QuYnRuOmFjdGl2ZXtcXG4gICAgY29sb3I6ICMxN2M3MzQ7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnByb2plY3QuYXJlYXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICAwIDVweCAycHggMHB4ICNiZTczMDMgaW5zZXRcXG4gICAgO1xcbn1cXG5cXG4uYWRkLXRvZG8uYnRuID4gaSxcXG4uZGVsZXRlLXByb2plY3QuYnRuLFxcbi5jaGFuZ2UtbmFtZS1wcm9qZWN0LmJ0bntcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8uYnRue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnByb2plY3QuY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMTEwMHB4O1xcbiAgICBtYXJnaW46IDQ4cHggMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg5QkQ5RTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICA1cHggNXB4IDNweCAwICNiZTczMDNcXG4gICAgO1xcbn1cXG5cXG4ucHJvamVjdC50b3AtcGFuZWx7XFxuICAgIGdhcDogOHB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RCNEM0MDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICAwcHggMHB4IDZweCAycHggIzM4Njk1NVxcbiAgICA7XFxufVxcblxcbi5wcm9qZWN0Lm5hbWV7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC5uYW1lOmRpc2FibGVke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjOGIxZjE1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRvZG8ubGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHBhZGRpbmc6IDE4cHggMTJweDtcXG59XFxuXFxuLnRvZG8uY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogNHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzMsIDI0NSwgMjQ1KTtcXG59XFxuXFxuLnRvZG8tcGFuZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5leHBhbmQtcGFuZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDI1MCwgMTYwKTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4udG9kby1ub0Rlc2MtcGFuZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTZweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxufVxcblxcbmlucHV0LnRvZG97XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLnRvZG8sXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLnRvZG97XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLnRvZG97XFxuICAgIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuaW5wdXQudG9kbzpkaXNhYmxlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxudGV4dGFyZWEjZGVzY3tcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYS50b2Rve1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhLnRvZG86ZGlzYWJsZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5tb2RhbC1iYWNrZ3JvdW5ke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyBlbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCwgaXMgdGhpcyB0aGluZyBldmVuIHdvcmtpbmc/ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luOiAzNXZoIGF1dG87XFxuICAgIC8qIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDsgKi9cXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ubW9kYWwuY2xvc2UuYnRue1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLm1vZGFsLmNsb3NlLmJ0bjpob3ZlcixcXG4ubW9kYWwuY2xvc2UuYnRuOmZvY3Vze1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICAgIFxcbn1cXG5cXG4ubW9kYWwuaW5wdXQtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4ubW9kYWwuaW5wdXQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnRvZG8uY29udGFpbmVyOmhhcygubG93KXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcjpoYXMoLm1lZGl1bSl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcjpoYXMoLmhpZ2gpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xcbn1cXG5cXG4udG9kby5jb250YWluZXI6aGFzKC5kZWFkbGluZSl7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCByZWQgaW5zZXQ7XFxufVxcblxcbi50b2RvLmNvbnRhaW5lcjpoYXMoLmFsZXJ0KXtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4IHllbGxvdyBpbnNldDtcXG59XFxuXFxuLnRvZG8uY29udGFpbmVyOmhhcyguZGVhZGxpbmUtcGFzc2VkKXtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4IGdyYXkgaW5zZXQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1vbnRocyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtb250aHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDUgbW9udGhzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIDUpXG4gKiAvLz0+IFN1biBGZWIgMDEgMjAxNSAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1vbnRocyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIG1vbnRocywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIHZhciBkYXlPZk1vbnRoID0gZGF0ZS5nZXREYXRlKCk7IC8vIFRoZSBKUyBEYXRlIG9iamVjdCBzdXBwb3J0cyBkYXRlIG1hdGggYnkgYWNjZXB0aW5nIG91dC1vZi1ib3VuZHMgdmFsdWVzIGZvclxuICAvLyBtb250aCwgZGF5LCBldGMuIEZvciBleGFtcGxlLCBuZXcgRGF0ZSgyMDIwLCAwLCAwKSByZXR1cm5zIDMxIERlYyAyMDE5IGFuZFxuICAvLyBuZXcgRGF0ZSgyMDIwLCAxMywgMSkgcmV0dXJucyAxIEZlYiAyMDIxLiAgVGhpcyBpcyAqYWxtb3N0KiB0aGUgYmVoYXZpb3Igd2VcbiAgLy8gd2FudCBleGNlcHQgdGhhdCBkYXRlcyB3aWxsIHdyYXAgYXJvdW5kIHRoZSBlbmQgb2YgYSBtb250aCwgbWVhbmluZyB0aGF0XG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAzMSkgd2lsbCByZXR1cm4gMyBNYXIgMjAyMSBub3QgMjggRmViIDIwMjEgYXMgZGVzaXJlZC4gU29cbiAgLy8gd2UnbGwgZGVmYXVsdCB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkIG1vbnRoIGJ5IGFkZGluZyAxIHRvIHRoZSBkZXNpcmVkXG4gIC8vIG1vbnRoIGFuZCB1c2luZyBhIGRhdGUgb2YgMCB0byBiYWNrIHVwIG9uZSBkYXkgdG8gdGhlIGVuZCBvZiB0aGUgZGVzaXJlZFxuICAvLyBtb250aC5cblxuICB2YXIgZW5kT2ZEZXNpcmVkTW9udGggPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gIGVuZE9mRGVzaXJlZE1vbnRoLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIGFtb3VudCArIDEsIDApO1xuICB2YXIgZGF5c0luTW9udGggPSBlbmRPZkRlc2lyZWRNb250aC5nZXREYXRlKCk7XG5cbiAgaWYgKGRheU9mTW9udGggPj0gZGF5c0luTW9udGgpIHtcbiAgICAvLyBJZiB3ZSdyZSBhbHJlYWR5IGF0IHRoZSBlbmQgb2YgdGhlIG1vbnRoLCB0aGVuIHRoaXMgaXMgdGhlIGNvcnJlY3QgZGF0ZVxuICAgIC8vIGFuZCB3ZSdyZSBkb25lLlxuICAgIHJldHVybiBlbmRPZkRlc2lyZWRNb250aDtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHdlIG5vdyBrbm93IHRoYXQgc2V0dGluZyB0aGUgb3JpZ2luYWwgZGF5LW9mLW1vbnRoIHZhbHVlIHdvbid0XG4gICAgLy8gY2F1c2UgYW4gb3ZlcmZsb3csIHNvIHNldCB0aGUgZGVzaXJlZCBkYXktb2YtbW9udGguIE5vdGUgdGhhdCB3ZSBjYW4ndFxuICAgIC8vIGp1c3Qgc2V0IHRoZSBkYXRlIG9mIGBlbmRPZkRlc2lyZWRNb250aGAgYmVjYXVzZSB0aGF0IG9iamVjdCBtYXkgaGF2ZSBoYWRcbiAgICAvLyBpdHMgdGltZSBjaGFuZ2VkIGluIHRoZSB1bnVzdWFsIGNhc2Ugd2hlcmUgd2hlcmUgYSBEU1QgdHJhbnNpdGlvbiB3YXMgb25cbiAgICAvLyB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoIGFuZCBpdHMgbG9jYWwgdGltZSB3YXMgaW4gdGhlIGhvdXIgc2tpcHBlZCBvclxuICAgIC8vIHJlcGVhdGVkIG5leHQgdG8gYSBEU1QgdHJhbnNpdGlvbi4gIFNvIHdlIHVzZSBgZGF0ZWAgaW5zdGVhZCB3aGljaCBpc1xuICAgIC8vIGd1YXJhbnRlZWQgdG8gc3RpbGwgaGF2ZSB0aGUgb3JpZ2luYWwgdGltZS5cbiAgICBkYXRlLnNldEZ1bGxZZWFyKGVuZE9mRGVzaXJlZE1vbnRoLmdldEZ1bGxZZWFyKCksIGVuZE9mRGVzaXJlZE1vbnRoLmdldE1vbnRoKCksIGRheU9mTW9udGgpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNCZWZvcmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGJlZm9yZSAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNCZWZvcmUobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNCZWZvcmUoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA8IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNFcXVhbFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGVxdWFsP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBlcXVhbD9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBlcXVhbFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBKdWx5IDIwMTQgMDY6MzA6NDUuMDAwIGFuZCAyIEp1bHkgMjAxNCAwNjozMDo0NS41MDAgZXF1YWw/XG4gKiBjb25zdCByZXN1bHQgPSBpc0VxdWFsKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCAzMCwgNDUsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCAzMCwgNDUsIDUwMClcbiAqIClcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VxdWFsKGRpcnR5TGVmdERhdGUsIGRpcnR5UmlnaHREYXRlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlMZWZ0RGF0ZSk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlSaWdodERhdGUpO1xuICByZXR1cm4gZGF0ZUxlZnQuZ2V0VGltZSgpID09PSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHN1YkRheXMgZnJvbSBcIi4uL3N1YkRheXMvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNb250aHMgZnJvbSBcIi4uL3N1Yk1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1YlxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtEdXJhdGlvbn0gZHVyYXRpb24gLSB0aGUgb2JqZWN0IHdpdGggeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWRcbiAqXG4gKiB8IEtleSAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCB5ZWFycyAgIHwgQW1vdW50IG9mIHllYXJzIHRvIGJlIHN1YnRyYWN0ZWQgICB8XG4gKiB8IG1vbnRocyAgfCBBbW91bnQgb2YgbW9udGhzIHRvIGJlIHN1YnRyYWN0ZWQgIHxcbiAqIHwgd2Vla3MgICB8IEFtb3VudCBvZiB3ZWVrcyB0byBiZSBzdWJ0cmFjdGVkICAgfFxuICogfCBkYXlzICAgIHwgQW1vdW50IG9mIGRheXMgdG8gYmUgc3VidHJhY3RlZCAgICB8XG4gKiB8IGhvdXJzICAgfCBBbW91bnQgb2YgaG91cnMgdG8gYmUgc3VidHJhY3RlZCAgIHxcbiAqIHwgbWludXRlcyB8IEFtb3VudCBvZiBtaW51dGVzIHRvIGJlIHN1YnRyYWN0ZWQgfFxuICogfCBzZWNvbmRzIHwgQW1vdW50IG9mIHNlY29uZHMgdG8gYmUgc3VidHJhY3RlZCB8XG4gKlxuICogQWxsIHZhbHVlcyBkZWZhdWx0IHRvIDBcbiAqXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIHNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCB0aGUgZm9sbG93aW5nIGR1cmF0aW9uIGZyb20gMTUgSnVuZSAyMDE3IDE1OjI5OjIwXG4gKiBjb25zdCByZXN1bHQgPSBzdWIobmV3IERhdGUoMjAxNywgNSwgMTUsIDE1LCAyOSwgMjApLCB7XG4gKiAgIHllYXJzOiAyLFxuICogICBtb250aHM6IDksXG4gKiAgIHdlZWtzOiAxLFxuICogICBkYXlzOiA3LFxuICogICBob3VyczogNSxcbiAqICAgbWludXRlczogOSxcbiAqICAgc2Vjb25kczogMzBcbiAqIH0pXG4gKiAvLz0+IE1vbiBTZXAgMSAyMDE0IDEwOjE5OjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViKGRhdGUsIGR1cmF0aW9uKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICBpZiAoIWR1cmF0aW9uIHx8IF90eXBlb2YoZHVyYXRpb24pICE9PSAnb2JqZWN0JykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciB5ZWFycyA9IGR1cmF0aW9uLnllYXJzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLnllYXJzKSA6IDA7XG4gIHZhciBtb250aHMgPSBkdXJhdGlvbi5tb250aHMgPyB0b0ludGVnZXIoZHVyYXRpb24ubW9udGhzKSA6IDA7XG4gIHZhciB3ZWVrcyA9IGR1cmF0aW9uLndlZWtzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLndlZWtzKSA6IDA7XG4gIHZhciBkYXlzID0gZHVyYXRpb24uZGF5cyA/IHRvSW50ZWdlcihkdXJhdGlvbi5kYXlzKSA6IDA7XG4gIHZhciBob3VycyA9IGR1cmF0aW9uLmhvdXJzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLmhvdXJzKSA6IDA7XG4gIHZhciBtaW51dGVzID0gZHVyYXRpb24ubWludXRlcyA/IHRvSW50ZWdlcihkdXJhdGlvbi5taW51dGVzKSA6IDA7XG4gIHZhciBzZWNvbmRzID0gZHVyYXRpb24uc2Vjb25kcyA/IHRvSW50ZWdlcihkdXJhdGlvbi5zZWNvbmRzKSA6IDA7IC8vIFN1YnRyYWN0IHllYXJzIGFuZCBtb250aHNcblxuICB2YXIgZGF0ZVdpdGhvdXRNb250aHMgPSBzdWJNb250aHMoZGF0ZSwgbW9udGhzICsgeWVhcnMgKiAxMik7IC8vIFN1YnRyYWN0IHdlZWtzIGFuZCBkYXlzXG5cbiAgdmFyIGRhdGVXaXRob3V0RGF5cyA9IHN1YkRheXMoZGF0ZVdpdGhvdXRNb250aHMsIGRheXMgKyB3ZWVrcyAqIDcpOyAvLyBTdWJ0cmFjdCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kc1xuXG4gIHZhciBtaW51dGVzdG9TdWIgPSBtaW51dGVzICsgaG91cnMgKiA2MDtcbiAgdmFyIHNlY29uZHN0b1N1YiA9IHNlY29uZHMgKyBtaW51dGVzdG9TdWIgKiA2MDtcbiAgdmFyIG1zdG9TdWIgPSBzZWNvbmRzdG9TdWIgKiAxMDAwO1xuICB2YXIgZmluYWxEYXRlID0gbmV3IERhdGUoZGF0ZVdpdGhvdXREYXlzLmdldFRpbWUoKSAtIG1zdG9TdWIpO1xuICByZXR1cm4gZmluYWxEYXRlO1xufSIsImltcG9ydCBhZGREYXlzIGZyb20gXCIuLi9hZGREYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgMTAgZGF5cyBmcm9tIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJEYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gRnJpIEF1ZyAyMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZERheXMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1vbnRocyBmcm9tIFwiLi4vYWRkTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtb250aHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtb250aHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA1IG1vbnRocyBmcm9tIDEgRmVicnVhcnkgMjAxNTpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1vbnRocyhuZXcgRGF0ZSgyMDE1LCAxLCAxKSwgNSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTW9udGhzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTW9udGhzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgdG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiLi9zZXRBdHRyc1wiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdExpc3QsIHNldFByb2plY3QgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdExpc3RTaWRlYmFyIH0gZnJvbSBcIi4vdWlcIjtcblxuLy8gY3JlYXRlIGEgZmllbGQgY29udGFpbmVyIHVzZSBpbiBtb2RhbFxuY29uc3QgX2NyZWF0ZUZpZWxkQ29udGFpbmVyID0gKGZvcm0sIHR5cGUsIGxhYmVsVHh0LCBuYW1lLCByZXF1aXJlZCkgPT4ge1xuICAgIC8vIGNoZWNrIGlmIHRoZSBpbnB1dCBmaWVsZCBoYXMgcmVxdWlyZWQgYXR0cmlidXRlXG4gICAgY29uc3QgX2NoZWNrUmVxdWlyZW1lbnQgPSAoZmllbGQpID0+IHtcbiAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdpbnB1dC1jb250YWluZXInKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgc2V0QXR0cmlidXRlcyhsYWJlbCwgeydmb3InOiBuYW1lfSk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHtsYWJlbFR4dH06YDtcblxuICAgIGlmICh0eXBlID09PSBcInRleHRhcmVhXCIpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKGZpZWxkLCB7J2lkJzogbmFtZSwgJ25hbWUnOiBuYW1lLCAncm93cyc6IDV9KTtcbiAgICAgICAgX2NoZWNrUmVxdWlyZW1lbnQoZmllbGQpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsLCBmaWVsZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHNldEF0dHJpYnV0ZXMoZmllbGQsIHsndHlwZSc6IHR5cGUsICdpZCc6IG5hbWUsICduYW1lJzogbmFtZX0pO1xuICAgICAgICBfY2hlY2tSZXF1aXJlbWVudChmaWVsZCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobGFiZWwsIGZpZWxkKTtcbiAgICB9XG5cbiAgICBmb3JtLmFwcGVuZChjb250YWluZXIpO1xufTtcblxuLy8gY3JlYXRlIGEgZHJvcGRvd24gY29udGFpbmVyIHVzZSBpbiBtb2RhbFxuY29uc3QgX2NyZWF0ZVByaW9yaXR5RHJvcERvd24gPSAoZm9ybSwgbGFiZWxUeHQsIG5hbWUsIHJlcXVpcmVkKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2lucHV0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGxhYmVsLCB7J2Zvcic6IG5hbWV9KTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke2xhYmVsVHh0fTpgO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNldEF0dHJpYnV0ZXMoc2VsZWN0LCB7J2lkJzogbmFtZSwgJ25hbWUnOiBuYW1lfSk7XG4gICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGxldCBwcmlvcml0eTtcbiAgICAgICAgbGV0IHByaW9yaXR5VHh0O1xuICAgICAgICBzd2l0Y2goaSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gJ2xvdyc7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlUeHQgPSAnTG93JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5VHh0ID0gJ01lZGl1bSc7XG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhvcHRpb24sIHsnc2VsZWN0ZWQnOiAnJ30pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5VHh0ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHNldEF0dHJpYnV0ZXMob3B0aW9uLCB7J3ZhbHVlJzogcHJpb3JpdHl9KTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHlUeHQ7XG4gICAgICAgIHNlbGVjdC5hcHBlbmQob3B0aW9uKTtcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsLCBzZWxlY3QpO1xuICAgIGZvcm0uYXBwZW5kKGNvbnRhaW5lcik7XG59XG5cbi8vIGVuYWJsZSBidXR0b24gdG8gYmUgY2xpY2thYmxlIGFnYWluXG5jb25zdCBfZW5hYmxlQnV0dG9uID0gKGJ0biwgbW9kYWwpID0+IHtcbiAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgbW9kYWwucmVtb3ZlKCk7XG59O1xuXG4vLyBkaXNwbGF5IGEgXCJhZGQgdG9kbyB0byBwcm9qZWN0XCIgbW9kYWxcbmNvbnN0IGRpc3BsYXlBZGRUb2RvTW9kYWwgPSAocHJvamVjdCwgYnRuKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ21vZGFsLWJhY2tncm91bmQnKTtcbiAgICBcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgndG9kbycsICdtb2RhbC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCB0b3BQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcFBhbmVsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ3RvcC1wYW5lbCcpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2hlYWRlcicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdBZGQgbmV3IHRvZG8nXG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdjbG9zZScsICdidG4nKTtcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9lbmFibGVCdXR0b24oYnRuLCBtb2RhbCkpO1xuXG4gICAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHNldEF0dHJpYnV0ZXMoaW5wdXRGb3JtLCB7J2FjdGlvbic6ICdqYXZhc2NyaXB0OjsnLCAnbWV0aG9kJzogJ3Bvc3QnfSk7XG4gICAgaW5wdXRGb3JtLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2lucHV0LWZvcm0nKTtcblxuICAgIC8vIGlucHV0IGZpZWxkc1xuICAgIF9jcmVhdGVGaWVsZENvbnRhaW5lcihpbnB1dEZvcm0sICd0ZXh0JywgJ1RpdGxlJywgJ3RpdGxlJywgdHJ1ZSk7XG4gICAgX2NyZWF0ZUZpZWxkQ29udGFpbmVyKGlucHV0Rm9ybSwgJ3RleHRhcmVhJywgJ0Rlc2NyaXB0aW9uIChPcHRpb25hbCknLCAnZGVzYycsIGZhbHNlKTtcbiAgICBfY3JlYXRlRmllbGRDb250YWluZXIoaW5wdXRGb3JtLCAnZGF0ZScsICdEdWUgZGF0ZSAoT3B0aW9uYWwpJywgJ2R1ZV9kYXRlJywgZmFsc2UpO1xuICAgIF9jcmVhdGVQcmlvcml0eURyb3BEb3duKGlucHV0Rm9ybSwgJ1ByaW9yaXR5JywgJ3ByaW9yaXR5JywgdHJ1ZSk7XG5cbiAgICBjb25zdCBib3R0b21QYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvdHRvbVBhbmVsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2JvdHRvbS1wYW5lbCcpO1xuXG4gICAgLy8gY3JlYXRlIG5ldyB0b2RvXG4gICAgY29uc3QgY3JlYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2V0QXR0cmlidXRlcyhjcmVhdGVCdG4sIHsndHlwZSc6ICdzdWJtaXQnfSk7XG4gICAgY3JlYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2J0bicsICdjcmVhdGUtdG9kbycpO1xuICAgIGNyZWF0ZUJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUnO1xuICAgIGNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgdmFsaWRhdGlvblxuICAgICAgICBsZXQgdGl0bGVJc1ZhbGlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykuY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgICBsZXQgZHVlRGF0ZUlzVmFsaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlX2RhdGUnKS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIGxldCBwcmlvcml0eUlzVmFsaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIGlmICh0aXRsZUlzVmFsaWQgJiYgZHVlRGF0ZUlzVmFsaWQgJiYgcHJpb3JpdHlJc1ZhbGlkKSB7XG4gICAgICAgICAgICBwcm9qZWN0LmFkZFRvZG8oXG4gICAgICAgICAgICAgICAgbmV3IHRvZG8oXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYycpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlX2RhdGUnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2V0UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIF9lbmFibGVCdXR0b24oYnRuLCBtb2RhbClcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gY2FuY2VsXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzZXRBdHRyaWJ1dGVzKGNhbmNlbEJ0biwgeyd0eXBlJzogJ3Jlc2V0J30pO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdidG4nLCAnY2FuY2VsJyk7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2VuYWJsZUJ1dHRvbihidG4sIG1vZGFsKSk7XG4gICAgYm90dG9tUGFuZWwuYXBwZW5kKGNhbmNlbEJ0biwgY3JlYXRlQnRuKTtcblxuICAgIGlucHV0Rm9ybS5hcHBlbmQoYm90dG9tUGFuZWwpO1xuICAgIHRvcFBhbmVsLmFwcGVuZChoZWFkZXIsIGNsb3NlQnRuKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kKHRvcFBhbmVsLCBpbnB1dEZvcm0pO1xuICAgIG1vZGFsLmFwcGVuZChtb2RhbENvbnRlbnQpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobW9kYWwpO1xufTtcblxuLy8gZGlzcGxheSBhIFwiYWRkIHByb2plY3QgdG8gYSBsaXN0IG9mIHByb2plY3RzXCIgbW9kYWxcbmNvbnN0IGRpc3BsYXlBZGRQcm9qZWN0TW9kYWwgPSAoYnRuKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ21vZGFsLWJhY2tncm91bmQnKTtcblxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ21vZGFsLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRvcFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9wUGFuZWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAndG9wLXBhbmVsJyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgcHJvamVjdCdcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2Nsb3NlJywgJ2J0bicpO1xuICAgIGNsb3NlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2VuYWJsZUJ1dHRvbihidG4sIG1vZGFsKSk7XG5cbiAgICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgc2V0QXR0cmlidXRlcyhpbnB1dEZvcm0sIHsnYWN0aW9uJzogJ2phdmFzY3JpcHQ6OycsICdtZXRob2QnOiAncG9zdCd9KTtcbiAgICBpbnB1dEZvcm0uY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnaW5wdXQtZm9ybScpO1xuXG4gICAgX2NyZWF0ZUZpZWxkQ29udGFpbmVyKGlucHV0Rm9ybSwgJ3RleHQnLCAnUHJvamVjdCBOYW1lJywgJ3Byb2plY3RfbmFtZScsIHRydWUpO1xuXG4gICAgY29uc3QgYm90dG9tUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3R0b21QYW5lbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdib3R0b20tcGFuZWwnKTtcblxuICAgIC8vIGNyZWF0ZSBuZXcgcHJvamVjdFxuICAgIGNvbnN0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNldEF0dHJpYnV0ZXMoY3JlYXRlQnRuLCB7J3R5cGUnOiAnc3VibWl0J30pO1xuICAgIGNyZWF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdidG4nLCAnY3JlYXRlLXByb2plY3QnKTtcbiAgICBjcmVhdGVCdG4udGV4dENvbnRlbnQgPSAnQ3JlYXRlJztcbiAgICBjcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIGNoZWNrIHZhbGlkYXRpb25cbiAgICAgICAgbGV0IHByb2plY3ROYW1lSXNWYWxpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0X25hbWUnKS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZUlzVmFsaWQpIHtcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfbmFtZScpLnZhbHVlKTtcblxuICAgICAgICAgICAgLy8gY2hhbmdlIGhlcmVcbiAgICAgICAgICAgIHNldFByb2plY3QobmV3UHJvamVjdCk7XG5cbiAgICAgICAgICAgIC8vIGRpc3BsYXkgbmV3IHByb2plY3RcbiAgICAgICAgICAgIF9lbmFibGVCdXR0b24oYnRuLCBtb2RhbCk7XG5cbiAgICAgICAgICAgIC8vIHJlLWRpc3BsYXkgYSBsaXN0IG9mIHByb2plY3QgaW4gc2lkZWJhclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXIucHJvamVjdC1pdGVtLWxpc3QnKTtcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0TGlzdFNpZGViYXIocHJvamVjdEl0ZW1MaXN0KTtcblxuICAgICAgICAgICAgLy8gRGlzcGxheSBwcm9qZWN0IGFmdGVyIGNyZWF0aW5nIHByb2plY3QgaW1tZWRpYXRlbHksIGlmIG9ubHkgaXQncyB0aGUgZmlyc3QgcHJvamVjdCBpbiB0aGUgbGlzdFxuICAgICAgICAgICAgaWYgKHByb2plY3RMaXN0Lmxlbmd0aCA9PSAxKSBcbiAgICAgICAgICAgICAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0TGlzdFswXSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGNhbmNlbFxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNldEF0dHJpYnV0ZXMoY2FuY2VsQnRuLCB7J3R5cGUnOiAncmVzZXQnfSk7XG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2J0bicsICdjYW5jZWwnKTtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfZW5hYmxlQnV0dG9uKGJ0biwgbW9kYWwpKTtcbiAgICBib3R0b21QYW5lbC5hcHBlbmQoY2FuY2VsQnRuLCBjcmVhdGVCdG4pO1xuXG4gICAgaW5wdXRGb3JtLmFwcGVuZChib3R0b21QYW5lbCk7XG4gICAgdG9wUGFuZWwuYXBwZW5kKGhlYWRlciwgY2xvc2VCdG4pO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmQodG9wUGFuZWwsIGlucHV0Rm9ybSk7XG4gICAgbW9kYWwuYXBwZW5kKG1vZGFsQ29udGVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobW9kYWwpO1xufTtcblxuZXhwb3J0IHtcbiAgICBkaXNwbGF5QWRkUHJvamVjdE1vZGFsLCBcbiAgICBkaXNwbGF5QWRkVG9kb01vZGFsLFxufTsiLCJpbXBvcnQgeyBkaXNwbGF5QWRkVG9kb01vZGFsIH0gZnJvbSBcIi4vZGlzcGxheU1vZGFsXCI7XG5pbXBvcnQgeyBzZXRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0TGlzdFNpZGViYXIgfSBmcm9tIFwiLi91aVwiO1xuaW1wb3J0IHsgc3ViLCBwYXJzZUlTTywgaXNCZWZvcmUsIGlzRXF1YWwsIHN0YXJ0T2ZEYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIuL3NldEF0dHJzXCI7XG5cbi8vIGRpc3BsYXkgYSBwcm9qZWN0IGRpc3BsYXlpbmcgYSBsaXN0IG9mIHRvZG9cbmNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBcbiAgICAvLyByZS1kaXNwbGF5IGEgbGlzdCBvZiBwcm9qZWN0IGluIHNpZGViYXJcbiAgICBjb25zdCBfcmVmcmVzaFNpZGViYXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJdGVtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLnByb2plY3QtaXRlbS1saXN0Jyk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0TGlzdFNpZGViYXIocHJvamVjdEl0ZW1MaXN0KTtcbiAgICB9XG5cbiAgICAvLyBjaGFuZ2UgcHJvamVjdCdzIG5hbWVcbiAgICBjb25zdCBfY2hhbmdlUHJvamVjdE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHByb2plY3ROYW1lLnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgcHJvamVjdC5lZGl0TmFtZShwcm9qZWN0TmFtZS52YWx1ZSk7XG5cbiAgICAgICAgLy8gY2hhbmdlIHByb2plY3QgbmFtZSBpbiBzdG9yYWdlXG4gICAgICAgIHNldFByb2plY3QocHJvamVjdCk7XG5cbiAgICAgICAgLy8gcmUtZGlzcGxheSBhIGxpc3Qgb2YgcHJvamVjdCBpbiBzaWRlYmFyXG4gICAgICAgIF9yZWZyZXNoU2lkZWJhcigpO1xuICAgIH07XG5cbiAgICAvLyBkZWxldGUgcHJvamVjdCBmcm9tIGEgbGlzdFxuICAgIGNvbnN0IF9kZWxldGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICAgICAgLy8gZGVsZXRlIGZyb20gc3RvcmFnZVxuICAgICAgICByZW1vdmVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBcbiAgICAgICAgLy8gcmUtZGlzcGxheSBhIGxpc3Qgb2YgcHJvamVjdCBpbiBzaWRlYmFyXG4gICAgICAgIF9yZWZyZXNoU2lkZWJhcigpO1xuXG4gICAgICAgIC8vIGRpc3BsYXkgZmlyc3QgcHJvamVjdCBpbiB0aGUgbGlzdCBhZnRlciBkZWxldGluZywgaWYgb25seSBpdCBleGlzdHNcbiAgICAgICAgaWYgKHByb2plY3RMaXN0WzBdKVxuICAgICAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdExpc3RbMF0pO1xuICAgIH07XG5cbiAgICAvLyBjcmVhdGUgYSBsaXN0IG9mIHRvZG8gaW4gcHJvamVjdFxuICAgIGNvbnN0IF9jcmVhdGVMaXN0b2ZUb2RvID0gKCkgPT4ge1xuICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnbGlzdCcpO1xuICAgICAgICBsZXQgbGVuZ3RoID0gcHJvamVjdC5saXN0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ2NvbnRhaW5lcicpO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh0b2RvSXRlbSwgeydhY3Rpb24nOiAnamF2YXNjcmlwdDo7JywgJ21ldGhvZCc6ICdwb3N0J30pO1xuXG4gICAgICAgICAgICAvLyBzdG9yZSBhbGwgdG9kb1xuICAgICAgICAgICAgY29uc3QgdG9kb1BhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b2RvUGFuZWwuY2xhc3NMaXN0LmFkZCgndG9kbycsICd0b2RvLXBhbmVsJyk7XG5cbiAgICAgICAgICAgIC8vIHN0b3JlIGFsbCB0b2RvIGV4Y2VwdCBkZXNjXG4gICAgICAgICAgICBjb25zdCBub0Rlc2NQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbm9EZXNjUGFuZWwuY2xhc3NMaXN0LmFkZCgndG9kbycsICd0b2RvLW5vRGVzYy1wYW5lbCcpO1xuXG4gICAgICAgICAgICAvLyBzdG9yZSBkZXNjXG4gICAgICAgICAgICBjb25zdCBleHBhbmRQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZXhwYW5kUGFuZWwuY2xhc3NMaXN0LmFkZCgndG9kbycsICdleHBhbmQtcGFuZWwnLCAnaGlkZGVuJyk7XG5cbiAgICAgICAgICAgIC8vIHRvZG9cbiAgICAgICAgICAgIGNvbnN0IGlzRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpc0RvbmUuY2xhc3NMaXN0LmFkZCgndG9kbycsICdpc0RvbmUnKTtcbiAgICAgICAgICAgIGlzRG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBfdG9nZ2xlVG9kb0lzRG9uZShpc0RvbmUsIHByb2plY3QubGlzdFtpXSk7XG4gICAgICAgICAgICAgICAgc2V0UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhpc0RvbmUsIHsndHlwZSc6ICdjaGVja2JveCcsICduYW1lJzogJ2lzX2RvbmUnLCAndmFsdWUnOiBwcm9qZWN0Lmxpc3RbaV0uaXNEb25lfSk7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5saXN0W2ldLmlzRG9uZSkge1xuICAgICAgICAgICAgICAgIGlzRG9uZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ3RpdGxlJyk7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHRpdGxlLCB7J3R5cGUnOiAndGV4dCcsICduYW1lJzogJ3RpdGxlJywgJ3ZhbHVlJzogcHJvamVjdC5saXN0W2ldLnRpdGxlLCAnZGlzYWJsZWQnOiAnJ30pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnZGVzYycpO1xuICAgICAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QubGlzdFtpXS5kZXNjO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhkZXNjLCB7J25hbWUnOiAnZGVzYycsICdkaXNhYmxlZCc6ICcnfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ2RhdGUnKTtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoZHVlRGF0ZSwgeyd0eXBlJzogJ2RhdGUnLCAnbmFtZSc6ICdkdWVfZGF0ZScsICd2YWx1ZSc6IHByb2plY3QubGlzdFtpXS5kdWVEYXRlLCAnZGlzYWJsZWQnOiAnJ30pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjaGVjayBkZWFkbGluZSBzdGF0dXNcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lmxpc3RbaV0uZHVlRGF0ZSAhPSAnJykge1xuICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSBfY2hlY2tEZWFkbGluZShkdWVEYXRlKTtcbiAgICAgICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoc3RhdHVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAncHJpb3JpdHknLCBwcm9qZWN0Lmxpc3RbaV0ucHJpb3JpdHkpO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhwcmlvcml0eSwgeyduYW1lJzogJ3ByaW9yaXR5JywgJ2Rpc2FibGVkJzogJyd9KTtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBwcmlvcml0eSBvcHRpb25zXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHlMdmw7XG4gICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5VHh0O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgX3NlbGVjdENvcnJlY3RQcmlvcml0eSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3QubGlzdFtpXS5wcmlvcml0eSA9PT0gcHJpb3JpdHlMdmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMob3B0aW9uLCB7J3NlbGVjdGVkJzogJyd9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2goaikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUx2bCA9ICdsb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlUeHQgPSAnTG93JztcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RDb3JyZWN0UHJpb3JpdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUx2bCA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlUeHQgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RDb3JyZWN0UHJpb3JpdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUx2bCA9ICdoaWdoJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VHh0ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdENvcnJlY3RQcmlvcml0eSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMob3B0aW9uLCB7J3ZhbHVlJzogcHJpb3JpdHlMdmx9KTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eVR4dDtcbiAgICAgICAgICAgICAgICBwcmlvcml0eS5hcHBlbmQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9EZXNjUGFuZWwuYXBwZW5kKGlzRG9uZSwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIGV4cGFuZFBhbmVsLmFwcGVuZChkZXNjKTtcblxuICAgICAgICAgICAgLy8gc3RvcmUgYnV0dG9uc1xuICAgICAgICAgICAgY29uc3QgYnRuUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ0blBhbmVsLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnYnRuLXBhbmVsJyk7XG5cbiAgICAgICAgICAgIC8vIGJ1dHRvbnNcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZXhwYW5kQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnZXhwYW5kLXRvZG8nLCAnYnRuJyk7XG4gICAgICAgICAgICBleHBhbmRCdG4udGV4dENvbnRlbnQgPSAnRXhwYW5kJztcbiAgICAgICAgICAgIGV4cGFuZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGV4cGFuZFBhbmVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpKTtcblxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ2VkaXQtdG9kbycsICdidG4nLCAnbm90LWVkaXRhYmxlJyk7XG4gICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgICAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBfZWRpdFRvZG8ocHJvamVjdC5saXN0W2ldLCB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGV4cGFuZFBhbmVsLCBlZGl0QnRuKTtcbiAgICAgICAgICAgICAgICBzZXRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnZGVsZXRlLXRvZG8nLCAnYnRuJyk7XG4gICAgICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBfZGVsZXRlVG9kbyhwcm9qZWN0Lmxpc3RbaV0pO1xuICAgICAgICAgICAgICAgIHNldFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIHRvZG9QYW5lbC5hcHBlbmQobm9EZXNjUGFuZWwsIGV4cGFuZFBhbmVsKTtcbiAgICAgICAgICAgIGJ0blBhbmVsLmFwcGVuZChleHBhbmRCdG4sIGVkaXRCdG4sIGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICB0b2RvSXRlbS5hcHBlbmQodG9kb1BhbmVsLCBidG5QYW5lbCk7XG4gICAgICAgICAgICBsaXN0LmFwcGVuZCh0b2RvSXRlbSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKGxpc3QpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHJlZnJlc2ggYSBsaXN0IG9mIHRvZG8gaW4gYSBwcm9qZWN0XG4gICAgY29uc3QgX3JlZnJlc2hMaXN0b2ZUb2RvID0gKCkgPT4ge1xuICAgICAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBfY3JlYXRlTGlzdG9mVG9kbygpO1xuICAgIH07XG5cbiAgICAvLyBkZWxldGUgYSB0b2RvIGZyb20gdGhlIHByb2plY3RcbiAgICBjb25zdCBfZGVsZXRlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIHByb2plY3QuZGVsZXRlVG9kbyh0b2RvKTtcbiAgICAgICAgX3JlZnJlc2hMaXN0b2ZUb2RvKCk7XG4gICAgfTtcblxuICAgIC8vIGFkZCB0b2RvIHRvIHRoZSBwcm9qZWN0XG4gICAgY29uc3QgX2FkZFRvZG9Ub1Byb2plY3QgPSAoYnRuKSA9PiB7XG4gICAgICAgIGRpc3BsYXlBZGRUb2RvTW9kYWwocHJvamVjdCwgYnRuKTtcbiAgICAgICAgY29uc3QgY3JlYXRlVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4uY3JlYXRlLXRvZG8nKTtcbiAgICAgICAgY3JlYXRlVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9yZWZyZXNoTGlzdG9mVG9kbygpKTtcbiAgICB9O1xuXG4gICAgLy8gY2hlY2sgZGVhZGxpbmUgc3RhdHVzIGFuZCByZXR1cm4gc3RyaW5nXG4gICAgY29uc3QgX2NoZWNrRGVhZGxpbmUgPSAoZHVlRGF0ZSkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VkRHVlRGF0ZSA9IHN0YXJ0T2ZEYXkocGFyc2VJU08oZHVlRGF0ZS52YWx1ZSkpO1xuICAgICAgICBsZXQgdG9kYXkgPSBzdGFydE9mRGF5KG5ldyBEYXRlKCkpO1xuICAgICAgICBsZXQgZHVlRGF0ZVN1Yk9uZURheSA9IHN1YihwYXJzZWREdWVEYXRlLCB7ZGF5czogMX0pXG5cbiAgICAgICAgaWYgKGlzRXF1YWwocGFyc2VkRHVlRGF0ZSwgdG9kYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2RlYWRsaW5lJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0VxdWFsKGR1ZURhdGVTdWJPbmVEYXksIHRvZGF5KSkge1xuICAgICAgICAgICAgcmV0dXJuICdhbGVydCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNCZWZvcmUocGFyc2VkRHVlRGF0ZSwgdG9kYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2RlYWRsaW5lLXBhc3NlZCc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZWRpdCB0b2RvIGluIHRoZSBwcm9qZWN0XG4gICAgY29uc3QgX2VkaXRUb2RvID0gKHRvZG8sIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgZXhwYW5kUGFuZWwsIGVkaXRCdG4pID0+IHtcbiAgICAgICAgZXhwYW5kUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHRpdGxlLnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgZGVzYy50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGR1ZURhdGUudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICBwcmlvcml0eS50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIC8vIHJlbW92ZSBvbGQgY2xhc3NcbiAgICAgICAgbGV0IHN0YXR1cyA9IF9jaGVja0RlYWRsaW5lKGR1ZURhdGUpO1xuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5yZW1vdmUoc3RhdHVzKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSh0b2RvLnByaW9yaXR5KTtcbiAgICAgICAgXG4gICAgICAgIGlmICghZWRpdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ25vdC1lZGl0YWJsZScpKSB7XG4gICAgICAgICAgICB0b2RvLmVkaXRUb2RvKHRpdGxlLnZhbHVlLCBkZXNjLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSk7XG4gICAgICAgICAgICAvLyBhZGQgbmV3IGNsYXNzIGFmdGVyIGVkaXRpbmdcbiAgICAgICAgICAgIHN0YXR1cyA9IF9jaGVja0RlYWRsaW5lKGR1ZURhdGUpO1xuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCh0b2RvLnByaW9yaXR5KTtcbiAgICAgICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChzdGF0dXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ25vdC1lZGl0YWJsZScpO1xuICAgIH07XG5cbiAgICAvLyB0b2dnbGUgaXNEb25lIGluIHRvZG9cbiAgICBjb25zdCBfdG9nZ2xlVG9kb0lzRG9uZSA9IChpbnB1dCwgdG9kbykgPT4ge1xuICAgICAgICB0b2RvLnRvZ2dsZUlzRG9uZSgpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdG9kby5pc0RvbmUpO1xuICAgIH07XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICdjb250YWluZXInKTtcblxuICAgIGNvbnN0IHRvcFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9wUGFuZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICd0b3AtcGFuZWwnKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ25hbWUnKVxuICAgIHNldEF0dHJpYnV0ZXMocHJvamVjdE5hbWUsIHsndHlwZSc6ICd0ZXh0JywgJ3ZhbHVlJzogcHJvamVjdC5uYW1lLCAnbmFtZSc6ICdwcm9qZWN0X25hbWUnLCAnZGlzYWJsZWQnOiAnJ30pO1xuICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtfY2hhbmdlUHJvamVjdE5hbWUoKTt9fSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKHRvcFBhbmVsKTtcblxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfY3JlYXRlTGlzdG9mVG9kbygpO1xuXG4gICAgLy8gcGFuZWwgZm9yIHN0b3JpbmcgYnV0dG9uc1xuICAgIGNvbnN0IGJ0blBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuUGFuZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICdidG4tcGFuZWwnKTtcblxuICAgIC8vIGFkZCB0b2RvIHRvIHByb2plY3RcbiAgICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kbycsICdidG4nLCAncHJvamVjdCcpO1xuICAgIGNvbnN0IGFkZFRvZG9JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGFkZFRvZG9JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWxpc3QtY2hlY2snKTtcbiAgICBjb25zdCBhZGRUb2RvVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkVG9kb1R4dC50ZXh0Q29udGVudCA9ICdBZGQgdGFzayc7XG4gICAgYWRkVG9kb0J0bi5hcHBlbmQoYWRkVG9kb0ljb24sIGFkZFRvZG9UeHQpO1xuICAgIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICghYWRkVG9kb0J0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBhZGRUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgX2FkZFRvZG9Ub1Byb2plY3QoYWRkVG9kb0J0bilcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gY2hhbmdlIHByb2plY3QncyBuYW1lXG4gICAgY29uc3QgY2hhbmdlUHJvamVjdE5hbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjaGFuZ2VQcm9qZWN0TmFtZUJ0bi5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtbmFtZS1wcm9qZWN0JywgJ2J0bicsICdwcm9qZWN0JywgJ2ZhLXNvbGlkJywgJ2ZhLXBlbi10by1zcXVhcmUnKTtcbiAgICBjaGFuZ2VQcm9qZWN0TmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9jaGFuZ2VQcm9qZWN0TmFtZSgpKTtcblxuICAgIC8vIGRlbGV0ZSBwcm9qZWN0IGZyb20gdGhlIGxpc3RcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdCcsICdidG4nLCAncHJvamVjdCcsICdmYS1zb2xpZCcsICdmYS10cmFzaCcpO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfZGVsZXRlUHJvamVjdCgpKTtcblxuICAgIGJ0blBhbmVsLmFwcGVuZChhZGRUb2RvQnRuLCBjaGFuZ2VQcm9qZWN0TmFtZUJ0biwgZGVsZXRlUHJvamVjdEJ0bik7XG4gICAgdG9wUGFuZWwuYXBwZW5kKHByb2plY3ROYW1lLCBidG5QYW5lbCk7XG5cbiAgICBjb25zdCBwcm9qZWN0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmFyZWEnKTtcbiAgICBwcm9qZWN0QXJlYS5hcHBlbmQoY29udGFpbmVyKTtcbn07XG5cbmNvbnN0IHVuRGlzcGxheVByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmNvbnRhaW5lcicpO1xuICAgIGlmIChwcm9qZWN0Q29udGFpbmVyKVxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZSgpO1xufTtcblxuZXhwb3J0IHtcbiAgICBkaXNwbGF5UHJvamVjdCxcbiAgICB1bkRpc3BsYXlQcm9qZWN0LFxufTtcbiIsImNsYXNzIHByb2plY3R7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy50aW1lQ3JlYXRlZCA9IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICB0aGlzLmxpc3QucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICBkZWxldGVUb2RvKHRvZG8pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5saXN0LmluZGV4T2YodG9kbyk7XG4gICAgICAgIHRoaXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGVkaXROYW1lKG5ld05hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7IiwiZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRycykge1xuICAgIGZvciAobGV0IGtleSBpbiBhdHRycykge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0QXR0cmlidXRlczsiLCJpbXBvcnQgdG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5jb25zdCBwcm9qZWN0SWQgPSBbXTtcblxuLy8gc3RvcmUgcHJvamVjdCBpZCBpbnRvIHRoZSBsb2NhbFN0b3JhZ2VcbmNvbnN0IF9zdG9yZUlkID0gKGlkKSA9PiB7XG4gICAgLy8gY2hlY2sgZm9yIGR1cGxpY2F0ZVxuICAgIGlmIChwcm9qZWN0SWQuaW5kZXhPZihpZCkgPT0gLTEpIHtcbiAgICAgICAgcHJvamVjdElkLnB1c2goaWQpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdElkJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdElkKSk7XG4gICAgfVxufTtcblxuLy8gcmVtb3ZlIHByb2plY3QgaWQgZnJvbSB0aGUgbG9jYWxTdG9yYWdlXG5jb25zdCBfcmVtb3ZlSWQgPSAoaWQpID0+IHtcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0SWQuaW5kZXhPZihpZCk7XG4gICAgcHJvamVjdElkLnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RJZCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RJZCkpO1xufTtcblxuLy8gZ2V0IGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2VcbmNvbnN0IF9nZXRTdG9yYWdlID0gKCkgPT4ge1xuICAgIHByb2plY3RMaXN0Lmxlbmd0aCA9IDA7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggIT0gMCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0SWQnKSk7XG4gICAgICAgIGxldCBsZW5ndGggPSBwcm9qZWN0SWQubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGdpdmluZyBhIHByb2plY3QgZnJvbSBsb2NhbCBzdG9yYWdlIGEgY2xhc3NcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RGcm9tU3RvcmFnZSA9IG5ldyBwcm9qZWN0KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocHJvamVjdEZyb21TdG9yYWdlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0SWRbaV0pKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RnJvbVN0b3JhZ2Vba2V5XSA9IHByb2plY3REYXRhW2tleV07XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvLyBnaXZpbmcgYSB0b2RvIGZyb20gbG9jYWwgc3RvcmFnZSBhIGNsYXNzXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHByb2plY3RGcm9tU3RvcmFnZS5saXN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0Zyb21TdG9yYWdlID0gbmV3IHRvZG8oKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXModG9kb0Zyb21TdG9yYWdlKSkge1xuICAgICAgICAgICAgICAgICAgICB0b2RvRnJvbVN0b3JhZ2Vba2V5XSA9IGl0ZW1ba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcHJvamVjdEZyb21TdG9yYWdlLmxpc3QuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RnJvbVN0b3JhZ2UubGlzdFtpbmRleF0gPSB0b2RvRnJvbVN0b3JhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3RGcm9tU3RvcmFnZSk7XG4gICAgXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBhZGQvZWRpdCBwcm9qZWN0IGluIHRoZSBsb2NhbFN0b3JhZ2VcbmNvbnN0IHNldFByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld1Byb2plY3QudGltZUNyZWF0ZWQsIEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3QpKTtcbiAgICBfc3RvcmVJZChuZXdQcm9qZWN0LnRpbWVDcmVhdGVkKTtcbiAgICBfZ2V0U3RvcmFnZSgpO1xufTtcblxuLy8gZGVsZXRlIHByb2plY3QgZnJvbSB0aGUgbG9jYWxTdG9yYWdlXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKG9sZFByb2plY3QpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShvbGRQcm9qZWN0LnRpbWVDcmVhdGVkKTtcbiAgICBfcmVtb3ZlSWQob2xkUHJvamVjdC50aW1lQ3JlYXRlZCk7XG4gICAgX2dldFN0b3JhZ2UoKTtcbn07XG5cbi8vIGluaXRpYWxpemVcbmlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID09IDApIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdElkJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdElkKSk7XG59XG5lbHNlIHtcbiAgICBjb25zdCBpZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0SWQnKSk7XG4gICAgZm9yIChsZXQgaWQgb2YgaWREYXRhKSB7XG4gICAgICAgIHByb2plY3RJZC5wdXNoKGlkKTtcbiAgICB9XG59XG4vLyBhbHdheXMgY3JlYXRlIGRlZmF1bHQgcHJvamVjdCBpZiBubyBwcm9qZWN0IGlzIHByZXNlbnQgaW4gdGhlIGxpc3RcbmlmIChwcm9qZWN0SWQubGVuZ3RoID09IDApIHtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBwcm9qZWN0KCdEZWZhdWx0Jyk7XG4gICAgc2V0UHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG59XG5cbl9nZXRTdG9yYWdlKCk7XG5cbmV4cG9ydCB7XG4gICAgc2V0UHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIHByb2plY3RMaXN0LFxufTtcblxuIiwiY2xhc3MgdG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmlzRG9uZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRvZ2dsZUlzRG9uZSgpIHtcbiAgICAgICAgdGhpcy5pc0RvbmUgPSAhdGhpcy5pc0RvbmU7XG4gICAgfVxuXG4gICAgZWRpdFRvZG8obmV3VGl0bGUsIG5ld0Rlc2MsIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgdGhpcy5kZXNjID0gbmV3RGVzYztcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9kbzsiLCJpbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0LCB1bkRpc3BsYXlQcm9qZWN0IH0gZnJvbSBcIi4vZGlzcGxheVByb2plY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlBZGRQcm9qZWN0TW9kYWwgfSBmcm9tICcuL2Rpc3BsYXlNb2RhbCc7XG5cbi8vIGNyZWF0ZSBhIGxpc3Qgb2YgcHJvamVjdHMgXG5jb25zdCBfY3JlYXRlUHJvamVjdEFyZWEgPSAoY29udGVudCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdExpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICdhcmVhJyk7XG4gICAgY29udGVudC5hcHBlbmQocHJvamVjdExpc3RDb250YWluZXIpO1xufTtcblxuLy8gY3JlYXRlIGEgYnV0dG9uIGZvciBhZGRpbmcgbmV3IHByb2plY3QgdG8gdGhlIGxpc3RcbmNvbnN0IF9jcmVhdGVBZGRQcm9qZWN0QnRuID0gKHNpZGViYXIpID0+IHtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QnLCAnYnRuJywgJ2ZhLXNvbGlkJywgJ2ZhLXBsdXMnKTtcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICghYWRkQnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGFkZEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRpc3BsYXlBZGRQcm9qZWN0TW9kYWwoYWRkQnRuKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHNpZGViYXIuYXBwZW5kKGFkZEJ0bik7XG59O1xuXG4vLyByZW1vdmUgYWxsIHRoZSBjaGlsZHJlbiBpbiBhIGxpc3Qgb2YgcHJvamVjdCBpbiBzaWRlYmFyXG5jb25zdCBfcmVmcmVzaFByb2plY3RMaXN0U2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci5wcm9qZWN0LWl0ZW0tbGlzdCcpO1xuICAgIHByb2plY3RJdGVtTGlzdC5pbm5lckhUTUwgPSAnJztcbn07XG5cbi8vIGRpc3BsYXkgYSBsaXN0IG9mIHByb2plY3QgaW4gc2lkZWJhclxuY29uc3QgZGlzcGxheVByb2plY3RMaXN0U2lkZWJhciA9IChjb250YWluZXIpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci5wcm9qZWN0LWl0ZW0nKTtcbiAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgLy8gZmluZCBpbmRleCBvZiBjdXJyZW50IHNlbGVjdGVkIHByb2plY3RcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY3VycmVudFByb2plY3RzW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSlcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPSBpO1xuICAgIH1cbiAgICBfcmVmcmVzaFByb2plY3RMaXN0U2lkZWJhcigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInLCAncHJvamVjdC1pdGVtJyk7XG4gICAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdFtpXS5uYW1lOyAgICAgICAgXG5cbiAgICAgICAgLy8gaWYgY2hhbmdpbmcgcHJvamVjdCdzIG5hbWUgb3IgYWRkZWQgbmV3IHByb2plY3RcbiAgICAgICAgaWYgKHByb2plY3RMaXN0Lmxlbmd0aCA+PSBjdXJyZW50UHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBoaWdobGlnaHQgKHByZXZpb3VzbHkpIHNlbGVjdGVkIHByb2plY3RcbiAgICAgICAgICAgIGlmIChpID09IHNlbGVjdGVkSW5kZXgpIFxuICAgICAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBkZWxldGluZyBjdXJyZW50IHByb2plY3RcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBoaWdobGlnaHQgdGhlIGZpcnN0IHByb2plY3RcbiAgICAgICAgICAgIGlmIChpID09IDApXG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBzaG93IHNlbGVjdGVkIHByb2plY3RcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHVuRGlzcGxheVByb2plY3QoKTtcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RMaXN0W2ldKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLnByb2plY3QtaXRlbS5zZWxlY3RlZCcpO1xuICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHByb2plY3QpO1xuICAgIH1cbn07XG5cbi8vIGNyZWF0ZSBoZWFkZXIgb2Ygd2Vic2l0ZVxuY29uc3QgaGVhZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJywgJ2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicsICd0ZXh0Jyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9ICdNeSBUb2RvIExpc3QnO1xuICAgIGNvbnRhaW5lci5hcHBlbmQodGV4dCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGFpbmVyKTtcbn0pKCk7XG5cbi8vIGNyZWF0ZSBjb250ZW50IG9mIHdlYnNpdGVcbmNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50JywgJ2NvbnRhaW5lcicpO1xuICAgIF9jcmVhdGVQcm9qZWN0QXJlYShjb250YWluZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XG5cbiAgICAvLyBkaXNwbGF5IGZpcnN0IChkZWZhdWx0KSBwcm9qZWN0IGlmIGl0IGV4aXN0c1xuICAgIGlmIChwcm9qZWN0TGlzdFswXSlcbiAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdExpc3RbMF0pO1xufSkoKTtcblxuLy8gY3JlYXRlIHNpZGViYXIgb2Ygd2Vic2l0ZVxuY29uc3Qgc2lkZWJhciA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LmNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJywgJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRlbnQucHJlcGVuZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgdG9wUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BQYW5lbC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJywgJ3RvcC1wYW5lbCcpO1xuXG4gICAgY29uc3QgdG9wUGFuZWxUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BQYW5lbFR4dC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJywgJ3RleHQnKTtcbiAgICB0b3BQYW5lbFR4dC50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgdG9wUGFuZWwuYXBwZW5kKHRvcFBhbmVsVHh0KTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0SXRlbUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0SXRlbUxpc3QuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicsICdwcm9qZWN0LWl0ZW0tbGlzdCcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQodG9wUGFuZWwsIHByb2plY3RJdGVtTGlzdCk7XG5cbiAgICBfY3JlYXRlQWRkUHJvamVjdEJ0bih0b3BQYW5lbCk7XG4gICAgZGlzcGxheVByb2plY3RMaXN0U2lkZWJhcihwcm9qZWN0SXRlbUxpc3QpO1xufSkoKTtcblxuZXhwb3J0IHtcbiAgICBkaXNwbGF5UHJvamVjdExpc3RTaWRlYmFyLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3VpXCI7XG5pbXBvcnQgXCIuLi9zdHlsZS9zdHlsZS5jc3NcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=