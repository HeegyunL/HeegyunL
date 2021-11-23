"use strict";
(() => {
var exports = {};
exports.id = 819;
exports.ids = [819];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 7294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const reservationApi = {
    get: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost:8080/partner`)
    ,
    fetch: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost:8080/reservation`)
    ,
    fetchPaging: (page, size)=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost:8080/reservation`)
    ,
    add: (diaryItem)=>axios__WEBPACK_IMPORTED_MODULE_0___default().post(`http://localhost:8080/reservation`, diaryItem)
    ,
    remove: (id)=>axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](`http://localhost:8080/reservation/${id}`)
    ,
    modify: (id, reservationItem)=>axios__WEBPACK_IMPORTED_MODULE_0___default().put(`http://localhost:8080/reservation/${id}`, reservationItem)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationApi);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7294));
module.exports = __webpack_exports__;

})();