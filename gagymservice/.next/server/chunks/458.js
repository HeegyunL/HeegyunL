"use strict";
exports.id = 458;
exports.ids = [458];
exports.modules = {

/***/ 7285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ dataUrlToFile)
/* harmony export */ });
/* unused harmony export getTimeString */
const getTimeString = (unixtime)=>{
    const day = 24 * 60 * 60 * 1000;
    const dateTime = new Date(unixtime);
    return unixtime - new Date().getTime() >= day ? dateTime.toLocaleDateString() : dateTime.toLocaleTimeString();
};
const dataUrlToFile = async (dataUrl, fileName, type)=>{
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([
        blob
    ], fileName, {
        type
    });
};



/***/ }),

/***/ 9458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ partnerSaga),
  "Gz": () => (/* binding */ requestAddPartner),
  "RG": () => (/* binding */ requestFetchPartner),
  "ry": () => (/* binding */ requestFetchPartnerItem),
  "Nc": () => (/* binding */ requestModifyPartner),
  "qo": () => (/* binding */ requestRemovePartner)
});

// EXTERNAL MODULE: external "@redux-saga/core/effects"
var effects_ = __webpack_require__(3673);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./lib/string.tsx
var string = __webpack_require__(7285);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./pages/api/partner.ts

const partnerApi = {
    get: ()=>external_axios_default().get(`http://localhost:8080/partner`)
    ,
    // axios.get<응답데이터의타입>(요청URL);
    // GET 요청URL HTTP/1.1
    fetch: ()=>external_axios_default().get(`http://localhost:8080/partner`)
    ,
    add: (partnerItem)=>external_axios_default().post(`http://localhost:8080/partner`, partnerItem)
    ,
    remove: (id)=>external_axios_default()["delete"](`http://localhost:8080/partner/${id}`)
    ,
    modify: (id, partnerItem)=>external_axios_default().put(`http://localhost:8080/partner/${id}`, partnerItem)
};
/* harmony default export */ const partner = (partnerApi);

// EXTERNAL MODULE: ./provider/modules/partner.ts
var modules_partner = __webpack_require__(5202);
// EXTERNAL MODULE: ./pages/api/file.ts
var api_file = __webpack_require__(5908);
// EXTERNAL MODULE: ./provider/modules/allert.ts
var allert = __webpack_require__(9351);
;// CONCATENATED MODULE: ./middleware/modules/partner.ts








