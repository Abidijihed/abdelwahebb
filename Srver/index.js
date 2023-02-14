const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
require("dotenv").config();
const cors = require('cors');
const NodeMediaServer = require('node-media-server');
// const RtspServer = require('node-rtsp-rtmp-server');
//webSocket configuration
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server: app }); 


const {PosteRouter}=require("./Router/PosteRouter");

const {UserRouter}=require("./Router/UserRouter");


const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};
const nms = new NodeMediaServer(config);
nms.run();
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://www.abdelwahebbouden.com");
//   next();
// });
// app.use(
//   cors({
//     origin: "http://www.abdelwahebbouden.com",
//     credentials: false, //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
//   })
// );
const endpoint = "http://164.90.183.141/api/get/allpost";
const corsProxy = "http://www.abdelwahebbouden.com";

fetch(corsProxy + endpoint, {
  method: "GET",
  headers: {
    Origin: "http://www.abdelwahebbouden.com",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));



app.use(express.json());
app.use(cookieParser())


// wss.on('connection', (ws) => {
//     ws.send('Hello, client!');
// });



app.use('/',PosteRouter)
app.use('/',UserRouter)

module.exports = app