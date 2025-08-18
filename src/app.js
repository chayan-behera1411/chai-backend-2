import express from "express"
import cors from "cors"
import cookieParser from "cookieParser"

const app = express()

// what is middleware->
// url is hit -> request is sent to backend -> certain conditions checked(eg:- login) -> then response is sent to frontend
// something that checks certain conditions in the middle before
// sending the response back to frontend
//what is next()? -> a flag used to pass the request to next route 

//middleware used//
app.use(cors({
    //cors settings//
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


//data will now come from many areas in many forms
//like urlencoded, json format etc.
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
//
//to access cookies of server (browser) securely 
app.use(cookieParser())


export {app}