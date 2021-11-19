
// const firstuser = require('./first');
// console.log(firstuser())
// const seconduser = require('./sec');
// console.log(seconduser())
// const thirduser = require('./thr')
//   console.log("hello")
//   console.log(thirduser())

//  const EventEmitter= require('events');
//  const eventEmitter = new EventEmitter();
  
//  eventEmitter.on("bolo",function(){
//      console.log("listener1")
//  })

// eventEmitter.on("bolo",()=>{console.log("listener2")})

// eventEmitter.emit("bolo")


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