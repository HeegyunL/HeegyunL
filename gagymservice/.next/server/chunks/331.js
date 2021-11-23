"use strict";
exports.id = 331;
exports.ids = [331];
exports.modules = {

/***/ 9331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);


const Chart = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 8403, 23))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(8403)
            ]
        ,
        modules: [
            "../components/chart/columnBar.tsx -> " + "react-apexcharts"
        ]
    },
    ssr: false
});
const ColumnBar = ({ data  })=>{
    const chartData = {
        series: [
            {
                name: "제품군",
                data: data.map((item)=>item.amount
                )
            }
        ],
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            xaxis: {
                categories: data.map((item)=>item.category
                )
            }
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: chartData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Chart, {
            style: {
                width: "150%",
                height: "300px"
            },
            className: "ms-4",
            options: chartData.options,
            series: chartData.series,
            type: "bar"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColumnBar);


/***/ })

};
;