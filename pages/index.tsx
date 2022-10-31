import type {NextPage} from 'next'

import Image from 'next/image'
import Head from 'next/head';
import ball from "../images/white-logo.svg"
import ReactCountryFlag from "react-country-flag"
import {Short} from "../components/Country"
import {FC, useState} from "react";
import {Rank} from "../model/Rank"
import {GlobelVote, VoteModle} from "../components/VoteModle";
import {GlobalVoteCulc} from "../lib/GlobalVote";

interface Props{
    rank:Rank[]
}

const Home: NextPage<Props> = ({rank}) => {

    const [showVote,setShowVote]=useState(false)
    const showModle = () => {
      setShowVote(true)
    }
    const closeModel = () => {
      setShowVote(false)
    }

    return (<div className=''>
            <Head>
                <title>world cup supporter</title>
                <meta name="description" content="support team in world cup 2022,guess who will win that world cup" key="desc" />
                <meta property="og:title" content="World cup Qatar 2022" />
            </Head>
            <div className=' h-[25rem] bg-[url("../images/support.jpg")] bg-cover bg-center'>
                <div className='  object-fill h-full bg-blue-800/80 flex justify-center items-center  '>
                    <div >
                        <div className="h-20 relative">
                            <Image src={ball}  layout={"fill"} alt={"logo"}/>
                        </div>

                        <p className='text-center md:text-xl text-lg text-white p-3'>Support your team in <br/>
                            <span className='md:text-2xl text-xl  text-white p-2 '>World cup Qutar 2022</span></p>
                        <p className='text-center p-4'>
                            <button onClick={showModle} className="bg-white text-black p-2 px-4 rounded text-sm justify-self-center
                             hover:bg-gray-300 focus:ring-2 focus:ring-blue-400 hover:bg-gradient-to-r from-gray-300 to-white ">
                                Vote for yor team</button></p>
                    </div>
                </div>

            </div>
            <div className="m-4">
                {
                    rank.map((e, index) => {

                    return <Rank country={e.country} numVote={e.numVote} index={index} key={e.country }/>
                })}

            </div>
            {showVote&&<VoteModle handleClose={closeModel}><GlobelVote /></VoteModle>}
        </div>


    )
}

const Rank: FC<{ country: string, numVote: number,index:number }> = ({country, numVote,index}) => {

    return (<div className="flex justify-center items-center m-4 space-x-6 ">
        <div className=' flex justify-center w-1/12'>
            <p className="text-gray-400 md:text-4xl text-xl  font-bold font-sans">{(index+1) + '#'}</p>
        </div>
        <div className="flex justify-between w-full border-2 border-blue-300 rounded p-3 Renk  ">
            <div className="flex justify-start items-center space-x-4">
                <ReactCountryFlag countryCode={Short[country.replace(" ","_")]} svg style={{fontSize: '2em', lineHeight: '2em',}}/>
                <p className="md:text-xl text-sm">{country}</p>
            </div>
            <div className="flex justify-start items-center  ">
                <p className="md:text-xl text-sm">{numVote}</p>
            </div>
        </div>
    </div>)
}

export async function getStaticProps() {
    console.log(process.env)
    console.log(process.env.MONGO_URI)
    const res = await GlobalVoteCulc()

    return {
        props: {
           rank: res,
        },
        revalidate: 60*5, // In seconds
    }
}

export default Home
