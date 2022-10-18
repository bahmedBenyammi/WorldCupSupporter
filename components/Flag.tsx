import {FC, useEffect, useState} from "react";
import ReactCountryFlag from "react-country-flag";
import Select from "react-select/base";


export interface Country {
    name: string,
    short: string
}
export const countryList:Country[]=[
    {name: 'Afghanistan', short: 'AF'},
    {name: 'Åland Islands', short: 'AX'},
    {name: 'Albania', short: 'AL'},
    {name: 'Algeria', short: 'DZ'},
    {name: 'American Samoa', short: 'AS'},
    {name: 'AndorrA', short: 'AD'},
    {name: 'Angola', short: 'AO'},
    {name: 'Anguilla', short: 'AI'},
    {name: 'Antarctica', short: 'AQ'},
    {name: 'Antigua and Barbuda', short: 'AG'},
    {name: 'Argentina', short: 'AR'},
    {name: 'Armenia', short: 'AM'},
    {name: 'Aruba', short: 'AW'},
    {name: 'Australia', short: 'AU'},
    {name: 'Austria', short: 'AT'},
    {name: 'Azerbaijan', short: 'AZ'},
    {name: 'Bahamas', short: 'BS'},
    {name: 'Bahrain', short: 'BH'},
    {name: 'Bangladesh', short: 'BD'},
    {name: 'Barbados', short: 'BB'},
    {name: 'Belarus', short: 'BY'},
    {name: 'Belgium', short: 'BE'},
    {name: 'Belize', short: 'BZ'},
    {name: 'Benin', short: 'BJ'},
    {name: 'Bermuda', short: 'BM'},
    {name: 'Bhutan', short: 'BT'},
    {name: 'Bolivia', short: 'BO'},
    {name: 'Bosnia and Herzegovina', short: 'BA'},
    {name: 'Botswana', short: 'BW'},
    {name: 'Bouvet Island', short: 'BV'},
    {name: 'Brazil', short: 'BR'},
    {name: 'British Indian Ocean Territory', short: 'IO'},
    {name: 'Brunei Darussalam', short: 'BN'},
    {name: 'Bulgaria', short: 'BG'},
    {name: 'Burkina Faso', short: 'BF'},
    {name: 'Burundi', short: 'BI'},
    {name: 'Cambodia', short: 'KH'},
    {name: 'Cameroon', short: 'CM'},
    {name: 'Canada', short: 'CA'},
    {name: 'Cape Verde', short: 'CV'},
    {name: 'Cayman Islands', short: 'KY'},
    {name: 'Central African Republic', short: 'CF'},
    {name: 'Chad', short: 'TD'},
    {name: 'Chile', short: 'CL'},
    {name: 'China', short: 'CN'},
    {name: 'Christmas Island', short: 'CX'},
    {name: 'Cocos (Keeling) Islands', short: 'CC'},
    {name: 'Colombia', short: 'CO'},
    {name: 'Comoros', short: 'KM'},
    {name: 'Congo', short: 'CG'},
    {name: 'Congo, The Democratic Republic of the', short: 'CD'},
    {name: 'Cook Islands', short: 'CK'},
    {name: 'Costa Rica', short: 'CR'},
    {name: 'Cote D\'Ivoire', short: 'CI'},
    {name: 'Croatia', short: 'HR'},
    {name: 'Cuba', short: 'CU'},
    {name: 'Cyprus', short: 'CY'},
    {name: 'Czech Republic', short: 'CZ'},
    {name: 'Denmark', short: 'DK'},
    {name: 'Djibouti', short: 'DJ'},
    {name: 'Dominica', short: 'DM'},
    {name: 'Dominican Republic', short: 'DO'},
    {name: 'Ecuador', short: 'EC'},
    {name: 'Egypt', short: 'EG'},
    {name: 'El Salvador', short: 'SV'},
    {name: 'Equatorial Guinea', short: 'GQ'},
    {name: 'Eritrea', short: 'ER'},
    {name: 'Estonia', short: 'EE'},
    {name: 'Ethiopia', short: 'ET'},
    {name: 'Falkland Islands (Malvinas)', short: 'FK'},
    {name: 'Faroe Islands', short: 'FO'},
    {name: 'Fiji', short: 'FJ'},
    {name: 'Finland', short: 'FI'},
    {name: 'France', short: 'FR'},
    {name: 'Gabon', short: 'GA'},
    {name: 'Gambia', short: 'GM'},
    {name: 'Georgia', short: 'GE'},
    {name: 'Germany', short: 'DE'},
    {name: 'Ghana', short: 'GH'},
    {name: 'Gibraltar', short: 'GI'},
    {name: 'Greece', short: 'GR'},
    {name: 'Greenland', short: 'GL'},
    {name: 'Grenada', short: 'GD'},
    {name: 'Guadeloupe', short: 'GP'},
    {name: 'Guam', short: 'GU'},
    {name: 'Guatemala', short: 'GT'},
    {name: 'Guernsey', short: 'GG'},
    {name: 'Guinea', short: 'GN'},
    {name: 'Guinea-Bissau', short: 'GW'},
    {name: 'Guyana', short: 'GY'},
    {name: 'Haiti', short: 'HT'},
    {name: 'Heard Island and Mcdonald Islands', short: 'HM'},
    {name: 'Holy See (Vatican City State)', short: 'VA'},
    {name: 'Honduras', short: 'HN'},
    {name: 'Hong Kong', short: 'HK'},
    {name: 'Hungary', short: 'HU'},
    {name: 'Iceland', short: 'IS'},
    {name: 'India', short: 'IN'},
    {name: 'Indonesia', short: 'ID'},
    {name: 'Iran, Islamic Republic Of', short: 'IR'},
    {name: 'Iraq', short: 'IQ'},
    {name: 'Ireland', short: 'IE'},
    {name: 'Isle of Man', short: 'IM'},
    {name: 'Israel', short: 'IL'},
    {name: 'Italy', short: 'IT'},
    {name: 'Jamaica', short: 'JM'},
    {name: 'Japan', short: 'JP'},
    {name: 'Jersey', short: 'JE'},
    {name: 'Jordan', short: 'JO'},
    {name: 'Kazakhstan', short: 'KZ'},
    {name: 'Kenya', short: 'KE'},
    {name: 'Kiribati', short: 'KI'},
    {name: 'North Korea ', short: 'KP'},
    {name: 'South Korea', short: 'KR'},
    {name: 'Kuwait', short: 'KW'},
    {name: 'Kyrgyzstan', short: 'KG'},
    {name: 'Lao People\'S Democratic Republic', short: 'LA'},
    {name: 'Latvia', short: 'LV'},
    {name: 'Lebanon', short: 'LB'},
    {name: 'Lesotho', short: 'LS'},
    {name: 'Liberia', short: 'LR'},
    {name: 'Libyan Arab Jamahiriya', short: 'LY'},
    {name: 'Liechtenstein', short: 'LI'},
    {name: 'Lithuania', short: 'LT'},
    {name: 'Luxembourg', short: 'LU'},
    {name: 'Macao', short: 'MO'},
    {name: 'Macedonia, The Former Yugoslav Republic of', short: 'MK'},
    {name: 'Madagascar', short: 'MG'},
    {name: 'Malawi', short: 'MW'},
    {name: 'Malaysia', short: 'MY'},
    {name: 'Maldives', short: 'MV'},
    {name: 'Mali', short: 'ML'},
    {name: 'Malta', short: 'MT'},
    {name: 'Marshall Islands', short: 'MH'},
    {name: 'Martinique', short: 'MQ'},
    {name: 'Mauritania', short: 'MR'},
    {name: 'Mauritius', short: 'MU'},
    {name: 'Mayotte', short: 'YT'},
    {name: 'Mexico', short: 'MX'},
    {name: 'Micronesia, Federated States of', short: 'FM'},
    {name: 'Moldova, Republic of', short: 'MD'},
    {name: 'Monaco', short: 'MC'},
    {name: 'Mongolia', short: 'MN'},
    {name: 'Montserrat', short: 'MS'},
    {name: 'Morocco', short: 'MA'},
    {name: 'Mozambique', short: 'MZ'},
    {name: 'Myanmar', short: 'MM'},
    {name: 'Namibia', short: 'NA'},
    {name: 'Nauru', short: 'NR'},
    {name: 'Nepal', short: 'NP'},
    {name: 'Netherlands', short: 'NL'},
    {name: 'New Caledonia', short: 'NC'},
    {name: 'New Zealand', short: 'NZ'},
    {name: 'Nicaragua', short: 'NI'},
    {name: 'Niger', short: 'NE'},
    {name: 'Nigeria', short: 'NG'},
    {name: 'Niue', short: 'NU'},
    {name: 'Norfolk Island', short: 'NF'},
    {name: 'Northern Mariana Islands', short: 'MP'},
    {name: 'Norway', short: 'NO'},
    {name: 'Oman', short: 'OM'},
    {name: 'Pakistan', short: 'PK'},
    {name: 'Palau', short: 'PW'},
    {name: 'Palestinian', short: 'PS'},
    {name: 'Panama', short: 'PA'},
    {name: 'Papua New Guinea', short: 'PG'},
    {name: 'Paraguay', short: 'PY'},
    {name: 'Peru', short: 'PE'},
    {name: 'Philippines', short: 'PH'},
    {name: 'Pitcairn', short: 'PN'},
    {name: 'Poland', short: 'PL'},
    {name: 'Portugal', short: 'PT'},
    {name: 'Puerto Rico', short: 'PR'},
    {name: 'Qatar', short: 'QA'},
    {name: 'Reunion', short: 'RE'},
    {name: 'Romania', short: 'RO'},
    {name: 'Russian Federation', short: 'RU'},
    {name: 'RWANDA', short: 'RW'},
    {name: 'Saint Helena', short: 'SH'},
    {name: 'Saint Kitts and Nevis', short: 'KN'},
    {name: 'Saint Lucia', short: 'LC'},
    {name: 'Saint Pierre and Miquelon', short: 'PM'},
    {name: 'Saint Vincent and the Grenadines', short: 'VC'},
    {name: 'Samoa', short: 'WS'},
    {name: 'San Marino', short: 'SM'},
    {name: 'Sao Tome and Principe', short: 'ST'},
    {name: 'Saudi Arabia', short: 'SA'},
    {name: 'Senegal', short: 'SN'},
    {name: 'Serbia and Montenegro', short: 'CS'},
    {name: 'Seychelles', short: 'SC'},
    {name: 'Sierra Leone', short: 'SL'},
    {name: 'Singapore', short: 'SG'},
    {name: 'Slovakia', short: 'SK'},
    {name: 'Slovenia', short: 'SI'},
    {name: 'Solomon Islands', short: 'SB'},
    {name: 'Somalia', short: 'SO'},
    {name: 'South Africa', short: 'ZA'},
    {name: 'South Georgia', short: 'GS'},
    {name: 'Spain', short: 'ES'},
    {name: 'Sri Lanka', short: 'LK'},
    {name: 'Sudan', short: 'SD'},
    {name: 'Suriname', short: 'SR'},
    {name: 'Svalbard and Jan Mayen', short: 'SJ'},
    {name: 'Swaziland', short: 'SZ'},
    {name: 'Sweden', short: 'SE'},
    {name: 'Switzerland', short: 'CH'},
    {name: 'Syrian Arab Republic', short: 'SY'},
    {name: 'Taiwan, Province of China', short: 'TW'},
    {name: 'Tajikistan', short: 'TJ'},
    {name: 'Tanzania, United Republic of', short: 'TZ'},
    {name: 'Thailand', short: 'TH'},
    {name: 'Timor-Leste', short: 'TL'},
    {name: 'Togo', short: 'TG'},
    {name: 'Tokelau', short: 'TK'},
    {name: 'Tonga', short: 'TO'},
    {name: 'Trinidad and Tobago', short: 'TT'},
    {name: 'Tunisia', short: 'TN'},
    {name: 'Turkey', short: 'TR'},
    {name: 'Turkmenistan', short: 'TM'},
    {name: 'Turks and Caicos Islands', short: 'TC'},
    {name: 'Tuvalu', short: 'TV'},
    {name: 'Uganda', short: 'UG'},
    {name: 'Ukraine', short: 'UA'},
    {name: 'United Arab Emirates', short: 'AE'},
    {name: 'United Kingdom', short: 'GB'},
    {name: 'United States', short: 'US'},
    {name: 'Uruguay', short: 'UY'},
    {name: 'Uzbekistan', short: 'UZ'},
    {name: 'Vanuatu', short: 'VU'},
    {name: 'Venezuela', short: 'VE'},
    {name: 'Viet Nam', short: 'VN'},
    {name: 'Virgin Islands, British', short: 'VG'},
    {name: 'Virgin Islands, U.S.', short: 'VI'},
    {name: 'Wallis and Futuna', short: 'WF'},
    {name: 'Western Sahara', short: 'EH'},
    {name: 'Yemen', short: 'YE'},
    {name: 'Zambia', short: 'ZM'},
    {name: 'Zimbabwe', short: 'ZW'}
]

