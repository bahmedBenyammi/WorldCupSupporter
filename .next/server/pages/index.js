"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./images/white-logo.svg
/* harmony default export */ const white_logo = ({"src":"/_next/static/media/white-logo.e50d5712.svg","height":104,"width":108});
// EXTERNAL MODULE: external "react-country-flag"
var external_react_country_flag_ = __webpack_require__(5534);
var external_react_country_flag_default = /*#__PURE__*/__webpack_require__.n(external_react_country_flag_);
// EXTERNAL MODULE: ./components/Country.ts
var Country = __webpack_require__(9436);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-select/base"
const base_namespaceObject = require("react-select/base");
var base_default = /*#__PURE__*/__webpack_require__.n(base_namespaceObject);
;// CONCATENATED MODULE: ./components/Selectores.tsx




const CountrySelector = ({ country , className , handleChangeP , name  })=>{
    const { 0: options , 1: setOptions  } = (0,external_react_.useState)({});
    const handleChange = (e)=>{
        setValue(e);
        console.log(e);
        handleChangeP(name, e.value);
    };
    (0,external_react_.useEffect)(()=>{
        var short = "";
        var options = country.map((e)=>{
            0;
            short = short + JSON.stringify({
                [e.name.replace(" ", "_")]: e.short
            }).replace("{", "").replace("}", "") + ",";
            let option = {
                value: e.name,
                label: e.short
            };
            return option;
        });
        console.log(short);
        setOptions(options);
    }, []);
    const { 0: value , 1: setValue  } = (0,external_react_.useState)(null);
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const onMenuClose = ()=>{
        setOpen(false);
    };
    const onMenuOpen = ()=>{
        setOpen(true);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((base_default()), {
        options: options,
        menuIsOpen: open,
        isSearchable: false,
        className: className,
        isMulti: false,
        inputValue: "",
        onChange: handleChange,
        formatOptionLabel: (country)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex space-x-4 items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_country_flag_default()), {
                        countryCode: country?.label,
                        svg: true,
                        style: {
                            fontSize: "1.5em",
                            lineHeight: "1.5em"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: country?.value
                    })
                ]
            }),
        onMenuClose: onMenuClose,
        onMenuOpen: onMenuOpen,
        value: value,
        onInputChange: ()=>{}
    });
};

;// CONCATENATED MODULE: ./components/domaisList.ts
const domainList = [
    "gmail.com",
    "outlook.com",
    "hotmail.com",
    "aim.com",
    "yahoo.com",
    "icloud.com",
    "pm.com",
    "zoho.com",
    "yandex.com",
    "gmx.com",
    "titan.email",
    "hubspot.com",
    "tutanota.com"
];
const checkDomain = (email)=>{
    console.log(email);
    let index = email.indexOf("@");
    let domain = email.substring(index + 1);
    console.log(domain);
    return domainList.some((e)=>e === domain);
};

;// CONCATENATED MODULE: ./images/sadFace.svg
/* harmony default export */ const sadFace = ({"src":"/_next/static/media/sadFace.f8f01ecd.svg","height":72,"width":72});
;// CONCATENATED MODULE: ./images/Error.svg
/* harmony default export */ const Error = ({"src":"/_next/static/media/Error.179b7ba1.svg","height":256,"width":256});
;// CONCATENATED MODULE: ./components/VoteModle.tsx








