/**
 * for every object __proto__ exists
 */

// function Car() { // Its a constructor function and return the instance when being cales
//   this.model = 'Sedan'
//   this.color = 'Daytona Grey'
//   this.inner = function inner() {
//     console.log('^^^^^^^^^^')
//   }
// }

// Car.prototype.getCarColor = function() {
//   return console.log('This is get carColor')
// }
// const carObject = new Car()

// console.log('%%%%%%%%%', carObject, carObject.getCarColor())
// console.log('$$$$$$$$$$$$', carObject.__proto__.getCarColor())
// Object.getPrototypeOf(carObject).getCarColor()
// // Object.getPrototypeOf(carObject).inner() // Crashes


// What about objects?
let protoObj = { // Protoype of Object
  prop1: 4556,
  someMethod: function() {
    console.log('This is somemethod')
  }
}

// protoObj.prototype.otherMethod = function() { // Crashes
//   console.log('This is other method')
// }

protoObj.__proto__.otherMethod = function() { // works
  console.log('This is other method')
}

//3 ChildObj --> protoObj --> Object.prototpe --> null  // This is prototype chain
let childObj = {}
Object.setPrototypeOf(childObj, protoObj)
console.log('This is other method', childObj.prop1, childObj.toString())

// In class based scenario of other languages, everything inside class is copied but in JS
// protoype chain is created with links and js search for that particular properties in that chain link by link
// Child obj can now access properties above the chain


// 4 childObj2 --> protoObj --> Object.prototype --> null
let childObj2 = Object.create(protoObj) // Newer way to do let childObj2 = {}; Object.setPrototypeOf(childObj, protoObj)
console.log('Accessing from child ', childObj2.prop1) // 4556
childObj2.prop1 = 7856 // creating new property in the childObj2 w/o disturbing the above chain
console.log('New propery => ',childObj2.prop1, ' Proto preopety => ', childObj2.__proto__.prop1 ) // 7856 & 4556
