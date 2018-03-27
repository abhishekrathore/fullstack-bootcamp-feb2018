angular.module("routingApp",["ngRoute"])
 .config(config)
 .controller("firstCtrl",firstCtrl)
 .controller("secondCtrl",secondCtrl)
 .factory("data",data)

 function config($routeProvider){

    $routeProvider
        .when("/home",{
            templateUrl:"partials/home.html",
            controller:"firstCtrl",
            controllerAs:"first"})
        .when("/aboutus",{
            templateUrl:"partials/aboutus.html",
            controller:"secondCtrl",
            controllerAs:"second"
        })
        .otherwise({redirectTo:"/home",
    })

 }

 function firstCtrl(data){
    var first = this;
    first.user = data;
 }
 function secondCtrl(data){
    var second = this;
    second.user = data;
 }

 function data(){
     return {}
 }

