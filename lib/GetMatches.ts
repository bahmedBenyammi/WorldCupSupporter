
import {IMatche, Matche} from "../model/Matche";
import db from "../model/Bd";
import {now} from "mongoose";

export const getMatches=async (b:boolean):Promise<IMatche[]> => {
    await db.getInestence()

    var date = new Date();
    var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
        date.getUTCDate(), 0, 0, 0);
    let query=b?{   $gte:new Date(now_utc)}:{"$lt":new Date(now_utc)}
    let matches= await Matche.find({date: query});
    matches.sort((a,b)=>{return a.date.valueOf() - b.date.valueOf()})
  return matches.map(e=>{
       return  setMatchTime(e._doc)
    })


}
export interface MatchParam {
    params:{
        title:string
    }
}
export const getAllMatcheTitle=async (round:string):Promise<MatchParam[]> => {
    await db.getInestence()
    let matches
    if(round==="Groups Stage")
        matches= await Matche.find({round:round});
    else
        matches= await Matche.find({round:{ $ne: "Groups Stage" }});

    var titles:MatchParam[]=[]
        matches.forEach(e=>{
         let t=e.team1+'vs'+e.team2
            titles.push({params:{title:t}})
        })

    return titles;
}
export const setMatchTime=(m:IMatche):IMatche=>{

    m.isplay=true
    let totalTime=105+m.timeAdd.part1+m.timeAdd.part2

    if(m.round!="Groups Stage"&&(m.score.team1===m.score.team2))
        totalTime=totalTime+50+m.timeAdd.part3+m.timeAdd.part4


    if (!m.isfinsh){
        let localDatenow=new Date()
        let now =new Date(localDatenow.toUTCString())
        let dt = Math.trunc((now.getTime() - m.date.getTime()) / (60 * 1000));

        if ((m.date.toDateString() !=now.toDateString())&&(now.getTime()-m.date.getTime()< 0)||dt<0) {
            m.isplay = false

        }else if (dt>totalTime)
         m.isfinsh=true


        else if (dt<45+m.timeAdd.part1)
        {
            if (dt>45)
            {
                let ta=dt-45
                dt=dt-ta
                m.time=''+dt+'+'+ta
            }else m.time=''+dt
        }
        else if (dt<60+m.timeAdd.part1)
            m.time='Half-time'
        else if (dt-15-m.timeAdd.part1<=90 + m.timeAdd.part2)
        {
            console.log("part2")
            let t=dt-15-m.timeAdd.part1
            console.log(dt)
            if (t>90)
            {
                let ta=t-90
                t=t-ta
                m.time=''+t+'+'+ta
            }else m.time=''+t
        }  else if (dt<105+m.timeAdd.part1+m.timeAdd.part2)
            m.time='Half-time'
        else if (dt-30-m.timeAdd.part1-m.timeAdd.part2<=105 + m.timeAdd.part3)
        {
            console.log("part3")

            let t=dt-30-m.timeAdd.part1-m.timeAdd.part2

            if (t>105)
            {
                let ta=t-105
                t=t-ta
                m.time=''+t+'+'+ta
            }else m.time=''+t
        }else if (dt<125+m.timeAdd.part1+m.timeAdd.part2+m.timeAdd.part4)
            m.time='Half-time'
        else if (dt-35-m.timeAdd.part1-m.timeAdd.part2-m.timeAdd.part3<=120 + m.timeAdd.part4)
        {
            console.log("part4")

            let t=dt-35-m.timeAdd.part1-m.timeAdd.part2-m.timeAdd.part3
            console.log(t)
            if (t>120)
            {
                let ta=t-120
                t=t-ta

                console.log(ta)
                m.time=''+t+'+'+ta
            }else m.time=''+t
        }
    }

    return m;
}