export const teamList: Country[] = [{name: 'Qatar', short: 'QA'}, {name: 'Germany', short: 'DE'}, {
    name: 'Denmark',
    short: 'DK'
}, {name: 'Brazil', short: 'BR'}, {name: 'France', short: 'FR'}, {name: 'Belgium', short: 'BE'}, {
    name: 'Croatia',
    short: 'HR'
}, {name: 'Spain', short: 'ES'}, {name: 'Serbia', short: 'RS'}, {
    name: 'Switzerland',
    short: 'CH'
}, {name: 'Netherlands', short: 'NL'}, {name: 'Argentina', short: 'AR'}, {
    name: 'Iran',
    short: 'IR'
}, {name: 'South_Korea', short: 'KR'}, {name: 'Japan', short: 'JP'}, {
    name: 'Saudi_Arabia',
    short: 'SA'
}, {name: 'Ecuador', short: 'EC'}, {name: 'Uruguay', short: 'UY'}, {name: 'Canada', short: 'CA'}, {
    name: 'Ghana',
    short: 'GH'
}, {name: 'Senegal', short: 'SN'}, {name: 'Portugal', short: 'PT'}, {name: 'Poland', short: 'PL'}, {
    name: 'Tunisia',
    short: 'TN'
}, {name: 'Morocco', short: 'MA'}, {name: 'Cameroon', short: 'CM'}, {name: 'USA', short: 'US'}, {
    name: 'Mexico',
    short: 'MX'
}, {name: 'Australia', short: 'AU'}, {name: 'Costa_Rica', short: 'CR'},]

