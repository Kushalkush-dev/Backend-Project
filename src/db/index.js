import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
dotenv.config(
  {
    path:'./.env'
  }
)



const connectDB= async ()=>{
  try {
    const connectInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected !! DB HOST:${connectInstance.connection.host}`);
    
  } catch (error) {
    console.log("MongoDB Connection Failed",error);
    process.exit(1)
    
  }
}

export default connectDB;