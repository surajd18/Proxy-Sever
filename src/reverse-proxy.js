import {createProxyMiddleware} from 'http-proxy-middleware';
import express from 'express';
import morgan from 'morgan';

const reverseProxy = express();

reverseProxy.use(morgan('combined'));

reverseProxy.use('/api',createProxyMiddleware({
    target:'http://localhost:8000',
    changeOrigin:true,
    onError:(err,req,res)=>{
        console.log('Reverse Proxy API Error:',err);
        res.status(500).send('Something went wrong with the API proxy.')
    }
}));

reverseProxy.use('/auth',createProxyMiddleware({
    target:'http://localhost:6000',
    changeOrigin:true,
    onError:(err,req,res)=>{
        console.error('Reverse Proxy API Error:',err);
        res.status(500).send('Something went wrong with the API proxy.')
    }
}));

export default reverseProxy;