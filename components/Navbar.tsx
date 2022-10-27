import styles from '../styles/Home.module.css'
import Link from "next/link";
import logo from "../images/logo.svg"
import Image from "next/image";

export default function Navbar (props:any){
    return(
        <nav className="flex items-center justify-between flex-wrap bg-white shadow-sm border-b-gray-400 z-10 sticky top-0  h-16">
            <div className="flex items-center  ">
                <div className="h-12 relative w-12 mx-4">
                    <Image layout={"fill"} src={logo}  alt="logo" />
                </div>
                <div className=''>
                    <p className='text-xl font-sans font-bold font-nav'>Football Supporter</p>
                </div>
            </div>

            <div className='h-full '>
                <div className="text-sm lg:flex-grow h-full flex justify-center">

                    <Link href="/" >
                        <a className=" font-text font-black  w-auto p-5   flex  justify-center items-center border-l border-white hover:text-blue-500 ">
                            Support your team</a>
                    </Link>
                    <Link href="/matches">
                        <a className="font-text font-bold w-auto p-5   flex  justify-center items-center border-l border-white hover:text-blue-500 ">
                            Matches</a>
                    </Link>
                </div>

            </div>
        </nav>
    )
}