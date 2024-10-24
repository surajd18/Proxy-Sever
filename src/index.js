import express from 'express';
import forwardProxy from './forward-proxy.js';
import dotenv from "dotenv";
import reverseProxy from './reverse-proxy.js';
dotenv.config({
    path:"./env"
})

const app = express();
app.use('/forward',forwardProxy);
app.use(reverseProxy);

const PORT = process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.send(`Server is LIVE!!`)
})

app.listen(PORT,()=>{
    console.log(`Proxy server running on port ${PORT}`)
})