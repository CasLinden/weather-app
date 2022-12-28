/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@100&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  color: whitesmoke;\n}\n\nbody {\n  background-color: #41463D;\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.page-wrapper {\n  width: 100vw;\n  max-width: 700px;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  padding: 24px;\n  margin: 0;\n  background-color: #1CFEBA;\n}\n\n.search-container {\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 25px;\n  padding: 12px 24px;\n}\n\n#location-input {\n  border: none;\n  background-color: transparent;\n  margin-left: 12px;\n  font-size: 15px;\n}\n\n#location-input:focus {\n  outline: white;\n  border: white;\n}\n\nmain {\n  display: grid;\n  gap: 12px;\n  padding: 12px;\n}\n\n.heading-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.location-wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n\nh2 {\n  font-size: 17px;\n  color: #95F2D9;\n}\n\n#clock {\n  font-family: \"Chivo Mono\", monospace;\n}\n\n.weather-traits-wrapper {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 4px;\n  margin-bottom: 8px;\n}\n\n.weather-trait-container {\n  border-radius: 25px;\n  background-color: rgba(255, 255, 255, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 150px;\n}\n\n#main-icon {\n  height: 100px;\n  width: 100px;\n}\n\n.icon {\n  height: 80px;\n  width: 80px;\n}\n\n.current-temp {\n  transform: translate(-20px, 5px);\n  font-size: 30px;\n}\n\n.other-temp-unit {\n  transform: translate(25px, 35px);\n  background-color: transparent;\n  padding: 4px;\n  border-radius: 5px;\n}\n\n#current-temp-container {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  padding-left: 24px;\n}\n\n.wind {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 4px;\n  gap: 10px;\n}\n\n.directions-grid {\n  aspect-ratio: 1/1;\n  width: 90px;\n  display: grid;\n  grid-template-columns: 1rem 1fr 1rem;\n  grid-template-rows: 1rem 1fr 1rem;\n  grid-template-areas: \". N .\" \"W I E\" \". S .\";\n}\n\n.N {\n  grid-area: N;\n}\n\n.W {\n  grid-area: W;\n}\n\n.compass-container {\n  grid-area: I;\n}\n\n.E {\n  grid-area: E;\n}\n\n.S {\n  grid-area: S;\n}\n\n.directions-grid > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.compass-container {\n  border: 4px solid whitesmoke;\n  border-radius: 50%;\n  margin: 2px;\n}\n\n#compass-arrow {\n  width: 65%;\n  transition: all 1s;\n}\n\n.wind-speed-container {\n  display: flex;\n  gap: 4px;\n  justify-content: flex-end;\n  margin-top: 8px;\n}\n\n.wind-icon {\n  height: 1rem;\n  width: 1rem;\n  color: #B8CDF8;\n}\n\n.humidity {\n  transform: translateY(15px);\n  font-size: 20px;\n}\n\n.hum-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  font-size: 18px;\n}\n\n.forecast-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.forecast-entry-container {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\nh4 {\n  color: #95F2D9;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAUA;EACE,sBAAA;EACA,UAAA;EACA,SAAA;EACA,iBAAA;AAPF;;AAUA;EACI,yBAbU;EAcV,iCAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAPJ;;AAUA;EACE,YAAA;EACA,gBAAA;AAPF;;AAYA;EACE,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;EACA,aAAA;EACA,SAAA;EACA,yBAlCY;AAyBd;;AAWA;EACE,aAAA;EACA,oCAAA;EACA,mBAAA;EACA,kBAAA;AARF;;AAWA;EACE,YAAA;EACA,6BAAA;EACA,iBAAA;EACA,eAAA;AARF;;AAWA;EACE,cAAA;EACA,aAAA;AARF;;AAaA;EACC,aAAA;EACA,SAAA;EACA,aAAA;AAVD;;AAaA;EACE,aAAA;EACA,sBAAA;AAVF;;AAaA;EACE,aAAA;EACA,8BAAA;AAVF;;AAaA;EACE,eAAA;EACA,cAAA;AAVF;;AAYA;EACE,oCAAA;AATF;;AAcA;EACE,aAAA;EACA,2DAAA;EACA,QAAA;EACA,kBAAA;AAXF;;AAcA;EACE,mBAAA;EACA,0CAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;AAXF;;AAcA;EACE,aAAA;EACA,YAAA;AAXF;;AAcA;EACE,YAAA;EACA,WAAA;AAXF;;AAgBA;EACE,gCAAA;EACA,eAAA;AAbF;;AAgBA;EACE,gCAAA;EACA,6BAAA;EACA,YAAA;EACA,kBAAA;AAbF;;AAgBA;EACE,aAAA;EACA,gCAAA;EACA,kBAAA;AAbF;;AAkBA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,YAAA;EACA,SAAA;AAfF;;AAkBA;EACE,iBAAA;EACA,WAAA;EACA,aAAA;EACA,oCAAA;EACA,iCAAA;EACA,4CAAA;AAfF;;AAoBA;EACE,YAAA;AAjBF;;AAoBA;EACE,YAAA;AAjBF;;AAoBA;EACE,YAAA;AAjBF;;AAoBA;EACE,YAAA;AAjBF;;AAoBA;EACE,YAAA;AAjBF;;AAoBA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AAjBF;;AAmBA;EACE,4BAAA;EACA,kBAAA;EACA,WAAA;AAhBF;;AAmBA;EACE,UAAA;EACA,kBAAA;AAhBF;;AAmBA;EACE,aAAA;EACA,QAAA;EACA,yBAAA;EACA,eAAA;AAhBF;;AAmBA;EACE,YAAA;EACA,WAAA;EACA,cAxMc;AAwLhB;;AAqBA;EACE,2BAAA;EACA,eAAA;AAlBF;;AAqBA;EACE,aAAA;EACA,sBAAA;AAlBF;;AAuBA;EACE,eAAA;AApBF;;AAsBA;EACE,aAAA;EACE,qCAAA;AAnBJ;;AAsBA;EACE,aAAA;EACA,mBAAA;EACA,qBAAA;AAnBF;;AAsBA;EACE,cAAA;AAnBF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@100&display=swap');\n\n$primary-color: #B8CDF8;\n$secondary-color: #9D8DF1;\n$third-color: #41463D;\n$fourth-color:#95F2D9;\n$fifth-color: #1CFEBA;\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  color: whitesmoke;\n}\n\nbody {\n    background-color: $third-color;\n    font-family: 'Roboto', sans-serif;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.page-wrapper{\n  width: 100vw;\n  max-width: 700px;\n}\n\n// ================= START OF BLOCK ICON ========================\n\nheader{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  padding: 24px;\n  margin: 0;\n  background-color: $fifth-color;\n}\n.search-container{\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 25px;\n  padding: 12px 24px;\n}\n\n#location-input{\n  border: none;\n  background-color: transparent;\n  margin-left: 12px;\n  font-size: 15px;\n}\n\n#location-input:focus{\n  outline: white;\n  border: white;\n}\n\n// ================= START OF MAIN ========================\n\nmain {\n display: grid;\n gap: 12px;\n padding: 12px;\n}\n\n.heading-wrapper{\n  display: flex;\n  flex-direction: column;\n}\n\n.location-wrapper{\n  display: flex;\n  justify-content: space-between;\n}\n\nh2{\n  font-size: 17px;\n  color: #95F2D9;\n}\n#clock{\n  font-family: 'Chivo Mono', monospace;\n}\n\n// ================= START OF ICON BLOCK ========================\n\n.weather-traits-wrapper{\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 4px;\n  margin-bottom: 8px;\n}\n\n.weather-trait-container{\n  border-radius: 25px;\n  background-color: rgba(255, 255, 255, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 150px;\n}\n\n#main-icon{\n  height: 100px;\n  width: 100px;\n}\n\n.icon{\n  height: 80px;\n  width: 80px;\n}\n\n// ================= START OF TEMP BLOCK ========================\n\n.current-temp{\n  transform: translate(-20px, 5px);\n  font-size: 30px;\n}\n\n.other-temp-unit{\n  transform: translate(25px, 35px);\n  background-color: transparent;\n  padding: 4px;\n  border-radius: 5px;\n}\n\n#current-temp-container{\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  padding-left: 24px;\n}\n\n// ================= START OF WIND BLOCK ========================\n\n.wind{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 4px;\n  gap: 10px;\n}\n\n.directions-grid{\n  aspect-ratio: 1/1;\n  width: 90px;\n  display: grid;\n  grid-template-columns: 1rem 1fr 1rem;\n  grid-template-rows: 1rem 1fr 1rem;\n  grid-template-areas: \". N .\"\n                       \"W I E\"\n                       \". S .\";\n}\n\n.N{\n  grid-area: N;\n}\n\n.W {\n  grid-area: W;\n}\n\n.compass-container {\n  grid-area: I;\n}\n\n.E {\n  grid-area: E;\n}\n\n.S {\n  grid-area: S;\n}\n\n.directions-grid>div{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.compass-container{\n  border: 4px solid whitesmoke;\n  border-radius: 50%;\n  margin: 2px;\n}\n\n#compass-arrow{\n  width: 65%;\n  transition: all 1s;\n}\n\n.wind-speed-container{\n  display: flex;\n  gap: 4px;\n  justify-content: flex-end;\n  margin-top: 8px;\n}\n\n.wind-icon{\n  height: 1rem;\n  width: 1rem;\n  color: $primary-color;\n}\n\n// ================= START OF HUMIDITY BLOCK ========================\n\n.humidity{\n  transform: translateY(15px);\n  font-size: 20px;\n}\n\n.hum-wrapper{\n  display: flex;\n  flex-direction: column;\n}\n\n// ================= START OF FORECAST ========================\n\nh3{\n  font-size: 18px;\n}\n.forecast-container{\n  display: grid;\n    grid-template-columns: repeat(4, 1fr);\n}\n\n.forecast-entry-container{\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\nh4 {\n  color: #95F2D9;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/DOMFunctionsForecast.js":
/*!*************************************!*\
  !*** ./src/DOMFunctionsForecast.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayForecast": () => (/* binding */ displayForecast),
