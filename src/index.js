import dotenv from 'dotenv'
import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'
})

connectDB();







/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

const app=express();

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERROR IS :- ",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port http://localhost:${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Error is :- \n",error)
        throw error
    }
})()

*/