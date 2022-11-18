
import Link from "next/link";
import logo from "../images/logo.svg"
import Image from "next/image";
import {MouseEvent, useState} from "react";
import {useRouter} from "next/router";
interface props{
    sticky:boolean,
    border:boolean
}
const linkStyle=" font-text font-black w-auto p-4 flex  " +
    "justify-center items-center  hover:text-blue-500 hover:bg-gray-200" +
    "md:border-none"

const active='text-blue-500'
const links=[{
    text:"Support your team",
    link:"/"
},{
    text:"Matches",
    link:"/matches"
}
]
export default function Navbar ({sticky,border}: props){
    const [show ,setShow]=useState(false)
    const diplay = (show) ? "" : "hidden" ;
    const focus = (show) ?  "hover:bg-gray-100 focus:outline-none  focus:ring-gray-200" :""
    const Sticky = (sticky) ?  "sticky" :""
    const Border = (border) ?  "border-b border-b-gray-200" :""
    const router = useRouter();
    const isActive=(link:string)=> {
        if (link.length<router.pathname.length)
            if (router.pathname.startsWith(link+"/"))
                return linkStyle +" "+active
        if ( link===router.pathname)
        return linkStyle +" "+active
        return linkStyle}
    const handleClick = (e:MouseEvent) => {
      setShow(!show)
    }
    return(
        <nav className={"flex items-center justify-between  bg-white " +
            "md:shadow-sm z-10  block top-0 m-0 p-0 "+Sticky+" "+ Border}>
            <div className="h-16 w-full px-2 flex flex-wrap justify-between items-center">
                <Link href={"/"} >
            <div className="flex items-center h-full cursor-pointer ">

                <div className="h-12 mr-2 relative w-12">
                    <Image layout={"fill"} src={logo}  alt="logo" />
                </div>
                <div className=''>
                    <p className='md:text-xl text-lg font-sans font-bold font-nav'>Football Supporters</p>
                </div>
            </div></Link>
            <button type="button" onClick={handleClick}
                    className={"inline-flex items-center p-2 mr-3 text-sm " +
                        "text-gray-500 rounded-lg md:hidden  "+focus}
                    >
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    />
                </svg>
            </button>
            <div className={'md:h-full  md:bg-none md:border-none border-b border-b-gray-200  ' +
                'bg-white md:block md:w-auto w-full '+ diplay} id="navbar-default">
                <div className="flex flex-col  ms:border-b-gray-200 md:p-0 md:m-0  shadow
                 w-full md:flex-row md:h-full md:shadow-none md:space-x-2 md:mt-0 md:text-sm
                 md:font-medium md:border-0 md:bg-white ">
                    {links.map(e =>{ return( <Link href={e.link} key={e.link}>
                        <a className={isActive(e.link)}>
                            {e.text}</a>
                    </Link>)})
                    }


                </div>
            </div>
            </div>
        </nav>
    )
}