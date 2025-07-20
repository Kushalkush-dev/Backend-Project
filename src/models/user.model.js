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

userSchema.methods.isPasswordCorrect=async function(password){
 return await bcrypt.compare(password,this.password)

}


userSchema.methods.generateAccessToken=function(){
  jwt.sign({
    _id:_id,
    username:this.username,
    email:this.email,
    fullname:this.fullname,
  },process.env.ACCESS_TOKEN_SECRET,{
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  })

}


userSchema.methods.generateRefreshToken=function(){
  jwt.sign({
    _id:_id,
  },process.env.REFRESH_TOKEN_EXPIRY,
{
  expiresIn:process.env.REFRESH_TOKEN_EXPIRY
})
}

export const User=mongoose.model("User",userSchema)