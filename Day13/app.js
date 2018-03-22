angular.module("services",[])
 .controller("firstCtrl",firstCtrl)
 .controller("secondCtrl",secondCtrl)
 .factory("dataService",dataService)
 .constant("PI",3.14)

 function firstCtrl(dataService,PI){
  var first = this;
  first.list = dataService

  first.addItem = function(t){
      first.list.push(t);
  }



 }

 function secondCtrl(dataService){
     var second = this;
    second.list = dataService


}


function dataService(){
    console.log("data")
    return []
}