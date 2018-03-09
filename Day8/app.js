angular.module("demoApp",[])
                .controller("firstCtrl",f)
                .controller("secondCtrl",s)

function f(){

    var first = this;
    first.name = "abc"
    first.show = true;


}
function s(){

}