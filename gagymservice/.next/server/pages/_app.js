"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@redux-saga/core"
const core_namespaceObject = require("@redux-saga/core");
var core_default = /*#__PURE__*/__webpack_require__.n(core_namespaceObject);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: external "redux-saga/effects"
const effects_namespaceObject = require("redux-saga/effects");
// EXTERNAL MODULE: ./middleware/modules/partner.ts + 1 modules
var partner = __webpack_require__(9715);
// EXTERNAL MODULE: ./middleware/modules/diary.ts + 1 modules
var diary = __webpack_require__(1180);
// EXTERNAL MODULE: ./middleware/modules/trainer.ts + 1 modules
var trainer = __webpack_require__(2584);
// EXTERNAL MODULE: ./middleware/modules/reservation.ts + 1 modules
var reservation = __webpack_require__(1471);
;// CONCATENATED MODULE: ./middleware/index.ts





function* rootSaga() {
    yield (0,effects_namespaceObject.fork)(partner/* default */.ZP);
    yield (0,effects_namespaceObject.fork)(trainer/* default */.ZP);
    yield (0,effects_namespaceObject.fork)(diary/* default */.ZP);
    yield (0,effects_namespaceObject.fork)(reservation/* default */.ZP);
};

// EXTERNAL MODULE: ./provider/modules/partner.ts
var modules_partner = __webpack_require__(5202);
// EXTERNAL MODULE: ./provider/modules/diary.ts
var modules_diary = __webpack_require__(8693);
// EXTERNAL MODULE: ./provider/modules/trainer.ts
var modules_trainer = __webpack_require__(3750);
// EXTERNAL MODULE: ./provider/modules/reservation.ts
var modules_reservation = __webpack_require__(1059);
// EXTERNAL MODULE: ./provider/modules/allert.ts
var allert = __webpack_require__(9351);
;// CONCATENATED MODULE: ./provider/index.ts








//saga middleware 생성
//redux saga는 redux 상태처리 전/후를 관리 해주는 라이브러리
const sagaMiddleware = core_default()();
//global state(전역상태) 저장소 만듬
//다른 컴포넌트와 state가 공유됨
const store = (0,toolkit_.configureStore)({
    reducer: {
        partner: modules_partner/* default */.ZP,
        diary: modules_diary/* default */.ZP,
        trainer: modules_trainer/* default */.ZP,
        reservation: modules_reservation/* default */.ZP,
        allert: allert/* default */.ZP
    },
    middleware: [
        sagaMiddleware
    ],
    devTools: true //개발툴 사용 여부
});
sagaMiddleware.run(rootSaga);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./pages/_app.tsx






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3673:
/***/ ((module) => {

module.exports = require("@redux-saga/core/effects");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [715,584,693,180,471], () => (__webpack_exec__(8022)));
module.exports = __webpack_exports__;

})();