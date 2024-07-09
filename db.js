import mongoose from "mongoose";
import "dotenv/config";

const Mongo_Uri = process.env.Mongo_Url



export const dbConnection = () => {

   mongoose.connect(Mongo_Uri).then(() => {
       console.log('Database is connected')
   })

}