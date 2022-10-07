import styles from '../styles/Home.module.css'
import Link from "next/link";
import logo from "../images/logo.svg"
import Image from "next/image";

export default function Navbar (props:any){
    return(
        <nav className="flex items-center justify-between flex-wrap bg-white shadow-sm border-b-gray-400  sticky top-0  h-16">
            <div className="flex items-center  text-white">
                <div className="border h-16  relative">
                    <Image layout={"fill"}  objectFit='contain' src={logo}  alt="logo" />
                </div>

            </div>

            <div className='h-full '>
                <div className="text-sm lg:flex-grow h-full flex justify-center">

                    <Link href="#responsive-header" >
                        <a className=" font-text font-black  w-auto p-5   flex  justify-center items-center border-l border-white hover:text-white ">
                            Support your team</a>
                    </Link>
                    <Link href="#responsive-header">
                        <a className="font-text font-bold w-auto p-5   flex  justify-center items-center border-l border-white hover:text-white ">
                            Matches</a>
                    </Link>
                </div>

            </div>
        </nav>
    )
}