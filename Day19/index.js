var express = require("express");

var server = express();


server.get("/",function(req,res){
    res.send("<h2>hello</h2>")
})

server.get("/user",function(req,res){
    res.json({name:"youstart"})
})

server.post("/data",function(req,res){
    res.json({name:"testdata"})
})
server.listen(8000,function(){
    console.log("server started")
})

