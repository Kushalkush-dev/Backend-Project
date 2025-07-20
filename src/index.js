import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js"

dotenv.config(
  {
    path:'./.env'
  }
)




connectDB()
        .then(()=>{
          app.listen(process.env.Port || 6000,()=>{
            console.log(`Server is running at port:${process.env.Port}`);
            

          })
        })
        .catch((error)=>{console.log("Database connection failed",error)})






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