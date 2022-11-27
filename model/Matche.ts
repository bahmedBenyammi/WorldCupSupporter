import mongoose, {Types,Schema} from "mongoose";
import {number} from "prop-types";

export interface IGoal{
    palyer:string,
    time:string
}
export interface IMatche {
    _id?: Types.ObjectId;
    team1:string,
    team2:string,
    date:Date,
    group:string,
    round:string,
    isplay:boolean,
    time?:string,
    isfinsh:boolean,
    score:{
        team1:number,
        team2:number
    },
    goals:{
        team1:IGoal[],
        team2:IGoal[],
    },
    timeAdd:{
        part1:number,
        part2:number,
    }
}
const matcheshema=new Schema({

    team1:{
        type:String,
        require:true,
    },
    team2:{
        type: String,
        require:true,
    },
    date:{
        type:Date,
        default:new Date()
    },
    group:{
        type :String,
        require:true,
    },
    round:{
        type:String,
        require:true,
    },
    isfinsh:{
        type:Boolean,
        default:false,

    },
    score:{
        team1:{
            type : Number,
            default:0
        },
        team2:{
            type : Number,
            default:0,

        }
    },
    goals:{
        team1:[{
            palayer:{
                type:String,
                require:true
            },
            time:{
                type:Number,
                require:true
            }

        }]
    },
    timeAdd:{
        part1:{
            type:Number,
            default:2
        },
        part2:{
            type:Number,
            default:2
        }
    },

})
const voteMatch= new Schema({
    country:{
        type:String,
        require:true,
        unique:false
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    support:{
        type:Number,
        min:0,
        max:2,
        require:true,
        unique:false
    },
    isComfire:{
        type:Boolean,
        default:false,
    },

    match:{type:Types.ObjectId,ref:'Matche'}
})
export const Matche=mongoose.models.Matche||mongoose.model<IMatche>('Matche',matcheshema)
export const VoteMatch=mongoose.models.VoteMatch||mongoose.model('VoteMatch',matcheshema)
// export const VoteMatch=mongoose.model('VoteMatch',matcheshema)
// export const Matche=mongoose.model<IMatche>('Matche',matcheshema)