/* harmony export */   "foreCastKelvins": () => (/* binding */ foreCastKelvins)
/* harmony export */ });
/* harmony import */ var _apifunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apifunctions */ "./src/apifunctions.js");
/* harmony import */ var _temperatures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temperatures */ "./src/temperatures.js");




let foreCastKelvins = []

async function displayForecast(geo) {
  let data = await (0,_apifunctions__WEBPACK_IMPORTED_MODULE_0__.getFiveDayForecast)(geo);
  let fourDayData = fourDays(trimToday(data.list))
  createElements(fourDayData)
}

// We need to trim off data about the remainder of today,  we only get forecast data for 4 full coming days

function getDate(entry) {
  return entry.dt_txt.split(" ")[0]
}

function getDayOfMonth(entry) {
  return getDate(entry).split("-")[2].substring(0, 2);
}

function findTomorrowIndex(list) {
  const today = getDayOfMonth(list[0])
  const tomorrow = list.find((day) => getDayOfMonth(day) != today);
  return list.indexOf(tomorrow)
}

function trimToday(list) {
  return list.slice(findTomorrowIndex(list))
}

function fourDays (newList) {
  let fourDayArray = [];
  for (let i = 0; i < 32; i += 8) {
    fourDayArray.push(newList.slice(i, i + 8));
  }
  return fourDayArray
}

