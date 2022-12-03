import {IMatche, Matche, VoteMatch} from "../model/Matche";
import {awaitExpression, newExpression} from "@babel/types";
import db from "../model/Bd";
import {GlobalVote} from "../model/GlobalVote";
import bcrypt from "bcrypt";

export default class MatchesVotes {
    private static inestence: MatchesVotes;
    votes: Map<string, VoteCalculator>;

    constructor() {
        this.votes = new Map<string, VoteCalculator>()
    }

    public getVote(id: string): VoteCalculator {
        if (this.votes.has(id))
            return this.votes.get(id)!;
        let c = new VoteCalculator(id)
        this.votes.set(id, c)
        return c;

    }

    public static getInestence(): MatchesVotes {
        if (this.inestence == null)
            this.inestence = new MatchesVotes()
        return this.inestence
    }
}

export interface IMatchVote {
    id: string,
    w1: number,
    w2: number
    d: number
}

class VoteCalculator {
    private matchId: string
    private matchVote: IMatchVote | undefined

    constructor(id: string) {
        this.matchId = id
    }

    public async getStatic(): Promise<IMatchVote> {
        if (this.matchVote === undefined)
            await this.calcul()
        return this.matchVote!
    }

    private async calcul() {

        if (this.matchId != null) {
            let m = await Matche.findOne({_id: this.matchId})
            if (m != null) {
                let w1 =await VoteMatch.count({isComfire: true, support: 1, match: this.matchId})
                let w2 =await VoteMatch.count({isComfire: true, support: 2, match: this.matchId})
                let t = w1 + w2

                if (t===0)
                    t=1
                this.matchVote = {
                    id: m._id.toString(),
                    w1:( Math.round((w1/t) * 10) / 10)*100,
                    w2:( Math.round((w2/t) * 10) / 10)*100,
                    d:0

                }
                if (!m.isfinsh && this.chechMatch(m))
                    setTimeout(() => {
                        this.calcul()
                    }, 1000 * 30 * 60)
            }

        } else
            throw new Error("id don't exist")
    }

    private chechMatch(match: IMatche): boolean {
        let localDte = new Date()
        let dateUTC = new Date(localDte.toString())
        let dt = dateUTC.getTime() - match.date.getTime()
        return dt / (1000 * 60) > 180
    }
}

export interface IConfirmeVM {
    text: string,
    support: string,
    agains: string
}

export const confirmeVoteMatch = async (email: string, id: string, match: String): Promise<IConfirmeVM> => {
    await db.getInestence()
    let vote = await VoteMatch.findOne({email: email, match: match}).populate('match')
    let noFound = {text: "not found", support: "", agains: ""}
    if (vote === null)
        return noFound

    let valid = await bcrypt.compare(vote._id.toString(), id)
    if (!valid)
        return noFound
    // @ts-ignore
    let s = vote.support === 1 ? vote!.match!.team1! : vote!.match!.team2!
    // @ts-ignore
    let a = vote.support === 1 ? vote!.match!.team2! : vote!.match!.team1!
    vote.isComfire = true
    vote.save()
    console.log("vote confirm : " + vote._id.toString())
    return {
        text: "ok",
        support: s,
        agains: a
    }
}
