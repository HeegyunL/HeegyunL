exports.id = 461;
exports.ids = [461];
exports.modules = {

/***/ 8440:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "layout_main__26dVU"
};


/***/ }),

/***/ 7628:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "sidebar_nav__1MjEm"
};


/***/ }),

/***/ 9580:
/***/ ((module) => {

// Exports
module.exports = {
	"div1": "Footer_div1__1itZS",
	"div2": "Footer_div2__2ujT-",
	"div22": "Footer_div22__2D8Ks",
	"div3": "Footer_div3__2uX_Q",
	"div33": "Footer_div33__2Z9s5",
	"div4": "Footer_div4__32oEl"
};


/***/ }),

/***/ 1461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/layout.module.css
var layout_module = __webpack_require__(8440);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./components/appbar.tsx



const AppBar = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar, {
        bg: "",
        expand: "lg",
        className: "mx-auto",
        style: {
            width: "90%",
            borderBottom: "solid"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
            className: "w-100",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Brand, {
                    className: "ms-5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            style: {
                                width: "130px"
                            },
                            src: "/logo.png",
                            alt: "logo"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " justify-content-end me-3",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "input-group input-group-sm mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "input-group-text",
                                                    id: "inputGroup-sizing-sm",
                                                    style: {
                                                        width: "80px",
                                                        height: "20px"
                                                    },
                                                    children: "이름"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    "aria-describedby": "inputGroup-sizing-sm",
                                                    style: {
                                                        width: "100px",
                                                        height: "20px"
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "input-group input-group-sm mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "input-group-text text-nowrap ",
                                                    id: "inputGroup-sizing-sm",
                                                    style: {
                                                        width: "80px",
                                                        height: "20px"
                                                    },
                                                    children: "사업자번호"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    "aria-label": "Sizing example input",
                                                    "aria-describedby": "inputGroup-sizing-sm",
                                                    style: {
                                                        width: "100px",
                                                        height: "20px"
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "ms-3",
                                    style: {
                                        height: "56px"
                                    },
                                    children: "로그인"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
                                className: "me-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/",
                                                className: "",
                                                children: "MAIN"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/partner/information/list",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/partner/information/Create",
                                                className: "",
                                                children: "헬스장 정보"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/partner/reservation/list",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/partner/information/detail/id",
                                                className: "",
                                                children: "예약 내역"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/partner/ptDiary/list",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/partner/ptDiary/list",
                                                className: "",
                                                children: "PT 일지"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const appbar = (AppBar);

// EXTERNAL MODULE: ./components/sidebar/sidebar.module.css
var sidebar_module = __webpack_require__(7628);
var sidebar_module_default = /*#__PURE__*/__webpack_require__.n(sidebar_module);
;// CONCATENATED MODULE: ./components/sidebar/sidebar.tsx



function SideBar() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: (sidebar_module_default()).nav,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/partner/information/list",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/partner/information/Create",
                    className: "",
                    children: "헬스장 정보"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/partner/reservation/list",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/partner/information/detail/id",
                    className: "",
                    children: "예약 내역"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/partner/ptDiary/list",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/partner/ptDiary/list",
                    className: "",
                    children: "PT 일지"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/partner/information/Create",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/partner/ptDiary/list",
                    className: "",
                    children: "체육관 등록하기"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/partner/information/Tcreate",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/partner/ptDiary/list",
                    className: "",
                    children: "강사 등록하기"
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(9580);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/footer.tsx



const Footer = ()=>{
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Footer_module_default()).div1,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).div2,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Footer_module_default()).div22,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mb-2",
                                    children: "[ 제휴 및 서비스 이용문의 ]"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mb-1",
                                    children: "AM 10:00 - PM 07:00"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "토/일/공휴일 휴무"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Footer_module_default()).div22,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "(주) 가짐"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "서울특별시 강남구 강남대로 428"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "대표 : 이희균, 박이슬, 이효정"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "사업자번호 : 123-45-6789"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "통신판매번호 : 제2021-서울강남-1215호"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "contact@gagym.co.kr"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).div3,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                href: "",
                                className: (Footer_module_default()).div33,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "이용약관"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                href: "",
                                className: (Footer_module_default()).div33,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "개인정보처리방침"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                href: "",
                                className: (Footer_module_default()).div33,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "위치정보이용약관"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/home/select",
                                className: (Footer_module_default()).div33,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "헬스장 찾기"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Footer_module_default()).div4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Copyright ⓒ Gagym Co., Ltd. All rights reserved."
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./components/layout.tsx







function Layout({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Myworkspace"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(appbar, {
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (layout_module_default()).main,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                        className: "d-flex mt-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SideBar, {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "ms-4",
                                children: children
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(footer, {
                    })
                ]
            })
        ]
    }));
};


/***/ })

};
;