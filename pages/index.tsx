import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ball from "../images/ball.svg"
import ReactCountryFlag from "react-country-flag"
import {countryFlag} from "../components/Flag"
import {FC} from "react";

const country = [{
    name: "Germany",
    vote: 2222
}, {
    name: "Qatar ",
    vote: 2222
}]


const Home: NextPage = () => {
    return (<div className=''>
            <div className=' h-[25rem] bg-[url("../images/support.jpg")] bg-cover bg-center'>
                <div className='  object-fill h-full bg-blue-800/80 flex justify-center items-center  '>
                    <div >
                        <div className="h-20 relative">
                            <Image src={ball} width={"80"} height={"80"} layout={"fill"}/>
                        </div>

                        <p className='text-center md:text-xl text-lg text-white p-3'>Support your team in <br/>
                            <span className='md:text-2xl text-xl  text-white p-2 '>World cup Qutar 2022</span></p>

                        <p className='text-center p-4'>
                            <button className="bg-white text-black p-2 px-4 rounded text-sm justify-self-center drop-shadow-md
                             hover:bg-gray-300  focus:ring-2 focus:ring-blue-400 hover:bg-gradient-to-r from-gray-300 to-white ">
                                Vote for yor team</button></p>
                    </div>
                </div>

            </div>
            <div className="m-4">
                {Object.keys(countryFlag).map((e, index) => {
                    return <Rank country={e} index={index}/>
                })}

            </div>
        </div>


    )
}

const Rank: FC<{ country: string, index: number }> = ({country, index}) => {
    return (<div className="flex justify-center items-center m-4 space-x-6 ">
        <div className=' flex justify-center w-1/12'>
            <p className="text-gray-400 md:text-4xl text-xl  font-bold font-sans">{index + '#'}</p>
        </div>
        <div className="flex justify-between w-full border-2 border-blue-300 rounded p-3 Renk  ">
            <div className="flex justify-start items-center space-x-4">
                <ReactCountryFlag countryCode={countryFlag[country]} svg style={{fontSize: '2em', lineHeight: '2em',}}/>
                <p className="md:text-xl text-sm">{country}</p>
            </div>
            <div className="flex justify-start items-center  ">
                <p className="md:text-xl text-sm">2122</p>
            </div>
        </div>
    </div>)
}


export default Home
