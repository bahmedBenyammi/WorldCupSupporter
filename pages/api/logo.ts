import fs from 'fs'
import path from 'path'
import {NextApiRequest, NextApiResponse} from "next";

const filePath = path.resolve('.', './images/logo.svg')
const imageBuffer = fs.readFileSync(filePath)

export default function( req: NextApiRequest,
                         res: NextApiResponse) {
    res.setHeader('Content-Type', 'image/svg')

    res.send(imageBuffer)
}