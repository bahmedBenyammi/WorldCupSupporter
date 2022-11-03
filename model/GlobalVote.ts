import {Schema, model, models} from 'mongoose';

const voteShema=new Schema({
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
        type:String,
        require:true,
        unique:false
    },
    isComfire:{
        type:Boolean,
        default:false,
    }
},{ timestamps: { createdAt: 'created_at' } })
export const GlobalVote=models.GlobalVote||model('GlobalVote',voteShema)
//  export const GlobalVote=model('GlobalVote',voteShema)

