// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import db from "../../model/Bd"
import {Vote} from "../../model/Vote"
import {Rank} from "../../model/Rank"

db.getInestence()


class GlobalVote {
    private static inestence: GlobalVote;
    private result: Rank[] = [];
    private country: string[] = ['Qatar', 'Germany', 'Denmark', 'Brazil', 'France', 'Belgium',
        'Croatia', 'Spain', 'Serbia', 'Switzerland', 'Netherlands', 'Argentina', 'Iran', 'South Korea',
        'Japan', 'Saudi Arabia', 'Ecuador', 'Uruguay', 'Canada', 'Ghana', 'Senegal', 'Portugal', 'Poland',
        'Tunisia', 'Morocco', 'Cameroon', 'USA', 'Mexico', 'Australia', 'Costa Rica']

    constructor() {this.cacule()
    }
    public static getInstence() {
        if (this.inestence == null)
            this.inestence = new GlobalVote();

        return this.inestence
    }
    public getResult(){
        return this.result;
    }
    private cacule(): void {
        var countVote: Rank[] = [];
        this.country.forEach( e => {
           Vote.count({isComfire: true, country: e}).then(v=>{
                    let r: Rank = {country: e, numVote: v}
                    countVote.push(r)
                })

            }
        )
        countVote.sort((a,b)=>{return a.numVote-b.numVote})
        this.result=countVote;
    }
}



export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    var globelVote = GlobalVote.getInstence();

    res.status(200).json(globelVote.getResult())
}
