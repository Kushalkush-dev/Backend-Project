import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema=new Schema({
  username:{
    type:String,
    required:true,
    lowercase:true,
    unique:true,
    trim:true,
    index:true
  },
  email:{
    type:String,
    required:true,
    lowercase:true,
    unique:true,
  },
  fullname:{
    type:String,
    required:true,
    trim:true,
    index:true,
  },
  avatar:{           //cloudinary Url
    type:String,
    required:true,
  },
  coverimage:{    //cloudinary Url
    type:String
  },
  watchHistory:[{
    type:Schema.Types.ObjectId,
    ref:"Video"
  }],
  password:{
    type:String,
    required:[true,"Password is Required"],
    unique:true,
  },
  refreshToken:{
    type:String
  }
},{timestamps:true})





userSchema.pre("save",async function () {

  if(!this.isModified("password")) return next();
 
    this.password=bcrypt.hash(this.password,10)
    next()
 
})

export const User=mongoose.model("User",userSchema)