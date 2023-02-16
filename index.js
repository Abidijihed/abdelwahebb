const app = require("./Srver/index");
const express = require("express")
const port = 5500;
const path = require("path");
const cookieParser = require('cookie-parser');
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, './Client/dist')));

app.get('/', (req, res) => {
 
  res.send(path.resolve(__dirname, './Client/dist', 'index.html'));
});
app.listen(port,() => {
  console.log(` Backend server is running!  http://localhost:${port}`);
});