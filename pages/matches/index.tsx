import {NextPage} from "next";
import Navbar from "../../components/Navbar";
import NavMathes from "../../components/NavMathes";
import Flag from "react-flagkit";

import React, {FC, useEffect, useMemo, useRef, useState} from "react";
import {IMatche} from "../../model/Matche";
import {Short} from "../../components/Country";
import Head from "next/head";
import {getTime} from "../../lib/TimeLib";
import Link from "next/link";
import {IoIosTimer} from "react-icons/io";
import {VoteModle} from "../../components/VoteModle";
import {MatchVoteForm} from "../../components/FormVote";
import {MatchProps, PeopleGuess} from "../../components/PeopleGuess";


interface DayMatche {
    day: string
    matches: IMatche[]
}
const Matches = (matches:DayMatche[],showModle:any,m:any) => {
    return <div className=" bg-gray-100 md:pb-2 px-1 pb-2 lg:px-12" ref={m}>

        {matches.map(e => {
            return <div className="border mb-2 justify-items-center shadow bg-white flex flex-col  justify-center"
                        key={e.day}>
                <p className="p-4 font-bold text-center">{e.day}</p>
                <div className="w-full grid md:grid-cols-2  grid-cols-1 justify-center md:p-2  px-1 py-2">
                    {e.matches.map(m => {
                        return <Match m={m} key={m._id!.toString()} showModle={showModle}/>
                    })}
                </div>
            </div>
        })}

    </div>
}

