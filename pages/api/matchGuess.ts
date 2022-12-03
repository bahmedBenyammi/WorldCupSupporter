import {NextApiRequest, NextApiResponse} from "next";
import {Matche} from "../../model/Matche";
import {setMatchTime} from "../../lib/GetMatches";
import MatchesVotes from "../../lib/voteCalcul";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method!="GET")
        return  res.status(500).json({error: 'bad request'})
    let {id} = req.query
    if(id == undefined)
        return  res.status(500).json({error: 'bad request'})

    let  m=await MatchesVotes.getInestence().getVote(id as string).getStatic()

    return res.status(200).json({guess: m})
}