// BELOW: dom elements 

function createElements(fourDayData) {
  const container = document.querySelector('.forecast-container')
  clearContainer()
  foreCastKelvins = []
  fourDayData.forEach(day => {
    let entryContainer = makeEntryContainer()
    entryContainer.appendChild(makeEntryDate(day))
    entryContainer.appendChild(makeEntryIcon(getIconUrl(getDayTimeIcon(day))));
    entryContainer.appendChild(makeEntryTemp(day))
    container.appendChild(entryContainer)
  }); 
  addDivisions()
}

function clearContainer() {
    const container = document.querySelector(".forecast-container");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
}

function makeEntryContainer() {
  let container = document.createElement("div");
  container.classList.add("forecast-entry-container");
  return container;
}

function makeEntryIcon(url) {
  let icon = document.createElement('img')
  icon.classList.add('forecast-entry-icon', 'icon')
  icon.src = url
  return icon
}

function getDayTimeIcon(day) {
  let dayTimeIcons = day
    .map(entry => entry.weather[0].icon)
    .filter(icon => icon.substring(2) === 'd')

  //for the simple forecast we want to display the most common of the day time icons
    const iconCounts = dayTimeIcons.reduce((counts, icon) => {
      counts[icon] = (counts[icon] || 0) + 1;
      return counts;
    }, {});

    let commonIcon;
    let highestCount = 0;
//the highest count is stored in commonIcon
    Object.keys(iconCounts).forEach((str) => {
      if (iconCounts[str] > highestCount) {
        highestCount = iconCounts[str];
        commonIcon = str;
      }
    });
    return commonIcon;
}

