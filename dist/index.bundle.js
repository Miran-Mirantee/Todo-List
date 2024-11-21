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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/NothingYouCouldDo-Regular.ttf */ "./src/font/NothingYouCouldDo-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../font/KaushanScript-Regular.ttf */ "./src/font/KaushanScript-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Caveat-Regular.ttf */ "./src/font/Caveat-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #f0c987;\r\n  height: 100vh;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"NothingYouCouldDo\";\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"KauShanScript\";\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Caveat\";\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.header.container {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  background-color: #3c153b;\r\n  padding: 16px;\r\n  padding-bottom: 28px;\r\n  z-index: 1;\r\n  border-bottom: 12px solid #f5980d;\r\n  box-shadow: 0px 0px 0 0px #f5980d inset, 0px -12px 0 0px #8b1e3f inset;\r\n}\r\n\r\n.header.text {\r\n  font-size: 48px;\r\n  /* font-weight: bold; */\r\n  color: white;\r\n  font-family: \"NothingYouCouldDo\";\r\n}\r\n\r\n.content.container {\r\n  display: flex;\r\n  flex-grow: 1;\r\n}\r\n\r\n.sidebar.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #6ba181;\r\n  padding: 16px;\r\n  min-width: 220px;\r\n  width: 300px;\r\n  box-shadow: 0px 5px 2px 0 #386955 inset;\r\n  font-family: \"KauShanScript\";\r\n}\r\n\r\n.sidebar.top-panel {\r\n  align-self: normal;\r\n  padding-bottom: 16px;\r\n  border-bottom: 2px solid #a6ddd4;\r\n}\r\n\r\n.sidebar.text {\r\n  font-size: 36px;\r\n  font-weight: bold;\r\n  color: #f0c987;\r\n  text-shadow: 2px 2px 2px #386955;\r\n}\r\n\r\n.sidebar.project-item-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 8px 0;\r\n  padding: 4px;\r\n  gap: 8px;\r\n}\r\n\r\n.sidebar.project-item {\r\n  color: #dcfcce;\r\n  /* text-align: center; */\r\n  border-radius: 8px;\r\n  padding: 8px 14px;\r\n  font-size: 24px;\r\n}\r\n\r\n.sidebar.project-item:hover {\r\n  cursor: pointer;\r\n  color: #ffd51a;\r\n  text-shadow: 2px 2px 2px #386955;\r\n  background-color: #89bd9e;\r\n}\r\n\r\n.sidebar.project-item:active {\r\n  background-color: transparent;\r\n  color: #dbb819;\r\n  text-shadow: none;\r\n}\r\n\r\n.sidebar.project-item.selected {\r\n  color: white;\r\n  text-shadow: 2px 2px 2px #8b1f15;\r\n  background-color: #db4c40;\r\n}\r\n\r\n.sidebar.project-item.selected:hover {\r\n  color: #ffd51a;\r\n  background-color: #f55647;\r\n}\r\n\r\n.sidebar.project-item.selected:active {\r\n  color: #dbb819;\r\n  text-shadow: none;\r\n  background-color: #db4c40;\r\n}\r\n\r\n.top-panel {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.bottom-panel {\r\n  display: flex;\r\n  gap: 4px;\r\n  justify-content: end;\r\n}\r\n\r\n.btn-panel {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.top-panel > .btn-panel > .btn {\r\n  box-shadow: 2px 2px 0px 0px #911d13;\r\n}\r\n\r\n.top-panel > .btn-panel > .btn:active {\r\n  transform: translate(2px, 2px);\r\n  box-shadow: none;\r\n}\r\n\r\n.btn {\r\n  border: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #ffd51a;\r\n  padding: 8px;\r\n  border-radius: 6px;\r\n  color: #3c153b;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  text-shadow: 1px 1px 0px #b89600;\r\n  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 40%);\r\n}\r\n\r\n.btn:hover {\r\n  cursor: pointer;\r\n  background-color: #ffe260;\r\n}\r\n\r\n.btn:active {\r\n  background-color: #ffd51a;\r\n  color: #1b051b;\r\n  text-shadow: none;\r\n  transform: translate(2px, 2px);\r\n  box-shadow: none;\r\n}\r\n\r\n.add-project.btn {\r\n  height: 42px;\r\n  width: 42px;\r\n  color: #1cff41;\r\n  text-shadow: 1px 1px 1px #386955;\r\n  box-shadow: none;\r\n  background-color: transparent;\r\n  border-radius: 16px;\r\n  font-size: 32px;\r\n}\r\n\r\n.add-project.btn:hover {\r\n  background-color: #89bd9e;\r\n}\r\n\r\n.add-project.btn:active {\r\n  color: #17c734;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.project.area {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-grow: 1;\r\n  box-shadow: 0 5px 2px 0px #be7303 inset;\r\n}\r\n\r\n.add-todo.btn > i,\r\n.delete-project.btn,\r\n.change-name-project.btn {\r\n  font-size: 24px;\r\n}\r\n\r\n.btn.fa-check {\r\n  font-size: 24px;\r\n  color: green;\r\n}\r\n\r\n.add-todo.btn {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 4px;\r\n}\r\n\r\n.modal.close.btn,\r\n.delete-todo.btn {\r\n  font-size: 28px;\r\n  color: red;\r\n}\r\n\r\n.modal.close.btn,\r\n.edit-todo.btn,\r\n.delete-todo.btn {\r\n  padding: 0;\r\n  height: 35px;\r\n  width: 35px;\r\n}\r\n\r\n.modal.close.btn:hover,\r\n.modal.close.btn:focus {\r\n  cursor: pointer;\r\n}\r\n\r\n.project.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-self: flex-start;\r\n  margin: 48px 0;\r\n  background-color: #89bd9e;\r\n  border-radius: 16px;\r\n  overflow: hidden;\r\n  box-shadow: 5px 5px 3px 0 #be7303;\r\n}\r\n\r\n.project.top-panel {\r\n  gap: 8px;\r\n  padding: 8px 16px;\r\n  background-color: #db4c40;\r\n  border-radius: 16px 16px 0 0;\r\n  box-shadow: 0px 0px 6px 2px #386955;\r\n}\r\n\r\n.project.name {\r\n  font-size: 36px;\r\n  font-family: \"KauShanScript\";\r\n  width: 700px;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.project.name:disabled {\r\n  color: white;\r\n  text-shadow: 2px 2px 2px #8b1f15;\r\n  background-color: transparent;\r\n}\r\n\r\n.todo.list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  padding: 18px 12px;\r\n}\r\n\r\n.todo.container {\r\n  display: flex;\r\n  gap: 16px;\r\n  padding: 8px 12px;\r\n  border-radius: 8px;\r\n  background-color: #f0c987;\r\n}\r\n\r\n.todo.btn-panel {\r\n  align-items: flex-start;\r\n  margin-top: 6px;\r\n}\r\n\r\n.todo-panel {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  gap: 8px;\r\n}\r\n\r\n.expand-panel {\r\n  display: flex;\r\n  height: 100px;\r\n}\r\n\r\n.todo-noDesc-panel {\r\n  display: flex;\r\n  gap: 16px;\r\n  height: 48px;\r\n  align-items: center;\r\n}\r\n\r\nselect,\r\ntextarea,\r\ninput {\r\n  font-family: \"Caveat\";\r\n  font-size: 26px;\r\n}\r\n\r\ninput.todo {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\ninput[type=\"checkbox\"].todo {\r\n  appearance: none;\r\n  cursor: pointer;\r\n  position: relative;\r\n  background-color: white;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 40%);\r\n  border-radius: 6px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\ninput[type=\"checkbox\"].todo:checked:after {\r\n  background-color: #3c153b;\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  content: \"\";\r\n  height: 12px;\r\n  width: 12px;\r\n  border-radius: 4px;\r\n}\r\n\r\ninput[type=\"checkbox\"].todo:hover {\r\n  box-shadow: 0 0 3px 3px rgb(255, 255, 255, 0.3);\r\n  transition: all 0.25s linear;\r\n}\r\n\r\nselect.todo.priority,\r\ninput[type=\"date\"].todo,\r\ninput[type=\"text\"].todo {\r\n  color: black;\r\n  border-radius: 8px;\r\n  padding: 4px 8px;\r\n  background-color: yellow;\r\n}\r\n\r\ninput[type=\"text\"].todo {\r\n  margin-right: auto;\r\n  width: 450px;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n@media (max-width: 1440px) {\r\n  input[type=\"text\"].todo {\r\n    width: 300px;\r\n  }\r\n}\r\n\r\ninput[type=\"text\"].todo:disabled {\r\n  background-color: transparent;\r\n}\r\n\r\ninput[type=\"date\"].todo:disabled {\r\n  background-color: white;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 40%);\r\n  text-shadow: 0 1px 0 white, 0 -1px 0 white, 1px 0 0 white, -1px 0 0 white,\r\n    0 2px 0 white, 0 -2px 0 white, 2px 0 0 white, -2px 0 0 white,\r\n    1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px -1px 0 white;\r\n}\r\n\r\ninput[type=\"date\"].todo.deadline {\r\n  background-color: red;\r\n}\r\n\r\ninput[type=\"date\"].todo.alert {\r\n  background-color: orangered;\r\n}\r\n\r\ninput[type=\"date\"].todo.deadline-passed {\r\n  background-color: grey;\r\n}\r\n\r\nselect.todo.priority {\r\n  padding: 6px 8px;\r\n  border: none;\r\n}\r\n\r\nselect.todo.priority:hover {\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"date\"].todo::-webkit-calendar-picker-indicator:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nselect.todo.priority:disabled {\r\n  cursor: default;\r\n  opacity: 1;\r\n  background-color: white;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 40%);\r\n  appearance: none;\r\n}\r\n\r\ntextarea#desc {\r\n  resize: none;\r\n}\r\n\r\ntextarea.todo {\r\n  resize: none;\r\n  width: 100%;\r\n  border: none;\r\n  border-radius: 8px;\r\n  outline: none;\r\n  background-color: yellow;\r\n  padding: 8px;\r\n  font-size: 20px;\r\n}\r\n\r\ntextarea.todo:disabled {\r\n  background-color: white;\r\n  color: black;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 40%);\r\n}\r\n\r\n.modal-background {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 60%);\r\n}\r\n\r\n.modal-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #6ba181;\r\n  margin: 35vh auto;\r\n  overflow: hidden;\r\n  border-radius: 12px;\r\n  box-shadow: 4px 4px 2px rgba(0, 0, 0, 40%);\r\n  font-family: \"KauShanScript\";\r\n}\r\n\r\n.modal.top-panel {\r\n  background-color: #db4c40;\r\n  border-radius: 12px 12px 0 0;\r\n  text-shadow: 2px 2px 1px rgba(0, 0, 0, 40%);\r\n  box-shadow: 0px 0px 6px 2px #386955;\r\n  padding: 12px;\r\n  gap: 16px;\r\n}\r\n\r\n.modal.header {\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n}\r\n\r\n.modal.input-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 12px;\r\n  gap: 12px;\r\n}\r\n\r\n.modal.input-container,\r\n.modal.input-container-row {\r\n  display: flex;\r\n}\r\n\r\n.modal.input-container {\r\n  flex-direction: column;\r\n  gap: 4px;\r\n}\r\n\r\n.modal.input-container-row {\r\n  gap: 12px;\r\n}\r\n\r\n.modal.input-container > label {\r\n  color: #dcfcce;\r\n  font-size: 20px;\r\n}\r\n\r\n.modal.input-container > input,\r\n.modal.input-container > textarea,\r\n.modal.input-container > select {\r\n  border: none;\r\n  border-radius: 6px;\r\n  padding: 4px 8px;\r\n  background-color: #ffdda2;\r\n}\r\n\r\n.modal.input-container > input[type=\"text\"],\r\n.modal.input-container > textarea {\r\n  width: 400px;\r\n}\r\n\r\n.modal.input-container:has(select),\r\n.modal.input-container > select {\r\n  flex-grow: 1;\r\n}\r\n\r\n.todo.container:has(.low) {\r\n  background-color: #e9ff70;\r\n}\r\n\r\n.todo.container:has(.medium) {\r\n  background-color: #70d6ff;\r\n}\r\n\r\n.todo.container:has(.high) {\r\n  background-color: #ff9770;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #f0c987;\r\n  height: 100vh;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"NothingYouCouldDo\";\r\n  src: url(../font/NothingYouCouldDo-Regular.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: \"KauShanScript\";\r\n  src: url(../font/KaushanScript-Regular.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Caveat\";\r\n  src: url(../font/Caveat-Regular.ttf);\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.header.container {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  background-color: #3c153b;\r\n  padding: 16px;\r\n  padding-bottom: 28px;\r\n  z-index: 1;\r\n  border-bottom: 12px solid #f5980d;\r\n  box-shadow: 0px 0px 0 0px #f5980d inset, 0px -12px 0 0px #8b1e3f inset;\r\n}\r\n\r\n.header.text {\r\n  font-size: 48px;\r\n  /* font-weight: bold; */\r\n  color: white;\r\n  font-family: \"NothingYouCouldDo\";\r\n}\r\n\r\n.content.container {\r\n  display: flex;\r\n  flex-grow: 1;\r\n}\r\n\r\n.sidebar.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #6ba181;\r\n  padding: 16px;\r\n  min-width: 220px;\r\n  width: 300px;\r\n  box-shadow: 0px 5px 2px 0 #386955 inset;\r\n  font-family: \"KauShanScript\";\r\n}\r\n\r\n.sidebar.top-panel {\r\n  align-self: normal;\r\n  padding-bottom: 16px;\r\n  border-bottom: 2px solid #a6ddd4;\r\n}\r\n\r\n.sidebar.text {\r\n  font-size: 36px;\r\n  font-weight: bold;\r\n  color: #f0c987;\r\n  text-shadow: 2px 2px 2px #386955;\r\n}\r\n\r\n.sidebar.project-item-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 8px 0;\r\n  padding: 4px;\r\n  gap: 8px;\r\n}\r\n\r\n.sidebar.project-item {\r\n  color: #dcfcce;\r\n  /* text-align: center; */\r\n  border-radius: 8px;\r\n  padding: 8px 14px;\r\n  font-size: 24px;\r\n}\r\n\r\n.sidebar.project-item:hover {\r\n  cursor: pointer;\r\n  color: #ffd51a;\r\n  text-shadow: 2px 2px 2px #386955;\r\n  background-color: #89bd9e;\r\n}\r\n\r\n.sidebar.project-item:active {\r\n  background-color: transparent;\r\n  color: #dbb819;\r\n  text-shadow: none;\r\n}\r\n\r\n.sidebar.project-item.selected {\r\n  color: white;\r\n  text-shadow: 2px 2px 2px #8b1f15;\r\n  background-color: #db4c40;\r\n}\r\n\r\n.sidebar.project-item.selected:hover {\r\n  color: #ffd51a;\r\n  background-color: #f55647;\r\n}\r\n\r\n.sidebar.project-item.selected:active {\r\n  color: #dbb819;\r\n  text-shadow: none;\r\n  background-color: #db4c40;\r\n}\r\n\r\n.top-panel {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.bottom-panel {\r\n  display: flex;\r\n  gap: 4px;\r\n  justify-content: end;\r\n}\r\n\r\n.btn-panel {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.top-panel > .btn-panel > .btn {\r\n  box-shadow: 2px 2px 0px 0px #911d13;\r\n}\r\n\r\n.top-panel > .btn-panel > .btn:active {\r\n  transform: translate(2px, 2px);\r\n  box-shadow: none;\r\n}\r\n\r\n.btn {\r\n  border: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #ffd51a;\r\n  padding: 8px;\r\n  border-radius: 6px;\r\n  color: #3c153b;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  text-shadow: 1px 1px 0px #b89600;\r\n  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 40%);\r\n}\r\n\r\n.btn:hover {\r\n  cursor: pointer;\r\n  background-color: #ffe260;\r\n}\r\n\r\n.btn:active {\r\n  background-color: #ffd51a;\r\n  color: #1b051b;\r\n  text-shadow: none;\r\n  transform: translate(2px, 2px);\r\n  box-shadow: none;\r\n}\r\n\r\n.add-project.btn {\r\n  height: 42px;\r\n  width: 42px;\r\n  color: #1cff41;\r\n  text-shadow: 1px 1px 1px #386955;\r\n  box-shadow: none;\r\n  background-color: transparent;\r\n  border-radius: 16px;\r\n  font-size: 32px;\r\n}\r\n\r\n.add-project.btn:hover {\r\n  background-color: #89bd9e;\r\n}\r\n\r\n.add-project.btn:active {\r\n  color: #17c734;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.project.area {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-grow: 1;\r\n  box-shadow: 0 5px 2px 0px #be7303 inset;\r\n}\r\n\r\n.add-todo.btn > i,\r\n.delete-project.btn,\r\n.change-name-project.btn {\r\n  font-size: 24px;\r\n}\r\n\r\n.btn.fa-check {\r\n  font-size: 24px;\r\n  color: green;\r\n}\r\n\r\n.add-todo.btn {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 4px;\r\n}\r\n\r\n.modal.close.btn,\r\n.delete-todo.btn {\r\n  font-size: 28px;\r\n  color: red;\r\n}\r\n\r\n.modal.close.btn,\r\n.edit-todo.btn,\r\n.delete-todo.btn {\r\n  padding: 0;\r\n  height: 35px;\r\n  width: 35px;\r\n}\r\n\r\n.modal.close.btn:hover,\r\n.modal.close.btn:focus {\r\n  cursor: pointer;\r\n}\r\n\r\n.project.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-self: flex-start;\r\n  margin: 48px 0;\r\n  background-color: #89bd9e;\r\n  border-radius: 16px;\r\n  overflow: hidden;\r\n  box-shadow: 5px 5px 3px 0 #be7303;\r\n}\r\n\r\n.project.top-panel {\r\n  gap: 8px;\r\n  padding: 8px 16px;\r\n  background-color: #db4c40;\r\n  border-radius: 16px 16px 0 0;\r\n  box-shadow: 0px 0px 6px 2px #386955;\r\n}\r\n\r\n.project.name {\r\n  font-size: 36px;\r\n  font-family: \"KauShanScript\";\r\n  width: 700px;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.project.name:disabled {\r\n  color: white;\r\n  text-shadow: 2px 2px 2px #8b1f15;\r\n  background-color: transparent;\r\n}\r\n\r\n.todo.list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  padding: 18px 12px;\r\n}\r\n\r\n.todo.container {\r\n  display: flex;\r\n  gap: 16px;\r\n  padding: 8px 12px;\r\n  border-radius: 8px;\r\n  background-color: #f0c987;\r\n}\r\n\r\n.todo.btn-panel {\r\n  align-items: flex-start;\r\n  margin-top: 6px;\r\n}\r\n\r\n.todo-panel {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  gap: 8px;\r\n}\r\n\r\n.expand-panel {\r\n  display: flex;\r\n  height: 100px;\r\n}\r\n\r\n.todo-noDesc-panel {\r\n  display: flex;\r\n  gap: 16px;\r\n  height: 48px;\r\n  align-items: center;\r\n}\r\n\r\nselect,\r\ntextarea,\r\ninput {\r\n  font-family: \"Caveat\";\r\n  font-size: 26px;\r\n}\r\n\r\ninput.todo {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\ninput[type=\"checkbox\"].todo {\r\n  appearance: none;\r\n  cursor: pointer;\r\n  position: relative;\r\n  background-color: white;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 40%);\r\n  border-radius: 6px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\ninput[type=\"checkbox\"].todo:checked:after {\r\n  background-color: #3c153b;\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  content: \"\";\r\n  height: 12px;\r\n  width: 12px;\r\n  border-radius: 4px;\r\n}\r\n\r\ninput[type=\"checkbox\"].todo:hover {\r\n  box-shadow: 0 0 3px 3px rgb(255, 255, 255, 0.3);\r\n  transition: all 0.25s linear;\r\n}\r\n\r\nselect.todo.priority,\r\ninput[type=\"date\"].todo,\r\ninput[type=\"text\"].todo {\r\n  color: black;\r\n  border-radius: 8px;\r\n  padding: 4px 8px;\r\n  background-color: yellow;\r\n}\r\n\r\ninput[type=\"text\"].todo {\r\n  margin-right: auto;\r\n  width: 450px;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n@media (max-width: 1440px) {\r\n  input[type=\"text\"].todo {\r\n    width: 300px;\r\n  }\r\n}\r\n\r\ninput[type=\"text\"].todo:disabled {\r\n  background-color: transparent;\r\n}\r\n\r\ninput[type=\"date\"].todo:disabled {\r\n  background-color: white;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 40%);\r\n  text-shadow: 0 1px 0 white, 0 -1px 0 white, 1px 0 0 white, -1px 0 0 white,\r\n    0 2px 0 white, 0 -2px 0 white, 2px 0 0 white, -2px 0 0 white,\r\n    1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px -1px 0 white;\r\n}\r\n\r\ninput[type=\"date\"].todo.deadline {\r\n  background-color: red;\r\n}\r\n\r\ninput[type=\"date\"].todo.alert {\r\n  background-color: orangered;\r\n}\r\n\r\ninput[type=\"date\"].todo.deadline-passed {\r\n  background-color: grey;\r\n}\r\n\r\nselect.todo.priority {\r\n  padding: 6px 8px;\r\n  border: none;\r\n}\r\n\r\nselect.todo.priority:hover {\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"date\"].todo::-webkit-calendar-picker-indicator:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nselect.todo.priority:disabled {\r\n  cursor: default;\r\n  opacity: 1;\r\n  background-color: white;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 40%);\r\n  appearance: none;\r\n}\r\n\r\ntextarea#desc {\r\n  resize: none;\r\n}\r\n\r\ntextarea.todo {\r\n  resize: none;\r\n  width: 100%;\r\n  border: none;\r\n  border-radius: 8px;\r\n  outline: none;\r\n  background-color: yellow;\r\n  padding: 8px;\r\n  font-size: 20px;\r\n}\r\n\r\ntextarea.todo:disabled {\r\n  background-color: white;\r\n  color: black;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 40%);\r\n}\r\n\r\n.modal-background {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 60%);\r\n}\r\n\r\n.modal-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #6ba181;\r\n  margin: 35vh auto;\r\n  overflow: hidden;\r\n  border-radius: 12px;\r\n  box-shadow: 4px 4px 2px rgba(0, 0, 0, 40%);\r\n  font-family: \"KauShanScript\";\r\n}\r\n\r\n.modal.top-panel {\r\n  background-color: #db4c40;\r\n  border-radius: 12px 12px 0 0;\r\n  text-shadow: 2px 2px 1px rgba(0, 0, 0, 40%);\r\n  box-shadow: 0px 0px 6px 2px #386955;\r\n  padding: 12px;\r\n  gap: 16px;\r\n}\r\n\r\n.modal.header {\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n}\r\n\r\n.modal.input-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 12px;\r\n  gap: 12px;\r\n}\r\n\r\n.modal.input-container,\r\n.modal.input-container-row {\r\n  display: flex;\r\n}\r\n\r\n.modal.input-container {\r\n  flex-direction: column;\r\n  gap: 4px;\r\n}\r\n\r\n.modal.input-container-row {\r\n  gap: 12px;\r\n}\r\n\r\n.modal.input-container > label {\r\n  color: #dcfcce;\r\n  font-size: 20px;\r\n}\r\n\r\n.modal.input-container > input,\r\n.modal.input-container > textarea,\r\n.modal.input-container > select {\r\n  border: none;\r\n  border-radius: 6px;\r\n  padding: 4px 8px;\r\n  background-color: #ffdda2;\r\n}\r\n\r\n.modal.input-container > input[type=\"text\"],\r\n.modal.input-container > textarea {\r\n  width: 400px;\r\n}\r\n\r\n.modal.input-container:has(select),\r\n.modal.input-container > select {\r\n  flex-grow: 1;\r\n}\r\n\r\n.todo.container:has(.low) {\r\n  background-color: #e9ff70;\r\n}\r\n\r\n.todo.container:has(.medium) {\r\n  background-color: #70d6ff;\r\n}\r\n\r\n.todo.container:has(.high) {\r\n  background-color: #ff9770;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    closeBtn.classList.add('modal', 'close', 'btn', 'fa-solid', 'fa-xmark');
    closeBtn.addEventListener('click', () => _enableButton(btn, modal));

    const inputForm = document.createElement('form');
    (0,_setAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(inputForm, {'action': 'javascript:;', 'method': 'post'});
    inputForm.classList.add('modal', 'input-form');

    const inputContainerRow = document.createElement('div');
    inputContainerRow.classList.add('modal', 'input-container-row');

    // input fields
    _createFieldContainer(inputForm, 'text', 'Title', 'title', true);
    _createFieldContainer(inputForm, 'textarea', 'Description (Optional)', 'desc', false);
    _createFieldContainer(inputContainerRow, 'date', 'Due date (Optional)', 'due_date', false);
    _createPriorityDropDown(inputContainerRow, 'Priority', 'priority', true);
    inputForm.append(inputContainerRow);
    
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
    closeBtn.classList.add('modal', 'close', 'btn', 'fa-solid', 'fa-xmark');
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
            editBtn.classList.add('todo', 'edit-todo', 'btn', 'not-editable', 'fa-solid', 'fa-pen');
            editBtn.addEventListener('click', () => {
                _editTodo(project.list[i], title, desc, dueDate, priority, expandPanel, editBtn);
                editBtn.classList.toggle('fa-pen');
                editBtn.classList.toggle('fa-check');
                (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setProject)(project);
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('todo', 'delete-todo', 'btn', 'fa-solid', 'fa-xmark');
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
    text.textContent = 'MyTodo List';
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



/***/ }),

/***/ "./src/font/Caveat-Regular.ttf":
/*!*************************************!*\
  !*** ./src/font/Caveat-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/1f129497cd349562c266.ttf";

/***/ }),

