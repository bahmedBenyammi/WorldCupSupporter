import React, {FC, useEffect, useState} from "react";
import {IMatchVote} from "../lib/voteCalcul";
import Flag from "react-flagkit";
import {Short} from "./Country";
import {IMatche} from "../model/Matche";
export interface MatchProps {
    m: IMatche

    showModle?(m: IMatche): void
}

export const PeopleGuess: FC<MatchProps> = ({m}) => {
    const [status, setStaus] = useState("wait")
    const [match, setMatch] = useState(m)
    const [guess, setGuess] = useState<IMatchVote>()
    useEffect(() => {
        fetch("/api/matchGuess?id=" + match._id!.toString()).then(res => {
            return res.json()
        }).then(data => {

            setGuess(data.guess)

            setStaus("")
        })
    }, [])
    const wait = () => {
        return <div
            className="w-full  grid animate-pulse  bg-gray-300 shadow  justify-center p-3 ">

        </div>

    }
    const withClass=(w:number)=>{
        console.log("w-["+w+"%]")
        return "w-["+w+"%]".toString()
    }
    const guessCom = () => {
        if (guess!.w1===0&&guess!.w2===0)
            return <div className="flex justify-center items-center w-full  ">
                <p>no guesses yet</p>
            </div>
        else
            return <div className="flex justify-center items-center w-full  lg:px-4 ">
                <div className="w-1/12 justify-start flex"><Flag country={Short[match.team1.replace(" ", "_")]}></Flag>
                </div>
                <div className="w-5/6 flex justify-center items-center">
                    <div style={{width:guess!.w1+"%"}}
                         className={`bg-red-500 h-6  flex items-center text-sm text-white px-1 justify-start `} >
                        {guess?.w1+"%"}
                    </div>

                    <div style={{width:guess!.w2+"%"}}
                         className={"bg-blue-500 h-6  flex items-center text-sm text-white px-1 justify-end "+withClass(guess!.w2) }>
                        {guess?.w2+"%"}
                    </div>
                </div>
                <div className="w-1/12 justify-end flex"><Flag country={Short[match.team2.replace(" ", "_")]}>
                </Flag></div>
            </div>
    }
    return <div className="flex flex-col items-center w-full">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="p-4 lg:text-xl">People's guesses</p>
        {status === "wait" ? wait() : guessCom()}

    </div>

}