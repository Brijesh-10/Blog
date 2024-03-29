import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{console.log("connected stupid");}).catch(err=>{
    console.log("fuck off",err);
})
const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log('Server is running donkey');
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal server error donkey';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
});