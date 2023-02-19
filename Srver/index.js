const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");

const WebSocket = require("ws");
const wss = new WebSocket.Server({ server: app });

const { PosteRouter } = require("./Router/PosteRouter");
const {castingrouter}=require("./Router/castingrouter")
const { UserRouter } = require("./Router/UserRouter");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://abdelwahebbouden.com");
  next();
});
app.use(
  cors({
    origin: "https://abdelwahebbouden.com",
    credentials: false, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);


app.use(express.json());
app.use(cookieParser());


app.use("/",castingrouter)
app.use("/", PosteRouter);
app.use("/", UserRouter);

module.exports = app;
