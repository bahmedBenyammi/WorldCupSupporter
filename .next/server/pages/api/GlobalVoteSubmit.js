"use strict";
(() => {
var exports = {};
exports.id = 516;
exports.ids = [516];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 869:
/***/ ((module) => {

module.exports = import("emailjs");;

/***/ }),

/***/ 2066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qx": () => (/* binding */ checkTeam),
/* harmony export */   "dP": () => (/* binding */ checkCountry)
/* harmony export */ });
/* unused harmony exports countryList, teamList, Short */
const countryList = [
    {
        name: "Afghanistan",
        short: "AF"
    },
    {
        name: "\xc5land Islands",
        short: "AX"
    },
    {
        name: "Albania",
        short: "AL"
    },
    {
        name: "Algeria",
        short: "DZ"
    },
    {
        name: "American Samoa",
        short: "AS"
    },
    {
        name: "AndorrA",
        short: "AD"
    },
    {
        name: "Angola",
        short: "AO"
    },
    {
        name: "Anguilla",
        short: "AI"
    },
    {
        name: "Antarctica",
        short: "AQ"
    },
    {
        name: "Antigua and Barbuda",
        short: "AG"
    },
    {
        name: "Argentina",
        short: "AR"
    },
    {
        name: "Armenia",
        short: "AM"
    },
    {
        name: "Aruba",
        short: "AW"
    },
    {
        name: "Australia",
        short: "AU"
    },
    {
        name: "Austria",
        short: "AT"
    },
    {
        name: "Azerbaijan",
        short: "AZ"
    },
    {
        name: "Bahamas",
        short: "BS"
    },
    {
        name: "Bahrain",
        short: "BH"
    },
    {
        name: "Bangladesh",
        short: "BD"
    },
    {
        name: "Barbados",
        short: "BB"
    },
    {
        name: "Belarus",
        short: "BY"
    },
    {
        name: "Belgium",
        short: "BE"
    },
    {
        name: "Belize",
        short: "BZ"
    },
    {
        name: "Benin",
        short: "BJ"
    },
    {
        name: "Bermuda",
        short: "BM"
    },
    {
        name: "Bhutan",
        short: "BT"
    },
    {
        name: "Bolivia",
        short: "BO"
    },
    {
        name: "Bosnia and Herzegovina",
        short: "BA"
    },
    {
        name: "Botswana",
        short: "BW"
    },
    {
        name: "Bouvet Island",
        short: "BV"
    },
    {
        name: "Brazil",
        short: "BR"
    },
    {
        name: "British Indian Ocean Territory",
        short: "IO"
    },
    {
        name: "Brunei Darussalam",
        short: "BN"
    },
    {
        name: "Bulgaria",
        short: "BG"
    },
    {
        name: "Burkina Faso",
        short: "BF"
    },
    {
        name: "Burundi",
        short: "BI"
    },
    {
        name: "Cambodia",
        short: "KH"
    },
    {
        name: "Cameroon",
        short: "CM"
    },
    {
        name: "Canada",
        short: "CA"
    },
    {
        name: "Cape Verde",
        short: "CV"
    },
    {
        name: "Cayman Islands",
        short: "KY"
    },
    {
        name: "Central African Republic",
        short: "CF"
    },
    {
        name: "Chad",
        short: "TD"
    },
    {
        name: "Chile",
        short: "CL"
    },
    {
        name: "China",
        short: "CN"
    },
    {
        name: "Christmas Island",
        short: "CX"
    },
    {
        name: "Cocos (Keeling) Islands",
        short: "CC"
    },
    {
        name: "Colombia",
        short: "CO"
    },
    {
        name: "Comoros",
        short: "KM"
    },
    {
        name: "Congo",
        short: "CG"
    },
    {
        name: "Congo, The Democratic Republic of the",
        short: "CD"
    },
    {
        name: "Cook Islands",
        short: "CK"
    },
    {
        name: "Costa Rica",
        short: "CR"
    },
    {
        name: "Cote D'Ivoire",
        short: "CI"
    },
    {
        name: "Croatia",
        short: "HR"
    },
    {
        name: "Cuba",
        short: "CU"
    },
    {
        name: "Cyprus",
        short: "CY"
    },
    {
        name: "Czech Republic",
        short: "CZ"
    },
    {
        name: "Denmark",
        short: "DK"
    },
    {
        name: "Djibouti",
        short: "DJ"
    },
    {
        name: "Dominica",
        short: "DM"
    },
    {
        name: "Dominican Republic",
        short: "DO"
    },
    {
        name: "Ecuador",
        short: "EC"
    },
    {
        name: "Egypt",
        short: "EG"
    },
    {
        name: "El Salvador",
        short: "SV"
    },
    {
        name: "Equatorial Guinea",
        short: "GQ"
    },
    {
        name: "Eritrea",
        short: "ER"
    },
    {
        name: "Estonia",
        short: "EE"
    },
    {
        name: "Ethiopia",
        short: "ET"
    },
    {
        name: "Falkland Islands (Malvinas)",
        short: "FK"
    },
    {
        name: "Faroe Islands",
        short: "FO"
    },
    {
        name: "Fiji",
        short: "FJ"
    },
    {
        name: "Finland",
        short: "FI"
    },
    {
        name: "France",
        short: "FR"
    },
    {
        name: "Gabon",
        short: "GA"
    },
    {
        name: "Gambia",
        short: "GM"
    },
    {
        name: "Georgia",
        short: "GE"
    },
    {
        name: "Germany",
        short: "DE"
    },
    {
        name: "Ghana",
        short: "GH"
    },
    {
        name: "Gibraltar",
        short: "GI"
    },
    {
        name: "Greece",
        short: "GR"
    },
    {
        name: "Greenland",
        short: "GL"
    },
    {
        name: "Grenada",
        short: "GD"
    },
    {
        name: "Guadeloupe",
        short: "GP"
    },
    {
        name: "Guam",
        short: "GU"
    },
    {
        name: "Guatemala",
        short: "GT"
    },
    {
        name: "Guernsey",
        short: "GG"
    },
    {
        name: "Guinea",
        short: "GN"
    },
    {
        name: "Guinea-Bissau",
        short: "GW"
    },
    {
        name: "Guyana",
        short: "GY"
    },
    {
        name: "Haiti",
        short: "HT"
    },
    {
        name: "Heard Island and Mcdonald Islands",
        short: "HM"
    },
    {
        name: "Holy See (Vatican City State)",
        short: "VA"
    },
    {
        name: "Honduras",
        short: "HN"
    },
    {
        name: "Hong Kong",
        short: "HK"
    },
    {
        name: "Hungary",
        short: "HU"
    },
    {
        name: "Iceland",
        short: "IS"
    },
    {
        name: "India",
        short: "IN"
    },
    {
        name: "Indonesia",
        short: "ID"
    },
    {
        name: "Iran, Islamic Republic Of",
        short: "IR"
    },
    {
        name: "Iraq",
        short: "IQ"
    },
    {
        name: "Ireland",
        short: "IE"
    },
    {
        name: "Isle of Man",
        short: "IM"
    },
    {
        name: "Israel",
        short: "IL"
    },
    {
        name: "Italy",
        short: "IT"
    },
    {
        name: "Jamaica",
        short: "JM"
    },
    {
        name: "Japan",
        short: "JP"
    },
    {
        name: "Jersey",
        short: "JE"
    },
    {
        name: "Jordan",
        short: "JO"
    },
    {
        name: "Kazakhstan",
        short: "KZ"
    },
    {
        name: "Kenya",
        short: "KE"
    },
    {
        name: "Kiribati",
        short: "KI"
    },
    {
        name: "North Korea ",
        short: "KP"
    },
    {
        name: "South Korea",
        short: "KR"
    },
    {
        name: "Kuwait",
        short: "KW"
    },
    {
        name: "Kyrgyzstan",
        short: "KG"
    },
    {
        name: "Lao People'S Democratic Republic",
        short: "LA"
    },
    {
        name: "Latvia",
        short: "LV"
    },
    {
        name: "Lebanon",
        short: "LB"
    },
    {
        name: "Lesotho",
        short: "LS"
    },
    {
        name: "Liberia",
        short: "LR"
    },
    {
        name: "Libyan Arab Jamahiriya",
        short: "LY"
    },
    {
        name: "Liechtenstein",
        short: "LI"
    },
    {
        name: "Lithuania",
        short: "LT"
    },
    {
        name: "Luxembourg",
        short: "LU"
    },
    {
        name: "Macao",
        short: "MO"
    },
    {
        name: "Macedonia, The Former Yugoslav Republic of",
        short: "MK"
    },
    {
        name: "Madagascar",
        short: "MG"
    },
    {
        name: "Malawi",
        short: "MW"
    },
    {
        name: "Malaysia",
        short: "MY"
    },
    {
        name: "Maldives",
        short: "MV"
    },
    {
        name: "Mali",
        short: "ML"
    },
    {
        name: "Malta",
        short: "MT"
    },
    {
        name: "Marshall Islands",
        short: "MH"
    },
    {
        name: "Martinique",
        short: "MQ"
    },
    {
        name: "Mauritania",
        short: "MR"
    },
    {
        name: "Mauritius",
        short: "MU"
    },
    {
        name: "Mayotte",
        short: "YT"
    },
    {
        name: "Mexico",
        short: "MX"
    },
    {
        name: "Micronesia, Federated States of",
        short: "FM"
    },
    {
        name: "Moldova, Republic of",
        short: "MD"
    },
    {
        name: "Monaco",
        short: "MC"
    },
    {
        name: "Mongolia",
        short: "MN"
    },
    {
        name: "Montserrat",
        short: "MS"
    },
    {
        name: "Morocco",
        short: "MA"
    },
    {
        name: "Mozambique",
        short: "MZ"
    },
    {
        name: "Myanmar",
        short: "MM"
    },
    {
        name: "Namibia",
        short: "NA"
    },
    {
        name: "Nauru",
        short: "NR"
    },
    {
        name: "Nepal",
        short: "NP"
    },
    {
        name: "Netherlands",
        short: "NL"
    },
    {
        name: "New Caledonia",
        short: "NC"
    },
    {
        name: "New Zealand",
        short: "NZ"
    },
    {
        name: "Nicaragua",
        short: "NI"
    },
    {
        name: "Niger",
        short: "NE"
    },
    {
        name: "Nigeria",
        short: "NG"
    },
    {
        name: "Niue",
        short: "NU"
    },
    {
        name: "Norfolk Island",
        short: "NF"
    },
    {
        name: "Northern Mariana Islands",
        short: "MP"
    },
    {
        name: "Norway",
        short: "NO"
    },
    {
        name: "Oman",
        short: "OM"
    },
    {
        name: "Pakistan",
        short: "PK"
    },
    {
        name: "Palau",
        short: "PW"
    },
    {
        name: "Palestinian",
        short: "PS"
    },
    {
        name: "Panama",
        short: "PA"
    },
    {
        name: "Papua New Guinea",
        short: "PG"
    },
    {
        name: "Paraguay",
        short: "PY"
    },
    {
        name: "Peru",
        short: "PE"
    },
    {
        name: "Philippines",
        short: "PH"
    },
    {
        name: "Pitcairn",
        short: "PN"
    },
    {
        name: "Poland",
        short: "PL"
    },
    {
        name: "Portugal",
        short: "PT"
    },
    {
        name: "Puerto Rico",
        short: "PR"
    },
    {
        name: "Qatar",
        short: "QA"
    },
    {
        name: "Reunion",
        short: "RE"
    },
    {
        name: "Romania",
        short: "RO"
    },
    {
        name: "Russian Federation",
        short: "RU"
    },
    {
        name: "RWANDA",
        short: "RW"
    },
    {
        name: "Saint Helena",
        short: "SH"
    },
    {
        name: "Saint Kitts and Nevis",
        short: "KN"
    },
    {
        name: "Saint Lucia",
        short: "LC"
    },
    {
        name: "Saint Pierre and Miquelon",
        short: "PM"
    },
    {
        name: "Saint Vincent and the Grenadines",
        short: "VC"
    },
    {
        name: "Samoa",
        short: "WS"
    },
    {
        name: "San Marino",
        short: "SM"
    },
    {
        name: "Sao Tome and Principe",
        short: "ST"
    },
    {
        name: "Saudi Arabia",
        short: "SA"
    },
    {
        name: "Senegal",
        short: "SN"
    },
    {
        name: "Serbia and Montenegro",
        short: "CS"
    },
    {
        name: "Seychelles",
        short: "SC"
    },
    {
        name: "Sierra Leone",
        short: "SL"
    },
    {
        name: "Singapore",
        short: "SG"
    },
    {
        name: "Slovakia",
        short: "SK"
    },
    {
        name: "Slovenia",
        short: "SI"
    },
    {
        name: "Solomon Islands",
        short: "SB"
    },
    {
        name: "Somalia",
        short: "SO"
    },
    {
        name: "South Africa",
        short: "ZA"
    },
    {
        name: "South Georgia",
        short: "GS"
    },
    {
        name: "Spain",
        short: "ES"
    },
    {
        name: "Sri Lanka",
        short: "LK"
    },
    {
        name: "Sudan",
        short: "SD"
    },
    {
        name: "Suriname",
        short: "SR"
    },
    {
        name: "Svalbard and Jan Mayen",
        short: "SJ"
    },
    {
        name: "Swaziland",
        short: "SZ"
    },
    {
        name: "Sweden",
        short: "SE"
    },
    {
        name: "Switzerland",
        short: "CH"
    },
    {
        name: "Syrian Arab Republic",
        short: "SY"
    },
    {
        name: "Taiwan, Province of China",
        short: "TW"
    },
    {
        name: "Tajikistan",
        short: "TJ"
    },
    {
        name: "Tanzania, United Republic of",
        short: "TZ"
    },
    {
        name: "Thailand",
        short: "TH"
    },
    {
        name: "Timor-Leste",
        short: "TL"
    },
    {
        name: "Togo",
        short: "TG"
    },
    {
        name: "Tokelau",
        short: "TK"
    },
    {
        name: "Tonga",
        short: "TO"
    },
    {
        name: "Trinidad and Tobago",
        short: "TT"
    },
    {
        name: "Tunisia",
        short: "TN"
    },
    {
        name: "Turkey",
        short: "TR"
    },
    {
        name: "Turkmenistan",
        short: "TM"
    },
    {
        name: "Turks and Caicos Islands",
        short: "TC"
    },
    {
        name: "Tuvalu",
        short: "TV"
    },
    {
        name: "Uganda",
        short: "UG"
    },
    {
        name: "Ukraine",
        short: "UA"
    },
    {
        name: "United Arab Emirates",
        short: "AE"
    },
    {
        name: "United Kingdom",
        short: "GB"
    },
    {
        name: "United States",
        short: "US"
    },
    {
        name: "Uruguay",
        short: "UY"
    },
    {
        name: "Uzbekistan",
        short: "UZ"
    },
    {
        name: "Vanuatu",
        short: "VU"
    },
    {
        name: "Venezuela",
        short: "VE"
    },
    {
        name: "Viet Nam",
        short: "VN"
    },
    {
        name: "Virgin Islands, British",
        short: "VG"
    },
    {
        name: "Virgin Islands, U.S.",
        short: "VI"
    },
    {
        name: "Wallis and Futuna",
        short: "WF"
    },
    {
        name: "Western Sahara",
        short: "EH"
    },
    {
        name: "Yemen",
        short: "YE"
    },
    {
        name: "Zambia",
        short: "ZM"
    },
    {
        name: "Zimbabwe",
        short: "ZW"
    }
];
const teamList = [
    {
        name: "Qatar",
        short: "QA"
    },
    {
        name: "Germany",
        short: "DE"
    },
    {
        name: "Denmark",
        short: "DK"
    },
    {
        name: "Brazil",
        short: "BR"
    },
    {
        name: "France",
        short: "FR"
    },
    {
        name: "Belgium",
        short: "BE"
    },
    {
        name: "Croatia",
        short: "HR"
    },
    {
        name: "Spain",
        short: "ES"
    },
    {
        name: "Serbia",
        short: "RS"
    },
    {
        name: "Switzerland",
        short: "CH"
    },
    {
        name: "Netherlands",
        short: "NL"
    },
    {
        name: "Argentina",
        short: "AR"
    },
    {
        name: "Iran",
        short: "IR"
    },
    {
        name: "South_Korea",
        short: "KR"
    },
    {
        name: "Japan",
        short: "JP"
    },
    {
        name: "Saudi_Arabia",
        short: "SA"
    },
    {
        name: "Ecuador",
        short: "EC"
    },
    {
        name: "Uruguay",
        short: "UY"
    },
    {
        name: "Canada",
        short: "CA"
    },
    {
        name: "Ghana",
        short: "GH"
    },
    {
        name: "Senegal",
        short: "SN"
    },
    {
        name: "Portugal",
        short: "PT"
    },
    {
        name: "Poland",
        short: "PL"
    },
    {
        name: "Tunisia",
        short: "TN"
    },
    {
        name: "Morocco",
        short: "MA"
    },
    {
        name: "Cameroon",
        short: "CM"
    },
    {
        name: "USA",
        short: "US"
    },
    {
        name: "Mexico",
        short: "MX"
    },
    {
        name: "Australia",
        short: "AU"
    },
    {
        name: "Costa Rica",
        short: "CR"
    },
    {
        name: "England",
        short: "GB-ENG"
    },
    {
        name: "Wales",
        short: "GB-WLS"
    }
];
const checkCountry = (country)=>{
    return countryList.some((e)=>e.name === country);
};
const checkTeam = (country)=>{
    return teamList.some((e)=>e.name === country);
};
const Short = {
    "Qatar": "QA",
    "Germany": "DE",
    "Denmark": "DK",
    "Brazil": "BR",
    "France": "FR",
    "Belgium": "BE",
    "Croatia": "HR",
    "Spain": "ES",
    "Serbia": "RS",
    "Switzerland": "CH",
    "Netherlands": "NL",
    "Argentina": "AR",
    "Iran": "IR",
    "South_Korea": "KR",
    "Japan": "JP",
    "Saudi_Arabia": "SA",
    "Ecuador": "EC",
    "Uruguay": "UY",
    "Canada": "CA",
    "Ghana": "GH",
    "Senegal": "SN",
    "Portugal": "PT",
    "Poland": "PL",
    "Tunisia": "TN",
    "Morocco": "MA",
    "Cameroon": "CM",
    "USA": "US",
    "Mexico": "MX",
    "Australia": "AU",
    "Costa_Rica": "CR",
    "England": "GB-ENG",
    "Wales": "GB-WLS"
};


