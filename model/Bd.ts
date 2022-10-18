import mongoose, {Mongoose} from 'mongoose';

class db{
    static inestence:Mongoose;
    static async getInestence() {
        if (this.inestence == null)
         this.inestence = await mongoose.connect(process.env.MONGO_URI as string);

        return this.inestence
    }
}

export default db;