function getIconUrl(icon) {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

function makeEntryTemp(day) {
  let temp = document.createElement('div')
  temp.classList.add('forecast-entry-temp')
  temp.textContent = (0,_temperatures__WEBPACK_IMPORTED_MODULE_1__.convertTemp)(getAvgTemp(day))
  foreCastKelvins.push(getAvgTemp(day))
  return temp
}

function getAvgTemp(day) {
  return (
    day
      .map((entry) => entry.main.temp)
      .reduce((total, currentVal) => total + currentVal, 0) / 8
  );
}

function makeEntryDate(day) {
  let dateContainer = document.createElement('h4')
  dateContainer.classList.add('forecast-entry-date')
  dateContainer.textContent = `${daysOfWeek[new Date(day[3].dt_txt).getDay()]} ${getDayOfMonth(day[0])}`;
  return dateContainer
}

const daysOfWeek = [
  "Sun",
  "Mon",
  "Tues",
  "Wed",
  "Thur",
  "Fri",
  "Sat",
];

function addDivisions() {
  const icons = document.getElementsByClassName('forecast-entry-container')
  const iconsArray = Array.from(icons)
  iconsArray.pop()
  iconsArray.forEach(element => {
    element.style.borderRight = "1px solid rgba(255, 255, 255, 0.3)"
  })
}




/***/ }),

/***/ "./src/DOMFunctionsMain.js":
/*!*********************************!*\
  !*** ./src/DOMFunctionsMain.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentKelvin": () => (/* binding */ currentKelvin),
/* harmony export */   "displayCurrentWeather": () => (/* binding */ displayCurrentWeather)
/* harmony export */ });
/* harmony import */ var _apifunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apifunctions */ "./src/apifunctions.js");
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ "./src/clock.js");
/* harmony import */ var _assets_temperature_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/temperature-icon.svg */ "./src/assets/temperature-icon.svg");
/* harmony import */ var _assets_compass_arrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/compass-arrow.svg */ "./src/assets/compass-arrow.svg");
/* harmony import */ var _assets_wind_speed_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/wind-speed.svg */ "./src/assets/wind-speed.svg");
/* harmony import */ var _assets_humidity_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/humidity-icon.svg */ "./src/assets/humidity-icon.svg");
/* harmony import */ var _temperatures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./temperatures */ "./src/temperatures.js");








let currentKelvin

function typeInLoc() {
  const input = document.getElementById("location-input")
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        let inputField = document.getElementById("location-input").value;
        document.getElementById("location-input").value = "";
        (0,_apifunctions__WEBPACK_IMPORTED_MODULE_0__.setNewLoc)(inputField);
        setTimeout(() => {
          input.blur()
        }, 100);
      }
    });
}
typeInLoc();

async function displayCurrentWeather(geo) {
  let data = await (0,_apifunctions__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeather)(geo);
  currentKelvin = data.main.temp
  displayWeatherDescription(data.weather[0].description);
  displayName(data.name, data.sys.country);
  (0,_clock__WEBPACK_IMPORTED_MODULE_1__.displayTime)(data.timezone);
  displayMainIcon(data.weather[0].icon);
  displayTemp(data.main.temp);
  displayWind(data.wind.speed, data.wind.deg);
  displayHumidity(data.main.humidity);
}

function displayWeatherDescription(desc) {
  document.getElementById("description").textContent = desc
    .split(" ")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
}

function displayName(name, country) {
  document.getElementById(
    "location"
  ).textContent = `${name.toUpperCase()} ${country}`;
}

