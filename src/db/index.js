import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => { //async because db in another continent 
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MONGODB connection error ",error);
        process.exit(1); //exits if connection fails
    }
}

export default connectDB