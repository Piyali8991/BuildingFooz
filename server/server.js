import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { connectDB } from './config/db.config.js';
import cookieParser from 'cookie-parser';
dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(cors())

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
connectDB()
connectCloudinary()
app.get('/', (req, res) => {
    res.send("Server working")

})
import userRouter from './routes/user.route.js';
app.use('/api/user', userRouter)

//admin route for accessing products
import adminRoute from './routes/Admin.route.js';
import connectCloudinary from './config/cloudinary.js';
app.use('/api/admin', adminRoute)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)

})