function displayMainIcon(icon) {
  document.getElementById(
    "main-icon"
  ).src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

function displayTemp(temp) {
 document.querySelector(".temperature-icon").src = _assets_temperature_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
 document.querySelector(".current-temp").textContent = (0,_temperatures__WEBPACK_IMPORTED_MODULE_6__.convertTemp)(temp)
}

function displayWind(speed, deg) {
  document.querySelector(".wind-speed").textContent = `${Math.round(
    speed * 3.6
  )} km/h`;
  document.querySelector(".wind-icon").src = _assets_wind_speed_svg__WEBPACK_IMPORTED_MODULE_4__;
  const arrow = document.getElementById("compass-arrow");
  arrow.src = _assets_compass_arrow_svg__WEBPACK_IMPORTED_MODULE_3__;
  arrow.style.transform = "rotate(" + deg + "deg)";
}

function displayHumidity(hum) {
  document.querySelector(".humidity").textContent = hum;
  document.querySelector(".humidity-icon").src = _assets_humidity_icon_svg__WEBPACK_IMPORTED_MODULE_5__;
}




/***/ }),

/***/ "./src/apifunctions.js":
/*!*****************************!*\
  !*** ./src/apifunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "geoLoc": () => (/* binding */ geoLoc),
/* harmony export */   "getCurrentWeather": () => (/* binding */ getCurrentWeather),
/* harmony export */   "getFiveDayForecast": () => (/* binding */ getFiveDayForecast),
/* harmony export */   "setNewLoc": () => (/* binding */ setNewLoc)
/* harmony export */ });
/* harmony import */ var _DOMFunctionsMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMFunctionsMain */ "./src/DOMFunctionsMain.js");
/* harmony import */ var _DOMFunctionsForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMFunctionsForecast */ "./src/DOMFunctionsForecast.js");
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geolocation */ "./src/geolocation.js");




const key = "13ef3f48c50704ff29636e4380808e39";

let loc = "Suginami";

function setNewLoc(newLoc) {
  loc = newLoc;
  (0,_DOMFunctionsMain__WEBPACK_IMPORTED_MODULE_0__.displayCurrentWeather)();
  (0,_DOMFunctionsForecast__WEBPACK_IMPORTED_MODULE_1__.displayForecast)();
}

function geoLoc() {
  (0,_DOMFunctionsMain__WEBPACK_IMPORTED_MODULE_0__.displayCurrentWeather)("geo");
  (0,_DOMFunctionsForecast__WEBPACK_IMPORTED_MODULE_1__.displayForecast)("geo");
}

// geo param is only passed when calculating location from lat and long

function buildURL(geo) {
  if (geo) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${_geolocation__WEBPACK_IMPORTED_MODULE_2__.lat}&lon=${_geolocation__WEBPACK_IMPORTED_MODULE_2__.lon}&appid=${key}`;
  }
  return `https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${key}`;
}

async function getCurrentWeather(geo) {
  let response = await fetch(buildURL(geo));
  let data = await response.json();
  return data;
}

function buildForecastURL(geo) {
  if (geo) {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${_geolocation__WEBPACK_IMPORTED_MODULE_2__.lat}&lon=${_geolocation__WEBPACK_IMPORTED_MODULE_2__.lon}&appid=${key}`;
  }
  return `https://api.openweathermap.org/data/2.5/forecast?q=${loc}&APPID=${key}`;
}

async function getFiveDayForecast(geo) {
  let response = await fetch(buildForecastURL(geo));
  let data = await response.json();
  return data;
}




/***/ }),

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTime": () => (/* binding */ displayTime)
/* harmony export */ });
function displayTime(timeZone) {
  const now = new Date();
  const clientLocationOffsetInMs = now.getTimezoneOffset() * 60 * 1000;
  const currentTime = new Date(
    now.getTime() + clientLocationOffsetInMs + timeZone * 1000
  );

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + ":" + minutes + ":" + seconds;

  let clock = document.getElementById("clock");
  clock.textContent = time;

  startClock(timeZone);
}

let intervalID;

function startClock(timeZone) {
  if (!intervalID) {
    intervalID = setInterval(() => {
      displayTime(timeZone);
    }, 1000);
  } else {
    clearInterval(intervalID);
    intervalID = setInterval(() => {
      displayTime(timeZone);
    }, 1000);
  }
}


