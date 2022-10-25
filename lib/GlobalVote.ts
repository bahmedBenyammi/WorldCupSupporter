import {Rank} from "../model/Rank";
import {GlobalVote} from "../model/GlobalVote";
import db from "../model/Bd";
import bcrypt from "bcrypt";

const country: string[] = ['Qatar', 'Germany', 'Denmark', 'Brazil', 'France', 'Belgium',
    'Croatia', 'Spain', 'Serbia', 'Switzerland', 'Netherlands', 'Argentina', 'Iran', 'South Korea',
    'Japan', 'Saudi Arabia', 'Ecuador', 'Uruguay', 'Canada', 'Ghana', 'Senegal', 'Portugal', 'Poland',
    'Tunisia', 'Morocco', 'Cameroon', 'USA', 'Mexico', 'Australia', 'Costa Rica']

export const GlobalVoteCulc = async (): Promise<Rank[]> => {
    await db.getInestence()
    var countVote: Rank[] = [];
    for (const e of country) {
        let v = await GlobalVote.count({isComfire: true, support: e})
        let r: Rank = {country: e, numVote: v}
        countVote.push(r)
    }

    countVote.sort((a, b) => {
        return b.numVote - a.numVote
    })
    console.log(countVote)
    return countVote;

}
export const confirmeGlobal=async (email: string, id: string) => {
    let vote = await GlobalVote.findOne({email: email})
    if (vote === null)
        return "not found"
    let valid = await bcrypt.compare(vote._id.toString(), id)
    if (!valid)
        return "not found"
    vote.isComfire = true
    vote.save()
    return vote.country
}