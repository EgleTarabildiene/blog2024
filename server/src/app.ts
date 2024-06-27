import express,{ Application } from "express";
import mongoose from "mongoose";
import { Post } from "./models/post";
import { postsRouter } from "./routes/posts.router";




const app:Application=express();

mongoose.connect("mongodb://localhost:27017/blog")
.then(()=>{
    console.log("prisijungiame prie MongoDB");
  
    })
    

.catch((error)=>console.log(error));


app.use(express.json());

app.use("/posts", postsRouter);

export {app};