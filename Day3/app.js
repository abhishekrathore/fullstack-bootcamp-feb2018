console.log("hello");

var d = new Date();

str = "Today is" + d

console.log(str)



function area(a,b,c){
    var p = (a+b+c)/2
    var s =  p*(p-a)*(p-b)*(p-c);
    return Math.sqrt(s);

}

console.log(area(5,6,7))

var name = "youstart@gmail.com";

var i = name.indexOf('@gmail.com');
if(i>=0){
    console.log("email is Gmail")
}else{
    console.log("email is not Gmail")
}


var c = name.charAt(4);
console.log(c)


var r  = Math.ceil(Math.random()*10)
console.log(r);

// var input = prompt("Guess which number");
// console.log(input);

// if(r ==input){
//     alert("Good Work")
// }else{
//     alert("Not Matched")
// }


for(var i=0;i<4;i++){
    console.log(i)
}

text = "this is a statement";

var words = text.split(" ");

var str = []
for(var i=0;i<words.length;i++){
  var word = words[i]
  var x =  word[0].toUpperCase()
  var partial  = word.replace(word[0],x)
   console.log(partial)


//    var partial =  words[i].split("")
//    partial.shift();
//    partial.unshift(x);

    str.push(partial);

}

console.log(str.join(' '))