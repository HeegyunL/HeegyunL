"use strict";
exports.id = 183;
exports.ids = [183];
exports.modules = {

/***/ 183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ trainerSaga),
  "kX": () => (/* binding */ requestAddTrainer),
  "MB": () => (/* binding */ requestFetchTrainer),
  "UI": () => (/* binding */ requestModifyTrainer)
});

// UNUSED EXPORTS: requestFetchTrainerItem, requestRemoveTrainer

// EXTERNAL MODULE: external "@redux-saga/core/effects"
var effects_ = __webpack_require__(3673);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./lib/string.tsx
var string = __webpack_require__(7285);
// EXTERNAL MODULE: ./pages/api/file.ts
var api_file = __webpack_require__(5908);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./pages/api/trainer.ts

const trainerApi = {
    get: ()=>external_axios_default().get(`http://localhost:8080/trainer`)
    ,
    // axios.get<응답데이터의타입>(요청URL);
    // GET 요청URL HTTP/1.1
    fetch: ()=>external_axios_default().get(`http://localhost:8080/trainer`)
    ,
    add: (trainerItem)=>external_axios_default().post(`http://localhost:8080/trainer`, trainerItem)
    ,
    remove: (id)=>external_axios_default()["delete"](`http://localhost:8080/trainer/${id}`)
    ,
    modify: (id, trainerItem)=>external_axios_default().put(`http://localhost:8080/trainer/${id}`, trainerItem)
};
/* harmony default export */ const trainer = (trainerApi);

// EXTERNAL MODULE: ./provider/modules/trainer.ts
var modules_trainer = __webpack_require__(3750);
;// CONCATENATED MODULE: ./middleware/modules/trainer.ts






