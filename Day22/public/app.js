angular.module("demo",[])
.controller("flagCtrl",flagCtrl)


function flagCtrl($http){

    var flag = this;
 

    $http.get('/data').then(function(result){
        flag.countries = result.data;

        console.log(flag.countries)
        flag.reset()
        

    })

    


 flag.reset = function(){
    flag.r = Math.floor(Math.random()*flag.countries.length)
    flag.correctName =    flag.countries[flag.r].name
    flag.input = ""
 
 }

   




}