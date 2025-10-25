import mongoose, { SchemaType } from "mongoose";
import {model,Schema} from "mongoose"
import { string } from "zod";
const userSchema = new Schema({
    username: {type:String, unique: true,required:true},
    password: {type:String,required: true}
})
const userModel = model("User",userSchema)
 const contentSchema = new Schema({
    title: String,
    link: String,
    type:String,
    tags: [{type:mongoose.Types.ObjectId, ref:"Tag"}],
    userId : {type:mongoose.Types.ObjectId, ref:'User',required: true
    }
 })
 const contentModel = model("Content",contentSchema)
 const linkSchema = new Schema({
    hash:String,
    userId : {type:mongoose.Types.ObjectId, ref:'User',required: true,unique:true
    }
 })
 const linkModel = model("Link",linkSchema)
 export {
    userModel,
    contentModel,
    linkModel
 }