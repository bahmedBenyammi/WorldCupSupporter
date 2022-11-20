import {NextPage} from "next";
import Navbar from "../../components/Navbar";
import NavMathes from "../../components/NavMathes";
import Flag from "react-flagkit";

import {useEffect, useState} from "react";
import {IMatche} from "../../model/Matche";
import {Short} from "../../components/Country";
import Head from "next/head";
import {getTime} from "../../lib/TimeLib";


interface DayMatche {
    day: string
    matches: IMatche[]
}

const Matches: NextPage = () => {
    const [matches, setMatches] = useState<DayMatche[]>([])
    const [display, setdisplay] = useState(false)
    useEffect(() => {
        fetch('/api/matchSchedule').then(res => {
            return res.json()
        }).then(res => {
            console.log(res.matches)
            setMatches(matcheDay(res.matches as IMatche[]))
            setdisplay(true)

        })

    }, [])

    const wait = () => {
        return <div className="fill-pageWait">
            <div className=" bg-gray-100 p-2 h-full w-full md:px-12 space-y-4">
                <div className="w-full  grid animate-pulse md:grid-cols-2 bg-white shadow grid-cols-1 justify-center p-2 ">
                        <div className=" m-2 shadow flex items-center p-4 grid grid-cols-5 justify-between w-full justify-self-center">
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
                        <div className=" m-2 shadow flex items-center p-4 grid grid-cols-5 justify-between w-full justify-self-center">
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
                <div className="w-full  grid animate-pulse md:grid-cols-2 bg-white shadow grid-cols-1 justify-center p-2 ">
                        <div className="m-2 shadow flex items-center p-4 grid grid-cols-5 justify-between w-full justify-self-center">
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
                        <div className="m-2 shadow flex items-center p-4 grid grid-cols-5 justify-between w-full justify-self-center">
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
    const Matches = () => {
        return <div className=" bg-gray-100 p-2 md:px-12">
            {matches.map(e => {
                return <div className="border mb-2 justify-items-center shadow bg-white flex flex-col  justify-center"
                            key={e.day}>
                    <p className="p-4 font-bold text-center">{e.day}</p>
                    <div className="w-full grid md:grid-cols-2  grid-cols-1 justify-center p-2 ">
                        {e.matches.map(m => {
                            return <div
                                className="p-4 m-2 shadow flex-col border rounded hover:bg-gray-50 col-span-1"
                                key={m._id!.toString()}>
                                <p className="font-bold text-center p-2 text-blue-500">{getTime(m.date)}</p>
                                <div
                                    className="flex items-center p-2 grid grid-cols-5 justify-between w-full justify-self-center">
                                    <div className="flex items-center space-x-2 col-span-2">
                                        <Flag country={Short[m.team1.replace("_", "")]}></Flag>
                                        <p>{m.team1}</p>
                                    </div>

                                    <p className='col-span-1 text-center'>Vs</p>
                                    <div className="flex items-center space-x-2 col-span-2 justify-end">
                                        <p>{m.team2}</p>
                                        <Flag country={Short[m.team2.replace("_", "")]}></Flag></div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            })}

        </div>
    }

    return (
        <div>
            <Head>
                <title>World cup 2022 match</title>
                <meta name="description" content="Title schedule of world cup 2022,first round,soccer matches" key="desc" />
                <meta property="og:title" content="Title schedule World cup Qatar 2022" />
            </Head>
            <Navbar border={false} sticky={false}/>
            <NavMathes/>
            {display ? Matches() : wait()}

        </div>
    )
}
const matcheDay = (matches: IMatche[]): DayMatche[] => {
    matches.forEach(e => {
        e.date = new Date(e.date)
    })
    var matchesDay: DayMatche[] = []
    while (matches.length > 0) {
        console.log(typeof matches[0].date)
        var d = matches[0].date.toDateString()

        var m = []
        while (matches.length > 0) {
            if (matches[0].date.toDateString() === d) {
                m.push(matches[0])
                matches.splice(0, 1)
                console.log(matches.length)
            } else
                break;
        }
        matchesDay.push({day: d, matches: m})
    }
    console.log(matchesDay)
    return matchesDay;
}


export default Matches