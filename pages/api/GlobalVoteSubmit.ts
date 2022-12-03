import {NextApiRequest, NextApiResponse} from "next";
import {checkDomain} from "../../components/domaisList";
import {checkCountry, checkTeam} from "../../components/Country";
import {GlobalVote} from "../../model/GlobalVote";
import db from "../../model/Bd";
import {emailConfermation} from "../../lib/EmailSender";
import bcrypt from 'bcrypt'
db.getInestence().then(()=>console.log("database get inestence"))

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    if (req.method!="POST")
        return  res.status(500).json({error: 'bad request'})
    let {email, country, support} = req.body

    if (!email || !country || !support)
       return  res.status(500).json({error: 'bad request'})

    if (!checkDomain(email) || !checkCountry(country) || !checkTeam(support))
        return res.status(500).json({error: 'bad request'})
  try {

      let vote = new GlobalVote({email: email, country: country, support: support})
      vote = await vote.save()
      const salt = await bcrypt.genSalt(10)
      let id=await bcrypt.hash(vote._id.toString(),salt)
      let link=process.env.URL+"/confirme?email="+email+"&id="+id
      emailConfermation(email,link,support,"in World cup 2022","you support")
      return res.status(200).json({message: 'success'})
  }catch (e) {
        console.log("ok")
      return res.status(200).json({message: 'email exist'})
  }

}