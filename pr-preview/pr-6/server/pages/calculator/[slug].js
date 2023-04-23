"use strict";
(() => {
var exports = {};
exports.id = 719;
exports.ids = [719];
exports.modules = {

/***/ 1072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ExternalLinks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// open all external links in another tab
function ExternalLinks() {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const links = document.links;
        for(var i = 0, linksLength = links.length; i < linksLength; i++){
            if (links[i].hostname != window.location.hostname) {
                links[i].target = "_blank";
            }
        }
    });
}


/***/ }),

/***/ 4295:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CalculatorSlugRoute),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_History__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2063);
/* harmony import */ var _mui_icons_material_History__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_History__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5711);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_sanity_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2852);
/* harmony import */ var _components_externalLinks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1072);
/* harmony import */ var _utils_portableTextComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4406);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, utils_sanity_client__WEBPACK_IMPORTED_MODULE_6__]);
([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, utils_sanity_client__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function CalculatorSlugRoute({ page , calculatorConfig  }) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    (0,_components_externalLinks__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
                maxWidth: "md",
                sx: {
                    minHeight: "700px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                },
                id: "calculator-container-outer",
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        type: "button",
                        onClick: ()=>router.back(),
                        sx: {
                            marginLeft: 0,
                            fontWeight: "lighter",
                            fontSize: "14px"
                        },
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, {
                                sx: {
                                    marginRight: "10px"
                                },
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "12",
                                height: "20",
                                viewBox: "0 0 12 20",
                                fill: "none",
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M11.8341 1.8701L10.0541 0.100098L0.164062 10.0001L10.0641 19.9001L11.8341 18.1301L3.70406 10.0001L11.8341 1.8701Z",
                                    fill: "#4e6c99"
                                })
                            }),
                            "Previous"
                        ]
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        mb: 4,
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {
                            value: page.content,
                            components: _utils_portableTextComponents__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
                        maxWidth: "xs",
                        sx: {
                            mb: 4
                        },
                        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            gap: 2,
                            children: [
                                page.choices && page.choices.map((choice)=>{
                                    const linkTo = choice.linkTo ? `/calculator/${choice.linkTo.slug.current}` : "#";
                                    const href = choice.isExternalLink ? choice.url : linkTo;
                                    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        variant: "contained",
                                        color: "primary",
                                        href: href,
                                        sx: {
                                            width: "100%"
                                        },
                                        children: choice.label
                                    }, choice._key);
                                }),
                                page.isQuestion && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    variant: "outlined",
                                    color: "primary",
                                    sx: {
                                        width: "100%"
                                    },
                                    onClick: ()=>setOpen(true),
                                    children: calculatorConfig.notSureAnswer.promptText
                                }),
                                page.isFinalPage && /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            variant: "contained",
                                            color: "primary",
                                            href: page.isUndetermined ? calculatorConfig.feedback.isUndeterminedUrl : calculatorConfig.feedback.allOtherFeedbackUrl,
                                            children: calculatorConfig.feedback.linkText
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                            sx: {
                                                textAlign: "center"
                                            },
                                            href: calculatorConfig.checkAnotherConviction.linkTo.slug.current,
                                            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    gap: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_History__WEBPACK_IMPORTED_MODULE_1___default()), {}),
                                                    calculatorConfig.checkAnotherConviction.linkText
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    page.isFinalPage && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        maxWidth: "60ch",
                        textAlign: "center",
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "caption",
                            sx: {
                                fontWeight: "light"
                            },
                            children: calculatorConfig.legalDisclaimer
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                open: open,
                onClose: ()=>setOpen(false),
                "aria-labelledby": "alert-dialog-title",
                "aria-describedby": "alert-dialog-description",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
                        id: "alert-dialog-title",
                        children: calculatorConfig.notSureAnswer.header
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {
                            value: calculatorConfig.notSureAnswer.content,
                            components: _utils_portableTextComponents__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogActions, {
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            onClick: ()=>setOpen(false),
                            children: calculatorConfig.notSureAnswer.closeText
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    textAlign: "center",
                    mb: "30px",
                    color: "black",
                    fontWeight: 500,
                    fontSize: "16px"
                },
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {
                    href: calculatorConfig.errorReportingForm.errorReportingFormUrl,
                    sx: {
                        color: "text.primary",
                        textDecoration: "none",
                        "&:hover": {
                            color: "primary.main",
                            textDecoration: "underline"
                        }
                    },
                    children: [
                        calculatorConfig.errorReportingForm.linkText,
                        " "
                    ]
                })
            })
        ]
    });
}
async function getStaticProps(ctx) {
    const { params ={}  } = ctx;
    const [page, calculatorConfig] = await Promise.all([
        (0,utils_sanity_client__WEBPACK_IMPORTED_MODULE_6__/* .getCalculatorPageBySlug */ .sd)({
            slug: params.slug
        }),
        (0,utils_sanity_client__WEBPACK_IMPORTED_MODULE_6__/* .getCalculatorConfig */ .pI)()
    ]);
    if (!page) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            page,
            calculatorConfig
        }
    };
}
async function getStaticPaths() {
    const paths = await (0,utils_sanity_client__WEBPACK_IMPORTED_MODULE_6__/* .getCalculatorPagePaths */ .s_)();
    return {
        paths: paths?.map((slug)=>`/calculator/${slug}`) || [],
        fallback: false
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    marks: {
        link: ({ children , value  })=>{
            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Link, {
                href: value.href,
                children: children
            });
        }
    }
});


