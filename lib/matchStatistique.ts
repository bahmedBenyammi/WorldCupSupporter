import {IMatche, Matche, VoteMatch} from "../model/Matche";
import {ITeam, Team} from "../model/Team";
import db from "../model/Bd";

export interface IStatistique{
    match:IMatche,
    team1:ITeam,
    team2:ITeam,
    w1:number,
    w2:number
    d:number
}

export const matchStatistique=async (title:string,round:string):Promise<IStatistique>=>{
    await db.getInestence()
     let teams:string[]=title.split('vs')
    const team1=Team.findOne({name:teams[0]})
    const team2=Team.findOne({name:teams[1]})
    const match=await Matche.findOne({team1:teams[0],team2:teams[1],round:round})
    let w1=VoteMatch.count({isComfire: true, support: 1 ,'match._id':match!._id})
    let w2=VoteMatch.count({isComfire: true, support: 2,'match._id':match!._id})
    let d=round==='First-Round'? await VoteMatch.count({isComfire: true, support: 0}):0
    let res={
         match:match as IMatche,
        team1:await team1,
        team2:await team2,
        w1:await w1,
        w2:await w2,
        d:d
    }
    return res
}
