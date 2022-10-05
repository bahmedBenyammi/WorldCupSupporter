import styles from '../styles/Home.module.css'
import Link from "next/link";


export default function Navbar (props:any){
    return(
        <nav className="flex items-center justify-between flex-wrap bg-gray-300 h-20">
            <div className="flex items-center  text-white mr-6">
                <svg className="fill-current" width="54" height="54" viewBox="0 0 54 54"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                </svg>

            </div>

            <div className='h-full mr-4'>
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