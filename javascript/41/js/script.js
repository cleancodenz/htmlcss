var x= 2;
A();

function A(){
    var x =5;
    B();
}

function B() {
    console.log(x); // this x is 2 not 5 where it is called, the lexical context is where it is defined
}



var message = "in global";

console.log("global: message = " + message);

var a = function () {
  var message = "inside a";
  console.log("a: message = " + message);
/**  this will mean a scope will be for b first
  function b () {
    console.log("b: message = " + message); 
  }
**/
  b();
}


 function b () {
    console.log("b: message = " + message); 
  }

a();