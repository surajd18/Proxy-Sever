import httpProxy from 'http-proxy';
import express from 'express';
import morgan from 'morgan';

const forwardProxy = express()

const proxy = httpProxy.createProxyServer({});

forwardProxy.use(morgan('combined'));

forwardProxy.use((req,res)=>{
    const targetURL = "http://example.com";

    proxy.web(req,res,{target:targetURL},(err)=>{
        console.error("Forward Proxy error",err);
        res.status(502).send('Bad Gateway:Unable to proxy the request.');
    })
})

export default forwardProxy;