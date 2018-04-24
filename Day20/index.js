var express = require("express");
var server = express();
var bodyParser = require('body-parser');

//middleware
server.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
server.use(bodyParser.json())

var users = [
     {name:"abhishek","age":20,course:"angular"},
     {name:"ajay","age":10,course:"node"},
     {name:"mayank","age":12,course:"python"}]



server.get("/",function(req,res){  //GET / localhost:8000
    res.send("<h2>hello</h2>")
})

server.get("/user",function(req,res){ 

    res.json({name:"youstart"})
})

server.get("/data",function(req,res){  // POST /data  localhost:8000
    var responseSent = false;
    var username = req.query.username;
    for(var i=0;i<users.length;i++){
        if(username == users[i].name){
            responseSent = true;
            res.json(users[i])
        } 
    }


    if(!responseSent){
        res.json({error:"User not Found"})
    }

    
})


server.post("/data",function(req,res){  // POST /data  localhost:8000
    var responseSent = false;
    var username = req.body.username;
    for(var i=0;i<users.length;i++){
        if(username == users[i].name){
            responseSent = true;
            res.json(users[i])
        } 
    }


    if(!responseSent){
        res.json({error:"User not Found"})
    }

    
})




server.listen(8000,function(){
    console.log("server started")
})

