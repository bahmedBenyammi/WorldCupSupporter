import mongoose, {models, Schema, Types} from "mongoose";
export interface ITeam{
    _id: Types.ObjectId;
    name: string,
    group: string,

    point:number,
    goals: number,

    win:number,

    lost: number,

    drow: number,

    mathesPlay: number,

    goalA: number,

    goalD:number,

}
const teamShema=new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    group: {
        type: String,
        require: true,
        unique: false,
    },
    point: {
        type: Number,
        require: false,
        unique: false,
        default: 0
    },
    goals: {
        type: Number,
        require: false,
        unique: false,
        default: 0
    },
    win:{
        type: Number,
        require: false,
        unique: false,
        default: 0
    },
    lost:{
        type: Number,
        require: false,
        unique: false,
        default: 0
    },
    drow:{
        type: Number,
        require: false,
        unique: false,
        default: 0
    },
    mathesPlay:{
        type: Number,
        require: false,
        unique: false,
        default: 0
    },
    goalA:{
        type: Number,
        require: false,
        unique: false,
        default: 0
    },
    goalD:{
        type: Number,
        require: false,
        unique: false,
        default: 0
    }
})
export const Team=models.team||mongoose.model<ITeam>('team',teamShema)