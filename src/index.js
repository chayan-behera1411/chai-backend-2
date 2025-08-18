// require("dotenv").config({path:"./env"})
// -> ruins consistency of the code (1st require, then import, not good-looking)
import dotenv from "dotenv"
// import mongoose from "mongoose"
// import {DB_NAME} from "./constants";
import connectDB  from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB();

// Note //
// as early as possible in your application,
// import and configure dotenv ( so wherever required 
// environment variables can get loaded )







// import express from "express"
// const app = express()
/*
// since databases are on a different continent,
// we need to use async await to communicate with them.
// and some error handling too

// IIFE -> immediate function call without need of seperate call
;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERRR:",error);
            throw error
        })
        app.listen(process.env.PORT,() => {
            console.log("App is listening on port ${process.env.port}");
        })
    }catch(error){
        console.error("ERROR:",error);
    }
})()
// function connectDB(){}
*/