/***/ }),

/***/ 1769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sx": () => (/* binding */ projectId),
/* harmony export */   "gx": () => (/* binding */ dataset),
/* harmony export */   "tW": () => (/* binding */ apiVersion)
/* harmony export */ });
/* unused harmony export previewSecretId */
const projectId = "5af8r9p3";
const dataset = "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-02-12";
const previewSecretId = "preview.secret";


/***/ }),

/***/ 2852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pI": () => (/* binding */ getCalculatorConfig),
/* harmony export */   "s_": () => (/* binding */ getCalculatorPagePaths),
/* harmony export */   "sd": () => (/* binding */ getCalculatorPageBySlug)
/* harmony export */ });
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5091);
/* harmony import */ var _sanity_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1769);
/* harmony import */ var _sanity_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity_queries__WEBPACK_IMPORTED_MODULE_2__]);
([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity_queries__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const sanityClient = (token)=>{
    return _sanity_api__WEBPACK_IMPORTED_MODULE_1__/* .projectId */ .Sx ? (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)({
        projectId: _sanity_api__WEBPACK_IMPORTED_MODULE_1__/* .projectId */ .Sx,
        dataset: _sanity_api__WEBPACK_IMPORTED_MODULE_1__/* .dataset */ .gx,
        apiVersion: _sanity_api__WEBPACK_IMPORTED_MODULE_1__/* .apiVersion */ .tW,
        useCdn: false,
        token
    }) : null;
};
async function getCalculatorPageBySlug({ slug , token  }) {
    return await sanityClient(token)?.fetch(_sanity_queries__WEBPACK_IMPORTED_MODULE_2__/* .calculatorPagesBySlugQuery */ ._$, {
        slug
    });
}
async function getCalculatorPagePaths() {
    return await sanityClient()?.fetch(_sanity_queries__WEBPACK_IMPORTED_MODULE_2__/* .calculatorPagePaths */ .MM);
}
async function getCalculatorConfig() {
    return await sanityClient()?.fetch(_sanity_queries__WEBPACK_IMPORTED_MODULE_2__/* .calculatorConfigQuery */ .l5);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7628:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MM": () => (/* binding */ calculatorPagePaths),
/* harmony export */   "_$": () => (/* binding */ calculatorPagesBySlugQuery),
/* harmony export */   "l5": () => (/* binding */ calculatorConfigQuery)
/* harmony export */ });
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5091);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);
next_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const calculatorPagePaths = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`
  *[_type == 'calculatorInfoPage' && slug.current != null].slug.current
`;
const calculatorPagesBySlugQuery = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`
  *[_type == "calculatorInfoPage" && slug.current == $slug][0] {
    _id,
    title,
    content,
    isQuestion,
    isFinalPage,
    isEligible,
    isUndetermined,
    "choices": choices[]{_key, url, isExternalLink, label, linkTo->{slug}},
    "slug": slug.current,
  }
`;
const calculatorConfigQuery = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`
  *[_type == "calculatorConfig"][0] {
    notSureAnswer,
    feedback,
    errorReportingForm,
    checkAnotherConviction{..., "linkTo": reference->{slug}},
    legalDisclaimer
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 2063:
/***/ ((module) => {

module.exports = require("@mui/icons-material/History");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5711:
/***/ ((module) => {

module.exports = import("@portabletext/react");;

/***/ }),

/***/ 5091:
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4295));
module.exports = __webpack_exports__;

})();