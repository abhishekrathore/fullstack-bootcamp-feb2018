

function print(){
    var text = $("#text").val()
    var color = $("#color").val()
    console.log(text,color)
    $("#print").text(text).css("color",color)
}


function printval(){
   var value =  $("#dropdown").val()
   console.log(value);
   $("#print").text(value)
}

function printtext(e){

   // console.log(e)
    if(e.charCode==13){
        var value =  $("#text").val()
        console.log(value);
        $("#print").text(value)
        $("#text").val("")
    }
   
 }


 feed = [
     {
     user:{name:"abhishek",id:"rathorenbhishek87",pic:"demo.png"},
     time : new Date(),
     text:"this is a demo post",
     likes:[{name:"ajay" ,id:"rohit87"},{name:"ajay" ,id:"rohit87"}],
     shares:["ajay","rohit"],
     comments:[{name:"ajay",comment:"comment 1",time: new Date()},
               {name:"abhishek",comment:"comment 2",time: new Date()} ]
            },

            {
                user:{name:"rahul",id:"rathorenbhishek87",pic:"demo.png"},
                time : new Date(),
                text:"this is a demo post",
                likes:[{name:"ajay" ,id:"rohit87"},{name:"ajay" ,id:"rohit87"}],
                shares:["ajay","rohit"],
                comments:[{name:"ajay",comment:"comment 1",time: new Date()},
                          {name:"abhishek",comment:"comment 2",time: new Date()} ]
                       }

                       , {
                        user:{name:"rahul",id:"rathorenbhishek87",pic:"demo.png"},
                        time : new Date(),
                        text:"this is a demo post",
                        likes:[{name:"ajay" ,id:"rohit87"},{name:"rohit" ,id:"rohit87"}],
                        shares:["ajay","rohit"],
                        comments:[{name:"ajay",comment:"comment 1",time: new Date()},
                                  {name:"abhishek",comment:"comment 2",time: new Date()} ]
                               }
               ]

function checkPosts(givenName){
    var count =0;
    for(var i=0;i<feed.length;i++){
        if(feed[i].user.name == givenName) count++;
    }
    return count;
}


for(var i=0;i<feed[2].likes.length;i++){
    console.log(feed[2].likes[i].name)
}

