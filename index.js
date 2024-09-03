const express = require('express');

const app = express();
app.get('/',(req,res)=>{
    res.send("welcome to our web server")
})
   
app.get('/about',(req,res)=>{
    res.send("about page")
})
app.get('/home',(req,res)=>{
  res.send("home page")
})

app.listen(4000,()=>{
    console.log("server is up and run at http://localhost:4000")
})