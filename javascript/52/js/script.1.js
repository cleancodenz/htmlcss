(function (window) {
  var yaakovGreeter = {};
  yaakovGreeter.name = "Yaakov";
  var greeting = "Hello ";
  yaakovGreeter.sayHello = function () {
    console.log(greeting + yaakovGreeter.name);
  }

  window.yaakovGreeter = yaakovGreeter;

})(window);

/**
var name ="Yakkov"; // this is global
function sayHello() {
   console.log("Hello " + name);
}



 * 
 * 
 */

/**
  var yaakovGreeter = {};
  yaakovGreeter.name = "Yaakov";
 
  yaakovGreeter.sayHello = function () {
    console.log("Hello" + yaakovGreeter.name);
  }



 * 
 * 
 */