/***/ }),

/***/ 3983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ checkDomain)
/* harmony export */ });
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


/***/ }),

/***/ 926:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ emailConfermation)
/* harmony export */ });
/* harmony import */ var emailjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(869);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([emailjs__WEBPACK_IMPORTED_MODULE_0__]);
emailjs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const client = new emailjs__WEBPACK_IMPORTED_MODULE_0__.SMTPClient({
    user: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
    host: "smtp.gmail.com",
    ssl: true
});
const emailConfermation = (email, link, support)=>{
    client.send({
        text: "i hope this works",
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: "confirm",
        attachment: [
            {
                data: templet(support, link),
                alternative: true
            }, 
        ]
    }, (err, message)=>{
        console.log(err || message);
    });
};
const templet = (suppot, link)=>{
    return '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN"\n' + '        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"\n' + '      xmlns:v="urn:schemas-microsoft-com:vml" lang="en">\n' + "\n" + "<head>\n" + '    <link rel="stylesheet" type="text/css" hs-webfonts="true"\n' + '          href="https://fonts.googleapis.com/css?family=Lato|Lato:i,b,bi">\n' + "    <title>Email template</title>\n" + '    <meta property="og:title" content="Email template">\n' + "\n" + '    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n' + "\n" + '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' + "\n" + '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' + "\n" + '    <style type="text/css">\n' + "\n" + "        a {\n" + "            text-decoration: underline;\n" + "            color: inherit;\n" + "            font-weight: bold;\n" + "            color: #253342;\n" + "        }\n" + "\n" + "        h1 {\n" + "            font-size: 56px;\n" + "        }\n" + "\n" + "        h2 {\n" + "            font-size: 28px;\n" + "            font-weight: 900;\n" + "        }\n" + "\n" + "        p {\n" + "            font-weight: 100;\n" + "        }\n" + "\n" + "        td {\n" + "            vertical-align: top;\n" + "        }\n" + "\n" + "        #email {\n" + "            margin: auto;\n" + "            width: 600px;\n" + "            background-color: white;}" + "        button {\n" + "            margin: 50px;\n" + "            align-self: center;\n" + "            font: inherit;\n" + "            background-color: #59baff;\n" + "            border: none;\n" + "            padding: 10px;\n" + "            text-transform: uppercase;\n" + "            letter-spacing: 2px;\n" + "            font-weight: 900;\n" + "            color: white;\n" + "            border-radius: 5px;\n" + "        }\n" + "        .div {\n" + "            position: relative;\n" + "            margin: auto;\n" + "            text-align: center;\n" + "        }\n" + "    </style>\n" + "</head>\n" + '<body bgcolor="#F5F8FA"\n' + '      style="width: 100%; margin: auto 0; padding:0; font-family:Lato, sans-serif; font-size:18px; color:#33475B; word-break:break-word">\n' + '<div id="email">\n' + "    <! Banner -->\n" + '    <table role="presentation" width="100%">\n' + "        <tr>\n" + '            <td align="center" style="color: white;">\n' + '                <img alt="logo" title="logo" height="87"' + ' style="display: block" src="https://drive.google.com/uc?export=view&id=1hRfvw2UzszrNtm86rBflsYdFddksY1HG" width="100px" align="middle">\n' + "            </td>\n" + "    </table>\n" + '    <div class="div">\n' + '        <h2 align="center"> Welcome to Football supporter </h2>\n' + '        <p align="center">\n' + "            you support in world cup 2022\n" + "        </p>\n" + '        <h3 align="center">' + suppot + "</h3>\n" + '        <p align="center">\n' + "            please Confirme your vote from hier\n" + "        </p>\n" + '        <a href="' + link + '" >\n' + "            <button >\n" + "                Confirme\n" + "            </button>\n" + "        </a>\n" + "    </div>\n" + "</div>\n" + "</body>\n" + "</html>";
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

class db {
    static async getInestence() {
        if (this.inestence == null) this.inestence = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 20000
        });
        return this.inestence;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);


