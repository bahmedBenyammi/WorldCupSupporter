import {FC} from "react";
import ReactCountryFlag from "react-country-flag";
import {Dropdown} from "rsuite";

export interface  Country{
    name:string,
    short:string
}


export const countryList:Country[]=[{name :'Qatar',short:'QA'},{name :'Germany',short:'DE'},{name :'Denmark',short:'DK'},{name :'Brazil',short:'BR'},{name :'France',short:'FR'},{name :'Belgium',short:'BE'},{name :'Croatia',short:'HR'},{name :'Spain',short:'ES'},{name :'Serbia',short:'RS'},{name :'Switzerland',short:'CH'},{name :'Netherlands',short:'NL'},{name :'Argentina',short:'AR'},{name :'Iran',short:'IR'},{name :'South_Korea',short:'KR'},{name :'Japan',short:'JP'},{name :'Saudi_Arabia',short:'SA'},{name :'Ecuador',short:'EC'},{name :'Uruguay',short:'UY'},{name :'Canada',short:'CA'},{name :'Ghana',short:'GH'},{name :'Senegal',short:'SN'},{name :'Portugal',short:'PT'},{name :'Poland',short:'PL'},{name :'Tunisia',short:'TN'},{name :'Morocco',short:'MA'},{name :'Cameroon',short:'CM'},{name :'USA',short:'US'},{name :'Mexico',short:'MX'},{name :'Australia',short:'AU'},{name :'Costa_Rica',short:'CR'},]

interface CountrySelectorProps{
    country:Country[],
    className:string
}
export const CountrySelector:FC<CountrySelectorProps> =({country,className})=>{
    return(
        <Dropdown className={className} toggleClassName={className} title="support Team">
            {country.map(e=>{
                return <Dropdown.Item  icon={ <ReactCountryFlag countryCode={e.short} svg style={{fontSize: '2em', lineHeight: '2em',}}/>} >{e.name}</Dropdown.Item>
            })}
        </Dropdown>
    )
}