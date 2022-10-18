import type {NextPage} from 'next'

import Image from 'next/image'

import ball from "../images/ball.svg"
import ReactCountryFlag from "react-country-flag"
import {Country, Short, teamList} from "../components/Flag"
import {FC, useState} from "react";
import {Rank} from "../model/Rank"
import {GlobelVote, VoteModle} from "../components/VoteModle";
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
    var c='';
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
                            <button onClick={showModle} className="bg-white text-black p-2 px-4 rounded text-sm justify-self-center drop-shadow-md
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
            {showVote&&<VoteModle><GlobelVote/></VoteModle>}
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
    const res = await fetch('http://localhost:3000/api/hello')
    var posts
    if (res.status===200)
    { posts= await res.json()

    return {
        props: {
           rank: posts,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }}
    else {
        console.log("error")
        return "error"
    }
}
export default Home
