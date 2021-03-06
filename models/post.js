const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema.Types
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        require:true
    },
    likes:[
        {
            type:String,
            ref:"User"
        }
    ],
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"}
    }],
    postedBy:{
        type:ObjectId,
        ref:"User"
    },
},{timestamps:true}) //it will add created add fields

mongoose.model("Post",postSchema )