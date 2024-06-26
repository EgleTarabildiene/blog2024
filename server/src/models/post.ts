import mongoose from "mongoose";



const postSchema = new mongoose.Schema({
    title:String,
    content:String
});

const Post = mongoose.model('post', postSchema);


export {Post}