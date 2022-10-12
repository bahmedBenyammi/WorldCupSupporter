import {FC} from "react";
import {CountryDropdown} from "react-country-region-selector";
import {CountrySelector,countryList} from "./Flag";



export const VoteModle: FC<any> = ({children}) => {
    return (<>
        <div
            className="justify-center  border items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative md:w-1/2 w-full mx-4 h-auto">

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
    return (<div className="w-full p-4">
        <p className="text-center font-sans font-black text-[30px] p-2">Vote for your team</p>
        <p className="text-center font-sans ">support your team in world cup 2022 <br/>
            vote for team who you gas will be win in Qutar 2022
        </p>
        <form className="flex-row  p-4 px-14 space-y-2">
            <div className="grid grid-cols-4 items-center w-full justify-center space-x-4">
                <label className="font-sans col-span-1 font-semibold ">Your Country :</label>
                <CountryDropdown classes="p-1 border-r-2 border outline-0 focus:ring-1 focus:ring-blue-400 col-span-3" onChange={(val)=>console.log(val)} value="" />
            </div>
            <div className="grid grid-cols-4 items-center w-full justify-center space-x-4">
                <label className="font-sans font-semibold ">Email :</label>
                <input className="p-1 border outline-0 focus:ring-1 focus:ring-blue-400 col-span-3"/>
            </div>
            <div className="grid grid-cols-4 items-center w-full justify-center space-x-4">
                <label className="font-sans font-semibold">Vote for :</label>
                <CountrySelector country={countryList} className="p-1 border border-r-2 outline-0 focus:ring-1 focus:ring-blue-400 col-span-3"/>


            </div>
            <div className='flex justify-center pt-4'>
                <button
                    className='bg-black text-white font-normal p-2 px-10 hover:bg-gray-900 justify-self-center'>Vote
                </button>
            </div>
        </form>
    </div>)
}