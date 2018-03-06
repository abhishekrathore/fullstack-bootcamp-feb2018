var a = 5
var b = 6
console.log(a+b);

var c = "7";
console.log(a*c);
var flag = true;
var cities = ["jaipur",1];

var person ={}
person.name = "abc";
person.age = 23;
person.phones = [{phone :999999,type:"home"},{phone:888888,type:"office"}];
person.address = {street:"hari marg",pin:302017, city:"jaipur", area : "malviya nagar"}

var cities = ["jaipur","ajmer"]
var o = cities.push("barmer");
var p = cities.pop()
cities.splice(1,1,"kota")

email ="contact@youstart.in";
var parts = email.split("o");
var text = "This domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission."

var d = new Date();


function area(a,b,c){
return a+b+c;
}

console.log(area(1,2,3));


for(var i=0;i<cities.length;i++){
    console.log(cities[i])
}

if(person.age<20){
   console.log("young")
}else{
    console.log("old")
}


function diff(n){
    if(n>=19){
       return n-19
    }else{
       return 19-n
    }
}


function absdiff(n){
   return Math.abs(n-19)
}

console.log(diff(100))