import styles from '../styles/Home.module.css'
import Link from "next/link";
import logo from "../images/logo.svg"
import Image from "next/image";

export default function Navbar (props:any){
    return(
        <nav className="flex items-center justify-between flex-wrap bg-white shadow-sm border-b-gray-400 z-10 sticky top-0  h-16">
            <div className="flex items-center h-full  ">
                <div className="h-12 relative w-12 mx-4">
                    <Image layout={"fill"} src={logo}  alt="logo" />
                </div>
                <div className=''>
                    <p className='md:text-xl text-lg font-sans font-bold font-nav'>Football Supporter</p>
                </div>
            </div>
            <button data-collapse-toggle="navbar-default" type="button"
                    className="inline-flex items-center p-2 mr-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"></path>
                </svg>
            </button>
            <div className='md:h-full md:mr-4  md:block md:w-auto w-full ' id="navbar-default">
                <div className="flex flex-col  md:p-0 md:m-0 p-4 mt-4 shadow  w-full md:flex-row md:h-full md:shadow-none md:space-x-2 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">

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