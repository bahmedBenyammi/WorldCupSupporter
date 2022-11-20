
import {IMatche, Matche} from "../model/Matche";
import db from "../model/Bd";

export const getMatches=async ():Promise<IMatche[]> => {
    await db.getInestence()

    var date = new Date(Date.now()-(24*60*60*1000));
    var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
        date.getUTCDate(), date.getUTCHours(),
        date.getUTCMinutes(), date.getUTCSeconds());
    let matches= await Matche.find({date: {
            $gte:new Date(now_utc)
        }});
    matches.sort((a,b)=>{return a.date.valueOf() - b.date.valueOf()})

    return matches;
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