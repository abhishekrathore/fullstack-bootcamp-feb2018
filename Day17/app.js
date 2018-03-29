angular.module("ecomm",['ngRoute'])
 .controller("categoryCtrl",categoryCtrl)
 .controller("cartCtrl",cartCtrl)

 .factory("products",products)
 .config(config)

 function config($routeProvider){
     $routeProvider
    .when("/category/:category",
    {
        templateUrl:"partials/category.html",
        controller:"categoryCtrl",
        controllerAs:"category"

   })
    .when("/cart",
     {
         templateUrl:"partials/cart.html",
         controller:"cartCtrl",
         controllerAs:"cart"

    })
    .otherwise({redirectTo:'/category/shoes'})

 }


 function cartCtrl(){
     var cart = this;

     cart.name  = "Cart"
 }

 function categoryCtrl(products,$routeParams){
   var category = this;
   console.log($routeParams.category)
   category.list = products;
   category.index = 0;
   
for(var i=0;i<products.length;i++){
    if($routeParams.category==products[i].name){
        category.index = i;
    }
}


   category.customfilter = function(actual,input){
    console.log(actual,input)
    return actual > input
   }
}


 function products(){

 return [
     {
         name:"shoes",
         products:[{"id":1,"name":"nike air",price:12.00,desc:"this is great shoe",rating:3},
                   {"id":2,"name":"adidas air",price:14.00,desc:"this is great shoe",rating:4},
                   {"id":3,"name":"reebok air",price:15.00,desc:"this is great shoe",rating:5}]
    },
    {
        name:"books",
        products:[{"id":4,"name":"2 states",price:12.00,desc:"this is great book",rating:1},
                  {"id":5,"name":"harry potter",price:14.00,desc:"this is great book",rating:5},
                  {"id":6,"name":"RS agarwal",price:15.00,desc:"this is great book",rating:4}]
   },
   {
    name:"phones",
    products:[{"id":7,"name":"Nokia",price:12.00,desc:"this is great book",rating:1},
              {"id":8,"name":"Apple",price:14.00,desc:"this is great book",rating:5},
              {"id":9,"name":"Vivo",price:15.00,desc:"this is great book",rating:4}]
}
    
 ]



 }