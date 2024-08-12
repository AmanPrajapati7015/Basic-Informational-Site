require('dotenv').config();
const express = require('express');

const app = express();

app.get('/',(req, res)=>{
  res.sendFile(__dirname+'/pages/index.html');
})

app.get('/about',(req, res)=>{
  res.sendFile(__dirname+'/pages/about.html');
})

app.get('/contact',(req, res)=>{
  res.sendFile(__dirname+'/pages/contact-me.html');
})

app.get('*',(req, res)=>{
  res.sendFile(__dirname+'/pages/error.html');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`running on port ${PORT}`));