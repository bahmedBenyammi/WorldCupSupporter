import {getAllMatcheTitle} from "../../../lib/GetMatches";
import {GetStaticProps, NextPage} from "next";
import Navbar from "../../../components/Navbar";
import {IStatistique, matchStatistique} from "../../../lib/matchStatistique";
import Flag from "react-flagkit";
import {Short} from "../../../components/Country";
import {useEffect, useRef, useState} from "react";
import {getTime} from "../../../lib/TimeLib";
import Head from "next/head";
import {IMatche} from "../../../model/Matche";
import {IoIosTimer} from "react-icons/io";

const Title: NextPage<IStatistique> = ({team1,team2,match}) => {
    const dateRef=useRef<HTMLParagraphElement>(null)
    const [m,setMatch]=useState(match)
    const [client,setClient]=useState(false)
    const [updateT,setUpdateT]=useState(false)
    const [date,setDate]=useState<Date>()
    useEffect(()=>{
        if(window!=undefined)
        {
            if (dateRef!=null)
            { setDate(new Date(dateRef!.current!.textContent!.toString()))
            setClient(true)

                update()
        }}
    },[dateRef])

    const update=()=>{

            fetch("/api/matchupdate?id="+match._id!.toString()).then(res=>{return res.json()}).then(data=>{

                setMatch(data.match)
                setUpdateT(true)
            })

    }
    useEffect(()=>{
        if (match.isplay&&!match.isfinsh&&updateT)
            setTimeout(()=>{ update()      },1000*60 )

    },[m])
    const score=(m:IMatche)=>{
        if(m.isfinsh||m.isplay)
            return <div className='flex justify-center items-center'>
                <p className='col-span-1 text-center text-4xl '>{m.score.team1+" - "+m.score.team2}</p></div>
        else  return  <p className='col-span-1 text-center text-4xl'>Vs</p>
    }
    const time=(m:IMatche)=>{
        if(m.isfinsh)
            return  <p className='col-span-1 text-center p-2'>Full-Time</p>
        else if (m.isplay)
            return <div className="flex justify-center items-center space-x-1 p-2 animate-pulse">
                <p className='col-span-1 text-center text-sm font-bold text-green-500 '>{m.time}</p>
                <IoIosTimer className="text-green-500 h-4 w-4 "/></div>
        else if (client) return  <><p className="text-xl font-bold">{date?.toDateString()}</p>
            <p className="text-xl font-bold text-blue-500">{getTime(date!)}</p></>
    }
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
                    <p className="hidden" ref={dateRef}>{m.date.toString()}</p>
                    {time(m)}
                </div>
                <div className="w-full grid grid-cols-5 items-center ">
                    <div className="flex flex-col items-center col-span-2 ">
                        <Flag className="h-16 w-16 md:h-20 md:w-20" country={Short[team1.name.replace("_", "")]}></Flag>
                        <p>{team1.name}</p>
                    </div>
                    {score(m)}
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
                        <p className="text-center col-span-2">{ team1.win * 3 + team1.drow}</p>
                        <p className="text-center  font-bold">Points</p>
                        <p className="text-center col-span-2">{ team2.win * 3 + team2.drow}</p>
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
                        <p className="text-center col-span-2">{team1.goals-team1.goalA}</p>
                        <p className="text-center  font-bold">Goals different</p>
                        <p className="text-center col-span-2">{team2.goals-team2.goalA}</p>
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
        revalidate:1000*60*10
    }
}

export default Title;
