import {ChangeEvent, FC, useState} from "react";
import {CountryDropdown} from "react-country-region-selector";
import {CountrySelector, countryList, teamList} from "./Flag";

let State={
    email:"",
    country:"",
    support:""
}

export const VoteModle: FC<any> = ({children}) => {

    return (<>
        <div
            className="justify-center  border items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative md:w-1/2 w-full mx-4 h-auto">
                <div className="flex justify-end z-20 relative ">
                    <div className="rounded-full bg-white flex items-center justify-center translate-y-4 translate-x-2 w-8 h-8 border ">
                    <p className="font-bold text-gray-700 font-mono">X</p></div></div>
                <div
                    className=" w-full shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    {children}
                </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"/>
    </>)
}

export const GlobelVote = () => {
    const [from,setFrom]=useState(State);
   const handlerChage= (e:ChangeEvent<HTMLInputElement>) => {
     setFrom({...from,[e.target.name]:e.target.value})
   }
   const handleSelectChange = (name:string,value:string):void => {
       setFrom({...from,[name]:value})
   }
    return (<div className="w-full p-4 scroll-mr-0">
        <p className="text-center font-sans font-black text-[30px] p-2">Support your team</p>
        <p className="text-center font-sans p-2 ">support your team in world cup 2022 <br/>
            vote for team who you gas will be win in Qutar 2022
        </p>
        <form className="flex-row md:p-4 p-0 md:px-14 px-0 space-y-2 ">
            <div className="grid grid-cols-4 items-center w-full justify-center space-x-4 ">
                <label className="font-sans col-span-1 font-semibold  ">Country :</label>

                <CountrySelector handleChangeP={handleSelectChange} name="country" country={countryList} className="col-span-3 appearance-none"/>
            </div>
            <div className="grid grid-cols-4 items-center w-full justify-center space-x-4">
                <label className="font-sans font-semibold ">Email :</label>
                <input className="p-1 border outline-0 focus:ring-1 focus:ring-blue-400 col-span-3" name="email" type="email"/>
            </div>
            <div className="grid grid-cols-4 items-center w-full justify-center space-x-4">
                <label className="font-sans font-semibold">Support :</label>
                <CountrySelector handleChangeP={handleSelectChange} name="support" country={teamList} className="col-span-3 appearance-none"/>


            </div>
            <div className='flex justify-center pt-4'>
                <button
                    className='bg-black text-white font-normal p-2 px-10 hover:bg-gray-900 justify-self-center'>Vote
                </button>
            </div>
        </form>
    </div>)
}