// Function constructors
function Circle (radius) {
  this.radius = radius;
  /** 
  this.getArea = function(){
      return Math.PI * Math.pow(this.radius,2);
  };**/

}

// only created once for all same objects
Circle.prototype.getArea = 
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  };


var myCircle = new Circle(10);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);