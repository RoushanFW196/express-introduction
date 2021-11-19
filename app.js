




 const express= require('express');
 const app=express();
  const users=require('./userdata.json');
  console.log(users)


//  app.get("/",(req,res)=>{
//      res.send("Welcome to Home Page")
// })

app.get("/users",(req,res)=>{
     res.send(users)
});



 app.listen(1234,()=>{console.log("listening on port 1234")});
 
 //console.log(app)