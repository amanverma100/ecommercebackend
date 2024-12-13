const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')
const app = express()
const allowedOrigins = ["http://localhost:3000"];
app.use(cookieParser());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
   
  },
  credentials: true
}));
app.use(express.json())
app.use("/api",router)
const PORT = process.env.PORT||5000
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server is running "+PORT)
    })
})
