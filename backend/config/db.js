import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kenechukwuajimah:1601413@cluster0.j2ntlll.mongodb.net/food-delivery').then(() => console.log('database connected'));
    
}