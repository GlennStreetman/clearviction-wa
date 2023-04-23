"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./components/AccordionBuilder.tsx
var AccordionBuilder = __webpack_require__(3727);
// EXTERNAL MODULE: ./components/externalLinks.tsx
var externalLinks = __webpack_require__(1072);
// EXTERNAL MODULE: ./components/GridItem.tsx
var GridItem = __webpack_require__(5799);
// EXTERNAL MODULE: ./components/HeroBanner.tsx
var HeroBanner = __webpack_require__(1821);
// EXTERNAL MODULE: ./components/PaperSection.tsx
var PaperSection = __webpack_require__(9200);
// EXTERNAL MODULE: ./components/SectionContainer.tsx
var SectionContainer = __webpack_require__(2071);
;// CONCATENATED MODULE: ./components/ResearchBanner.tsx



const researchBannerStyles = {
    backgroundColor: "primary.main",
    color: "primary.contrastText",
    py: 4
};
const researchGoogleFormLink = "https://docs.google.com/forms/d/1KXmPrwzHeE8_EEL88RFkjOFP4S1A52Ode1vV6SJijao/viewform?edit_requested=true";
function ResearchBanner() {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        sx: researchBannerStyles,
        children: /*#__PURE__*/ jsx_runtime_.jsx(SectionContainer/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                container: true,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        item: true,
                        xs: 12,
                        sm: 6,
                        md: 8,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "h3",
                                gutterBottom: true,
                                children: "Help us improve the calculator by participating in research"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                fullWidth: true,
                                variant: "contained",
                                href: researchGoogleFormLink,
                                sx: (theme)=>({
                                        backgroundColor: theme.palette.primary.contrastText,
                                        color: "black",
                                        "&:hover": {
                                            color: theme.palette.primary.contrastText,
                                            backgroundColor: theme.palette.primary.dark
                                        }
                                    }),
                                children: "Learn more"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 12,
                        sm: 6,
                        md: 4,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            component: "img",
                            src: "/illustrations/checklist1.svg",
                            alt: "",
                            sx: {
                                width: "100%"
                            }
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./content/home.json
const home_namespaceObject = JSON.parse('{"heroBanner":{"heading":"Washington\'s Vacation Eligibility Calculator","smallHeading":"WA\'s Vacation Eligibility Calculator","subheading":"If you have convictions in Washington, you can check your eligibility to vacate your conviction for free in less than 10 minutes!","ctaLink":"/calculator/head-initial-1-cont","ctaText":"Access Calculator","imgsrc":"/illustrations/home-hero-2color.svg"},"sectionNavs":[{"label":"How it works","href":"#how-it-works"},{"label":"Why vacate","href":"#why-vacate"},{"label":"FAQ","href":"#faq"}],"gridSections":[{"id":"how-it-works","title":"How it works","ctaLink":"/get-started","ctaText":"Get started","items":[{"id":"how-it-works-item1","title":"Inform","body":"We break down the laws into understandable language.","imgsrc":"/illustrations/teamwork.svg"},{"id":"how-it-works-item2","title":"Assess","body":"You answer a few simple yes/no questions.","imgsrc":"/illustrations/checklist.svg"},{"id":"how-it-works-item3","title":"Calculate","body":"This helps determine your vacation eligibility in Washington.","imgsrc":"/illustrations/teamwork-2.svg"}]},{"id":"why-vacate","title":"Why Vacate?","subtitle":"A conviction vacation seals the offense from your record, and will give you more chance to access resources like:","items":[{"id":"why-vacate-item1","title":"Housing","body":"Make it easier to find and be approved for rent or purchasing a home.","imgsrc":"/illustrations/city-buildings.svg"},{"id":"why-vacate-item2","title":"Employment","body":"Reduce barriers to finding and obtaining employment.","imgsrc":"/illustrations/employment.svg"},{"id":"why-vacate-item3","title":"Education","body":"Apply for scholarships, programs, degrees, or certificates.","imgsrc":"/illustrations/graduation.svg"},{"id":"why-vacate-item4","title":"Government Assistance","body":"Receive government help and support.","imgsrc":"/illustrations/lawyer.svg"}]}],"faqs":[{"id":"faq1","summary":"What does it mean to vacate a conviction?","details":"Vacating a conviction is the process of clearing a conviction from your record so it is not visible to the public anymore. Vacating your conviction can remove that crime from some background checks, and you can say legally that you were never convicted of that crime.\\n\\nThe courts can still reference a vacated conviction in a future criminal proceeding, and not all convictions are eligible for vacation."},{"id":"faq2","summary":"Why should I consider vacating my conviction?","details":"If you are convicted of a crime, your criminal record will continue to show that conviction in background checks. Having a criminal record might negatively affect your housing, employment, and educational opportunities.\\n\\nIf you are experiencing this, vacating your conviction removes that crime from background checks, and you can say legally that you were never convicted of that crime. This can help you get access to housing, education, employment, volunteering opportunities, and more."},{"id":"faq3","summary":"How do I know if my conviction is eligible to vacate?","details":"To be eligible to vacate, there are specific criteria that your conviction must meet.\\n\\nFor misdemeanors, you can use our eligibility calculator to know if you are eligible.\\n\\nFor felonies, please refer to [RCW 9.94A.640](https://apps.leg.wa.gov/RCW/default.aspx?cite=9.94a.640). An easy to read resource to understand your eligibility is available at [Washington Law Help](https://www.washingtonlawhelp.org/search?q=vacation)."},{"id":"faq4","summary":"If my conviction meets the eligibility criteria, does that guarantee that I can vacate it?","details":"A request to vacate may be denied for other reasons, and is up to the discretion of the judge. The most common reasons that a request can be denied is if:\\n1. the court does not believe that vacating your conviction will be in the interest of society,\\n2. you violated probation or have not paid off your fines,\\n3. you are otherwise not eligible to vacate that particular conviction, or\\n4. there was an inaccuracy in the court records and/or the application."},{"id":"faq5","summary":"How long does the process take?","details":"To vacate your Washington conviction, the process takes on average three to four months, depending on your individual circumstances, the court’s caseload at the time, and whether there are any objections to vacating your conviction."},{"id":"faq6","summary":"What happens after my conviction is vacated?","details":"You will receive a court order vacating the conviction—which has the effect of withdrawing the guilty judgment and dismissing the charges against you. You can then legally state that you were not convicted of the offense."},{"id":"faq7","summary":"Does vacating a conviction make it disappear from my record?","details":"No.\\n\\nYour conviction will still be in court records and computerized court indexes to court records. If a conviction was a domestic violence case, these records and indexes will still show the case type.\\n\\nInformation about the court records from the cases that led to the convictions are still public. You can still find them on [www.courts.wa.gov](https://www.courts.wa.gov/)\\n\\nProsecutors can still use evidence of vacated convictions in a later criminal prosecution. They can still use them in a sexually violent predator commitment proceeding.\\n\\nFBI records and private background check records may still have information about the convictions."}]}');
;// CONCATENATED MODULE: ./pages/index.tsx














function Home({ content  }) {
    const theme = (0,styles_.useTheme)();
    const matchesXS = useMediaQuery_default()(theme.breakpoints.down("sm"));
    (0,externalLinks/* default */.Z)();
    // test
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        src: "https://www.googletagmanager.com/gtag/js?id=G-QNGJLGP9B3",
                        strategy: "afterInteractive"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        id: "google-analytics",
                        strategy: "afterInteractive",
                        children: `
          window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QNGJLGP9B3');
        `
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Clearviction"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Helping clear convictions"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(HeroBanner/* default */.Z, {
                        ...content.heroBanner
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionContainer/* default */.Z, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.ButtonGroup, {
                            variant: "text",
                            fullWidth: true,
                            orientation: matchesXS ? "vertical" : "horizontal",
                            children: content.sectionNavs.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    href: nav.href,
                                    children: nav.label
                                }, nav.href))
                        })
                    }),
                    content.gridSections.map((section)=>/*#__PURE__*/ jsx_runtime_.jsx(SectionContainer/* default */.Z, {
                            id: section.id,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(PaperSection/* PaperSection */.m, {
                                title: section.title,
                                ctaLink: section.ctaLink,
                                ctaText: section.ctaText,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    container: true,
                                    spacing: 4,
                                    children: section.items.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(GridItem/* GridItemCard */.n, {
                                            xs: 12,
                                            md: section.items.length % 2 ? 4 : 6,
                                            title: item.title,
                                            body: item.body,
                                            imgsrc: item.imgsrc
                                        }, item.id))
                                })
                            })
                        }, section.id)),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionContainer/* default */.Z, {
                        id: "faq",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(PaperSection/* PaperSection */.m, {
                            title: "FAQ",
                            children: content.faqs.map((faq)=>/*#__PURE__*/ jsx_runtime_.jsx(AccordionBuilder/* default */.Z, {
                                    ...faq
                                }, faq.id))
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ResearchBanner, {})
                ]
            })
        ]
    });
}
async function getStaticProps() {
    if (!home_namespaceObject) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            content: home_namespaceObject
        }
    };
}


/***/ }),

/***/ 5193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 8148:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 5574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 7676:
/***/ ((module) => {

module.exports = require("mui-markdown");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,172,298,821,200,274,799], () => (__webpack_exec__(9538)));
module.exports = __webpack_exports__;

})();