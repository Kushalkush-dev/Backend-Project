import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new Schema({
  videoFile:{                   //cloudinary Url
    type:String,
    required:[true,"File required"]
  },
  thumbnail:{                        //cloudinary Url
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  }, 
  duration:{                               //cloudinary Url
  type:Number,
  required:true           
  },
  views:{
  type:Number,
  default:0
  },
  isPublished:{
    type:Boolean,
    required:true
  },

  owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
  }
  
},{timestamps})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model("Video",videoSchema)