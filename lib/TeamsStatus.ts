import {ITeam, Team} from "../model/Team";
import db from "../model/Bd";

export interface Group{
    group:string,
    teams:ITeam[]

}
export const teamsStatus=async ():Promise<Group[]> => {
    await db.getInestence()
    var i = 0
    var teams:Group[] = []
    while (i < 8) {
        let c = 'Group ' + String.fromCharCode('A'.charCodeAt(0) + i)

        let t :ITeam[] = await Team.find({group: c})
        t.sort((a,b)=>{
            b.point=b.win*3 +b.drow
            a.point=a.win*3 +a.drow
            if( b.point === a.point)
            {    b.goalD=b.goals-b.goalA
                 a.goalD=a.goals-a.goalA
                if( b.goalD === a.goalD)
                return b.name>a.name? -1:1
             return b.goalD>a.goalD?-1:1
            }
            return b.point-a.point
        })

        teams.push({group: c, teams:  t })
        i++;

    }
    return teams
}
