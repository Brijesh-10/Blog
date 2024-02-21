import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{console.log("connected stupid");}).catch(err=>{
    console.log("fuck off",err);
})
const app=express()
app.listen(3000,()=>{
    console.log('Server is running donkey');
});