const MatchesPage: NextPage = () => {
    const [matches, setMatches] = useState<DayMatche[]>([])
    const [showVote, setShowVote] = useState(false)
    const [display, setdisplay] = useState(false)
    const m=useRef()
    const [match, setMatch] = useState<IMatche | undefined>(undefined)
    const showModle = (m: IMatche) => {
        setMatch(m)
        setShowVote(true)
    }
    const closeModel = () => {
        setShowVote(false)
    }
    useEffect(() => {
        fetch('/api/matchSchedule').then(res => {
            return res.json()
        }).then(res => {
            setMatches(matcheDay(res.matches as IMatche[]))
            setdisplay(true)
        })
    }, [])
    const wait = () => {
        return <div className="fill-pageWait">
            <div className=" bg-gray-100 p-2 h-full w-full md:px-12 space-y-4">
                <div
                    className="w-full  grid animate-pulse md:grid-cols-2 bg-white shadow grid-cols-1 justify-center p-2 ">
                    <div
                        className=" m-2 shadow flex items-center p-4 grid grid-cols-5 justify-between w-full justify-self-center">
                        <div className="flex col-span-2 space-x-4 items-center">
                            <div className="rounded-full  bg-gray-300 h-8 w-8"></div>
                            <div className="rounded-full w-28 bg-gray-300 h-4 "></div>
                        </div>
                        <p className='col-span-1 text-center'>Vs</p>
                        <div className="flex items-center space-x-2 col-span-2 justify-end">
                            <div className="rounded-full  bg-gray-300 h-4 w-28"></div>
                            <div className="rounded-full  bg-gray-300 h-8 w-8"></div>
                        </div>
                    </div>
                    <div
                        className=" m-2 shadow flex items-center p-4 grid grid-cols-5 justify-between w-full justify-self-center">
                        <div className="flex col-span-2 space-x-4 items-center">
                            <div className="rounded-full  bg-gray-300 h-8 w-8"></div>
                            <div className="rounded-full w-28 bg-gray-300 h-4 "></div>
                        </div>
                        <p className='col-span-1 text-center'>Vs</p>
                        <div className="flex items-center space-x-2 col-span-2 justify-end">
                            <div className="rounded-full  bg-gray-300 h-4 w-28"></div>
                            <div className="rounded-full  bg-gray-300 h-8 w-8"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full  grid animate-pulse md:grid-cols-2 bg-white shadow grid-cols-1 justify-center p-2 ">
                    <div
                        className="m-2 shadow flex items-center p-4 grid grid-cols-5 justify-between w-full justify-self-center">
                        <div className="flex col-span-2 space-x-4 items-center">
                            <div className="rounded-full  bg-gray-300 h-8 w-8"></div>
                            <div className="rounded-full w-28 bg-gray-300 h-4 "></div>
                        </div>
                        <p className='col-span-1 text-center'>Vs</p>
                        <div className="flex items-center space-x-2 col-span-2 justify-end">
                            <div className="rounded-full  bg-gray-300 h-4 w-28"></div>
                            <div className="rounded-full  bg-gray-300 h-8 w-8"></div>
                        </div>
                    </div>
                    <div
                        className="m-2 shadow flex items-center p-4 grid grid-cols-5 justify-between w-full justify-self-center">
                        <div className="flex col-span-2 space-x-4 items-center">
                            <div className="rounded-full  bg-gray-300 h-8 w-8"></div>
                            <div className="rounded-full w-28 bg-gray-300 h-4 "></div>
                        </div>
                        <p className='col-span-1 text-center'>Vs</p>
                        <div className="flex items-center space-x-2 col-span-2 justify-end">
                            <div className="rounded-full  bg-gray-300 h-4 w-28"></div>
                            <div className="rounded-full  bg-gray-300 h-8 w-8"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <div>
            <Head>
                <title>World cup 2022 match</title>
                <meta charSet="UTF-8"/>

                <meta name="description"
                      content="Title schedule of world cup 2022 and today match ,watch live score and update  first round,soccer matches"
                      key="desc"/>
                <meta property="og:title" content="Title schedule World cup Qatar 2022"/>
            </Head>
            <Navbar border={false} sticky={false}/>
            <NavMathes/>
            {display ? <>  <OldMatches showModel={showModle} m={m}></OldMatches>{Matches(matches,showModle,m)}</> : wait()}
            {showVote && <VoteModle handleClose={closeModel}><MatchVoteForm match={match!}/></VoteModle>}
        </div>
    )
}
interface IOld{
    showModel:any
    m:any
}
const OldMatches:FC<IOld>=({showModel,m})=>{
    const [matches, setMatches] = useState<DayMatche[]>([])
    const [status,setStatus]=useState("none")
    const handleClick=()=>{
        setStatus("wait")
        fetch('/api/OldMatch').then(res => {
            return res.json()
        }).then(res => {

            setMatches(matcheDay(res.matches as IMatche[]))
            setStatus("")
            if (window.scrollY>m.current.offsetTop)
            window.scrollTo(0,window.scrollY)
            else
            window.scrollTo(0,m.current.offsetTop)


        })
    }
    if (status==="none")
    return<button onClick={handleClick} className='w-full bg-white h-10 shadow my-1  border hover:bg-gray-100 hover:text-blue-500'>
        Old Matches</button>
    else if (status==="wait")
        return <div className="h-10 bg-white my-1 animate-ping">

        </div>
    else return Matches(matches,showModel,undefined)
}
const Match: FC<MatchProps> = ({m, showModle}) => {

    const [match, setMatch] = useState(m)
    const lint = () => {
        let link
        if (match.round === "Groups Stage")
            link = "/matches/groupstage/"
        else
            link = "/matches/game-off/"
        return link + match.team1 + 'vs' + match.team2
    }
    const guesses = useMemo(() => {
        return <PeopleGuess m={match}/>
    }, [])
    useEffect(() => {
        if (match.isplay && !match.isfinsh)
            setTimeout(() => {
                fetch("/api/matchupdate?id=" + match._id!.toString()).then(res => {
                    return res.json()
                }).then(data => {

                    setMatch(data.match)
                })
            }, 1000 * 60)

    }, [match])
    const score = (m: IMatche) => {
        if (m.isfinsh || m.isplay)
            return <div className="flex flex-col justify-items-center">
                <p className=' text-center'>{m.score.team1 + " - " + m.score.team2}</p>
                {m.isfinsh&&m.score.team1===m.score.team2 &&m.round!="Groups Stage"&&
                    <p className='text-sm text-center'>{m.penalte.team1 + " - " + m.penalte.team2}</p>}</div>
        else return <p className='col-span-1 text-center'>Vs</p>
    }
    const time = (m: IMatche) => {
        if (m.isfinsh)
            return <p className='col-span-1 text-center p-2'>Full-Time</p>
        else if (m.isplay)
            return <div className="flex justify-center items-center space-x-1 p-2 animate-pulse">
                <p className='col-span-1 text-center text-sm font-bold text-green-500 '>{m.time}</p>
                <IoIosTimer className="text-green-500 h-4 w-4 "/></div>
        else return <p className='col-span-1 text-center'>{getTime(m.date)}</p>
    }

    return (<div
        className="md:p-4 p-1 py-2 md:m-2 mx-1 my-2 shadow flex-col border rounded hover:bg-gray-50 col-span-1"
    >
        <p className='font-bold text-sm text-center'>{match.round}</p>
        {time(match)}
        <div
            className="flex items-center p-2 grid grid-cols-5 justify-between w-full justify-self-center">
            <div className="flex items-center space-x-2 col-span-2">
                <Flag country={Short[match.team1.replace(" ", "_")]}></Flag>
                <p>{match.team1}</p>
            </div>
            {score(match)}

            <div className="flex items-center space-x-2 col-span-2 justify-end">
                <p>{match.team2}</p>
                <Flag country={Short[match.team2.replace(" ", "_")]}></Flag></div>
        </div>
        {match.round != "Groups Stage" && guesses}
        <div className='flex justify-center items-center mt-4 flex-col lg:flex-row lg:space-x-2 space-y-2 lg:-space-y-0'>
            <Link href={lint()}>
                <button type='button'
                        className="p-2 px-4 border w-48 rounded border-gray-400 border-2 hover:border-white
                                           hover:bg-blue-400 hover:text-white"
                >View more
                </button>
            </Link>
            {match.round != "Groups Stage" &&(new Date(match.date)).getTime()>Date.now()&& <button type='button' onClick={() => {
                showModle!(m)
            }} className="p-2 px-4 border  w-48 rounded border-gray-400 border-2 hover:border-white
                                           hover:bg-blue-400 hover:text-white"
            >Guess who will win
            </button>}
        </div>
    </div>)
}
const matcheDay = (matches: IMatche[]): DayMatche[] => {
    matches.forEach(e => {
        e.date = new Date(e.date)
    })
    var matchesDay: DayMatche[] = []
    while (matches.length > 0) {

        var d = matches[0].date.toDateString()

        var m = []
        while (matches.length > 0) {
            if (matches[0].date.toDateString() === d) {
                m.push(matches[0])
                matches.splice(0, 1)

            } else
                break;
        }
        matchesDay.push({day: d, matches: m})
    }

    return matchesDay;
}


export default MatchesPage