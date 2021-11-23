"use strict";
(() => {
var exports = {};
exports.id = 166;
exports.ids = [166];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const fileApi = {
    upload: (formFile)=>axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"http://localhost:8081/"}/files`, formFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
    ,
    remove: (objectKey)=>axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](`${"http://15.164.54.15:8081/"}/files/${objectKey}`)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fileApi);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3812));
module.exports = __webpack_exports__;

})();