interface CountryShort{
    [index: string]:string
}
export const Short:CountryShort={"Qatar":"QA","Germany":"DE","Denmark":"DK","Brazil":"BR","France":"FR","Belgium":"BE","Croatia":"HR","Spain":"ES","Serbia":"RS","Switzerland":"CH","Netherlands":"NL","Argentina":"AR","Iran":"IR","South_Korea":"KR","Japan":"JP","Saudi_Arabia":"SA","Ecuador":"EC","Uruguay":"UY","Canada":"CA","Ghana":"GH","Senegal":"SN","Portugal":"PT","Poland":"PL","Tunisia":"TN","Morocco":"MA","Cameroon":"CM","USA":"US","Mexico":"MX","Australia":"AU","Costa_Rica":"CR"}
interface CountrySelectorProps {
    country: Country[],
    className: string
    name:string
    handleChangeP:(name: string,value:string) =>void
}

interface option {
    value: string,
    label: any
}

export const CountrySelector: FC<CountrySelectorProps> = ({country, className,handleChangeP,name}) => {
    const [options,setOptions]=useState({}as option[])
    const handleChange=(e:any)=>{
        setValue(e)
        handleChangeP(name,e.name)
    }

    useEffect(()=>{
        var short:string='';
          var  options= country.map(e => {0
              short =short+JSON.stringify({[e.name.replace(" ","_")]:e.short}).
              replace('{','').replace('}','')+","

                let option = {value: e.name, label: e.short}
                return option;})
        console.log(short)
        setOptions(options)
    },[])

    const [value,setValue]=useState(null)
    const [open,setOpen]=useState(false)
    const onMenuClose=()=>{setOpen(false)}
    const onMenuOpen=()=>{setOpen(true)}
    return (
        <Select options={options} menuIsOpen={open} isSearchable={false } className={className} isMulti={false}
                inputValue="" onChange={handleChange}    formatOptionLabel={country => (
            <div className="flex space-x-4 items-center">
                <ReactCountryFlag  countryCode={country?.label} svg style={{fontSize: '1.5em', lineHeight: '1.5em',}}/>
                <span>{country?.value}</span>
            </div>
        )}
                onMenuClose={onMenuClose} onMenuOpen={onMenuOpen} value={value} onInputChange={()=>{}}/>
    )
}