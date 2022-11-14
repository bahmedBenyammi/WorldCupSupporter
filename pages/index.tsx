import type {NextPage} from 'next'

import Image from 'next/image'
import Head from 'next/head';
import ball from "../images/white-logo.svg"
import {Short} from "../components/Country"
import {FC, useState} from "react";
import {Rank} from "../model/Rank"
import {VoteModle} from "../components/VoteModle";
import {GlobelVoteForm} from "../components/FormVote";
import {GlobalVoteCulc} from "../lib/GlobalVote";
import Flag from "react-flagkit";
import Navbar from "../components/Navbar";

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
            <Navbar border={true} sticky={true} />
            <Head>
                <title>Football supporters</title>
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
            <div className="bg-gray-100 w-full h-40 flex justify-center items-center">
                 <div className="text-center space-y-2 p-5">
                     <p className='text-2xl font-bold font-sans'>Global rank of Teams by supporters</p>
                     <p className="font-bold">This updated every 5 minutes</p>
                 </div>
            </div>
            <div className="m-4">
                {
                    rank.map((e, index) => {

                    return <Rank country={e.country} numVote={e.numVote} index={index} key={e.country }/>
                })}

            </div>
            {showVote&&<VoteModle handleClose={closeModel}><GlobelVoteForm /></VoteModle>}
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
                <Flag country={Short[country.replace(" ","_")]} />

                <p className="md:text-xl text-sm">{country}</p>
            </div>
            <div className="flex justify-start items-center  ">
                <p className="md:text-xl text-sm">{numVote}</p>
            </div>
        </div>
    </div>)
}

export async function getStaticProps() {
    const res = await GlobalVoteCulc()

    return {
        props: {
           rank: res,
        },
        revalidate: 60*5, // In seconds
    }
}

export default Home
