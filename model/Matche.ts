import mongoose, {Types,Schema} from "mongoose";


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
export const Matche=mongoose.models.Matche||mongoose.model<IMatche>('Matche',matcheshema)