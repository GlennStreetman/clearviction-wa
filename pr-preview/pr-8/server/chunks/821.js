"use strict";
exports.id = 821;
exports.ids = [821];
exports.modules = {

/***/ 1821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HeroBanner)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mui_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7676);
/* harmony import */ var mui_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mui_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2071);




const heroStyles = {
    backgroundColor: "primary.dark",
    color: "primary.contrastText",
    py: 8
};
function HeroBanner({ heading , subheading , imgsrc , ctaText , ctaLink , children , overrideStyles  }) {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: overrideStyles || heroStyles,
        textAlign: "left",
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    variant: "h1",
                    sx: {
                        display: "block"
                    },
                    children: heading
                }),
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        display: "flex",
                        gap: 4,
                        flexWrap: "wrap",
                        flexDirection: {
                            sm: "column",
                            md: "row"
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                flex: 1
                            },
                            children: [
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    sx: {
                                        mb: 4
                                    },
                                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mui_markdown__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        overrides: {
                                            p: {
                                                component: _mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography,
                                                props: {
                                                    variant: "subtitle1"
                                                }
                                            },
                                            span: {
                                                component: _mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography,
                                                props: {
                                                    variant: "subtitle1"
                                                }
                                            }
                                        },
                                        children: subheading
                                    })
                                }),
                                ctaText && ctaLink && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    variant: "contained",
                                    color: "primary",
                                    href: ctaLink,
                                    sx: {
                                        px: 4,
                                        "&:hover": {
                                            color: "primary.dark",
                                            backgroundColor: "secondary.main"
                                        }
                                    },
                                    children: ctaText
                                })
                            ]
                        }),
                        (imgsrc || children) && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                display: "flex",
                                margin: "30px auto",
                                justifyContent: "center"
                            },
                            children: imgsrc ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                component: "img",
                                src: imgsrc,
                                alt: "",
                                sx: {
                                    width: "100%"
                                }
                            }) : children
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 2071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionContainer)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


function SectionContainer({ children , id , ...props }) {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        component: "section",
        id: id,
        maxWidth: "lg",
        sx: {
            my: 8,
            scrollMarginTop: 64
        },
        ...props,
        children: children
    });
}


/***/ })

};
;