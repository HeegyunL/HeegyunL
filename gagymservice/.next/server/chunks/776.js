"use strict";
exports.id = 776;
exports.ids = [776];
exports.modules = {

/***/ 3776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ diarySaga),
  "ZO": () => (/* binding */ requestFetchDiarys),
  "Xd": () => (/* binding */ requestFetchPagingDiarys),
  "aS": () => (/* binding */ requestModifyDiary),
  "cb": () => (/* binding */ requestRemoveDiary)
});

// UNUSED EXPORTS: requestAddDiary

// EXTERNAL MODULE: ./provider/modules/diary.ts
var diary = __webpack_require__(8693);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: external "@redux-saga/core/effects"
var effects_ = __webpack_require__(3673);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./pages/api/diary.ts

const diaryApi = {
    fetch: ()=>external_axios_default().get(`http://localhost:8080/diary`)
    ,
    fetchPaging: (page, size)=>external_axios_default().get(`http://localhost:8080/diary`)
    ,
    add: (diaryItem)=>external_axios_default().post(`http://localhost:8080/diary`, diaryItem)
    ,
    remove: (id)=>external_axios_default()["delete"](`http://localhost:8080/diary/${id}`)
    ,
    modify: (id, diaryItem)=>external_axios_default().put(`http://localhost:8080/diary/${id}`, diaryItem)
};
/* harmony default export */ const api_diary = (diaryApi);

;// CONCATENATED MODULE: ./middleware/modules/diary.ts




