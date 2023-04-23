(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: ./styles/global.css
var global = __webpack_require__(9605);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./content/navItems.ts
const navItems = [
    {
        href: "/",
        text: "Home"
    },
    {
        href: "/get-started",
        text: "Get Started"
    },
    {
        href: "/get-involved",
        text: "Get Involved"
    },
    {
        href: "/why-vacate",
        text: "Why Vacate"
    },
    {
        href: "/about",
        text: "About Us"
    },
    {
        href: "/donate",
        text: "Donate"
    },
    {
        href: "/contact",
        text: "Contact"
    },
    {
        href: "/calculator/head-initial-1-cont",
        text: "Access Calculator"
    }
];
/* harmony default export */ const content_navItems = (navItems);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/NavigationLogo.jsx



function NavigationLogo({ fullSize =false  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.ButtonBase, {
        href: "/",
        sx: {
            py: fullSize ? 2 : 1,
            height: "100%"
        },
        children: fullSize ? // eslint-disable-next-line @next/next/no-img-element
        /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: "/cv_logo_inline.svg",
            height: "100%",
            alt: "Clearviction logo"
        }) : // eslint-disable-next-line @next/next/no-img-element
        /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: "/cv_logo_small.svg",
            height: "100%",
            alt: "Clearviction logo"
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Footer.tsx







const sectionContainerStyles = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};
const sectionHeaderStyles = {
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};
function Footer() {
    const theme = (0,styles_.useTheme)();
    const matches = useMediaQuery_default()(theme.breakpoints.up("md"));
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        component: "footer",
        color: "primary",
        sx: {
            mt: "auto",
            backgroundColor: "primary.dark",
            color: "primary.contrastText"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
            maxWidth: "xl",
            sx: {
                display: "flex",
                textAlign: "center",
                padding: 2,
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
                gap: 2
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: sectionContainerStyles,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: sectionHeaderStyles,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavigationLogo, {
                                fullSize: true
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "caption",
                            gutterBottom: true,
                            children: "Clearviction is reducing barriers faced by formerly incarcerated individuals by streamlining the process of vacating eligible convictions in Washington state."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "caption",
                            children: "Clearviction is a registered 501(c)3 nonprofit organization, EIN#88-3187952. All donations are tax deductible in full or in part."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: sectionContainerStyles,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: sectionHeaderStyles,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "h4",
                                children: "Links"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            container: true,
                            spacing: 1,
                            maxWidth: 300,
                            children: content_navItems.filter((item)=>{
                                return item.text !== "Home" && item.text !== "Access Calculator";
                            }).map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    xs: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                        href: item.href,
                                        color: "primary.contrastText",
                                        underline: "hover",
                                        fontSize: 18,
                                        noWrap: true,
                                        children: item.text
                                    })
                                }, item.text))
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: sectionContainerStyles,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: sectionHeaderStyles,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "h4",
                                children: "Partners"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            sx: {
                                flex: 1
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        alt: "",
                                        src: "/democracylab-logo.png",
                                        width: 412,
                                        height: 122,
                                        style: {
                                            maxWidth: "200px",
                                            width: "100%",
                                            height: "auto",
                                            objectFit: "contain"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        alt: "",
                                        src: "/openseattle-logo.png",
                                        width: 130,
                                        height: 102,
                                        style: {
                                            maxWidth: "200px",
                                            width: "100%",
                                            height: "auto",
                                            objectFit: "contain"
                                        }
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/SkipLink.tsx


const styles = {
    position: "fixed",
    ":not(:focus)": {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: 0
    }
};
function SkipLink({ skipTo  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
        sx: styles,
        href: skipTo,
        variant: "contained",
        color: "neutral",
        children: "Skip to Content"
    });
}
SkipLink.defaultProps = {
    skipTo: "#main"
};

;// CONCATENATED MODULE: ./components/layout/Header.jsx










function Header() {
    const theme = (0,styles_.useTheme)();
    const matches = useMediaQuery_default()(theme.breakpoints.up("md"));
    const [mobileOpen, setMobileOpen] = (0,external_react_.useState)(false);
    function handleDrawerToggle() {
        setMobileOpen((prev)=>!prev);
    }
    const drawer = /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        onClick: handleDrawerToggle,
        sx: {
            flexGrow: 1
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.List, {
            sx: {
                my: 2
            },
            children: [
                content_navItems.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                        disablePadding: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemButton, {
                            component: (link_default()),
                            href: item.href,
                            sx: {
                                textAlign: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                primary: item.text
                            })
                        })
                    }, item.text)),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        variant: "caption",
                        sx: {
                            mb: 2,
                            px: 2,
                            textAlign: "center"
                        },
                        children: "The information on this site is not, nor should it be considered legal advice."
                    })
                }, "disclaimer")
            ]
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.AppBar, {
                color: "primary",
                elevation: 0,
                component: "nav",
                position: "sticky",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                    maxWidth: "xl",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
                        disableGutters: true,
                        sx: {
                            height: {
                                xs: 64
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SkipLink, {
                                color: "primary",
                                variant: "contained"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    flexGrow: 1,
                                    height: "100%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavigationLogo, {
                                    fullSize: matches
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                color: "inherit",
                                "aria-label": "open drawer",
                                sx: {
                                    display: {
                                        xl: "none"
                                    }
                                },
                                onClick: handleDrawerToggle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                    fontSize: "large"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    display: {
                                        xs: "none",
                                        xl: "flex"
                                    },
                                    gap: 2
                                },
                                children: content_navItems.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        href: item.href,
                                        variant: item.text === "Access Calculator" ? "contained" : "text",
                                        color: "neutral",
                                        size: "small",
                                        sx: {
                                            whiteSpace: "nowrap"
                                        },
                                        children: item.text
                                    }, item.text))
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                component: "nav",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
                    open: mobileOpen,
                    onClose: handleDrawerToggle,
                    ModalProps: {
                        keepMounted: true
                    },
                    sx: {
                        display: {
                            xs: "block",
                            xl: "none"
                        },
                        textAlign: "center"
                    },
                    anchor: "right",
                    children: drawer
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./styles/themes/theme.tsx
var theme = __webpack_require__(9648);
// EXTERNAL MODULE: ./utils/createEmotionCache.js
var createEmotionCache = __webpack_require__(9907);
;// CONCATENATED MODULE: ./pages/_app.js









const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
function MyApp({ Component , pageProps , emotionCache =clientSideEmotionCache  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
            value: emotionCache,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ThemeProvider, {
                    theme: theme/* default */.ZP,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 9605:
/***/ (() => {



/***/ }),

/***/ 1913:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ 5193:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 5574:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,172,108,636,675,207], () => (__webpack_exec__(2205)));
module.exports = __webpack_exports__;

})();