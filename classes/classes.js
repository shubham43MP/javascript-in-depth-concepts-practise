function Car(model, color) { // Its a constructor function
  this.model = model
  this.color = color
}

const carObject = new Car('Sedan', 'Daytona Grey')

Car.prototype.getCarColor = function() {
  return this.color
}

console.log('object Access = ', carObject.color) // Daytona Grey
Car.call(carObject, 'Hatchback', 'Professional Silver')
console.log('Car color updated?', carObject.color ) // Professional Silver
console.log('From Prototype', carObject.getCarColor()) // Professional Silver


// Classes are called the Syntactical Sugar for above Implementation because --- See Below:
class CarClass {
  constructor(model, color) {
      this.model = model
      this.color = color
  }
  getCarColor() {
    return this.color
  }
  setCarColor(color) {
    this.color = color
  }
  static getCarColorModel() {
    return `This os a static method returning similar values`
  }
}

const carClassObject = new CarClass('LMV', 'Surprise Orange')
console.log('Car Class Color ', carClassObject.getCarColor())
console.log('See whether Class color updated? ', CarClass.getCarColorModel() )

// Looks similar?? But stll classes have various nuances and they are not very similar
// There are important differences.

// First, a function created by class is labelled by a special internal property [[IsClassConstructor]]: true. So it’s not entirely the same as creating it manually.
class User {
  constructor() {}
}

alert(typeof User); // function
User(); // Error: Class constructor User cannot be invoked without 'new'
