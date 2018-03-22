angular.module("ecomm",[])
 .controller("categoryCtrl",categoryCtrl)
 .factory("products",products)


 function categoryCtrl(products){
   var category = this;
   category.list = products;
   category.index = 0;
   category.pick = function(i){
    category.index = i;
   }
}


 function products(){

 return [
     {
         name:"shoes",
         products:[{"name":"nike air",price:12.00,desc:"this is great shoe",rating:3},
                   {"name":"adidas air",price:14.00,desc:"this is great shoe",rating:4},
                   {"name":"reebok air",price:15.00,desc:"this is great shoe",rating:5}]
    },
    {
        name:"books",
        products:[{"name":"2 states",price:12.00,desc:"this is great book",rating:1},
                  {"name":"harry potter",price:14.00,desc:"this is great book",rating:5},
                  {"name":"RS agarwal",price:15.00,desc:"this is great book",rating:4}]
   },
   {
    name:"phones",
    products:[{"name":"Nokia",price:12.00,desc:"this is great book",rating:1},
              {"name":"Apple",price:14.00,desc:"this is great book",rating:5},
              {"name":"Vivo",price:15.00,desc:"this is great book",rating:4}]
}
    
 ]



 }