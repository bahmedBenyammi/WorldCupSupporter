// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import db from "../../model/Bd"
import {GlobalVote} from "../../model/GlobalVote"
import {Rank} from "../../model/Rank"
import {models} from "mongoose";








export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {


    res.status(200).json({})
}
