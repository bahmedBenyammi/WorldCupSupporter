
import {IMatche, Matche} from "../model/Matche";
import db from "../model/Bd";

export const getMatches=async ():Promise<IMatche[]> => {
    await db.getInestence()

    var date = new Date();
    var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
        date.getUTCDate(), date.getUTCHours(),
        date.getUTCMinutes(), date.getUTCSeconds());
    let matches= await Matche.find({date: {
            $gte:new Date(now_utc)
        }});
    matches.sort((a,b)=>{return a.date.valueOf() - b.date.valueOf()})

    return matches;
}