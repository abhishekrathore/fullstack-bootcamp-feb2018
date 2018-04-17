angular.module("demo",[])
.controller("demoCtrl",demoCtrl)


function demoCtrl($http){

    var demo = this;

    console.log("start")

    demo.getGender=function(){
        var url = "https://api.genderize.io/?name="+demo.name
        $http.get(url).then(function(result){
            console.log(result.data)
            demo.gender = result.data.gender
            demo.person = result.data.name
    
        }).catch(function(err){
            console.log(err)
        })
    }

    demo.getChars=function(){
        var url = "https://gateway.marvel.com:443/v1/public/characters?name="+demo.name+"&apikey=1f1eef6169fc3b523d81a6983f7e14f2"
      
        $http.get(url).then(function(result){
            demo.char = result.data.data.results[0];


          
        }).catch(function(err){
            console.log(err)
        })
    }
   

    console.log("hello")

}