/***/ "./src/font/KaushanScript-Regular.ttf":
/*!********************************************!*\
  !*** ./src/font/KaushanScript-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/a668b3d996f7c50fb3fe.ttf";

/***/ }),

/***/ "./src/font/NothingYouCouldDo-Regular.ttf":
/*!************************************************!*\
  !*** ./src/font/NothingYouCouldDo-Regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/3170b8e5d362ca787108.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE9BQU8sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVks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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7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Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNCZWZvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0VxdWFsL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9kaXNwbGF5TW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGlzcGxheVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9zZXRBdHRycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9Ob3RoaW5nWW91Q291bGREby1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvS2F1c2hhblNjcmlwdC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvQ2F2ZWF0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGM5ODc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90aGluZ1lvdUNvdWxkRG9cXFwiO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2F1U2hhblNjcmlwdFxcXCI7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDYXZlYXRcXFwiO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzE1M2I7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDI4cHg7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMTJweCBzb2xpZCAjZjU5ODBkO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwIDBweCAjZjU5ODBkIGluc2V0LCAwcHggLTEycHggMCAwcHggIzhiMWUzZiBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci50ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RoaW5nWW91Q291bGREb1xcXCI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmJhMTgxO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIG1pbi13aWR0aDogMjIwcHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwcHggNXB4IDJweCAwICMzODY5NTUgaW5zZXQ7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkthdVNoYW5TY3JpcHRcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci50b3AtcGFuZWwge1xcclxcbiAgYWxpZ24tc2VsZjogbm9ybWFsO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2E2ZGRkNDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIudGV4dCB7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjZjBjOTg3O1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMzODY5NTU7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLnByb2plY3QtaXRlbS1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiA4cHggMDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci5wcm9qZWN0LWl0ZW0ge1xcclxcbiAgY29sb3I6ICNkY2ZjY2U7XFxyXFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMTRweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIucHJvamVjdC1pdGVtOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZkNTFhO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMzODY5NTU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODliZDllO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci5wcm9qZWN0LWl0ZW06YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6ICNkYmI4MTk7XFxyXFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIucHJvamVjdC1pdGVtLnNlbGVjdGVkIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjOGIxZjE1O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGM0MDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIucHJvamVjdC1pdGVtLnNlbGVjdGVkOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZkNTFhO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NTY0NztcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIucHJvamVjdC1pdGVtLnNlbGVjdGVkOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogI2RiYjgxOTtcXHJcXG4gIHRleHQtc2hhZG93OiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGM0MDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1wYW5lbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1wYW5lbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA0cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1wYW5lbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLXBhbmVsID4gLmJ0bi1wYW5lbCA+IC5idG4ge1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAwcHggMHB4ICM5MTFkMTM7XFxyXFxufVxcclxcblxcclxcbi50b3AtcGFuZWwgPiAuYnRuLXBhbmVsID4gLmJ0bjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDUxYTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGNvbG9yOiAjM2MxNTNiO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggI2I4OTYwMDtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMCAwIHJnYmEoMCwgMCwgMCwgNDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMjYwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNTFhO1xcclxcbiAgY29sb3I6ICMxYjA1MWI7XFxyXFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC5idG4ge1xcclxcbiAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgd2lkdGg6IDQycHg7XFxyXFxuICBjb2xvcjogIzFjZmY0MTtcXHJcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMzg2OTU1O1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LmJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODliZDllO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QuYnRuOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogIzE3YzczNDtcXHJcXG4gIHRleHQtc2hhZG93OiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LmFyZWEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggMnB4IDBweCAjYmU3MzAzIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8uYnRuID4gaSxcXHJcXG4uZGVsZXRlLXByb2plY3QuYnRuLFxcclxcbi5jaGFuZ2UtbmFtZS1wcm9qZWN0LmJ0biB7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5idG4uZmEtY2hlY2sge1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8uYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5jbG9zZS5idG4sXFxyXFxuLmRlbGV0ZS10b2RvLmJ0biB7XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwuY2xvc2UuYnRuLFxcclxcbi5lZGl0LXRvZG8uYnRuLFxcclxcbi5kZWxldGUtdG9kby5idG4ge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwuY2xvc2UuYnRuOmhvdmVyLFxcclxcbi5tb2RhbC5jbG9zZS5idG46Zm9jdXMge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgbWFyZ2luOiA0OHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODliZDllO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDNweCAwICNiZTczMDM7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LnRvcC1wYW5lbCB7XFxyXFxuICBnYXA6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGM0MDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAycHggIzM4Njk1NTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QubmFtZSB7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkthdVNoYW5TY3JpcHRcXFwiO1xcclxcbiAgd2lkdGg6IDcwMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QubmFtZTpkaXNhYmxlZCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzhiMWYxNTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby5saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICBwYWRkaW5nOiAxOHB4IDEycHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgcGFkZGluZzogOHB4IDEycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBjOTg3O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby5idG4tcGFuZWwge1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBtYXJnaW4tdG9wOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXBhbmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQtcGFuZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLW5vRGVzYy1wYW5lbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhLFxcclxcbmlucHV0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2F2ZWF0XFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQudG9kbyB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLnRvZG8ge1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCA0MCUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0udG9kbzpjaGVja2VkOmFmdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzE1M2I7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgd2lkdGg6IDEycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0udG9kbzpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgM3B4IDNweCByZ2IoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdC50b2RvLnByaW9yaXR5LFxcclxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXS50b2RvLFxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXS50b2RvIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXS50b2RvIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIHdpZHRoOiA0NTBweDtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XFxyXFxuICBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0udG9kbyB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLnRvZG86ZGlzYWJsZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXS50b2RvOmRpc2FibGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCA0MCUpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgd2hpdGUsIDAgLTFweCAwIHdoaXRlLCAxcHggMCAwIHdoaXRlLCAtMXB4IDAgMCB3aGl0ZSxcXHJcXG4gICAgMCAycHggMCB3aGl0ZSwgMCAtMnB4IDAgd2hpdGUsIDJweCAwIDAgd2hpdGUsIC0ycHggMCAwIHdoaXRlLFxcclxcbiAgICAxcHggMXB4IDAgd2hpdGUsIC0xcHggLTFweCAwIHdoaXRlLCAxcHggLTFweCAwIHdoaXRlLCAtMXB4IC0xcHggMCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLnRvZG8uZGVhZGxpbmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0udG9kby5hbGVydCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXS50b2RvLmRlYWRsaW5lLXBhc3NlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3QudG9kby5wcmlvcml0eSB7XFxyXFxuICBwYWRkaW5nOiA2cHggOHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3QudG9kby5wcmlvcml0eTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXS50b2RvOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3QudG9kby5wcmlvcml0eTpkaXNhYmxlZCB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDQwJSk7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSNkZXNjIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEudG9kbyB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhLnRvZG86ZGlzYWJsZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDQwJSk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1iYWNrZ3JvdW5kIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCA2MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YmExODE7XFxyXFxuICBtYXJnaW46IDM1dmggYXV0bztcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDRweCAycHggcmdiYSgwLCAwLCAwLCA0MCUpO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJLYXVTaGFuU2NyaXB0XFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLnRvcC1wYW5lbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI0YzQwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDQwJSk7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAycHggIzM4Njk1NTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5oZWFkZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5pbnB1dC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLmlucHV0LWNvbnRhaW5lcixcXHJcXG4ubW9kYWwuaW5wdXQtY29udGFpbmVyLXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwuaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLmlucHV0LWNvbnRhaW5lci1yb3cge1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwuaW5wdXQtY29udGFpbmVyID4gbGFiZWwge1xcclxcbiAgY29sb3I6ICNkY2ZjY2U7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5pbnB1dC1jb250YWluZXIgPiBpbnB1dCxcXHJcXG4ubW9kYWwuaW5wdXQtY29udGFpbmVyID4gdGV4dGFyZWEsXFxyXFxuLm1vZGFsLmlucHV0LWNvbnRhaW5lciA+IHNlbGVjdCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBwYWRkaW5nOiA0cHggOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGRhMjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLmlucHV0LWNvbnRhaW5lciA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXHJcXG4ubW9kYWwuaW5wdXQtY29udGFpbmVyID4gdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwuaW5wdXQtY29udGFpbmVyOmhhcyhzZWxlY3QpLFxcclxcbi5tb2RhbC5pbnB1dC1jb250YWluZXIgPiBzZWxlY3Qge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby5jb250YWluZXI6aGFzKC5sb3cpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWZmNzA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLmNvbnRhaW5lcjpoYXMoLm1lZGl1bSkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwZDZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8uY29udGFpbmVyOmhhcyguaGlnaCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTc3MDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsYUFBYTtBQUNm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QUMzQyxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYzk4NztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RoaW5nWW91Q291bGREb1xcXCI7XFxyXFxuICBzcmM6IHVybCguLi9mb250L05vdGhpbmdZb3VDb3VsZERvLVJlZ3VsYXIudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkthdVNoYW5TY3JpcHRcXFwiO1xcclxcbiAgc3JjOiB1cmwoLi4vZm9udC9LYXVzaGFuU2NyaXB0LVJlZ3VsYXIudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkNhdmVhdFxcXCI7XFxyXFxuICBzcmM6IHVybCguLi9mb250L0NhdmVhdC1SZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjMTUzYjtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjhweDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkICNmNTk4MGQ7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDAgMHB4ICNmNTk4MGQgaW5zZXQsIDBweCAtMTJweCAwIDBweCAjOGIxZTNmIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLnRleHQge1xcclxcbiAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk5vdGhpbmdZb3VDb3VsZERvXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQuY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YmExODE7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgbWluLXdpZHRoOiAyMjBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMnB4IDAgIzM4Njk1NSBpbnNldDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2F1U2hhblNjcmlwdFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLnRvcC1wYW5lbCB7XFxyXFxuICBhbGlnbi1zZWxmOiBub3JtYWw7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYTZkZGQ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci50ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICNmMGM5ODc7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzM4Njk1NTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIucHJvamVjdC1pdGVtLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDhweCAwO1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLnByb2plY3QtaXRlbSB7XFxyXFxuICBjb2xvcjogI2RjZmNjZTtcXHJcXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNHB4O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci5wcm9qZWN0LWl0ZW06aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6ICNmZmQ1MWE7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzM4Njk1NTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4OWJkOWU7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLnByb2plY3QtaXRlbTphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogI2RiYjgxOTtcXHJcXG4gIHRleHQtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci5wcm9qZWN0LWl0ZW0uc2VsZWN0ZWQge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICM4YjFmMTU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI0YzQwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci5wcm9qZWN0LWl0ZW0uc2VsZWN0ZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmQ1MWE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU1NjQ3O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci5wcm9qZWN0LWl0ZW0uc2VsZWN0ZWQ6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjZGJiODE5O1xcclxcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI0YzQwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLXBhbmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLXBhbmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDRweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXBhbmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi50b3AtcGFuZWwgPiAuYnRuLXBhbmVsID4gLmJ0biB7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDBweCAwcHggIzkxMWQxMztcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1wYW5lbCA+IC5idG4tcGFuZWwgPiAuYnRuOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNTFhO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgY29sb3I6ICMzYzE1M2I7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCAjYjg5NjAwO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAwIDAgcmdiYSgwLCAwLCAwLCA0MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmUyNjA7XFxyXFxufVxcclxcblxcclxcbi5idG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ1MWE7XFxyXFxuICBjb2xvcjogIzFiMDUxYjtcXHJcXG4gIHRleHQtc2hhZG93OiBub25lO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LmJ0biB7XFxyXFxuICBoZWlnaHQ6IDQycHg7XFxyXFxuICB3aWR0aDogNDJweDtcXHJcXG4gIGNvbG9yOiAjMWNmZjQxO1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMzODY5NTU7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QuYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4OWJkOWU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC5idG46YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjMTdjNzM0O1xcclxcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QuYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAycHggMHB4ICNiZTczMDMgaW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdG9kby5idG4gPiBpLFxcclxcbi5kZWxldGUtcHJvamVjdC5idG4sXFxyXFxuLmNoYW5nZS1uYW1lLXByb2plY3QuYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5mYS1jaGVjayB7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5hZGQtdG9kby5idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLmNsb3NlLmJ0bixcXHJcXG4uZGVsZXRlLXRvZG8uYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5jbG9zZS5idG4sXFxyXFxuLmVkaXQtdG9kby5idG4sXFxyXFxuLmRlbGV0ZS10b2RvLmJ0biB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgd2lkdGg6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5jbG9zZS5idG46aG92ZXIsXFxyXFxuLm1vZGFsLmNsb3NlLmJ0bjpmb2N1cyB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBtYXJnaW46IDQ4cHggMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4OWJkOWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggM3B4IDAgI2JlNzMwMztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QudG9wLXBhbmVsIHtcXHJcXG4gIGdhcDogOHB4O1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI0YzQwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDJweCAjMzg2OTU1O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC5uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2F1U2hhblNjcmlwdFxcXCI7XFxyXFxuICB3aWR0aDogNzAwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC5uYW1lOmRpc2FibGVkIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjOGIxZjE1O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLmxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDE4cHggMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMTJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGM5ODc7XFxyXFxufVxcclxcblxcclxcbi50b2RvLmJ0bi1wYW5lbCB7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIG1hcmdpbi10b3A6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tcGFuZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZC1wYW5lbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbm9EZXNjLXBhbmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDQ4cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEsXFxyXFxuaW5wdXQge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDYXZlYXRcXFwiO1xcclxcbiAgZm9udC1zaXplOiAyNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dC50b2RvIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0udG9kbyB7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDQwJSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXS50b2RvOmNoZWNrZWQ6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjMTUzYjtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBoZWlnaHQ6IDEycHg7XFxyXFxuICB3aWR0aDogMTJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXS50b2RvOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggM3B4IHJnYigyNTUsIDI1NSwgMjU1LCAwLjMpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0LnRvZG8ucHJpb3JpdHksXFxyXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLnRvZG8sXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLnRvZG8ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgcGFkZGluZzogNHB4IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLnRvZG8ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgd2lkdGg6IDQ1MHB4O1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcXHJcXG4gIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXS50b2RvIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0udG9kbzpkaXNhYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLnRvZG86ZGlzYWJsZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDQwJSk7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAxcHggMCB3aGl0ZSwgMCAtMXB4IDAgd2hpdGUsIDFweCAwIDAgd2hpdGUsIC0xcHggMCAwIHdoaXRlLFxcclxcbiAgICAwIDJweCAwIHdoaXRlLCAwIC0ycHggMCB3aGl0ZSwgMnB4IDAgMCB3aGl0ZSwgLTJweCAwIDAgd2hpdGUsXFxyXFxuICAgIDFweCAxcHggMCB3aGl0ZSwgLTFweCAtMXB4IDAgd2hpdGUsIDFweCAtMXB4IDAgd2hpdGUsIC0xcHggLTFweCAwIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0udG9kby5kZWFkbGluZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXS50b2RvLmFsZXJ0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLnRvZG8uZGVhZGxpbmUtcGFzc2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdC50b2RvLnByaW9yaXR5IHtcXHJcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdC50b2RvLnByaW9yaXR5OmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLnRvZG86Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdC50b2RvLnByaW9yaXR5OmRpc2FibGVkIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgNDAlKTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhI2Rlc2Mge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYS50b2RvIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEudG9kbzpkaXNhYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgNDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWJhY2tncm91bmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDYwJSk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiYTE4MTtcXHJcXG4gIG1hcmdpbjogMzV2aCBhdXRvO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBib3gtc2hhZG93OiA0cHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDQwJSk7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkthdVNoYW5TY3JpcHRcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwudG9wLXBhbmVsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjRjNDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgNDAlKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDJweCAjMzg2OTU1O1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLmhlYWRlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLmlucHV0LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwuaW5wdXQtY29udGFpbmVyLFxcclxcbi5tb2RhbC5pbnB1dC1jb250YWluZXItcm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5pbnB1dC1jb250YWluZXIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwuaW5wdXQtY29udGFpbmVyLXJvdyB7XFxyXFxuICBnYXA6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5pbnB1dC1jb250YWluZXIgPiBsYWJlbCB7XFxyXFxuICBjb2xvcjogI2RjZmNjZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLmlucHV0LWNvbnRhaW5lciA+IGlucHV0LFxcclxcbi5tb2RhbC5pbnB1dC1jb250YWluZXIgPiB0ZXh0YXJlYSxcXHJcXG4ubW9kYWwuaW5wdXQtY29udGFpbmVyID4gc2VsZWN0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZGEyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwuaW5wdXQtY29udGFpbmVyID4gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbi5tb2RhbC5pbnB1dC1jb250YWluZXIgPiB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5pbnB1dC1jb250YWluZXI6aGFzKHNlbGVjdCksXFxyXFxuLm1vZGFsLmlucHV0LWNvbnRhaW5lciA+IHNlbGVjdCB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi50b2RvLmNvbnRhaW5lcjpoYXMoLmxvdykge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZmY3MDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8uY29udGFpbmVyOmhhcygubWVkaXVtKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBkNmZmO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby5jb250YWluZXI6aGFzKC5oaWdoKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5NzcwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1vbnRocyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtb250aHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDUgbW9udGhzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIDUpXG4gKiAvLz0+IFN1biBGZWIgMDEgMjAxNSAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1vbnRocyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIG1vbnRocywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIHZhciBkYXlPZk1vbnRoID0gZGF0ZS5nZXREYXRlKCk7IC8vIFRoZSBKUyBEYXRlIG9iamVjdCBzdXBwb3J0cyBkYXRlIG1hdGggYnkgYWNjZXB0aW5nIG91dC1vZi1ib3VuZHMgdmFsdWVzIGZvclxuICAvLyBtb250aCwgZGF5LCBldGMuIEZvciBleGFtcGxlLCBuZXcgRGF0ZSgyMDIwLCAwLCAwKSByZXR1cm5zIDMxIERlYyAyMDE5IGFuZFxuICAvLyBuZXcgRGF0ZSgyMDIwLCAxMywgMSkgcmV0dXJucyAxIEZlYiAyMDIxLiAgVGhpcyBpcyAqYWxtb3N0KiB0aGUgYmVoYXZpb3Igd2VcbiAgLy8gd2FudCBleGNlcHQgdGhhdCBkYXRlcyB3aWxsIHdyYXAgYXJvdW5kIHRoZSBlbmQgb2YgYSBtb250aCwgbWVhbmluZyB0aGF0XG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAzMSkgd2lsbCByZXR1cm4gMyBNYXIgMjAyMSBub3QgMjggRmViIDIwMjEgYXMgZGVzaXJlZC4gU29cbiAgLy8gd2UnbGwgZGVmYXVsdCB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkIG1vbnRoIGJ5IGFkZGluZyAxIHRvIHRoZSBkZXNpcmVkXG4gIC8vIG1vbnRoIGFuZCB1c2luZyBhIGRhdGUgb2YgMCB0byBiYWNrIHVwIG9uZSBkYXkgdG8gdGhlIGVuZCBvZiB0aGUgZGVzaXJlZFxuICAvLyBtb250aC5cblxuICB2YXIgZW5kT2ZEZXNpcmVkTW9udGggPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gIGVuZE9mRGVzaXJlZE1vbnRoLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIGFtb3VudCArIDEsIDApO1xuICB2YXIgZGF5c0luTW9udGggPSBlbmRPZkRlc2lyZWRNb250aC5nZXREYXRlKCk7XG5cbiAgaWYgKGRheU9mTW9udGggPj0gZGF5c0luTW9udGgpIHtcbiAgICAvLyBJZiB3ZSdyZSBhbHJlYWR5IGF0IHRoZSBlbmQgb2YgdGhlIG1vbnRoLCB0aGVuIHRoaXMgaXMgdGhlIGNvcnJlY3QgZGF0ZVxuICAgIC8vIGFuZCB3ZSdyZSBkb25lLlxuICAgIHJldHVybiBlbmRPZkRlc2lyZWRNb250aDtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHdlIG5vdyBrbm93IHRoYXQgc2V0dGluZyB0aGUgb3JpZ2luYWwgZGF5LW9mLW1vbnRoIHZhbHVlIHdvbid0XG4gICAgLy8gY2F1c2UgYW4gb3ZlcmZsb3csIHNvIHNldCB0aGUgZGVzaXJlZCBkYXktb2YtbW9udGguIE5vdGUgdGhhdCB3ZSBjYW4ndFxuICAgIC8vIGp1c3Qgc2V0IHRoZSBkYXRlIG9mIGBlbmRPZkRlc2lyZWRNb250aGAgYmVjYXVzZSB0aGF0IG9iamVjdCBtYXkgaGF2ZSBoYWRcbiAgICAvLyBpdHMgdGltZSBjaGFuZ2VkIGluIHRoZSB1bnVzdWFsIGNhc2Ugd2hlcmUgd2hlcmUgYSBEU1QgdHJhbnNpdGlvbiB3YXMgb25cbiAgICAvLyB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoIGFuZCBpdHMgbG9jYWwgdGltZSB3YXMgaW4gdGhlIGhvdXIgc2tpcHBlZCBvclxuICAgIC8vIHJlcGVhdGVkIG5leHQgdG8gYSBEU1QgdHJhbnNpdGlvbi4gIFNvIHdlIHVzZSBgZGF0ZWAgaW5zdGVhZCB3aGljaCBpc1xuICAgIC8vIGd1YXJhbnRlZWQgdG8gc3RpbGwgaGF2ZSB0aGUgb3JpZ2luYWwgdGltZS5cbiAgICBkYXRlLnNldEZ1bGxZZWFyKGVuZE9mRGVzaXJlZE1vbnRoLmdldEZ1bGxZZWFyKCksIGVuZE9mRGVzaXJlZE1vbnRoLmdldE1vbnRoKCksIGRheU9mTW9udGgpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNCZWZvcmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGJlZm9yZSAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNCZWZvcmUobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNCZWZvcmUoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA8IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNFcXVhbFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGVxdWFsP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBlcXVhbD9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBlcXVhbFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBKdWx5IDIwMTQgMDY6MzA6NDUuMDAwIGFuZCAyIEp1bHkgMjAxNCAwNjozMDo0NS41MDAgZXF1YWw/XG4gKiBjb25zdCByZXN1bHQgPSBpc0VxdWFsKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCAzMCwgNDUsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCAzMCwgNDUsIDUwMClcbiAqIClcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VxdWFsKGRpcnR5TGVmdERhdGUsIGRpcnR5UmlnaHREYXRlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlMZWZ0RGF0ZSk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlSaWdodERhdGUpO1xuICByZXR1cm4gZGF0ZUxlZnQuZ2V0VGltZSgpID09PSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBhZGREYXlzIGZyb20gXCIuLi9hZGREYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgMTAgZGF5cyBmcm9tIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJEYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gRnJpIEF1ZyAyMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZERheXMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1vbnRocyBmcm9tIFwiLi4vYWRkTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtb250aHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtb250aHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA1IG1vbnRocyBmcm9tIDEgRmVicnVhcnkgMjAxNTpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1vbnRocyhuZXcgRGF0ZSgyMDE1LCAxLCAxKSwgNSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTW9udGhzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTW9udGhzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgc3ViRGF5cyBmcm9tIFwiLi4vc3ViRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1vbnRocyBmcm9tIFwiLi4vc3ViTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge0R1cmF0aW9ufSBkdXJhdGlvbiAtIHRoZSBvYmplY3Qgd2l0aCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gYmUgc3VidHJhY3RlZFxuICpcbiAqIHwgS2V5ICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IHllYXJzICAgfCBBbW91bnQgb2YgeWVhcnMgdG8gYmUgc3VidHJhY3RlZCAgIHxcbiAqIHwgbW9udGhzICB8IEFtb3VudCBvZiBtb250aHMgdG8gYmUgc3VidHJhY3RlZCAgfFxuICogfCB3ZWVrcyAgIHwgQW1vdW50IG9mIHdlZWtzIHRvIGJlIHN1YnRyYWN0ZWQgICB8XG4gKiB8IGRheXMgICAgfCBBbW91bnQgb2YgZGF5cyB0byBiZSBzdWJ0cmFjdGVkICAgIHxcbiAqIHwgaG91cnMgICB8IEFtb3VudCBvZiBob3VycyB0byBiZSBzdWJ0cmFjdGVkICAgfFxuICogfCBtaW51dGVzIHwgQW1vdW50IG9mIG1pbnV0ZXMgdG8gYmUgc3VidHJhY3RlZCB8XG4gKiB8IHNlY29uZHMgfCBBbW91bnQgb2Ygc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkIHxcbiAqXG4gKiBBbGwgdmFsdWVzIGRlZmF1bHQgdG8gMFxuICpcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IHRoZSBmb2xsb3dpbmcgZHVyYXRpb24gZnJvbSAxNSBKdW5lIDIwMTcgMTU6Mjk6MjBcbiAqIGNvbnN0IHJlc3VsdCA9IHN1YihuZXcgRGF0ZSgyMDE3LCA1LCAxNSwgMTUsIDI5LCAyMCksIHtcbiAqICAgeWVhcnM6IDIsXG4gKiAgIG1vbnRoczogOSxcbiAqICAgd2Vla3M6IDEsXG4gKiAgIGRheXM6IDcsXG4gKiAgIGhvdXJzOiA1LFxuICogICBtaW51dGVzOiA5LFxuICogICBzZWNvbmRzOiAzMFxuICogfSlcbiAqIC8vPT4gTW9uIFNlcCAxIDIwMTQgMTA6MTk6NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWIoZGF0ZSwgZHVyYXRpb24pIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIGlmICghZHVyYXRpb24gfHwgX3R5cGVvZihkdXJhdGlvbikgIT09ICdvYmplY3QnKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIHllYXJzID0gZHVyYXRpb24ueWVhcnMgPyB0b0ludGVnZXIoZHVyYXRpb24ueWVhcnMpIDogMDtcbiAgdmFyIG1vbnRocyA9IGR1cmF0aW9uLm1vbnRocyA/IHRvSW50ZWdlcihkdXJhdGlvbi5tb250aHMpIDogMDtcbiAgdmFyIHdlZWtzID0gZHVyYXRpb24ud2Vla3MgPyB0b0ludGVnZXIoZHVyYXRpb24ud2Vla3MpIDogMDtcbiAgdmFyIGRheXMgPSBkdXJhdGlvbi5kYXlzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLmRheXMpIDogMDtcbiAgdmFyIGhvdXJzID0gZHVyYXRpb24uaG91cnMgPyB0b0ludGVnZXIoZHVyYXRpb24uaG91cnMpIDogMDtcbiAgdmFyIG1pbnV0ZXMgPSBkdXJhdGlvbi5taW51dGVzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLm1pbnV0ZXMpIDogMDtcbiAgdmFyIHNlY29uZHMgPSBkdXJhdGlvbi5zZWNvbmRzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLnNlY29uZHMpIDogMDsgLy8gU3VidHJhY3QgeWVhcnMgYW5kIG1vbnRoc1xuXG4gIHZhciBkYXRlV2l0aG91dE1vbnRocyA9IHN1Yk1vbnRocyhkYXRlLCBtb250aHMgKyB5ZWFycyAqIDEyKTsgLy8gU3VidHJhY3Qgd2Vla3MgYW5kIGRheXNcblxuICB2YXIgZGF0ZVdpdGhvdXREYXlzID0gc3ViRGF5cyhkYXRlV2l0aG91dE1vbnRocywgZGF5cyArIHdlZWtzICogNyk7IC8vIFN1YnRyYWN0IGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzXG5cbiAgdmFyIG1pbnV0ZXN0b1N1YiA9IG1pbnV0ZXMgKyBob3VycyAqIDYwO1xuICB2YXIgc2Vjb25kc3RvU3ViID0gc2Vjb25kcyArIG1pbnV0ZXN0b1N1YiAqIDYwO1xuICB2YXIgbXN0b1N1YiA9IHNlY29uZHN0b1N1YiAqIDEwMDA7XG4gIHZhciBmaW5hbERhdGUgPSBuZXcgRGF0ZShkYXRlV2l0aG91dERheXMuZ2V0VGltZSgpIC0gbXN0b1N1Yik7XG4gIHJldHVybiBmaW5hbERhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB0b2RvIGZyb20gXCIuL3RvZG9cIjtcclxuaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIi4vc2V0QXR0cnNcIjtcclxuaW1wb3J0IHsgZGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdFwiO1xyXG5pbXBvcnQgeyBwcm9qZWN0TGlzdCwgc2V0UHJvamVjdCB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgZGlzcGxheVByb2plY3RMaXN0U2lkZWJhciB9IGZyb20gXCIuL3VpXCI7XHJcblxyXG4vLyBjcmVhdGUgYSBmaWVsZCBjb250YWluZXIgdXNlIGluIG1vZGFsXHJcbmNvbnN0IF9jcmVhdGVGaWVsZENvbnRhaW5lciA9IChmb3JtLCB0eXBlLCBsYWJlbFR4dCwgbmFtZSwgcmVxdWlyZWQpID0+IHtcclxuICAgIC8vIGNoZWNrIGlmIHRoZSBpbnB1dCBmaWVsZCBoYXMgcmVxdWlyZWQgYXR0cmlidXRlXHJcbiAgICBjb25zdCBfY2hlY2tSZXF1aXJlbWVudCA9IChmaWVsZCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXF1aXJlZCkge1xyXG4gICAgICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnaW5wdXQtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBzZXRBdHRyaWJ1dGVzKGxhYmVsLCB7J2Zvcic6IG5hbWV9KTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7bGFiZWxUeHR9OmA7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09IFwidGV4dGFyZWFcIikge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICBzZXRBdHRyaWJ1dGVzKGZpZWxkLCB7J2lkJzogbmFtZSwgJ25hbWUnOiBuYW1lLCAncm93cyc6IDV9KTtcclxuICAgICAgICBfY2hlY2tSZXF1aXJlbWVudChmaWVsZCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChsYWJlbCwgZmllbGQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHNldEF0dHJpYnV0ZXMoZmllbGQsIHsndHlwZSc6IHR5cGUsICdpZCc6IG5hbWUsICduYW1lJzogbmFtZX0pO1xyXG4gICAgICAgIF9jaGVja1JlcXVpcmVtZW50KGZpZWxkKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsLCBmaWVsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybS5hcHBlbmQoY29udGFpbmVyKTtcclxufTtcclxuXHJcbi8vIGNyZWF0ZSBhIGRyb3Bkb3duIGNvbnRhaW5lciB1c2UgaW4gbW9kYWxcclxuY29uc3QgX2NyZWF0ZVByaW9yaXR5RHJvcERvd24gPSAoZm9ybSwgbGFiZWxUeHQsIG5hbWUsIHJlcXVpcmVkKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdpbnB1dC1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHNldEF0dHJpYnV0ZXMobGFiZWwsIHsnZm9yJzogbmFtZX0pO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHtsYWJlbFR4dH06YDtcclxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgc2V0QXR0cmlidXRlcyhzZWxlY3QsIHsnaWQnOiBuYW1lLCAnbmFtZSc6IG5hbWV9KTtcclxuICAgIGlmIChyZXF1aXJlZCkge1xyXG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5O1xyXG4gICAgICAgIGxldCBwcmlvcml0eVR4dDtcclxuICAgICAgICBzd2l0Y2goaSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9ICdsb3cnO1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlUeHQgPSAnTG93JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9ICdtZWRpdW0nO1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlUeHQgPSAnTWVkaXVtJztcclxuICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMob3B0aW9uLCB7J3NlbGVjdGVkJzogJyd9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9ICdoaWdoJztcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5VHh0ID0gJ0hpZ2gnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEF0dHJpYnV0ZXMob3B0aW9uLCB7J3ZhbHVlJzogcHJpb3JpdHl9KTtcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eVR4dDtcclxuICAgICAgICBzZWxlY3QuYXBwZW5kKG9wdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZChsYWJlbCwgc2VsZWN0KTtcclxuICAgIGZvcm0uYXBwZW5kKGNvbnRhaW5lcik7XHJcbn1cclxuXHJcbi8vIGVuYWJsZSBidXR0b24gdG8gYmUgY2xpY2thYmxlIGFnYWluXHJcbmNvbnN0IF9lbmFibGVCdXR0b24gPSAoYnRuLCBtb2RhbCkgPT4ge1xyXG4gICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgbW9kYWwucmVtb3ZlKCk7XHJcbn07XHJcblxyXG4vLyBkaXNwbGF5IGEgXCJhZGQgdG9kbyB0byBwcm9qZWN0XCIgbW9kYWxcclxuY29uc3QgZGlzcGxheUFkZFRvZG9Nb2RhbCA9IChwcm9qZWN0LCBidG4pID0+IHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ21vZGFsLWJhY2tncm91bmQnKTtcclxuICAgIFxyXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgndG9kbycsICdtb2RhbC1jb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgdG9wUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvcFBhbmVsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ3RvcC1wYW5lbCcpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgdG9kbydcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2Nsb3NlJywgJ2J0bicsICdmYS1zb2xpZCcsICdmYS14bWFyaycpO1xyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfZW5hYmxlQnV0dG9uKGJ0biwgbW9kYWwpKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBzZXRBdHRyaWJ1dGVzKGlucHV0Rm9ybSwgeydhY3Rpb24nOiAnamF2YXNjcmlwdDo7JywgJ21ldGhvZCc6ICdwb3N0J30pO1xyXG4gICAgaW5wdXRGb3JtLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2lucHV0LWZvcm0nKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dENvbnRhaW5lclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW5wdXRDb250YWluZXJSb3cuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnaW5wdXQtY29udGFpbmVyLXJvdycpO1xyXG5cclxuICAgIC8vIGlucHV0IGZpZWxkc1xyXG4gICAgX2NyZWF0ZUZpZWxkQ29udGFpbmVyKGlucHV0Rm9ybSwgJ3RleHQnLCAnVGl0bGUnLCAndGl0bGUnLCB0cnVlKTtcclxuICAgIF9jcmVhdGVGaWVsZENvbnRhaW5lcihpbnB1dEZvcm0sICd0ZXh0YXJlYScsICdEZXNjcmlwdGlvbiAoT3B0aW9uYWwpJywgJ2Rlc2MnLCBmYWxzZSk7XHJcbiAgICBfY3JlYXRlRmllbGRDb250YWluZXIoaW5wdXRDb250YWluZXJSb3csICdkYXRlJywgJ0R1ZSBkYXRlIChPcHRpb25hbCknLCAnZHVlX2RhdGUnLCBmYWxzZSk7XHJcbiAgICBfY3JlYXRlUHJpb3JpdHlEcm9wRG93bihpbnB1dENvbnRhaW5lclJvdywgJ1ByaW9yaXR5JywgJ3ByaW9yaXR5JywgdHJ1ZSk7XHJcbiAgICBpbnB1dEZvcm0uYXBwZW5kKGlucHV0Q29udGFpbmVyUm93KTtcclxuICAgIFxyXG4gICAgY29uc3QgYm90dG9tUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJvdHRvbVBhbmVsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2JvdHRvbS1wYW5lbCcpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBuZXcgdG9kb1xyXG4gICAgY29uc3QgY3JlYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzZXRBdHRyaWJ1dGVzKGNyZWF0ZUJ0biwgeyd0eXBlJzogJ3N1Ym1pdCd9KTtcclxuICAgIGNyZWF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdidG4nLCAnY3JlYXRlLXRvZG8nKTtcclxuICAgIGNyZWF0ZUJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUnO1xyXG4gICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vIGNoZWNrIHZhbGlkYXRpb25cclxuICAgICAgICBsZXQgdGl0bGVJc1ZhbGlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykuY2hlY2tWYWxpZGl0eSgpO1xyXG4gICAgICAgIGxldCBkdWVEYXRlSXNWYWxpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVfZGF0ZScpLmNoZWNrVmFsaWRpdHkoKTtcclxuICAgICAgICBsZXQgcHJpb3JpdHlJc1ZhbGlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykuY2hlY2tWYWxpZGl0eSgpO1xyXG4gICAgICAgIGlmICh0aXRsZUlzVmFsaWQgJiYgZHVlRGF0ZUlzVmFsaWQgJiYgcHJpb3JpdHlJc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHByb2plY3QuYWRkVG9kbyhcclxuICAgICAgICAgICAgICAgIG5ldyB0b2RvKFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZV9kYXRlJykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2V0UHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgX2VuYWJsZUJ1dHRvbihidG4sIG1vZGFsKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNhbmNlbFxyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIHNldEF0dHJpYnV0ZXMoY2FuY2VsQnRuLCB7J3R5cGUnOiAncmVzZXQnfSk7XHJcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnYnRuJywgJ2NhbmNlbCcpO1xyXG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfZW5hYmxlQnV0dG9uKGJ0biwgbW9kYWwpKTtcclxuICAgIGJvdHRvbVBhbmVsLmFwcGVuZChjYW5jZWxCdG4sIGNyZWF0ZUJ0bik7XHJcblxyXG4gICAgaW5wdXRGb3JtLmFwcGVuZChib3R0b21QYW5lbCk7XHJcbiAgICB0b3BQYW5lbC5hcHBlbmQoaGVhZGVyLCBjbG9zZUJ0bik7XHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kKHRvcFBhbmVsLCBpbnB1dEZvcm0pO1xyXG4gICAgbW9kYWwuYXBwZW5kKG1vZGFsQ29udGVudClcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1vZGFsKTtcclxufTtcclxuXHJcbi8vIGRpc3BsYXkgYSBcImFkZCBwcm9qZWN0IHRvIGEgbGlzdCBvZiBwcm9qZWN0c1wiIG1vZGFsXHJcbmNvbnN0IGRpc3BsYXlBZGRQcm9qZWN0TW9kYWwgPSAoYnRuKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICdtb2RhbC1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICdtb2RhbC1jb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgdG9wUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvcFBhbmVsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ3RvcC1wYW5lbCcpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgcHJvamVjdCdcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2Nsb3NlJywgJ2J0bicsICdmYS1zb2xpZCcsICdmYS14bWFyaycpO1xyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfZW5hYmxlQnV0dG9uKGJ0biwgbW9kYWwpKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBzZXRBdHRyaWJ1dGVzKGlucHV0Rm9ybSwgeydhY3Rpb24nOiAnamF2YXNjcmlwdDo7JywgJ21ldGhvZCc6ICdwb3N0J30pO1xyXG4gICAgaW5wdXRGb3JtLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2lucHV0LWZvcm0nKTtcclxuXHJcbiAgICBfY3JlYXRlRmllbGRDb250YWluZXIoaW5wdXRGb3JtLCAndGV4dCcsICdQcm9qZWN0IE5hbWUnLCAncHJvamVjdF9uYW1lJywgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgYm90dG9tUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJvdHRvbVBhbmVsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2JvdHRvbS1wYW5lbCcpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBuZXcgcHJvamVjdFxyXG4gICAgY29uc3QgY3JlYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzZXRBdHRyaWJ1dGVzKGNyZWF0ZUJ0biwgeyd0eXBlJzogJ3N1Ym1pdCd9KTtcclxuICAgIGNyZWF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdidG4nLCAnY3JlYXRlLXByb2plY3QnKTtcclxuICAgIGNyZWF0ZUJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUnO1xyXG4gICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vIGNoZWNrIHZhbGlkYXRpb25cclxuICAgICAgICBsZXQgcHJvamVjdE5hbWVJc1ZhbGlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfbmFtZScpLmNoZWNrVmFsaWRpdHkoKTtcclxuICAgICAgICBpZiAocHJvamVjdE5hbWVJc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfbmFtZScpLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoYW5nZSBoZXJlXHJcbiAgICAgICAgICAgIHNldFByb2plY3QobmV3UHJvamVjdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBkaXNwbGF5IG5ldyBwcm9qZWN0XHJcbiAgICAgICAgICAgIF9lbmFibGVCdXR0b24oYnRuLCBtb2RhbCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZS1kaXNwbGF5IGEgbGlzdCBvZiBwcm9qZWN0IGluIHNpZGViYXJcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXIucHJvamVjdC1pdGVtLWxpc3QnKTtcclxuICAgICAgICAgICAgZGlzcGxheVByb2plY3RMaXN0U2lkZWJhcihwcm9qZWN0SXRlbUxpc3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGlzcGxheSBwcm9qZWN0IGFmdGVyIGNyZWF0aW5nIHByb2plY3QgaW1tZWRpYXRlbHksIGlmIG9ubHkgaXQncyB0aGUgZmlyc3QgcHJvamVjdCBpbiB0aGUgbGlzdFxyXG4gICAgICAgICAgICBpZiAocHJvamVjdExpc3QubGVuZ3RoID09IDEpIFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdExpc3RbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNhbmNlbFxyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzZXRBdHRyaWJ1dGVzKGNhbmNlbEJ0biwgeyd0eXBlJzogJ3Jlc2V0J30pO1xyXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2J0bicsICdjYW5jZWwnKTtcclxuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2VuYWJsZUJ1dHRvbihidG4sIG1vZGFsKSk7XHJcbiAgICBib3R0b21QYW5lbC5hcHBlbmQoY2FuY2VsQnRuLCBjcmVhdGVCdG4pO1xyXG5cclxuICAgIGlucHV0Rm9ybS5hcHBlbmQoYm90dG9tUGFuZWwpO1xyXG4gICAgdG9wUGFuZWwuYXBwZW5kKGhlYWRlciwgY2xvc2VCdG4pO1xyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZCh0b3BQYW5lbCwgaW5wdXRGb3JtKTtcclxuICAgIG1vZGFsLmFwcGVuZChtb2RhbENvbnRlbnQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobW9kYWwpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGRpc3BsYXlBZGRQcm9qZWN0TW9kYWwsIFxyXG4gICAgZGlzcGxheUFkZFRvZG9Nb2RhbCxcclxufTsiLCJpbXBvcnQgeyBkaXNwbGF5QWRkVG9kb01vZGFsIH0gZnJvbSBcIi4vZGlzcGxheU1vZGFsXCI7XHJcbmltcG9ydCB7IHNldFByb2plY3QsIHJlbW92ZVByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdExpc3RTaWRlYmFyIH0gZnJvbSBcIi4vdWlcIjtcclxuaW1wb3J0IHsgc3ViLCBwYXJzZUlTTywgaXNCZWZvcmUsIGlzRXF1YWwsIHN0YXJ0T2ZEYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIi4vc2V0QXR0cnNcIjtcclxuXHJcbi8vIGRpc3BsYXkgYSBwcm9qZWN0IGRpc3BsYXlpbmcgYSBsaXN0IG9mIHRvZG9cclxuY29uc3QgZGlzcGxheVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgXHJcbiAgICAvLyByZS1kaXNwbGF5IGEgbGlzdCBvZiBwcm9qZWN0IGluIHNpZGViYXJcclxuICAgIGNvbnN0IF9yZWZyZXNoU2lkZWJhciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0SXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci5wcm9qZWN0LWl0ZW0tbGlzdCcpO1xyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0TGlzdFNpZGViYXIocHJvamVjdEl0ZW1MaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGFuZ2UgcHJvamVjdCdzIG5hbWVcclxuICAgIGNvbnN0IF9jaGFuZ2VQcm9qZWN0TmFtZSA9ICgpID0+IHtcclxuICAgICAgICBwcm9qZWN0TmFtZS50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgcHJvamVjdC5lZGl0TmFtZShwcm9qZWN0TmFtZS52YWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIGNoYW5nZSBwcm9qZWN0IG5hbWUgaW4gc3RvcmFnZVxyXG4gICAgICAgIHNldFByb2plY3QocHJvamVjdCk7XHJcblxyXG4gICAgICAgIC8vIHJlLWRpc3BsYXkgYSBsaXN0IG9mIHByb2plY3QgaW4gc2lkZWJhclxyXG4gICAgICAgIF9yZWZyZXNoU2lkZWJhcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBkZWxldGUgcHJvamVjdCBmcm9tIGEgbGlzdFxyXG4gICAgY29uc3QgX2RlbGV0ZVByb2plY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAvLyBkZWxldGUgZnJvbSBzdG9yYWdlXHJcbiAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyByZS1kaXNwbGF5IGEgbGlzdCBvZiBwcm9qZWN0IGluIHNpZGViYXJcclxuICAgICAgICBfcmVmcmVzaFNpZGViYXIoKTtcclxuXHJcbiAgICAgICAgLy8gZGlzcGxheSBmaXJzdCBwcm9qZWN0IGluIHRoZSBsaXN0IGFmdGVyIGRlbGV0aW5nLCBpZiBvbmx5IGl0IGV4aXN0c1xyXG4gICAgICAgIGlmIChwcm9qZWN0TGlzdFswXSlcclxuICAgICAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdExpc3RbMF0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjcmVhdGUgYSBsaXN0IG9mIHRvZG8gaW4gcHJvamVjdFxyXG4gICAgY29uc3QgX2NyZWF0ZUxpc3RvZlRvZG8gPSAoKSA9PiB7XHJcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ2xpc3QnKTtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gcHJvamVjdC5saXN0Lmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHRvZG9JdGVtLCB7J2FjdGlvbic6ICdqYXZhc2NyaXB0OjsnLCAnbWV0aG9kJzogJ3Bvc3QnfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9yZSBhbGwgdG9kb1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdG9kb1BhbmVsLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAndG9kby1wYW5lbCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcmUgYWxsIHRvZG8gZXhjZXB0IGRlc2NcclxuICAgICAgICAgICAgY29uc3Qgbm9EZXNjUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbm9EZXNjUGFuZWwuY2xhc3NMaXN0LmFkZCgndG9kbycsICd0b2RvLW5vRGVzYy1wYW5lbCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcmUgZGVzY1xyXG4gICAgICAgICAgICBjb25zdCBleHBhbmRQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBleHBhbmRQYW5lbC5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ2V4cGFuZC1wYW5lbCcsICdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRvZG9cclxuICAgICAgICAgICAgY29uc3QgaXNEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgaXNEb25lLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnaXNEb25lJyk7XHJcbiAgICAgICAgICAgIGlzRG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIF90b2dnbGVUb2RvSXNEb25lKGlzRG9uZSwgcHJvamVjdC5saXN0W2ldKTtcclxuICAgICAgICAgICAgICAgIHNldFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKGlzRG9uZSwgeyd0eXBlJzogJ2NoZWNrYm94JywgJ25hbWUnOiAnaXNfZG9uZScsICd2YWx1ZSc6IHByb2plY3QubGlzdFtpXS5pc0RvbmV9KTtcclxuICAgICAgICAgICAgaWYgKHByb2plY3QubGlzdFtpXS5pc0RvbmUpIHtcclxuICAgICAgICAgICAgICAgIGlzRG9uZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAndGl0bGUnKTtcclxuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh0aXRsZSwgeyd0eXBlJzogJ3RleHQnLCAnbmFtZSc6ICd0aXRsZScsICd2YWx1ZSc6IHByb2plY3QubGlzdFtpXS50aXRsZSwgJ2Rpc2FibGVkJzogJyd9KTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICAgICAgZGVzYy5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ2Rlc2MnKTtcclxuICAgICAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QubGlzdFtpXS5kZXNjO1xyXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKGRlc2MsIHsnbmFtZSc6ICdkZXNjJywgJ2Rpc2FibGVkJzogJyd9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnZGF0ZScpO1xyXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKGR1ZURhdGUsIHsndHlwZSc6ICdkYXRlJywgJ25hbWUnOiAnZHVlX2RhdGUnLCAndmFsdWUnOiBwcm9qZWN0Lmxpc3RbaV0uZHVlRGF0ZSwgJ2Rpc2FibGVkJzogJyd9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGRlYWRsaW5lIHN0YXR1c1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdC5saXN0W2ldLmR1ZURhdGUgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSBfY2hlY2tEZWFkbGluZShkdWVEYXRlKTtcclxuICAgICAgICAgICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChzdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ3ByaW9yaXR5JywgcHJvamVjdC5saXN0W2ldLnByaW9yaXR5KTtcclxuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhwcmlvcml0eSwgeyduYW1lJzogJ3ByaW9yaXR5JywgJ2Rpc2FibGVkJzogJyd9KTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIHByaW9yaXR5IG9wdGlvbnNcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIGxldCBwcmlvcml0eUx2bDtcclxuICAgICAgICAgICAgICAgIGxldCBwcmlvcml0eVR4dDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBfc2VsZWN0Q29ycmVjdFByaW9yaXR5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0Lmxpc3RbaV0ucHJpb3JpdHkgPT09IHByaW9yaXR5THZsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMob3B0aW9uLCB7J3NlbGVjdGVkJzogJyd9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaChqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUx2bCA9ICdsb3cnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVR4dCA9ICdMb3cnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0Q29ycmVjdFByaW9yaXR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMdmwgPSAnbWVkaXVtJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlUeHQgPSAnTWVkaXVtJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdENvcnJlY3RQcmlvcml0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5THZsID0gJ2hpZ2gnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVR4dCA9ICdIaWdoJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdENvcnJlY3RQcmlvcml0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMob3B0aW9uLCB7J3ZhbHVlJzogcHJpb3JpdHlMdmx9KTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5VHh0O1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuYXBwZW5kKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5vRGVzY1BhbmVsLmFwcGVuZChpc0RvbmUsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICAgICAgICAgIGV4cGFuZFBhbmVsLmFwcGVuZChkZXNjKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3JlIGJ1dHRvbnNcclxuICAgICAgICAgICAgY29uc3QgYnRuUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYnRuUGFuZWwuY2xhc3NMaXN0LmFkZCgndG9kbycsICdidG4tcGFuZWwnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbnNcclxuICAgICAgICAgICAgY29uc3QgZXhwYW5kQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGV4cGFuZEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ2V4cGFuZC10b2RvJywgJ2J0bicpO1xyXG4gICAgICAgICAgICBleHBhbmRCdG4udGV4dENvbnRlbnQgPSAnRXhwYW5kJztcclxuICAgICAgICAgICAgZXhwYW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZXhwYW5kUGFuZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJykpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCAnZWRpdC10b2RvJywgJ2J0bicsICdub3QtZWRpdGFibGUnLCAnZmEtc29saWQnLCAnZmEtcGVuJyk7XHJcbiAgICAgICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBfZWRpdFRvZG8ocHJvamVjdC5saXN0W2ldLCB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGV4cGFuZFBhbmVsLCBlZGl0QnRuKTtcclxuICAgICAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnZmEtcGVuJyk7XHJcbiAgICAgICAgICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLWNoZWNrJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgndG9kbycsICdkZWxldGUtdG9kbycsICdidG4nLCAnZmEtc29saWQnLCAnZmEteG1hcmsnKTtcclxuICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX2RlbGV0ZVRvZG8ocHJvamVjdC5saXN0W2ldKTtcclxuICAgICAgICAgICAgICAgIHNldFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRvZG9QYW5lbC5hcHBlbmQobm9EZXNjUGFuZWwsIGV4cGFuZFBhbmVsKTtcclxuICAgICAgICAgICAgYnRuUGFuZWwuYXBwZW5kKGV4cGFuZEJ0biwgZWRpdEJ0biwgZGVsZXRlQnRuKTtcclxuICAgICAgICAgICAgdG9kb0l0ZW0uYXBwZW5kKHRvZG9QYW5lbCwgYnRuUGFuZWwpO1xyXG4gICAgICAgICAgICBsaXN0LmFwcGVuZCh0b2RvSXRlbSk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQobGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyByZWZyZXNoIGEgbGlzdCBvZiB0b2RvIGluIGEgcHJvamVjdFxyXG4gICAgY29uc3QgX3JlZnJlc2hMaXN0b2ZUb2RvID0gKCkgPT4ge1xyXG4gICAgICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgX2NyZWF0ZUxpc3RvZlRvZG8oKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gZGVsZXRlIGEgdG9kbyBmcm9tIHRoZSBwcm9qZWN0XHJcbiAgICBjb25zdCBfZGVsZXRlVG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdC5kZWxldGVUb2RvKHRvZG8pO1xyXG4gICAgICAgIF9yZWZyZXNoTGlzdG9mVG9kbygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBhZGQgdG9kbyB0byB0aGUgcHJvamVjdFxyXG4gICAgY29uc3QgX2FkZFRvZG9Ub1Byb2plY3QgPSAoYnRuKSA9PiB7XHJcbiAgICAgICAgZGlzcGxheUFkZFRvZG9Nb2RhbChwcm9qZWN0LCBidG4pO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZVRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLmNyZWF0ZS10b2RvJyk7XHJcbiAgICAgICAgY3JlYXRlVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9yZWZyZXNoTGlzdG9mVG9kbygpKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gY2hlY2sgZGVhZGxpbmUgc3RhdHVzIGFuZCByZXR1cm4gc3RyaW5nXHJcbiAgICBjb25zdCBfY2hlY2tEZWFkbGluZSA9IChkdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgbGV0IHBhcnNlZER1ZURhdGUgPSBzdGFydE9mRGF5KHBhcnNlSVNPKGR1ZURhdGUudmFsdWUpKTtcclxuICAgICAgICBsZXQgdG9kYXkgPSBzdGFydE9mRGF5KG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIGxldCBkdWVEYXRlU3ViT25lRGF5ID0gc3ViKHBhcnNlZER1ZURhdGUsIHtkYXlzOiAxfSlcclxuXHJcbiAgICAgICAgaWYgKGlzRXF1YWwocGFyc2VkRHVlRGF0ZSwgdG9kYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZGVhZGxpbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc0VxdWFsKGR1ZURhdGVTdWJPbmVEYXksIHRvZGF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2FsZXJ0JztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNCZWZvcmUocGFyc2VkRHVlRGF0ZSwgdG9kYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZGVhZGxpbmUtcGFzc2VkJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGVkaXQgdG9kbyBpbiB0aGUgcHJvamVjdFxyXG4gICAgY29uc3QgX2VkaXRUb2RvID0gKHRvZG8sIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgZXhwYW5kUGFuZWwsIGVkaXRCdG4pID0+IHtcclxuICAgICAgICBleHBhbmRQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB0aXRsZS50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgZGVzYy50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgZHVlRGF0ZS50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgcHJpb3JpdHkudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIC8vIHJlbW92ZSBvbGQgY2xhc3NcclxuICAgICAgICBsZXQgc3RhdHVzID0gX2NoZWNrRGVhZGxpbmUoZHVlRGF0ZSk7XHJcbiAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QucmVtb3ZlKHN0YXR1cyk7XHJcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSh0b2RvLnByaW9yaXR5KTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWVkaXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdub3QtZWRpdGFibGUnKSkge1xyXG4gICAgICAgICAgICB0b2RvLmVkaXRUb2RvKHRpdGxlLnZhbHVlLCBkZXNjLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vIGFkZCBuZXcgY2xhc3MgYWZ0ZXIgZWRpdGluZ1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBfY2hlY2tEZWFkbGluZShkdWVEYXRlKTtcclxuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCh0b2RvLnByaW9yaXR5KTtcclxuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKHN0YXR1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnbm90LWVkaXRhYmxlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHRvZ2dsZSBpc0RvbmUgaW4gdG9kb1xyXG4gICAgY29uc3QgX3RvZ2dsZVRvZG9Jc0RvbmUgPSAoaW5wdXQsIHRvZG8pID0+IHtcclxuICAgICAgICB0b2RvLnRvZ2dsZUlzRG9uZSgpO1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0b2RvLmlzRG9uZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnLCAnY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgdG9wUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvcFBhbmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnLCAndG9wLXBhbmVsJyk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICduYW1lJylcclxuICAgIHNldEF0dHJpYnV0ZXMocHJvamVjdE5hbWUsIHsndHlwZSc6ICd0ZXh0JywgJ3ZhbHVlJzogcHJvamVjdC5uYW1lLCAnbmFtZSc6ICdwcm9qZWN0X25hbWUnLCAnZGlzYWJsZWQnOiAnJ30pO1xyXG4gICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge2lmIChlLmtleSA9PT0gJ0VudGVyJykge19jaGFuZ2VQcm9qZWN0TmFtZSgpO319KTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kKHRvcFBhbmVsKTtcclxuXHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBfY3JlYXRlTGlzdG9mVG9kbygpO1xyXG5cclxuICAgIC8vIHBhbmVsIGZvciBzdG9yaW5nIGJ1dHRvbnNcclxuICAgIGNvbnN0IGJ0blBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5QYW5lbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ2J0bi1wYW5lbCcpO1xyXG5cclxuICAgIC8vIGFkZCB0b2RvIHRvIHByb2plY3RcclxuICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZFRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8nLCAnYnRuJywgJ3Byb2plY3QnKTtcclxuICAgIGNvbnN0IGFkZFRvZG9JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgYWRkVG9kb0ljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtbGlzdC1jaGVjaycpO1xyXG4gICAgY29uc3QgYWRkVG9kb1R4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWRkVG9kb1R4dC50ZXh0Q29udGVudCA9ICdBZGQgdGFzayc7XHJcbiAgICBhZGRUb2RvQnRuLmFwcGVuZChhZGRUb2RvSWNvbiwgYWRkVG9kb1R4dCk7XHJcbiAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICghYWRkVG9kb0J0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIGFkZFRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIF9hZGRUb2RvVG9Qcm9qZWN0KGFkZFRvZG9CdG4pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2hhbmdlIHByb2plY3QncyBuYW1lXHJcbiAgICBjb25zdCBjaGFuZ2VQcm9qZWN0TmFtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2hhbmdlUHJvamVjdE5hbWVCdG4uY2xhc3NMaXN0LmFkZCgnY2hhbmdlLW5hbWUtcHJvamVjdCcsICdidG4nLCAncHJvamVjdCcsICdmYS1zb2xpZCcsICdmYS1wZW4tdG8tc3F1YXJlJyk7XHJcbiAgICBjaGFuZ2VQcm9qZWN0TmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9jaGFuZ2VQcm9qZWN0TmFtZSgpKTtcclxuXHJcbiAgICAvLyBkZWxldGUgcHJvamVjdCBmcm9tIHRoZSBsaXN0XHJcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0JywgJ2J0bicsICdwcm9qZWN0JywgJ2ZhLXNvbGlkJywgJ2ZhLXRyYXNoJyk7XHJcbiAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2RlbGV0ZVByb2plY3QoKSk7XHJcblxyXG4gICAgYnRuUGFuZWwuYXBwZW5kKGFkZFRvZG9CdG4sIGNoYW5nZVByb2plY3ROYW1lQnRuLCBkZWxldGVQcm9qZWN0QnRuKTtcclxuICAgIHRvcFBhbmVsLmFwcGVuZChwcm9qZWN0TmFtZSwgYnRuUGFuZWwpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QuYXJlYScpO1xyXG4gICAgcHJvamVjdEFyZWEuYXBwZW5kKGNvbnRhaW5lcik7XHJcbn07XHJcblxyXG5jb25zdCB1bkRpc3BsYXlQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmNvbnRhaW5lcicpO1xyXG4gICAgaWYgKHByb2plY3RDb250YWluZXIpXHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmUoKTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBkaXNwbGF5UHJvamVjdCxcclxuICAgIHVuRGlzcGxheVByb2plY3QsXHJcbn07XHJcbiIsImNsYXNzIHByb2plY3R7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gW107XHJcbiAgICAgICAgdGhpcy50aW1lQ3JlYXRlZCA9IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9kbyh0b2RvKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LnB1c2godG9kbyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVG9kbyh0b2RvKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5saXN0LmluZGV4T2YodG9kbyk7XHJcbiAgICAgICAgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdE5hbWUobmV3TmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7IiwiZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRycykge1xyXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJzKSB7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0QXR0cmlidXRlczsiLCJpbXBvcnQgdG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcbmltcG9ydCBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuXHJcbmNvbnN0IHByb2plY3RMaXN0ID0gW107XHJcbmNvbnN0IHByb2plY3RJZCA9IFtdO1xyXG5cclxuLy8gc3RvcmUgcHJvamVjdCBpZCBpbnRvIHRoZSBsb2NhbFN0b3JhZ2VcclxuY29uc3QgX3N0b3JlSWQgPSAoaWQpID0+IHtcclxuICAgIC8vIGNoZWNrIGZvciBkdXBsaWNhdGVcclxuICAgIGlmIChwcm9qZWN0SWQuaW5kZXhPZihpZCkgPT0gLTEpIHtcclxuICAgICAgICBwcm9qZWN0SWQucHVzaChpZCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RJZCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RJZCkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gcmVtb3ZlIHByb2plY3QgaWQgZnJvbSB0aGUgbG9jYWxTdG9yYWdlXHJcbmNvbnN0IF9yZW1vdmVJZCA9IChpZCkgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gcHJvamVjdElkLmluZGV4T2YoaWQpO1xyXG4gICAgcHJvamVjdElkLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdElkJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdElkKSk7XHJcbn07XHJcblxyXG4vLyBnZXQgZGF0YSBmcm9tIGxvY2FsU3RvcmFnZVxyXG5jb25zdCBfZ2V0U3RvcmFnZSA9ICgpID0+IHtcclxuICAgIHByb2plY3RMaXN0Lmxlbmd0aCA9IDA7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdElkJykpO1xyXG4gICAgICAgIGxldCBsZW5ndGggPSBwcm9qZWN0SWQubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGdpdmluZyBhIHByb2plY3QgZnJvbSBsb2NhbCBzdG9yYWdlIGEgY2xhc3NcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEZyb21TdG9yYWdlID0gbmV3IHByb2plY3QoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHByb2plY3RGcm9tU3RvcmFnZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0SWRbaV0pKTtcclxuICAgICAgICAgICAgICAgIHByb2plY3RGcm9tU3RvcmFnZVtrZXldID0gcHJvamVjdERhdGFba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIGdpdmluZyBhIHRvZG8gZnJvbSBsb2NhbCBzdG9yYWdlIGEgY2xhc3NcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBwcm9qZWN0RnJvbVN0b3JhZ2UubGlzdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0Zyb21TdG9yYWdlID0gbmV3IHRvZG8oKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0b2RvRnJvbVN0b3JhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Zyb21TdG9yYWdlW2tleV0gPSBpdGVtW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0RnJvbVN0b3JhZ2UubGlzdC5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdEZyb21TdG9yYWdlLmxpc3RbaW5kZXhdID0gdG9kb0Zyb21TdG9yYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdEZyb21TdG9yYWdlKTtcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8vIGFkZC9lZGl0IHByb2plY3QgaW4gdGhlIGxvY2FsU3RvcmFnZVxyXG5jb25zdCBzZXRQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld1Byb2plY3QudGltZUNyZWF0ZWQsIEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3QpKTtcclxuICAgIF9zdG9yZUlkKG5ld1Byb2plY3QudGltZUNyZWF0ZWQpO1xyXG4gICAgX2dldFN0b3JhZ2UoKTtcclxufTtcclxuXHJcbi8vIGRlbGV0ZSBwcm9qZWN0IGZyb20gdGhlIGxvY2FsU3RvcmFnZVxyXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKG9sZFByb2plY3QpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG9sZFByb2plY3QudGltZUNyZWF0ZWQpO1xyXG4gICAgX3JlbW92ZUlkKG9sZFByb2plY3QudGltZUNyZWF0ZWQpO1xyXG4gICAgX2dldFN0b3JhZ2UoKTtcclxufTtcclxuXHJcbi8vIGluaXRpYWxpemVcclxuaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT0gMCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RJZCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RJZCkpO1xyXG59XHJcbmVsc2Uge1xyXG4gICAgY29uc3QgaWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdElkJykpO1xyXG4gICAgZm9yIChsZXQgaWQgb2YgaWREYXRhKSB7XHJcbiAgICAgICAgcHJvamVjdElkLnB1c2goaWQpO1xyXG4gICAgfVxyXG59XHJcbi8vIGFsd2F5cyBjcmVhdGUgZGVmYXVsdCBwcm9qZWN0IGlmIG5vIHByb2plY3QgaXMgcHJlc2VudCBpbiB0aGUgbGlzdFxyXG5pZiAocHJvamVjdElkLmxlbmd0aCA9PSAwKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBwcm9qZWN0KCdEZWZhdWx0Jyk7XHJcbiAgICBzZXRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcclxufVxyXG5cclxuX2dldFN0b3JhZ2UoKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBzZXRQcm9qZWN0LFxyXG4gICAgcmVtb3ZlUHJvamVjdCxcclxuICAgIHByb2plY3RMaXN0LFxyXG59O1xyXG5cclxuIiwiY2xhc3MgdG9kbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmlzRG9uZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUlzRG9uZSgpIHtcclxuICAgICAgICB0aGlzLmlzRG9uZSA9ICF0aGlzLmlzRG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0VG9kbyhuZXdUaXRsZSwgbmV3RGVzYywgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjID0gbmV3RGVzYztcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kbzsiLCJpbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgZGlzcGxheVByb2plY3QsIHVuRGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdFwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5QWRkUHJvamVjdE1vZGFsIH0gZnJvbSAnLi9kaXNwbGF5TW9kYWwnO1xyXG5cclxuLy8gY3JlYXRlIGEgbGlzdCBvZiBwcm9qZWN0cyBcclxuY29uc3QgX2NyZWF0ZVByb2plY3RBcmVhID0gKGNvbnRlbnQpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ2FyZWEnKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kKHByb2plY3RMaXN0Q29udGFpbmVyKTtcclxufTtcclxuXHJcbi8vIGNyZWF0ZSBhIGJ1dHRvbiBmb3IgYWRkaW5nIG5ldyBwcm9qZWN0IHRvIHRoZSBsaXN0XHJcbmNvbnN0IF9jcmVhdGVBZGRQcm9qZWN0QnRuID0gKHNpZGViYXIpID0+IHtcclxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0JywgJ2J0bicsICdmYS1zb2xpZCcsICdmYS1wbHVzJyk7XHJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhZGRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlBZGRQcm9qZWN0TW9kYWwoYWRkQnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNpZGViYXIuYXBwZW5kKGFkZEJ0bik7XHJcbn07XHJcblxyXG4vLyByZW1vdmUgYWxsIHRoZSBjaGlsZHJlbiBpbiBhIGxpc3Qgb2YgcHJvamVjdCBpbiBzaWRlYmFyXHJcbmNvbnN0IF9yZWZyZXNoUHJvamVjdExpc3RTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdEl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXIucHJvamVjdC1pdGVtLWxpc3QnKTtcclxuICAgIHByb2plY3RJdGVtTGlzdC5pbm5lckhUTUwgPSAnJztcclxufTtcclxuXHJcbi8vIGRpc3BsYXkgYSBsaXN0IG9mIHByb2plY3QgaW4gc2lkZWJhclxyXG5jb25zdCBkaXNwbGF5UHJvamVjdExpc3RTaWRlYmFyID0gKGNvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXIucHJvamVjdC1pdGVtJyk7XHJcbiAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAvLyBmaW5kIGluZGV4IG9mIGN1cnJlbnQgc2VsZWN0ZWQgcHJvamVjdFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoY3VycmVudFByb2plY3RzW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSlcclxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9IGk7XHJcbiAgICB9XHJcbiAgICBfcmVmcmVzaFByb2plY3RMaXN0U2lkZWJhcigpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInLCAncHJvamVjdC1pdGVtJyk7XHJcbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3RMaXN0W2ldLm5hbWU7ICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gaWYgY2hhbmdpbmcgcHJvamVjdCdzIG5hbWUgb3IgYWRkZWQgbmV3IHByb2plY3RcclxuICAgICAgICBpZiAocHJvamVjdExpc3QubGVuZ3RoID49IGN1cnJlbnRQcm9qZWN0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IChwcmV2aW91c2x5KSBzZWxlY3RlZCBwcm9qZWN0XHJcbiAgICAgICAgICAgIGlmIChpID09IHNlbGVjdGVkSW5kZXgpIFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiBkZWxldGluZyBjdXJyZW50IHByb2plY3RcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IHRoZSBmaXJzdCBwcm9qZWN0XHJcbiAgICAgICAgICAgIGlmIChpID09IDApXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHNob3cgc2VsZWN0ZWQgcHJvamVjdFxyXG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHVuRGlzcGxheVByb2plY3QoKTtcclxuICAgICAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdExpc3RbaV0pO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci5wcm9qZWN0LWl0ZW0uc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHByb2plY3QpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gY3JlYXRlIGhlYWRlciBvZiB3ZWJzaXRlXHJcbmNvbnN0IGhlYWRlciA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInLCAnY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicsICd0ZXh0Jyk7XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gJ015VG9kbyBMaXN0JztcclxuICAgIGNvbnRhaW5lci5hcHBlbmQodGV4dCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb250YWluZXIpO1xyXG59KSgpO1xyXG5cclxuLy8gY3JlYXRlIGNvbnRlbnQgb2Ygd2Vic2l0ZVxyXG5jb25zdCBjb250ZW50ID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnLCAnY29udGFpbmVyJyk7XHJcbiAgICBfY3JlYXRlUHJvamVjdEFyZWEoY29udGFpbmVyKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XHJcblxyXG4gICAgLy8gZGlzcGxheSBmaXJzdCAoZGVmYXVsdCkgcHJvamVjdCBpZiBpdCBleGlzdHNcclxuICAgIGlmIChwcm9qZWN0TGlzdFswXSlcclxuICAgICAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0TGlzdFswXSk7XHJcbn0pKCk7XHJcblxyXG4vLyBjcmVhdGUgc2lkZWJhciBvZiB3ZWJzaXRlXHJcbmNvbnN0IHNpZGViYXIgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LmNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicsICdjb250YWluZXInKTtcclxuICAgIGNvbnRlbnQucHJlcGVuZChjb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IHRvcFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b3BQYW5lbC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJywgJ3RvcC1wYW5lbCcpO1xyXG5cclxuICAgIGNvbnN0IHRvcFBhbmVsVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b3BQYW5lbFR4dC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJywgJ3RleHQnKTtcclxuICAgIHRvcFBhbmVsVHh0LnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcclxuICAgIHRvcFBhbmVsLmFwcGVuZCh0b3BQYW5lbFR4dCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHByb2plY3RJdGVtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdEl0ZW1MaXN0LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInLCAncHJvamVjdC1pdGVtLWxpc3QnKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQodG9wUGFuZWwsIHByb2plY3RJdGVtTGlzdCk7XHJcblxyXG4gICAgX2NyZWF0ZUFkZFByb2plY3RCdG4odG9wUGFuZWwpO1xyXG4gICAgZGlzcGxheVByb2plY3RMaXN0U2lkZWJhcihwcm9qZWN0SXRlbUxpc3QpO1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGRpc3BsYXlQcm9qZWN0TGlzdFNpZGViYXIsXHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3VpXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlL3N0eWxlLmNzc1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==