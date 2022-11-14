import {Rank} from "../model/Rank";
import {GlobalVote} from "../model/GlobalVote";
import db from "../model/Bd";
import bcrypt from "bcrypt";
import {teamList} from "../components/Country";



export const GlobalVoteCulc = async (): Promise<Rank[]> => {
    await db.getInestence()
    var countVote: Rank[] = [];
    for (const e of teamList) {
        let v = await GlobalVote.count({isComfire: true, support: e.name})
        let r: Rank = {country: e.name ,numVote: v}
        countVote.push(r)
    }

    countVote.sort((a, b) => {
        return b.numVote - a.numVote
    })
    console.log("global rank cacul")
    return countVote;

}
export const confirmeGlobal=async (email: string, id: string):Promise<string> => {
    await db.getInestence()
    let vote = await GlobalVote.findOne({email: email})
    if (vote === null)
        return "not found"
    let valid = await bcrypt.compare(vote._id.toString(), id)
    if (!valid)
        return "not found"
    vote.isComfire = true
    vote.save()
    console.log("vote confirm : "+vote._id.toString() )
    return vote.support!
}