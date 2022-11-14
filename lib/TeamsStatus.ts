import {ITeam, Team} from "../model/Team";

export interface Group{
    group:string,
    teams:ITeam[]

}
export const teamsStatus=async ():Promise<Group[]> => {
    var i = 0
    var teams:Group[] = []
    while (i < 8) {
        let c = 'Group ' + String.fromCharCode('A'.charCodeAt(0) + i)

        let t :ITeam[] = await Team.find({group: c})
        t.sort((a,b)=>{
            if( b.point === a.point)
                return b.name>a.name? -1:1
            return b.point-a.point
        })

        teams.push({group: c, teams:  t })
        i++;
    }
    return teams
}