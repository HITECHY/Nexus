import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('MONGOLINK').then(()=>console.log("DB Connected"));
}