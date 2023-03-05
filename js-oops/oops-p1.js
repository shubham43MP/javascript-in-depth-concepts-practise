const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log("draw")
  }
}

circle.draw()

/*
Factories: Used to create multiple objects as duplicating an object would be problem, we have to copy paste uit a lot


*/
// This is a factory function
function createCircle(radius) {
  const circle = {
    radius,
    draw: function() {
      console.log("draw from factory")
    }
  }
  return circle
}

createCircle(5).draw()

// Constructor Function
// the new operator will first set the this scope to the object and then retyrnj the object itself
function Circle(radius) {

  this.radius = radius
  this.draw = function() {
    console.log("Draw from Constructor function")
  }
}

const another = new Circle(1)