/***/ }),

/***/ "./src/geolocation.js":
/*!****************************!*\
  !*** ./src/geolocation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocation": () => (/* binding */ getLocation),
/* harmony export */   "lat": () => (/* binding */ lat),
/* harmony export */   "lon": () => (/* binding */ lon)
/* harmony export */ });
/* harmony import */ var _apifunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apifunctions */ "./src/apifunctions.js");


let lat = 35.6995;
let lon = 139.6355;

function getLocation() {
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  (0,_apifunctions__WEBPACK_IMPORTED_MODULE_0__.geoLoc)()
}



/***/ }),

/***/ "./src/temperatures.js":
/*!*****************************!*\
  !*** ./src/temperatures.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTemp": () => (/* binding */ convertTemp),
/* harmony export */   "tempUnit": () => (/* binding */ tempUnit),
/* harmony export */   "toggleTempUnit": () => (/* binding */ toggleTempUnit)
/* harmony export */ });
/* harmony import */ var _DOMFunctionsForecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMFunctionsForecast */ "./src/DOMFunctionsForecast.js");
/* harmony import */ var _DOMFunctionsMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMFunctionsMain */ "./src/DOMFunctionsMain.js");



let tempUnit = "Celsius";

function toggleTempUnit() {
  tempUnit === "Celsius" ? (tempUnit = "Fahrenheit") : (tempUnit = "Celsius");
  toggleCurrentTemp()
  toggleForecastTemps()
  toggleButtonText()
}

function toggleCurrentTemp() {
  let currentTemp = document.querySelector('.current-temp')
  currentTemp.textContent = convertTemp(_DOMFunctionsMain__WEBPACK_IMPORTED_MODULE_1__.currentKelvin)
}

function toggleForecastTemps() {
  let forecastTemps = document.getElementsByClassName("forecast-entry-temp");
  Array.from(forecastTemps).forEach((element, index) => { 
    element.textContent = convertTemp(_DOMFunctionsForecast__WEBPACK_IMPORTED_MODULE_0__.foreCastKelvins[index])
  });
}

function toggleButtonText() {
  let btn = document.querySelector('.other-temp-unit')
  if (btn.textContent === '°F') {
    btn.textContent = '°C'
  } else {
    btn.textContent = '°F';
  }
}

function convertTemp(KelvinTemp) {
  if (tempUnit === "Celsius") {
    var localTemp = `${Math.round(KelvinTemp - 273.15)}°C`;
  } else if (tempUnit === "Fahrenheit") {
    var localTemp = `${Math.round(((KelvinTemp - 273.15) * 9) / 5 + 32)}°F`;
  }
  return localTemp
}

document.querySelector('.other-temp-unit').addEventListener("click", toggleTempUnit)



/***/ }),

/***/ "./src/assets/compass-arrow.svg":
/*!**************************************!*\
  !*** ./src/assets/compass-arrow.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "compass-arrow.svg";

/***/ }),

/***/ "./src/assets/humidity-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/humidity-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "humidity-icon.svg";

/***/ }),

/***/ "./src/assets/temperature-icon.svg":
/*!*****************************************!*\
  !*** ./src/assets/temperature-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "temperature-icon.svg";

/***/ }),

/***/ "./src/assets/wind-speed.svg":
/*!***********************************!*\
  !*** ./src/assets/wind-speed.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "wind-speed.svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _DOMFunctionsMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMFunctionsMain */ "./src/DOMFunctionsMain.js");
/* harmony import */ var _DOMFunctionsForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMFunctionsForecast */ "./src/DOMFunctionsForecast.js");
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geolocation */ "./src/geolocation.js");





// display the weather (Suginami by default)
(0,_DOMFunctionsMain__WEBPACK_IMPORTED_MODULE_1__.displayCurrentWeather)();
(0,_DOMFunctionsForecast__WEBPACK_IMPORTED_MODULE_2__.displayForecast)()
;(0,_geolocation__WEBPACK_IMPORTED_MODULE_3__.getLocation)()
})();

/******/ })()
;
//# sourceMappingURL=bundle3a119fb8b162380ae71c.js.map