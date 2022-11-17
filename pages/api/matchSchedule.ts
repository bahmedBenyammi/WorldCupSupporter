import {NextApiRequest, NextApiResponse} from "next";
import {getMatches} from "../../lib/GetMatches";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const result = await getMatches()
    return res.status(200).json({matches: result})
}