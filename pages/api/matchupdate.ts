import {NextApiRequest, NextApiResponse} from "next";
import {IMatche, Matche} from "../../model/Matche";
import Matches from "../matches";
import {setMatchTime} from "../../lib/GetMatches";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method!="GET")
        return  res.status(500).json({error: 'bad request'})
    let {id} = req.query
    if(id == undefined)
        return  res.status(500).json({error: 'bad request'})
    let m=await Matche.findOne({_id:id})
    if (m==null)
        return  res.status(500).json({error: 'bad request'})
    m=setMatchTime(m._doc)
    return res.status(200).json({match: m})
}