// saga action 생성 부분
//partner를 추가하도록 요청하는  action creator를 생성
//전체 데이터 조회에서 추가할 때
const requestAddTrainer = (0,toolkit_.createAction)(`${modules_trainer/* default.name */.ZP.name}/requestAddTrainer`);
//partner를 가져오는 action
const requestFetchTrainer = (0,toolkit_.createAction)(`${modules_trainer/* default.name */.ZP.name}/requestFetchTrainer`);
// 1건만 가져오는 action
const requestFetchTrainerItem = (0,toolkit_.createAction)(`${modules_trainer/* default.name */.ZP.name}/requestFetchTrainerItem`);
const requestRemoveTrainer = (0,toolkit_.createAction)(`${modules_trainer/* default.name */.ZP.name}/requestRemoveTrainer`);
const requestModifyTrainer = (0,toolkit_.createAction)(`${modules_trainer/* default.name */.ZP.name}/requestModifyTrainer`);
// saga action 처리 부분
function* addData(action) {
    // action의 payload로 넘어온 객체
    const trainerItemPayload = action.payload;
    // s3업로드
    // URL -> file변환
    const file = yield (0,effects_.call)(string/* dataUrlToFile */.B, trainerItemPayload.trainerPhotoUrl, trainerItemPayload.fileName, trainerItemPayload.fileType);
    //form data객체 생성
    const formFile = new FormData();
    formFile.set("file", file);
    //multipart/ form-data로 업로드
    const fileUrl = yield (0,effects_.call)(api_file/* default.upload */.Z.upload, formFile);
    // rest api로 보낼 요청객체
    const trainerItemRequest = {
        id: trainerItemPayload.id,
        gymCode: trainerItemPayload.gymCode,
        trainerName: trainerItemPayload.trainerName,
        trainerIntro: trainerItemPayload.trainerIntro,
        trainerPhotoUrl: fileUrl.data,
        fileName: trainerItemPayload.fileName,
        fileType: trainerItemPayload.fileType,
        pt1TimePrice: trainerItemPayload.pt1TimePrice,
        pt10TimePrice: trainerItemPayload.pt10TimePrice,
        pt30TimePrice: trainerItemPayload.pt30TimePrice,
        yoga1TimePrice: trainerItemPayload.yoga1TimePrice,
        yoga10TimePrice: trainerItemPayload.yoga10TimePrice,
        yoga30TimePrice: trainerItemPayload.yoga30TimePrice,
        pilates1TimePrice: trainerItemPayload.pilates1TimePrice,
        pilates10TimePrice: trainerItemPayload.pilates10TimePrice,
        pilates30TimePrice: trainerItemPayload.pilates30TimePrice
    };
    const result = yield (0,effects_.call)(trainer.add, trainerItemRequest);
    //redux state 변경
    //redux state 조회하기
    const trainerData = yield (0,effects_.select)((state)=>state.trainer.data
    );
    const trainerItem = {
        id: result.data.id,
        gymCode: result.data.gymCode,
        trainerName: result.data.trainerName,
        trainerIntro: result.data.trainerIntro,
        trainerPhotoUrl: result.data.trainerPhotoUrl,
        fileName: result.data.fileName,
        fileType: result.data.fileType,
        pt1TimePrice: result.data.pt1TimePrice,
        pt10TimePrice: result.data.pt10TimePrice,
        pt30TimePrice: result.data.pt30TimePrice,
        yoga1TimePrice: result.data.yoga1TimePrice,
        yoga10TimePrice: result.data.yoga10TimePrice,
        yoga30TimePrice: result.data.yoga30TimePrice,
        pilates1TimePrice: result.data.pilates1TimePrice,
        pilates10TimePrice: result.data.pilates10TimePrice,
        pilates30TimePrice: result.data.pilates30TimePrice
    };
    yield (0,effects_.put)((0,modules_trainer/* addTrainer */.cU)(trainerItem));
    yield (0,effects_.put)((0,modules_trainer/* initialCompleted */.Il)());
}
//redux side effect
// 1. api 연동
// 2. 파일처리
// 3. 처리중 메시지 보여주기/감추기
// 4. 에러메시지 띄우기
// 서버에서 GET으로 데이터를 가저오고, redux state를 초기화
function* fetchData() {
    yield console.log("---fetchData---");
    //백엔드에서 데이터 받아오기
    const result = yield (0,effects_.call)(trainer.fetch);
    const trainers = result.data.map((item)=>({
            id: item.id,
            gymCode: item.gymCode,
            trainerName: item.trainerName,
            trainerIntro: item.trainerIntro,
            trainerPhotoUrl: item.trainerPhotoUrl,
            pt1TimePrice: item.pt1TimePrice,
            pt10TimePrice: item.pt10TimePrice,
            pt30TimePrice: item.pt30TimePrice,
            yoga1TimePrice: item.yoga1TimePrice,
            yoga10TimePrice: item.yoga10TimePrice,
            yoga30TimePrice: item.yoga30TimePrice,
            pilates1TimePrice: item.pilates1TimePrice,
            pilates10TimePrice: item.pilates10TimePrice,
            pilates30TimePrice: item.pilates30TimePrice
        })
    );
    yield (0,effects_.put)((0,modules_trainer/* initialTrainer */.Yv)(trainers));
}
function* fetchDataItem(action) {
    yield console.log("--fetchDataItem--");
    const id = action.payload;
    // 백엔드에서 데이터 받아오기
    const result = yield call(api.fetch);
    const trainer = result.data;
    if (trainer) {
        // state 초기화 reducer 실행
        yield put(initialTrainerItem(trainer));
    }
}
// function* removeData(action:PayloadAction<number>){
//   yield console.log("--removeData--")
//   const id = action.payload;
// // s3 파일 삭제
// const partnerItem : PartnerItem = yield select((state : RootState)=>
// state.partner.data.find((item)=>item.id===id)
// );
// const urlArr=partnerItem.partnerUrl.split("/");
// const objectKey = urlArr[urlArr.length -1];
// //  ----------------
// const result : AxiosResponse<boolean> = yield call(api.remove, id);
// if(result.data){
//   yield put(removePartner(id));
// }
// yield put(initialCompleted());
// }
function* modifyData(action) {
    yield console.log("--modifyData--");
    const trainerItemPayload = action.payload;
    const trainerItemRequest = {
        id: trainerItemPayload.id,
        gymCode: trainerItemPayload.gymCode,
        trainerName: trainerItemPayload.trainerName,
        trainerIntro: trainerItemPayload.trainerIntro,
        trainerPhotoUrl: trainerItemPayload.trainerPhotoUrl,
        fileName: trainerItemPayload.fileName,
        fileType: trainerItemPayload.fileType,
        pt1TimePrice: trainerItemPayload.pt1TimePrice,
        pt10TimePrice: trainerItemPayload.pt10TimePrice,
        pt30TimePrice: trainerItemPayload.pt30TimePrice,
        yoga1TimePrice: trainerItemPayload.yoga1TimePrice,
        yoga10TimePrice: trainerItemPayload.yoga10TimePrice,
        yoga30TimePrice: trainerItemPayload.yoga30TimePrice,
        pilates1TimePrice: trainerItemPayload.pilates1TimePrice,
        pilates10TimePrice: trainerItemPayload.pilates10TimePrice,
        pilates30TimePrice: trainerItemPayload.pilates30TimePrice
    };
    const result = yield (0,effects_.call)(trainer.modify, trainerItemPayload.id, trainerItemRequest);
    const trainerItem = {
        id: result.data.id,
        gymCode: result.data.gymCode,
        trainerName: result.data.trainerName,
        trainerIntro: result.data.trainerIntro,
        trainerPhotoUrl: result.data.trainerPhotoUrl,
        fileName: result.data.fileName,
        fileType: result.data.fileType,
        pt1TimePrice: result.data.pt1TimePrice,
        pt10TimePrice: result.data.pt10TimePrice,
        pt30TimePrice: result.data.pt30TimePrice,
        yoga1TimePrice: result.data.yoga1TimePrice,
        yoga10TimePrice: result.data.yoga10TimePrice,
        yoga30TimePrice: result.data.yoga30TimePrice,
        pilates1TimePrice: result.data.pilates1TimePrice,
        pilates10TimePrice: result.data.pilates10TimePrice,
        pilates30TimePrice: result.data.pilates30TimePrice
    };
    yield (0,effects_.put)((0,modules_trainer/* modifyTrainer */.xb)(trainerItem));
    yield (0,effects_.put)((0,modules_trainer/* initialCompleted */.Il)());
}
// saga action을 감지하는 부분
function* trainerSaga() {
    //동일한 타입의 액션은 모두 처리함
    yield (0,effects_.takeEvery)(requestAddTrainer, addData);
    yield (0,effects_.takeLatest)(requestFetchTrainer, fetchData);
    yield (0,effects_.takeEvery)(requestFetchTrainerItem, fetchData);
    // yield takeEvery(requestRemoveTrainer, removeData);
    yield (0,effects_.takeEvery)(requestModifyTrainer, modifyData);
};


