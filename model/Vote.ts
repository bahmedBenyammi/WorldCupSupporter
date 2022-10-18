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
})
export const Vote=models.Vote||model('Vote',voteShema)