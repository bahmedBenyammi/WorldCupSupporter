import mongoose, {Types,Schema} from "mongoose";
import {enumBooleanBody} from "@babel/types";
import {number} from "prop-types";


export interface IMatche {
    _id?: Types.ObjectId
    team1:string
    team2:string
    date:Date
    group:string
    round:string

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
    }

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