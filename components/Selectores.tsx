import {FC, useEffect, useState} from "react";

import Select from "react-select/base";
import {Country} from "./Country";
import Flag from "react-flagkit";


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
        handleChangeP(name,e.value)
    }

    useEffect(()=>{
        var short:string='';
          var  options= country.map(e => {0
              short =short+JSON.stringify({[e.name.replace(" ","_")]:e.short}).
              replace('{','').replace('}','')+","

                let option = {value: e.name, label: e.short}
                return option;})

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
                <Flag country={country?.label} />
                <span>{country?.value}</span>
            </div>
        )}
                onMenuClose={onMenuClose} onMenuOpen={onMenuOpen} value={value} onInputChange={()=>{}}/>
    )
}