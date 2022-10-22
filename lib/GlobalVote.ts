import {Rank} from "../model/Rank";
import {Vote} from "../model/Vote";
import db from "../model/Bd";

 const country: string[] = ['Qatar', 'Germany', 'Denmark', 'Brazil', 'France', 'Belgium',
        'Croatia', 'Spain', 'Serbia', 'Switzerland', 'Netherlands', 'Argentina', 'Iran', 'South Korea',
        'Japan', 'Saudi Arabia', 'Ecuador', 'Uruguay', 'Canada', 'Ghana', 'Senegal', 'Portugal', 'Poland',
        'Tunisia', 'Morocco', 'Cameroon', 'USA', 'Mexico', 'Australia', 'Costa Rica']

  export const GlobalVoteCulc=async ():Promise<Rank[]> => {
        await db.getInestence()
        var countVote: Rank[] = [];
        for (const e of country) {
               let v=await  Vote.count({isComfire: true, support: e})
            let r: Rank = {country: e, numVote: v}
            countVote.push(r)
            }

      countVote.sort((a, b) => {
            return b.numVote-a.numVote
      })
        console.log(countVote)
        return countVote;

    }
