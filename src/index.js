import dotenv from "dotenv";
import connectDB from "./db/index.js";

// dotenv.config(
//   {
//     path:'./env'
//   }
// )




connectDB();






/*
;(async ()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error",()=>{
      console.error("ERROR:",error)
      throw error
    })

    app.listen(process.env.PORT,()=>{
      console.log(`the app is running on the port:${process.env.PORT}`);
      
    })
    
  } catch (error) {
    console.error("ERROR:",error);
    throw error
  }
})()

*/