/* ========= saga action을 생성하는 부분 =============== */ const requestAddDiary = (0,toolkit_.createAction)(`${diary/* default.name */.ZP.name}/requestAddDiary`);
const requestFetchDiarys = (0,toolkit_.createAction)(`${diary/* default.name */.ZP.name}/requestFetchDiarys`);
const requestFetchPagingDiarys = (0,toolkit_.createAction)(`${diary/* default.name */.ZP.name}/requestFetchPagingDiarys`);
const requestRemoveDiary = (0,toolkit_.createAction)(`${diary/* default.name */.ZP.name}/requestRemoveDiary`);
const requestModifyDiary = (0,toolkit_.createAction)(`${diary/* default.name */.ZP.name}/requestModifyDiary`);
/* ========= saga action을 처리하는 부분 =============== */ function* addData(action) {
    yield console.log("--addData--");
    yield console.log(action);
    const diaryItemPayload = action.payload;
    const diaryItemRequest = {
        memberName: diaryItemPayload.memberName,
        diaryMorning: diaryItemPayload.diaryMorning,
        diaryLunch: diaryItemPayload.diaryLunch,
        diaryDinner: diaryItemPayload.diaryDinner,
        diaryRoutine: diaryItemPayload.diaryRoutine,
        diaryRequest: diaryItemPayload.diaryRequest,
        trainerName: diaryItemPayload.trainerName,
        trainerFeedback: diaryItemPayload.trainerFeedback
    };
    const result = yield (0,effects_.call)(api_diary.add, diaryItemRequest);
    const diaryItem = {
        id: result.data.id,
        memberName: result.data.memberName,
        diaryMorning: result.data.diaryMorning,
        diaryLunch: result.data.diaryLunch,
        diaryDinner: result.data.diaryDinner,
        diaryRoutine: result.data.diaryRoutine,
        diaryRequest: result.data.diaryRequest,
        trainerName: result.data.trainerName,
        trainerFeedback: result.data.trainerFeedback,
        diaryCreateTime: result.data.diaryCreateTime
    };
    yield (0,effects_.put)((0,diary/* addDiary */._x)(diaryItem));
    yield (0,effects_.put)((0,diary/* initialCompleted */.Il)());
}
function* fetchData() {
    yield console.log("--fetchData--");
    const result = yield (0,effects_.call)(api_diary.fetch);
    const diarys = result.data.map((item)=>({
            id: item.id,
            memberName: item.memberName,
            diaryMorning: item.diaryMorning,
            diaryLunch: item.diaryLunch,
            diaryDinner: item.diaryDinner,
            diaryRoutine: item.diaryRoutine,
            diaryRequest: item.diaryRequest,
            trainerName: item.trainerName,
            trainerFeedback: item.trainerFeedback,
            diaryCreateTime: item.diaryCreateTime
        })
    );
    yield (0,effects_.put)((0,diary/* initialDiary */.Fo)(diarys));
}
function* fetchPagingData(action) {
    yield console.log("--fetchPagingData--");
    const page = action.payload.page;
    const size = action.payload.size;
    // 백엔드에서 데이터 받아오기
    const result = yield (0,effects_.call)(api_diary.fetchPaging, page, size);
    const diaryPage = {
        data: result.data.content.map((item)=>({
                id: item.id,
                memberName: item.memberName,
                diaryMorning: item.diaryMorning,
                diaryLunch: item.diaryLunch,
                diaryDinner: item.diaryDinner,
                diaryRoutine: item.diaryRoutine,
                diaryRequest: item.diaryRequest,
                trainerName: item.trainerName,
                trainerFeedback: item.trainerFeedback,
                diaryCreateTime: item.diaryCreateTime
            })
        ),
        totalElements: result.data.totalElements,
        totalPages: result.data.totalPages,
        page: result.data.number,
        pageSize: result.data.size,
        isLast: result.data.last
    };
    yield (0,effects_.put)((0,diary/* initialPagedDiary */._S)(diaryPage));
}
function* removeData(action) {
    yield console.log("--removeData--");
    const id = action.payload;
    const result = yield (0,effects_.call)(api_diary.remove, id);
    if (result.data) {
        yield (0,effects_.put)((0,diary/* removeDiary */.lq)(id));
    }
    yield (0,effects_.put)((0,diary/* initialCompleted */.Il)());
}
function* modifyData(action) {
    yield console.log("--modifyData--");
    const diaryItemPayload = action.payload;
    const diaryItemRequest = {
        memberName: diaryItemPayload.memberName,
        diaryMorning: diaryItemPayload.diaryMorning,
        diaryLunch: diaryItemPayload.diaryLunch,
        diaryDinner: diaryItemPayload.diaryDinner,
        diaryRoutine: diaryItemPayload.diaryRoutine,
        diaryRequest: diaryItemPayload.diaryRequest,
        trainerName: diaryItemPayload.trainerName,
        trainerFeedback: diaryItemPayload.trainerFeedback
    };
    const result = yield (0,effects_.call)(api_diary.modify, diaryItemPayload.id, diaryItemRequest);
    const diaryItem = {
        id: result.data.id,
        memberName: result.data.memberName,
        diaryMorning: result.data.diaryMorning,
        diaryLunch: result.data.diaryLunch,
        diaryDinner: result.data.diaryDinner,
        diaryRoutine: result.data.diaryRoutine,
        diaryRequest: result.data.diaryRequest,
        trainerName: result.data.trainerName,
        trainerFeedback: result.data.trainerFeedback,
        diaryCreateTime: result.data.diaryCreateTime
    };
    yield (0,effects_.put)((0,diary/* modifyDiary */.Z4)(diaryItem));
    yield (0,effects_.put)((0,diary/* initialCompleted */.Il)());
}
/* ========= saga action을 감지(take)하는 부분 =============== */ function* diarySaga() {
    yield (0,effects_.takeEvery)(requestAddDiary, addData);
    yield (0,effects_.takeLatest)(requestFetchDiarys, fetchData);
    yield (0,effects_.takeLatest)(requestFetchPagingDiarys, fetchPagingData);
    yield (0,effects_.takeEvery)(requestRemoveDiary, removeData);
    yield (0,effects_.takeEvery)(requestModifyDiary, modifyData);
};


/***/ })

};
;