import React, {FC,  useState} from "react";

import SadFace from "../images/sadFace.svg"
import Error from "../images/Error.svg"
import Image from "next/image";
import {VoteProps} from "./voteProps";



export const VoteModle: FC<any> = ({children, handleClose}) => {
    const [status, setStatus] = useState('');
    const changeStatus = (e: string) => {
        setStatus(e)
    }
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<VoteProps>, {changeStatus: changeStatus});
        }
        return child;
    });
    const body=()=>{
        return <div className="m-4">
            {childrenWithProps}
            <p className="text-center italic">Note: we only accept popularise email domain name </p>
        </div>
    }
    return (<>
        <div
            className="justify-center  border items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative md:w-1/2 w-full mx-4 h-auto">
                <div className="flex justify-end z-20 relative ">
                    <div
                        className="rounded-full bg-white flex items-center justify-center translate-y-4 translate-x-3 w-8 h-8 border ">
                        <button type={"button"} onClick={handleClose} className="font-bold text-gray-700 font-mono">X
                        </button>
                    </div>
                </div>
                <div
                    className=" w-full shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    {status === 'wait' ?
                        waiting() : status === 'success' ?
                            success() : status === 'exist' ?
                                existEmail() : status === 'error' ?
                                    error() : <div> {body()}</div>}
                </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"/>
    </>)
}


const success = () => {
    return (
        <div className="flex w-full h-96 p-8 justify-center items-center">

            <div className="w-full h-full text-center grid grid-rows-3 ">
                <p className="text-3xl m-8 font-sans font-text font-bold">Success</p>
                <p className='align-middle m-4 font-bold'> Now you will recive a connfimation link in your email
                    inbox<br/>
                    please confirm your vote
                </p>
                <div className='flex justify-center items-end space-x-2 italic font-sans'>
                    <div className='flex justify-center'>
                        <p>Notes:</p>
                        <div className='flex-col text-start   '>
                            <p>- This link will active in next 24h </p>
                            <p>- Several unconfirmed votes are not made</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

const existEmail = () => {
    return (
        <div className="flex w-full h-96 p-8 justify-center items-center">
            <div className='grid grid-rows-2 h-full'>
                <div className="w-full h-full flex justify-center items-center">
                    <div className="relative h-28 w-28">
                        <Image src={SadFace} layout={"fill"} alt={"emoji"}></Image>
                    </div>
                </div>
                <div className='space-y-6 text-center'>
                    <p className='text-xl font-bold'>This email already used</p>
                    <p>you can use email only one time in every vote <br/>That&#39;s will make the vote fairer</p>
                </div>

            </div>

        </div>
    )
}
const error = () => {
    return (
        <div className="flex w-full h-96 p-8 justify-center items-center">
            <div className='flex-col justify-center space-y-6'>
                <div className="w-full  flex justify-center items-center">
                    <div className="relative h-28 w-28 ">
                        <Image src={Error} layout={"fill"} alt={"error"}></Image>
                    </div>
                </div>
                <div className='text-center '>
                    <p className='text-2xl font-bold'>Error 500 !</p>

                </div>

            </div>

        </div>
    )
}
const waiting = () => {
    return (
        <div className="flex w-full h-96 p-8 justify-center items-center">
            <div className=" text-gray-200 h-48 w-48 animate-spin dark:text-gray-500">
                <svg
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"/>
                    <path style={{fill: 'black'}}
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"/>
                </svg>
            </div>
        </div>)
}