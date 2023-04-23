"use strict";
(() => {
var exports = {};
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "@sanity/webhook"
const webhook_namespaceObject = require("@sanity/webhook");
;// CONCATENATED MODULE: ./pages/api/revalidate.js
 //
// see the links below for documentation on Sanity.io webhook docs
// https://github.com/sanity-io/webhook-toolkit
// https://www.sanity.io/docs/webhooks
const config = {
    api: {
        bodyParser: false
    }
};
const revalidateLookup = {
    //keys are sourced from clearviction-sanity's repo --> schema folder --> file --> name
    calculatorInfoPage: function(body) {
        return `/calculator/${body.slug.current}`;
    },
    calculatorConfig: function(body) {
        return `/calculator/`;
    },
    calculatorPage: function(body) {
        return `/calculator/`;
    },
    choiceButton: function(body) {
        return `/calculator/`;
    }
};
//https://www.sanity.io/docs/webhooks
//https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
async function readBody(readable) {
    const chunks = [];
    for await (const chunk of readable){
        chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks).toString("utf8");
}
async function handler(req, res) {
    console.log("update request received");
    try {
        const secret = process.env.NEXT_REVALIDATE || "false";
        const signature = req?.headers?.[webhook_namespaceObject.SIGNATURE_HEADER_NAME];
        const body = await readBody(req); // Read the body into a string
        if (!(0,webhook_namespaceObject.isValidSignature)(body, signature, secret)) {
            res.status(401).json({
                success: false,
                msg: "Invalid signature"
            }); //400 status codes tell saniti there is an error, and not to retry
            return;
        }
        const jsonBody = JSON.parse(body);
        const updateType = jsonBody["_type"];
        const updateFunction = revalidateLookup[updateType];
        const updateURL = updateFunction(jsonBody);
        await res.revalidate(updateURL);
        console.log(" successfully revalidated: ", updateURL);
        return res.json({
            revalidated: true
        });
    } catch (err) {
        console.log("revalidate error", err);
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return res.status(500).json({
            msg: "internal server error"
        }); //500-range will be retried using an exponential back-off pattern
    }
// }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(948));
module.exports = __webpack_exports__;

})();