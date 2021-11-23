"use strict";
exports.id = 693;
exports.ids = [693];
exports.modules = {

/***/ 8693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_x": () => (/* binding */ addDiary),
/* harmony export */   "lq": () => (/* binding */ removeDiary),
/* harmony export */   "Z4": () => (/* binding */ modifyDiary),
/* harmony export */   "Fo": () => (/* binding */ initialDiary),
/* harmony export */   "Il": () => (/* binding */ initialCompleted),
/* harmony export */   "_S": () => (/* binding */ initialPagedDiary),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    data: [
        {
            id: 1,
            memberName: "이희균",
            diaryMorning: "사과1쪽",
            diaryLunch: "부대찌게",
            diaryDinner: "삼겹살2인분",
            diaryRoutine: "pt1시간 , 스쿼트100회",
            diaryRequest: "술먹고 운동해도 되요?",
            trainerName: "한동기",
            trainerFeedback: "안됩니다"
        }, 
    ],
    isFetched: false,
    page: 0,
    pageSize: 5,
    totalPages: 0
};
const diarySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "diary",
    initialState,
    reducers: {
        addDiary: (state, action)=>{
            const diary = action.payload;
            console.log("--in reducer function--");
            console.log(diary);
            state.data.unshift(diary);
            state.isAddCompleted = true;
        },
        initialCompleted: (state)=>{
            delete state.isAddCompleted;
            delete state.isRemoveCompleted;
            delete state.isModifyCompleted;
        },
        removeDiary: (state, action)=>{
            const id = action.payload;
            state.data.splice(state.data.findIndex((item)=>item.id === id
            ), 1);
            state.isRemoveCompleted = true;
        },
        modifyDiary: (state, action)=>{
            const modifyItem = action.payload;
            const diaryItem = state.data.find((item)=>item.id === modifyItem.id
            );
            if (diaryItem) {
                diaryItem.memberName = modifyItem.memberName;
                diaryItem.diaryMorning = modifyItem.diaryMorning;
                diaryItem.diaryLunch = modifyItem.diaryLunch;
                diaryItem.diaryDinner = modifyItem.diaryDinner;
                diaryItem.diaryRoutine = modifyItem.diaryRoutine;
                diaryItem.diaryRequest = modifyItem.diaryRequest;
                diaryItem.trainerFeedback = modifyItem.trainerFeedback;
                diaryItem.diaryCreateTime = modifyItem.diaryCreateTime;
            }
            state.isModifyCompleted = true;
        },
        initialDiary: (state, action)=>{
            const diarys = action.payload;
            state.data = diarys;
            state.isFetched = true;
        },
        initialPagedDiary: (state, action)=>{
            state.data = action.payload.data;
            state.totalElements = action.payload.totalElements;
            state.totalPages = action.payload.totalPages;
            state.page = action.payload.page;
            state.pageSize = action.payload.pageSize;
            state.isLast = action.payload.isLast;
            state.isFetched = true;
        }
    }
});
const { addDiary , removeDiary , modifyDiary , initialDiary , initialCompleted , initialPagedDiary ,  } = diarySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (diarySlice.reducer);


/***/ })

};
;