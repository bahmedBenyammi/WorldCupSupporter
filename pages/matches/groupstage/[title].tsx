import {getAllMatcheTitle} from "../../../lib/GetMatches";
import {GetStaticProps, NextPage} from "next";
import Navbar from "../../../components/Navbar";
import {IStatistique, matchStatistique} from "../../../lib/matchStatistique";
import Flag from "react-flagkit";
import {Short} from "../../../components/Country";
import {useEffect, useRef, useState} from "react";
import {getTime} from "../../../lib/TimeLib";
import Head from "next/head";

const Title: NextPage<IStatistique> = ({team1,team2,match}) => {
    const dateRef=useRef<HTMLParagraphElement>(null)
    const [client,setClient]=useState(false)
    const [date,setDate]=useState<Date>()
    useEffect(()=>{
        if(window!=undefined)
        {
            if (dateRef!=null)
            { setDate(new Date(dateRef!.current!.textContent!.toString()))
            setClient(true)
        }}
    },[dateRef])
    return <div>
        <Head>
            <title>{team1.name +' vs '+team2.name}</title>
            <meta name="description" content={team1.name +' vs '+team2.name+' group stage Qatar 2022 guess who will win and win'} key="desc" />
            <meta property="og:title" content={team1.name +' vs '+team2.name+' group stage Qatar 2022'} />
        </Head>
        <Navbar sticky={true} border={true}/>
        <div className="w-full bg-gray-300 md:px-20">
            <div className="bg-white shadow p-2 py-10">
                <div className="w-full p-4 flex flex-col items-center space-y-4">
                    <p className="hidden" ref={dateRef}>{match.date.toString()}</p>
                    {client && <><p className="text-xl font-bold">{date?.toDateString()}</p>
                    <p className="text-xl font-bold text-blue-500">{getTime(date!)}</p></>}
                </div>
                <div className="w-full grid grid-cols-5 items-center ">
                    <div className="flex flex-col items-center col-span-2 ">
                        <Flag className="h-16 w-16 md:h-20 md:w-20" country={Short[team1.name.replace("_", "")]}></Flag>
                        <p>{team1.name}</p>
                    </div>
                    <p className="text-center text-xl font-bold">vs</p>
                    <div className="flex flex-col items-center  col-span-2">
                        <Flag className="h-16 w-16 md:h-20 md:w-20 " country={Short[team2.name.replace("_", "")]}></Flag>
                        <p>{team2.name}</p>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <p className="text-2xl p-4 ">Teams statistic</p>
                </div>
                <div className="w-full space-y-2">
                    <div className="w-full grid grid-cols-5 items-center ">
                        <p className="text-center col-span-2">{team1.group}</p>
                        <p className="text-center  font-bold">Group</p>
                        <p className="text-center col-span-2">{team2.group}</p>
                    </div>
                    <div className="w-full grid grid-cols-5 items-center ">
                        <p className="text-center col-span-2">{team1.point}</p>
                        <p className="text-center  font-bold">Points</p>
                        <p className="text-center col-span-2">{team2.point}</p>
                    </div>
                    <div className="w-full grid grid-cols-5 items-center ">
                        <p className="text-center col-span-2">{team1.mathesPlay}</p>
                        <p className="text-center  font-bold">Match played</p>
                        <p className="text-center col-span-2">{team2.mathesPlay}</p>
                    </div>
                    <div className="w-full grid grid-cols-5 items-center ">
                        <p className="text-center col-span-2">{team1.win}</p>
                        <p className="text-center  font-bold">Win</p>
                        <p className="text-center col-span-2">{team2.win}</p>
                    </div>
                    <div className="w-full grid grid-cols-5 items-center ">
                        <p className="text-center col-span-2">{team1.drow}</p>
                        <p className="text-center  font-bold">Drew</p>
                        <p className="text-center col-span-2">{team2.drow}</p>
                    </div>
                    <div className="w-full grid grid-cols-5 items-center ">
                        <p className="text-center col-span-2">{team1.lost}</p>
                        <p className="text-center  font-bold">Lose</p>
                        <p className="text-center col-span-2">{team2.lost}</p>
                    </div>
                    <div className="w-full grid grid-cols-5 items-center ">
                        <p className="text-center col-span-2">{team1.goals}</p>
                        <p className="text-center  font-bold">Goals</p>
                        <p className="text-center col-span-2">{team2.goals}</p>
                    </div>
                    <div className="w-full grid grid-cols-5 items-center ">
                        <p className="text-center col-span-2">{team1.goalA}</p>
                        <p className="text-center  font-bold">Goals again</p>
                        <p className="text-center col-span-2">{team2.goalA}</p>
                    </div>
                    <div className="w-full grid grid-cols-5 items-center ">
                        <p className="text-center col-span-2">{team1.goalD}</p>
                        <p className="text-center  font-bold">Goals different</p>
                        <p className="text-center col-span-2">{team2.goalD}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export async function getStaticPaths() {
    let paths = await getAllMatcheTitle("First-Round")
    return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    let s = await matchStatistique(params!.title as string, "First-Round")

    // params contains the post `id`.
    // If the route is like /posts/1, then params.id i s 1
    s=JSON.parse(JSON.stringify(s))
    // Pass post data to the page via props
    return {props: {match:s.match,
            team1:s.team1,
            team2:s.team2,
            w1:s.w1,
            w2:s.w2,
            d:s.d},
    }
}

export default Title;