// saga action 생성 부분
//partner를 추가하도록 요청하는  action creator를 생성
//전체 데이터 조회에서 추가할 때
const requestAddPartner = (0,toolkit_.createAction)(`${modules_partner/* default.name */.ZP.name}/requestAddPartner`);
//partner를 가져오는 action
const requestFetchPartner = (0,toolkit_.createAction)(`${modules_partner/* default.name */.ZP.name}/requestFetchPartner`);
// 1건만 가져오는 action
const requestFetchPartnerItem = (0,toolkit_.createAction)(`${modules_partner/* default.name */.ZP.name}/requestFetchPartnerItem`);
const requestRemovePartner = (0,toolkit_.createAction)(`${modules_partner/* default.name */.ZP.name}/requestRemovePartner`);
const requestModifyPartner = (0,toolkit_.createAction)(`${modules_partner/* default.name */.ZP.name}/requestModifyPartner`);
// saga action 처리 부분
function* addData(action) {
    // action의 payload로 넘어온 객체
    try {
        const partnerItemPayload = action.payload;
        // s3업로드
        // URL -> file변환
        const file = yield (0,effects_.call)(string/* dataUrlToFile */.B, partnerItemPayload.gymPhoto, partnerItemPayload.fileName, partnerItemPayload.fileType);
        //form data객체 생성
        const formFile = new FormData();
        formFile.set("file", file);
        //multipart/ form-data로 업로드
        const fileUrl = yield (0,effects_.call)(api_file/* default.upload */.Z.upload, formFile);
        // rest api로 보낼 요청객체
        const partnerItemRequest = {
            id: partnerItemPayload.id,
            gymName: partnerItemPayload.gymName,
            gymCoNum: partnerItemPayload.gymCoNum,
            gymLocateSi: partnerItemPayload.gymLocateSi,
            gymLocateGunGu: partnerItemPayload.gymLocateGunGu,
            gymAddress: partnerItemPayload.gymAddress,
            gymPhoneNum: partnerItemPayload.gymPhoneNum,
            gymTime: partnerItemPayload.gymTime,
            gymService: partnerItemPayload.gymService,
            gymPhoto: fileUrl.data,
            // gymPhoto: partnerItemPayload.gymPhoto,
            fileType: partnerItemPayload.fileType,
            fileName: partnerItemPayload.fileName,
            gym1DayPrice: partnerItemPayload.gym1DayPrice,
            gym3DayPrice: partnerItemPayload.gym3DayPrice,
            gym7DayPrice: partnerItemPayload.gym7DayPrice,
            gymMonthPrice: partnerItemPayload.gymMonthPrice,
            gym3MonthPrice: partnerItemPayload.gym3MonthPrice,
            gym6MonthPrice: partnerItemPayload.gym6MonthPrice,
            gymYearPrice: partnerItemPayload.gymYearPrice
        };
        const result = yield (0,effects_.call)(partner.add, partnerItemRequest);
        //redux state 변경
        //redux state 조회하기
        const partnerData = yield (0,effects_.select)((state)=>state.partner.data
        );
        const partnerItem = {
            id: result.data.id,
            gymName: result.data.gymName,
            gymCoNum: result.data.gymCoNum,
            gymLocateSi: result.data.gymLocateSi,
            gymLocateGunGu: result.data.gymLocateGunGu,
            gymAddress: result.data.gymAddress,
            gymPhoneNum: result.data.gymPhoneNum,
            gymTime: result.data.gymTime,
            gymService: result.data.gymService,
            gymPhoto: result.data.gymPhoto,
            fileType: result.data.fileType,
            fileName: result.data.fileName,
            gym1DayPrice: result.data.gym1DayPrice,
            gym3DayPrice: result.data.gym3DayPrice,
            gym7DayPrice: result.data.gym7DayPrice,
            gymMonthPrice: result.data.gymMonthPrice,
            gym3MonthPrice: result.data.gym3MonthPrice,
            gym6MonthPrice: result.data.gym6MonthPrice,
            gymYearPrice: result.data.gymYearPrice
        };
        yield (0,effects_.put)((0,modules_partner/* addPartner */.Of)(partnerItem));
        yield (0,effects_.put)((0,modules_partner/* initialCompleted */.Il)());
    } catch (e) {
        yield (0,effects_.put)((0,allert/* addAlert */.V_)({
            id: (0,toolkit_.nanoid)(),
            variant: "danger",
            message: e.message
        }));
    }
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
    const result = yield (0,effects_.call)(partner.fetch);
    const partners = result.data.map((item)=>({
            id: item.id,
            gymName: item.gymName,
            gymCoNum: item.gymCoNum,
            gymLocateSi: item.gymLocateSi,
            gymLocateGunGu: item.gymLocateGunGu,
            gymAddress: item.gymAddress,
            gymPhoneNum: item.gymPhoneNum,
            gymTime: item.gymTime,
            gymService: item.gymService,
            gymPhoto: item.gymPhoto,
            fileName: item.fileName,
            fileType: item.fileType,
            gym1DayPrice: item.gym1DayPrice,
            gym3DayPrice: item.gym3DayPrice,
            gym7DayPrice: item.gym7DayPrice,
            gymMonthPrice: item.gymMonthPrice,
            gym3MonthPrice: item.gym3MonthPrice,
            gym6MonthPrice: item.gym6MonthPrice,
            gymYearPrice: item.gymYearPrice
        })
    );
    yield (0,effects_.put)((0,modules_partner/* initialPartner */.GY)(partners));
}
function* fetchDataItem(action) {
    yield console.log("--fetchDataItem--");
    const id = action.payload;
    // 백엔드에서 데이터 받아오기
    const result = yield call(api.fetch);
    const partner = result.data;
    if (partner) {
        // state 초기화 reducer 실행
        yield put(initialPartnerItem(partner));
    }
}
function* removeData(action) {
    yield console.log("--removeData--");
    const id = action.payload;
    // s3 파일 삭제
    const partnerItem = yield (0,effects_.select)((state)=>state.partner.data.find((item)=>item.id === id
        )
    );
    const urlArr = partnerItem.gymPhoto.split("/");
    const objectKey = urlArr[urlArr.length - 1];
    // file api 호출해서 s3에 파일 삭제
    yield (0,effects_.call)(api_file/* default.remove */.Z.remove, objectKey);
    //  ----------------
    const result = yield (0,effects_.call)(partner.remove, id);
    if (result.data) {
        yield (0,effects_.put)((0,modules_partner/* removePartner */.Y5)(id));
    }
    yield (0,effects_.put)((0,modules_partner/* initialCompleted */.Il)());
}
function* modifyData(action) {
    yield console.log("--modifyData--");
    const partnerItemPayload = action.payload;
    let fileUrl = action.payload.gymPhoto;
    if (action.payload.gymPhoto.startsWith("data")) {
        const partnerItmeFile = yield (0,effects_.select)((state)=>state.partner.data.find((item)=>item.id === partnerItemPayload.id
            )
        );
        const urlArr = partnerItmeFile.gymPhoto.split("/");
        const objectKey = urlArr[urlArr.length - 1];
        yield (0,effects_.call)(api_file/* default.remove */.Z.remove, objectKey);
        const file = yield (0,effects_.call)(string/* dataUrlToFile */.B, partnerItemPayload.gymPhoto, partnerItemPayload.fileName, partnerItemPayload.fileType);
        const formFile = new FormData();
        formFile.set("file", file);
        const fileRes = yield (0,effects_.call)(api_file/* default.upload */.Z.upload, formFile);
        fileUrl = fileRes.data;
    }
    const partnerItemRequest = {
        id: partnerItemPayload.id,
        gymName: partnerItemPayload.gymName,
        gymCoNum: partnerItemPayload.gymCoNum,
        gymLocateSi: partnerItemPayload.gymLocateSi,
        gymLocateGunGu: partnerItemPayload.gymLocateGunGu,
        gymAddress: partnerItemPayload.gymAddress,
        gymPhoneNum: partnerItemPayload.gymPhoneNum,
        gymTime: partnerItemPayload.gymTime,
        gymService: partnerItemPayload.gymService,
        gymPhoto: fileUrl,
        fileName: partnerItemPayload.fileName,
        fileType: partnerItemPayload.fileType,
        gym1DayPrice: partnerItemPayload.gym1DayPrice,
        gym3DayPrice: partnerItemPayload.gym3DayPrice,
        gym7DayPrice: partnerItemPayload.gym7DayPrice,
        gymMonthPrice: partnerItemPayload.gymMonthPrice,
        gym3MonthPrice: partnerItemPayload.gym3MonthPrice,
        gym6MonthPrice: partnerItemPayload.gym6MonthPrice,
        gymYearPrice: partnerItemPayload.gymYearPrice
    };
    const result = yield (0,effects_.call)(partner.modify, partnerItemPayload.id, partnerItemRequest);
    const partnerItem = {
        id: result.data.id,
        gymName: result.data.gymName,
        gymCoNum: result.data.gymCoNum,
        gymLocateSi: result.data.gymLocateSi,
        gymLocateGunGu: result.data.gymLocateGunGu,
        gymAddress: result.data.gymAddress,
        gymPhoneNum: result.data.gymPhoneNum,
        gymTime: result.data.gymTime,
        gymService: result.data.gymService,
        gymPhoto: result.data.gymPhoto,
        fileName: result.data.fileName,
        fileType: result.data.fileType,
        gym1DayPrice: result.data.gym1DayPrice,
        gym3DayPrice: result.data.gym3DayPrice,
        gym7DayPrice: result.data.gym7DayPrice,
        gymMonthPrice: result.data.gymMonthPrice,
        gym3MonthPrice: result.data.gym3MonthPrice,
        gym6MonthPrice: result.data.gym6MonthPrice,
        gymYearPrice: result.data.gymYearPrice
    };
    yield (0,effects_.put)((0,modules_partner/* modifyPartner */.gr)(partnerItem));
    yield (0,effects_.put)((0,modules_partner/* initialCompleted */.Il)());
}
// saga action을 감지하는 부분
function* partnerSaga() {
    //동일한 타입의 액션은 모두 처리함
    yield (0,effects_.takeEvery)(requestAddPartner, addData);
    yield (0,effects_.takeLatest)(requestFetchPartner, fetchData);
    yield (0,effects_.takeEvery)(requestFetchPartnerItem, fetchData);
    yield (0,effects_.takeEvery)(requestRemovePartner, removeData);
    yield (0,effects_.takeEvery)(requestModifyPartner, modifyData);
};


