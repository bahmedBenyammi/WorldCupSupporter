import {NextApiRequest, NextApiResponse} from "next";
import {checkDomain} from "../../components/domaisList";
import {checkCountry, checkTeam} from "../../components/Country";

import db from "../../model/Bd";
import {emailConfermation} from "../../lib/EmailSender";
import bcrypt from 'bcrypt'

import {Matche, VoteMatch} from "../../model/Matche";
import {id} from "postcss-selector-parser";
import {match} from "assert";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    db.getInestence()
    if (req.method!="POST")
        return  res.status(500).json({error: 'bad request'})
    let {idMatch,email, country, support} = req.body

    if (!idMatch||!email || !country || !support) return res.status(500).json({error: 'bad request'})

    if (!checkDomain(email) || !checkCountry(country)) return res.status(500).json({error: 'bad request'})

    let m = await Matche.findOne({_id:idMatch})
    if (m==null)
        return res.status(500).json({error: 'bad request'})
    let v= await VoteMatch.exists({email: email,match :idMatch})
    if (v)
        return res.status(200).json({message: 'email exist'})

    try {

        let vote = new VoteMatch({match:idMatch,email: email, country: country, support: support})
        console.log(vote)
        vote = await vote.save()
        console.log(vote)
        let text=support===1?"will win agains "+m!.team2:support===2?"will win against "+m!.team1:'no one will win in match'
        +m!.team1+" vs "+m!.team2
        text=text+" in "+m.round+" of world cup 2022"
        let team=support===1?m!.team1:support===2?m!.team2:m!.team1+" vs "+m!.team2

        const salt = await bcrypt.genSalt(10)
        let id=await bcrypt.hash(vote._id.toString(),salt)
        let link=process.env.URL+"/confirmeVM?email="+email+"&id="+id+"&match="+idMatch

        emailConfermation(email,link,team,text,"you guess")
        return res.status(200).json({message: 'success'})
    }catch (e) {
        console.log("ok")
        return res.status(200).json({message: 'email exist'})
    }
}