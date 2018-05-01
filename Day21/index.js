var express = require("express");
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var server = express();

var url = "mongodb://localhost:27017"

var DB;

MongoClient.connect(url, function(err, client) {
    if(err==null){
       DB = client.db("nodeClass");
       console.log("connected to DB")
    }else{
        console.log(err);
    }
})

server.get("/data",function(req,res){
        var name =  req.query.playerName;
    DB.collection("players").find({"name":name}).project({'name':1}).toArray(function(err,result){
       res.json(result)
    })


})


server.listen(8000,function(){
    console.log("server started")
})