let State = {
    email: "",
    country: "",
    support: ""
};
const VoteModle = ({ children , handleClose  })=>{
    const { 0: status , 1: setStatus  } = (0,external_react_.useState)("");
    const changeStatus = (e)=>{
        setStatus(e);
    };
    const childrenWithProps = external_react_default().Children.map(children, (child)=>{
        if (/*#__PURE__*/ external_react_default().isValidElement(child)) {
            return /*#__PURE__*/ external_react_default().cloneElement(child, {
                changeStatus: changeStatus
            });
        }
        return child;
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "justify-center border items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative md:w-1/2 w-full mx-4 h-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex justify-end z-20 relative ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "rounded-full bg-white flex items-center justify-center translate-y-4 translate-x-3 w-8 h-8 border ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    onClick: handleClose,
                                    className: "font-bold text-gray-700 font-mono",
                                    children: "X"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " w-full shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                            children: status === "wait" ? waiting() : status === "success" ? success() : status === "exist" ? existEmail() : status === "error" ? error() : childrenWithProps
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "opacity-25 fixed inset-0 z-40 bg-black"
            })
        ]
    });
};
const GlobelVote = ({ changeStatus  })=>{
    const { 0: from , 1: setFrom  } = (0,external_react_.useState)(State);
    const handlerChage = (e)=>{
        setFrom({
            ...from,
            [e.target.name]: e.target.value
        });
    };
    const handleSelectChange = (name, value)=>{
        console.log(value);
        setFrom({
            ...from,
            [name]: value
        });
        console.log(from);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!checkDomain(from.email)) console.log("errore");
        if (!changeStatus) return;
        fetch("/api/GlobalVoteSubmit", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(from)
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            let mes = data.message;
            if (mes == "success") changeStatus("success");
            else if (mes === "email exist") changeStatus("exit");
            else changeStatus("error");
        }).catch((e)=>{
            console.log(e);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full p-4 scroll-mr-0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-center font-sans font-black text-[30px] p-2",
                children: "Support your team"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-center font-sans p-2 ",
                children: [
                    "support your team in world cup 2022 ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "vote for team who you gas will be win in Qutar 2022"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                className: "flex-row md:p-4 p-0 md:px-14 px-0 space-y-2 ",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-4 items-center w-full justify-center space-x-4 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "font-sans col-span-1 font-semibold ",
                                children: "Country :"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CountrySelector, {
                                handleChangeP: handleSelectChange,
                                name: "country",
                                country: Country/* countryList */.Jm,
                                className: "col-span-3 appearance-none"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-4 items-center w-full justify-center space-x-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "font-sans font-semibold ",
                                children: "Email :"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "p-1 border outline-0 focus:ring-1 focus:ring-blue-400 col-span-3",
                                name: "email",
                                onChange: handlerChage,
                                value: from.email,
                                type: "email"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-4 items-center w-full justify-center space-x-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "font-sans font-semibold",
                                children: "Support :"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CountrySelector, {
                                handleChangeP: handleSelectChange,
                                name: "support",
                                country: Country/* teamList */.jk,
                                className: "col-span-3 appearance-none"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-center pt-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "bg-black text-white font-normal p-2 px-10 hover:bg-gray-900 justify-self-center",
                            children: "Vote"
                        })
                    })
                ]
            })
        ]
    });
};
const success = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex w-full h-96 p-8 justify-center items-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-full h-full text-center grid grid-rows-3 ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-3xl m-8 font-sans font-text font-bold",
                    children: "Success"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "align-middle m-4 font-bold",
                    children: [
                        " Now you will recive a connfimation link in your email inbox",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "please confirm your vote"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center items-end space-x-2 italic font-sans",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Notes:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex-col text-start ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "- This link will active in next 24h "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "- Several unconfirmed votes are not made"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
const existEmail = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex w-full h-96 p-8 justify-center items-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-rows-2 h-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full h-full flex justify-center items-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative h-28 w-28",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: sadFace,
                            layout: "fill",
                            alt: "emoji"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "space-y-6 text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-xl font-bold",
                            children: "This email already used"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "you can use email only one time in every vote ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "That's will make the vote fairer"
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const error = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex w-full h-96 p-8 justify-center items-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex-col justify-center space-y-6",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full flex justify-center items-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative h-28 w-28 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: Error,
                            layout: "fill",
                            alt: "error"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-center ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-2xl font-bold",
                        children: "Error 504 !"
                    })
                })
            ]
        })
    });
};
const waiting = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex w-full h-96 p-8 justify-center items-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: " text-gray-200 h-48 w-48 animate-spin dark:text-gray-500",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                viewBox: "0 0 100 101",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        style: {
                            fill: "black"
                        },
                        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                        fill: "currentFill"
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./lib/GlobalVote.ts + 2 modules
var GlobalVote = __webpack_require__(9646);
;// CONCATENATED MODULE: ./pages/index.tsx









const Home = ({ rank  })=>{
    const { 0: showVote , 1: setShowVote  } = (0,external_react_.useState)(false);
    const showModle = ()=>{
        setShowVote(true);
    };
    const closeModel = ()=>{
        setShowVote(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "world cup supporter"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "support team in world cup 2022,guess who will win that world cup"
                    }, "desc"),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "World cup Qatar 2022"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: ' h-[25rem] bg-[url("../images/support.jpg")] bg-cover bg-center',
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: " object-fill h-full bg-blue-800/80 flex justify-center items-center ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-20 relative",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: white_logo,
                                    layout: "fill",
                                    alt: "logo"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-center md:text-xl text-lg text-white p-3",
                                children: [
                                    "Support your team in ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "md:text-2xl text-xl text-white p-2 ",
                                        children: "World cup Qutar 2022"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-center p-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: showModle,
                                    className: "bg-white text-black p-2 px-4 rounded text-sm justify-self-center hover:bg-gray-300 focus:ring-2 focus:ring-blue-400 hover:bg-gradient-to-r from-gray-300 to-white ",
                                    children: "Vote for yor team"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "m-4",
                children: rank.map((e, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(Rank, {
                        country: e.country,
                        numVote: e.numVote,
                        index: index
                    }, e.country);
                })
            }),
            showVote && /*#__PURE__*/ jsx_runtime_.jsx(VoteModle, {
                handleClose: closeModel,
                children: /*#__PURE__*/ jsx_runtime_.jsx(GlobelVote, {})
            })
        ]
    });
};
const Rank = ({ country , numVote , index  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-center items-center m-4 space-x-6 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " flex justify-center w-1/12",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-gray-400 md:text-4xl text-xl font-bold font-sans",
                    children: index + 1 + "#"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between w-full border-2 border-blue-300 rounded p-3 Renk ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-start items-center space-x-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_country_flag_default()), {
                                countryCode: Country/* Short */.m4[country.replace(" ", "_")],
                                svg: true,
                                style: {
                                    fontSize: "2em",
                                    lineHeight: "2em"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "md:text-xl text-sm",
                                children: country
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-start items-center ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "md:text-xl text-sm",
                            children: numVote
                        })
                    })
                ]
            })
        ]
    });
};
async function getStaticProps() {
    console.log(process.env);
    console.log(process.env.MONGO_URI);
    const res = await (0,GlobalVote/* GlobalVoteCulc */.f)();
    return {
        props: {
            rank: res
        },
        revalidate: 60 * 5
    };
}
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5534:
/***/ ((module) => {

module.exports = require("react-country-flag");

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
var __webpack_exports__ = __webpack_require__.X(0, [598,675,519], () => (__webpack_exec__(8413)));
module.exports = __webpack_exports__;

})();