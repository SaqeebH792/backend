import mongoose, { mongo } from "mongoose";
import {DB_NAME} from "../constants.js"
const connectDB =  async ()=>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/ ${DB_NAME}`)
       console.log(`MongoDB Connected successfully!! Hosted: ${connectionInstance.connection.host}`);
       
    } catch (error) {
        console.log("Database Connection Error!", error)
    }
}
export default connectDB;