"use strict";
(() => {
var exports = {};
exports.id = 154;
exports.ids = [154];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 7148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const trainerApi = {
    get: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost:8080/trainer`)
    ,
    // axios.get<응답데이터의타입>(요청URL);
    // GET 요청URL HTTP/1.1
    fetch: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost:8080/trainer`)
    ,
    add: (trainerItem)=>axios__WEBPACK_IMPORTED_MODULE_0___default().post(`http://localhost:8080/trainer`, trainerItem)
    ,
    remove: (id)=>axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](`http://localhost:8080/trainer/${id}`)
    ,
    modify: (id, trainerItem)=>axios__WEBPACK_IMPORTED_MODULE_0___default().put(`http://localhost:8080/trainer/${id}`, trainerItem)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trainerApi);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7148));
module.exports = __webpack_exports__;

})();