/***/ }),

/***/ 5908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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


/***/ }),

/***/ 9351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V_": () => (/* binding */ addAlert),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export removeAlert */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = [];
const alertSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "alert",
    initialState,
    reducers: {
        addAlert: (state, action)=>{
            const alertItem = action.payload;
            state.unshift(alertItem); // 추가할 얼럿을 앞쪽에
        },
        removeAlert: (state, action)=>{
            const id = action.payload;
            state.splice(state.findIndex((item)=>item.id === id
            ), 1);
        }
    }
});
const { addAlert , removeAlert  } = alertSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (alertSlice.reducer);


/***/ }),

/***/ 5202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Of": () => (/* binding */ addPartner),
/* harmony export */   "Il": () => (/* binding */ initialCompleted),
/* harmony export */   "GY": () => (/* binding */ initialPartner),
/* harmony export */   "gr": () => (/* binding */ modifyPartner),
/* harmony export */   "Y5": () => (/* binding */ removePartner),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialPartnerItem */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    data: [],
    isFetched: false
};
const partnerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "partner",
    initialState,
    reducers: {
        // Payload로 item객체를 받음
        addPartner: (state, action)=>{
            const partner = action.payload;
            console.log("--in reducer function--");
            console.log(partner);
            state.data.unshift(partner);
            state.isAddCompleted = true; //추가확인 표시
        },
        //payload 없는 reducer
        //complted 관련된 속성을 삭제함 (undefined 상태)
        initialCompleted: (state)=>{
            delete state.isAddCompleted;
            delete state.isRemoveCompleted;
            delete state.isModifyCompleted;
        },
        initialPartnerItem: (state, action)=>{
            const partner = action.payload;
            state.data = [
                {
                    ...partner
                }
            ];
        },
        initialPartner: (state, action)=>{
            const partner = action.payload;
            state.data = partner;
            state.isFetched = true;
        },
        removePartner: (state, action)=>{
            const id = action.payload;
            // id에 해당하는 아이템의 index를 찾고 그 index로 splice를 한다.
            state.data.splice(state.data.findIndex((item)=>item.id === id
            ), 1);
            state.isRemoveCompleted = true; // 삭제 되었음을 표시
        },
        modifyPartner: (state, action)=>{
            // 생성해서 넘긴 객체
            const modifyItem = action.payload;
            // state에 있는 객체
            const partnerItem = state.data.find((item)=>item.id === modifyItem.id
            );
            // state에 있는 객체의 속성을 넘김 객체의 속성으로 변경
            if (partnerItem) {
                partnerItem.gymName = modifyItem.gymName;
                partnerItem.gymCoNum = modifyItem.gymCoNum;
                partnerItem.gymLocateSi = modifyItem.gymLocateSi;
                partnerItem.gymLocateGunGu = modifyItem.gymLocateGunGu;
                partnerItem.gymAddress = modifyItem.gymAddress;
                partnerItem.gymPhoneNum = modifyItem.gymPhoneNum;
                partnerItem.gymTime = modifyItem.gymTime;
                partnerItem.gymService = modifyItem.gymService;
                partnerItem.gymPhoto = modifyItem.gymPhoto;
                partnerItem.fileName = modifyItem.fileName;
                partnerItem.fileType = modifyItem.fileType;
                partnerItem.gym1DayPrice = modifyItem.gym1DayPrice;
                partnerItem.gym3DayPrice = modifyItem.gym3DayPrice;
                partnerItem.gym7DayPrice = modifyItem.gym7DayPrice;
                partnerItem.gymMonthPrice = modifyItem.gymMonthPrice;
                partnerItem.gym3MonthPrice = modifyItem.gym3MonthPrice;
                partnerItem.gym6MonthPrice = modifyItem.gym6MonthPrice;
                partnerItem.gymYearPrice = modifyItem.gymYearPrice;
            // partnerItem.gymTrainer=modifyItem.gymTrainer;
            }
            state.isModifyCompleted = true; // 변경 되었음을 표시
        }
    }
});
const { addPartner , initialCompleted , initialPartnerItem , initialPartner , modifyPartner , removePartner  } = partnerSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (partnerSlice.reducer);


/***/ })

};
;