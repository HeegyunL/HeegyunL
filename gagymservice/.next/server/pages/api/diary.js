"use strict";
(() => {
var exports = {};
exports.id = 496;
exports.ids = [496];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const diaryApi = {
    fetch: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost:8080/diary`)
    ,
    fetchPaging: (page, size)=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost:8080/diary`)
    ,
    add: (diaryItem)=>axios__WEBPACK_IMPORTED_MODULE_0___default().post(`http://localhost:8080/diary`, diaryItem)
    ,
    remove: (id)=>axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](`http://localhost:8080/diary/${id}`)
    ,
    modify: (id, diaryItem)=>axios__WEBPACK_IMPORTED_MODULE_0___default().put(`http://localhost:8080/diary/${id}`, diaryItem)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (diaryApi);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6203));
module.exports = __webpack_exports__;

})();