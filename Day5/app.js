// var str = prompt("Enter a string to rotate");
// var tempstr = str;

// // var t = setInterval(function(){

// //     tempstr = tempstr.split("");
// //     var lastchar = tempstr.pop();
// //     tempstr.unshift(lastchar); 
// //     tempstr = tempstr.join("")
// //     console.log(tempstr)
// //     $("#content").html("<h1>"+tempstr+"</h1>")


// //     //text() , html(), css(), attr()

// // },100)

// var sum = function(a,b){
//  console.log(a+b)
// }

// sum(4,5)

var input = prompt("enter string");
var color =  prompt("enter color");

$("#content").text(input).css("color",color);



