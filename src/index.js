import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';
dotenv.config({
    path:'./env'
})

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log("Serever Running at Port :-  ",process.env.PORT)
    })
}).catch((error)=>{
    console.log("MONGO DB CONNECTION FAILED!! ",error)
})







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