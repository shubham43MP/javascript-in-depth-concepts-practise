// Abstraction
function Circle(radius) {
  this.radius = radius
  // this will make this private property
  let defaultLocation = { x:0, y: 0 }
  let computeOptimumLocation = function() {
    //..
  }
  this.draw = function() {
    console.log("Draw from Constructor function")
  }
}

const circleConstructor = new Circle(1)

// Getter and Setters
function Circle1(radius) {
  this.radius = radius
  // this will make this private property
  let defaultLocation = { x:0, y: 0 }
  let computeOptimumLocation = function() {
    //..
  }
  this.draw = function() {
    console.log("Draw from Constructor function")
  }
  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation
    },
    set: function(value) {
      if(!value.x || !value.y) throw new Error('Invalid Location')
      defaultLocation = value
    }
  })
}

const circleGetterSetter = new Circle(2)
console.log("Access private defaultLocation Property" , circleGetterSetter.defaultLocation)
