
import Link from "next/link";
import {MouseEvent, useState} from "react";
import {useRouter} from "next/router";


const linkStyle=" font-text font-black w-auto p-3 flex  " +
    "justify-center items-center  hover:text-blue-500 hover:bg-gray-200" +
    "md:border-none   "

const active='text-blue-500 border-b border-b-blue-500'
const links=[{
    text:"Match",
    link:"/match"
},{
    text:"Groups",
    link:"/match/groups"
}
]
export default function NavMathes (){
    const [show ,setShow]=useState(false)

    const router = useRouter();
    const isActive=(link:string)=> {
        if ( link===router.pathname)
            return linkStyle +" "+active
        return linkStyle}

    return(
        <nav className="flex items-center justify-between overflow-x-scroll bg-white
         z-10  sticky block top-0 m-0 p-0 border-b border-b-gray-200">
            <div className="container flex w-auto justify-center items-center mx-auto">

                <div className={'md:h-full md:mr-4 md:bg-none md:border-none border-b border-b-gray-200 ' +
                    'bg-white md:block w-auto  '} id="navbar-default">
                    <div className="flex justify-center space-x-2  ms:border-b-gray-200 md:p-0 md:m-0
                 w-full flex-row md:h-full none md:space-x-2 md:mt-0 md:text-sm
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