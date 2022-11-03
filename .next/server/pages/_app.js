"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./images/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.e8e5f321.svg","height":104,"width":108});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/Navbar.tsx






const linkStyle = " font-text font-black w-auto p-4 flex  " + "justify-center items-center  hover:text-blue-500 hover:bg-gray-200" + "md:border-none border-b border-b-gray-200  ";
const active = "text-blue-500";
const links = [
    {
        text: "Support your team",
        link: "/"
    },
    {
        text: "Matches",
        link: "/matches"
    }
];
function Navbar() {
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const diplay = show ? "" : "hidden";
    const focus = show ? "hover:bg-gray-100 focus:outline-none  focus:ring-gray-200" : "";
    const router = (0,router_namespaceObject.useRouter)();
    const isActive = (link)=>{
        if (link === router.pathname) return linkStyle + " " + active;
        return linkStyle;
    };
    const handleClick = (e)=>{
        setShow(!show);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "flex items-center justify-between bg-white md:shadow-sm z-10 sticky block top-0 m-0 p-0 border-b border-b-gray-200",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "h-16 container flex flex-wrap justify-between items-center mx-auto",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center h-full cursor-pointer ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-12 mr-2 relative w-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    layout: "fill",
                                    src: logo,
                                    alt: "logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "md:text-xl text-lg font-sans font-bold font-nav",
                                    children: "Football Supporter"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    type: "button",
                    onClick: handleClick,
                    className: "inline-flex items-center p-2 mr-3 text-sm " + "text-gray-500 rounded-lg md:hidden  " + focus,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sr-only",
                            children: "Open main menu"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "w-6 h-6",
                            "aria-hidden": "true",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "md:h-full md:mr-4 md:bg-none md:border-none border-b border-b-gray-200 " + "bg-white md:block md:w-auto w-full " + diplay,
                    id: "navbar-default",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col ms:border-b-gray-200 md:p-0 md:m-0 shadow w-full md:flex-row md:h-full md:shadow-none md:space-x-2 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ",
                        children: links.map((e)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: e.link,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: isActive(e.link),
                                    children: e.text
                                })
                            }, e.link);
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/_app.tsx



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,676,664,675], () => (__webpack_exec__(1297)));
module.exports = __webpack_exports__;

})();