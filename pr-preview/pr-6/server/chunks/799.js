"use strict";
exports.id = 799;
exports.ids = [799];
exports.modules = {

/***/ 5799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ GridItemCard)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mui_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7676);
/* harmony import */ var mui_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mui_markdown__WEBPACK_IMPORTED_MODULE_2__);



function GridItemCard({ title , body , imgsrc , ...props }) {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        item: true,
        ...props,
        sx: {
            mb: 4,
            justifyContent: "center"
        },
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            textAlign: "center",
            children: [
                imgsrc && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    component: "img",
                    src: imgsrc,
                    alt: "",
                    sx: {
                        maxWidth: "250px",
                        height: "200px",
                        objectFit: "contain",
                        textAlign: "center"
                    }
                }),
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    variant: "subtitle2",
                    sx: {
                        fontWeight: "bold",
                        marginBottom: "10px",
                        maxWidth: "250px",
                        margin: "27px auto auto",
                        minHeight: "62px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: title
                }),
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    textAlign: "left",
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mui_markdown__WEBPACK_IMPORTED_MODULE_2___default()), {
                        overrides: {
                            span: {
                                component: "p",
                                props: {
                                    style: {
                                        maxWidth: "260px",
                                        display: "flex",
                                        margin: "20px auto",
                                        textAlign: "center"
                                    }
                                }
                            }
                        },
                        children: body
                    })
                })
            ]
        })
    });
}


/***/ })

};
;