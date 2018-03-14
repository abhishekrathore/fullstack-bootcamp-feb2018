angular.module("demo",[])
.controller("demoCtrl",demoCtrl)
.controller("secondCtrl",secondCtrl)


function demoCtrl(){

    var demo = this;

    var c = 7;
    demo.name = "abc"

    demo.result = function(){
    
        switch(demo.operation){
            case 'sum':
             return demo.a+demo.b
            case 'diff':
             return  demo.a - demo.b
            case 'multiply':
             return  demo.a * demo.b
        }
    
    }

}

function secondCtrl(){
     var second  = this;

     second.countries =  []

     second.add = function(){
         second.countries.push({name:second.name,status:false,time:new Date()})
         second.name = ""
     }

     second.delete = function(i){
         second.countries.splice(i,1);
     }

     second.done =function(){
            var count =0
        for(var i =0; i<second.countries.length;i++){
            if(second.countries[i].status){
                count++;
            }
        }
        return count;
     } 
    

    //  second.apply= true;








}