
import {IMatche, Matche} from "../model/Matche";
import db from "../model/Bd";
import {now} from "mongoose";

export const getMatches=async ():Promise<IMatche[]> => {
    await db.getInestence()

    var date = new Date();
    var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
        date.getUTCDate(), 0, 0, 0);
    let matches= await Matche.find({date: {
            $gte:new Date(now_utc)
        }});
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

    let matches= await Matche.find({round:round});
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
                m.time=''+dt+'+'+ta
            }else m.time=''+dt
        }
        else if (dt<60+m.timeAdd.part1)
            m.time='Half-time'
        else if (dt-15-m.timeAdd.part1<=90 + m.timeAdd.part2)
        {
            let t=dt-15-m.timeAdd.part1
            console.log(dt)
            if (t>90)
            {
                let ta=dt-105-m.timeAdd.part1
                m.time=''+t+'+'+ta
            }else m.time=''+t
        }

    }

    return m;
}