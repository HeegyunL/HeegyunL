"use strict";
exports.id = 871;
exports.ids = [871];
exports.modules = {

/***/ 6871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ reservationSaga),
  "pd": () => (/* binding */ requestFetchReservation),
  "yC": () => (/* binding */ requestRemoveReservation)
});

// UNUSED EXPORTS: requestAddReservation, requestFetchReservationItem, requestModifyReservation

// EXTERNAL MODULE: ./provider/modules/diary.ts
var diary = __webpack_require__(8693);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./provider/modules/reservation.ts
var reservation = __webpack_require__(1059);
// EXTERNAL MODULE: external "@redux-saga/core/effects"
var effects_ = __webpack_require__(3673);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./pages/api/reservation.ts

const reservationApi = {
    get: ()=>external_axios_default().get(`http://localhost:8080/partner`)
    ,
    fetch: ()=>external_axios_default().get(`http://localhost:8080/reservation`)
    ,
    fetchPaging: (page, size)=>external_axios_default().get(`http://localhost:8080/reservation`)
    ,
    add: (diaryItem)=>external_axios_default().post(`http://localhost:8080/reservation`, diaryItem)
    ,
    remove: (id)=>external_axios_default()["delete"](`http://localhost:8080/reservation/${id}`)
    ,
    modify: (id, reservationItem)=>external_axios_default().put(`http://localhost:8080/reservation/${id}`, reservationItem)
};
/* harmony default export */ const api_reservation = (reservationApi);

;// CONCATENATED MODULE: ./middleware/modules/reservation.ts





/* ========= saga action을 생성하는 부분 =============== */ const requestAddReservation = (0,toolkit_.createAction)(`${diary/* default.name */.ZP.name}/requestAddReservation`);
const requestFetchReservation = (0,toolkit_.createAction)(`${diary/* default.name */.ZP.name}/requestFetchReservation`);
const requestFetchReservationItem = (0,toolkit_.createAction)(`${diary/* default.name */.ZP.name}/requestFetchReservationItem`);
const requestRemoveReservation = (0,toolkit_.createAction)(`${diary/* default.name */.ZP.name}/requestRemoveReservation`);
const requestModifyReservation = (0,toolkit_.createAction)(`${diary/* default.name */.ZP.name}/requestModifyReservation`);
/* ========= saga action을 처리하는 부분 =============== */ function* addData(action) {
    yield console.log("--addData--");
    yield console.log(action);
    const reservationItemPayload = action.payload;
    const reservationItemRequest = {
        id: reservationItemPayload.id,
        memberName: reservationItemPayload.memberName,
        memberPhone: reservationItemPayload.memberPhone,
        memberRequest: reservationItemPayload.memberRequest,
        gymName: reservationItemPayload.gymName,
        trainerName: reservationItemPayload.trainerName,
        boughtService: reservationItemPayload.boughtService
    };
    const result = yield (0,effects_.call)(api_reservation.add, reservationItemRequest);
    const ReservationItem = {
        id: result.data.id,
        memberName: result.data.memberName,
        memberPhone: result.data.memberPhone,
        memberRequest: result.data.memberRequest,
        gymName: result.data.gymName,
        trainerName: result.data.trainerName,
        boughtService: result.data.boughtService
    };
    yield (0,effects_.put)((0,reservation/* addReservation */.Uq)(ReservationItem));
    yield (0,effects_.put)((0,diary/* initialCompleted */.Il)());
}
function* fetchData() {
    yield console.log("--fetchData--");
    const result = yield (0,effects_.call)(api_reservation.fetch);
    const reservations = result.data.map((item)=>({
            id: item.id,
            memberName: item.memberName,
            memberPhone: item.memberPhone,
            memberRequest: item.memberRequest,
            gymName: item.gymName,
            trainerName: item.trainerName,
            boughtService: item.boughtService
        })
    );
    yield (0,effects_.put)((0,reservation/* initialReservation */._B)(reservations));
}
// function* fetchPagingData(action: PayloadAction<PageRequest>) {
//   yield console.log("--fetchPagingData--");
//   const page = action.payload.page;
//   const size = action.payload.size;
//   // 백엔드에서 데이터 받아오기
//   const result: AxiosResponse<ReservationPagingResponse> = yield call(
//     api.fetchPaging,
//     page,
//     size
//   );
//   const reservationPage: ReservationPage = {
//     data: result.data.content.map(
//       (item) =>
//         ({
//           id: item.id,
//           memberName: item.memberName,
//           memberPhone:item.memberPhone,
//           memberRequest:item.memberRequest,
//           gymName:item.gymName,
//           trainerName:item.trainerName,
//           boughtService:item.boughtService
//         } as ReservationItem)
//     ),
//     totalElements: result.data.totalElements,
//     totalPages: result.data.totalPages,
//     page: result.data.number,
//     pageSize: result.data.size,
//     isLast: result.data.last,
//   };
//   yield put(initialPagedReservation(reservationPage));
// }
function* removeData(action) {
    yield console.log("--removeData--");
    const id = action.payload;
    const result = yield (0,effects_.call)(api_reservation.remove, id);
    if (result.data) {
        yield (0,effects_.put)((0,diary/* removeDiary */.lq)(id));
    }
    yield (0,effects_.put)((0,diary/* initialCompleted */.Il)());
}
function* modifyData(action) {
    yield console.log("--modifyData--");
    const reservationItemPayload = action.payload;
    const reservationItemRequest = {
        id: reservationItemPayload.id,
        memberName: reservationItemPayload.memberName,
        memberPhone: reservationItemPayload.memberPhone,
        memberRequest: reservationItemPayload.memberRequest,
        gymName: reservationItemPayload.gymName,
        trainerName: reservationItemPayload.trainerName,
        boughtService: reservationItemPayload.boughtService
    };
    const result = yield (0,effects_.call)(api_reservation.modify, reservationItemPayload.id, reservationItemRequest);
    const ReservationItem = {
        id: result.data.id,
        memberName: result.data.memberName,
        memberPhone: result.data.memberPhone,
        memberRequest: result.data.memberRequest,
        gymName: result.data.gymName,
        trainerName: result.data.trainerName,
        boughtService: result.data.boughtService
    };
    yield (0,effects_.put)((0,reservation/* modifyReservation */.qp)(ReservationItem));
    yield (0,effects_.put)((0,diary/* initialCompleted */.Il)());
}
// function* fetchMqData() {
//   yield console.log("--fetchData--");
//   const result: AxiosResponse<ReservationItemResponse[]> = yield call(api.fetchMq);
//   const reservations = result.data.map(
//     (item) =>
//       ({
//       id: item.id,
//       memberName: item.memberName,
//       memberPhone:item.memberPhone,
//       memberRequest:item.memberRequest,
//       gymName:item.gymName,
//       trainerName:item.trainerName,
//       boughtService:item.boughtService
//       } as ReservationItem)
//   );
//   yield put(initialReservation(reservations));
// }
// function* fetchPagingMqData(action: PayloadAction<PageRequest>) {
//   yield console.log("--fetchPagingData--");
//   const page = action.payload.page;
//   const size = action.payload.size;
// 백엔드에서 데이터 받아오기
// const result: AxiosResponse<ReservationPagingResponse> = yield call(
//   api.fetchPagingMq,
//   page,
//   size
// );
// const reservationPage: ReservationPage = {
//   data: result.data.content.map(
//     (item) =>
//       ({
//         id: item.id,
//         memberName: item.memberName,
//         memberPhone:item.memberPhone,
//         memberRequest:item.memberRequest,
//         gymName:item.gymName,
//         trainerName:item.trainerName,
//         boughtService:item.boughtService
//       } as ReservationItem)
//   ),
//   totalElements: result.data.totalElements,
//   totalPages: result.data.totalPages,
//   page: result.data.number,
//   pageSize: result.data.size,
//   isLast: result.data.last,
// };
// yield put(initialPagedReservation(reservationPage));
// }
/* ========= saga action을 감지(take)하는 부분 =============== */ function* reservationSaga() {
    yield (0,effects_.takeEvery)(requestAddReservation, addData);
    yield (0,effects_.takeLatest)(requestFetchReservation, fetchData);
    // yield takeLatest(requestFetchReservation, fetchMqData);
    // yield takeLatest(requestFetchPagingReservation, fetchPagingData);
    // yield takeLatest(requestFetchPagingReservation, fetchPagingMqData);
    yield (0,effects_.takeEvery)(requestRemoveReservation, removeData);
    yield (0,effects_.takeEvery)(requestModifyReservation, modifyData);
};


