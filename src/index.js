import express from 'express';
import forwardProxy from './forward-proxy.js';
import dotenv from "dotenv";
dotenv.config({
    path:"./env"
})

const app = express();
app.use('/forward',forwardProxy);

const PORT = process.env.PORT||8000;

app.listen(PORT,()=>{
    console.log(`Proxy server running on port ${PORT}`)
})