import mongoose, {Mongoose} from 'mongoose';

class db{
    static inestence:Mongoose;
    static async getInestence() {
        if (this.inestence == null)
         this.inestence = await mongoose.connect(process.env.MONGO_URI as string,{

             serverSelectionTimeoutMS: 20000,
         });

        return this.inestence
    }
}

export default db;