/***/ }),

/***/ 3750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cU": () => (/* binding */ addTrainer),
/* harmony export */   "Il": () => (/* binding */ initialCompleted),
/* harmony export */   "Yv": () => (/* binding */ initialTrainer),
/* harmony export */   "xb": () => (/* binding */ modifyTrainer),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialTrainerItem */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    data: [],
    isFetched: false
};
const trainerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "trainer",
    initialState,
    reducers: {
        // Payload로 item객체를 받음
        addTrainer: (state, action)=>{
            const trainer = action.payload;
            console.log("--in reducer function--");
            console.log(trainer);
            state.data.unshift(trainer);
            state.isAddCompleted = true; //추가확인 표시
        },
        //payload 없는 reducer
        //complted 관련된 속성을 삭제함 (undefined 상태)
        initialCompleted: (state)=>{
            delete state.isAddCompleted;
        },
        initialTrainerItem: (state, action)=>{
            const trainer = action.payload;
            state.data = [
                {
                    ...trainer
                }
            ];
        },
        initialTrainer: (state, action)=>{
            const trainer = action.payload;
            state.data = trainer;
            state.isFetched = true;
        },
        modifyTrainer: (state, action)=>{
            // 생성해서 넘긴 객체
            const modifyItem = action.payload;
            // state에 있는 객체
            const trainerItem = state.data.find((item)=>item.id === modifyItem.id
            );
            // state에 있는 객체의 속성을 넘김 객체의 속성으로 변경
            if (trainerItem) {
                trainerItem.gymCode = modifyItem.gymCode;
                trainerItem.trainerName = modifyItem.trainerName;
                trainerItem.trainerIntro = modifyItem.trainerIntro;
                trainerItem.trainerPhotoUrl = modifyItem.trainerPhotoUrl;
                trainerItem.pt1TimePrice = modifyItem.pt1TimePrice;
                trainerItem.pt10TimePrice = modifyItem.pt10TimePrice;
                trainerItem.pt30TimePrice = modifyItem.pt30TimePrice;
                trainerItem.yoga1TimePrice = modifyItem.yoga1TimePrice;
                trainerItem.yoga10TimePrice = modifyItem.yoga10TimePrice;
                trainerItem.yoga30TimePrice = modifyItem.yoga30TimePrice;
                trainerItem.pilates1TimePrice = modifyItem.pilates1TimePrice;
                trainerItem.pilates10TimePrice = modifyItem.pilates10TimePrice;
                trainerItem.pilates30TimePrice = modifyItem.pilates30TimePrice;
            }
            state.isModifyCompleted = true; // 변경 되었음을 표시
        }
    }
});
const { addTrainer , initialCompleted , initialTrainerItem , initialTrainer , modifyTrainer  } = trainerSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trainerSlice.reducer);


/***/ })

};
;