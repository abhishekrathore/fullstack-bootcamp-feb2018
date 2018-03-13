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

     second.countries =  ["ind","sl","pak"]

     second.add = function(){
         second.countries.push(second.name)
         second.name = ""
     }

     second.delete = function(i){
         second.countries.splice(i,1);
     }


    //  second.apply= true;








}