/***/ }),

/***/ 1059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Uq": () => (/* binding */ addReservation),
/* harmony export */   "qp": () => (/* binding */ modifyReservation),
/* harmony export */   "_B": () => (/* binding */ initialReservation),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports removeReservation, initialCompleted */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    data: [],
    isFetched: false
};
const reservationSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "reservation",
    initialState,
    reducers: {
        addReservation: (state, action)=>{
            const reservation = action.payload;
            console.log("--in reducer function--");
            console.log(reservation);
            state.data.unshift(reservation);
            state.isAddCompleted = true;
        },
        initialCompleted: (state)=>{
            delete state.isAddCompleted;
            delete state.isRemoveCompleted;
            delete state.isModifyCompleted;
        },
        removeReservation: (state, action)=>{
            const id = action.payload;
            state.data.splice(state.data.findIndex((item)=>item.id === id
            ), 1);
            state.isRemoveCompleted = true;
        },
        modifyReservation: (state, action)=>{
            const modifyItem = action.payload;
            const reservationItem = state.data.find((item)=>item.id === modifyItem.id
            );
            if (reservationItem) {
                reservationItem.memberName = modifyItem.memberName;
                reservationItem.gymName = modifyItem.gymName;
                reservationItem.trainerName = modifyItem.trainerName;
                reservationItem.memberPhone = modifyItem.memberPhone;
                reservationItem.memberRequest = modifyItem.memberRequest;
                reservationItem.boughtService = modifyItem.boughtService;
            }
            state.isModifyCompleted = true;
        },
        initialReservation: (state, action)=>{
            const reservations = action.payload;
            state.data = reservations;
            state.isFetched = true;
        }
    }
});
const { addReservation , removeReservation , modifyReservation , initialReservation , initialCompleted ,  } = reservationSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationSlice.reducer);


/***/ })

};
;