/***/ }),

/***/ 7238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ GlobalVote)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const voteShema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    country: {
        type: String,
        require: true,
        unique: false
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    support: {
        type: String,
        require: true,
        unique: false
    },
    isComfire: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: {
        createdAt: "created_at"
    }
});
const GlobalVote = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.GlobalVote || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("GlobalVote", voteShema) //  export const GlobalVote=model('GlobalVote',voteShema)
;


/***/ }),

/***/ 7685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _components_domaisList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3983);
/* harmony import */ var _components_Country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2066);
/* harmony import */ var _model_GlobalVote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7238);
/* harmony import */ var _model_Bd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9209);
/* harmony import */ var _lib_EmailSender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(926);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_EmailSender__WEBPACK_IMPORTED_MODULE_3__]);
_lib_EmailSender__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






_model_Bd__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getInestence */ .Z.getInestence().then(()=>console.log("database get inestence"));
async function handler(req, res) {
    if (req.method != "POST") return res.status(500).json({
        error: "bad request"
    });
    let { email , country , support  } = req.body;
    if (!email || !country || !support) return res.status(500).json({
        error: "bad request"
    });
    if (!(0,_components_domaisList__WEBPACK_IMPORTED_MODULE_5__/* .checkDomain */ .N)(email) || !(0,_components_Country__WEBPACK_IMPORTED_MODULE_0__/* .checkCountry */ .dP)(country) || !(0,_components_Country__WEBPACK_IMPORTED_MODULE_0__/* .checkTeam */ .Qx)(support)) return res.status(500).json({
        error: "bad request"
    });
    try {
        let vote = new _model_GlobalVote__WEBPACK_IMPORTED_MODULE_1__/* .GlobalVote */ .c({
            email: email,
            country: country,
            support: support
        });
        vote = await vote.save();
        const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().genSalt(10);
        let id = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().hash(vote._id.toString(), salt);
        let link = process.env.URL + "/confirme?email=" + email + "&id=" + id;
        (0,_lib_EmailSender__WEBPACK_IMPORTED_MODULE_3__/* .emailConfermation */ .e)(email, link, support);
        return res.status(200).json({
            message: "success"
        });
    } catch (e) {
        console.log("ok");
        return res.status(500).json({
            error: "email exist"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7685));
module.exports = __webpack_exports__;

})();