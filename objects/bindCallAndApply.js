let obj = { age: 7 }

let increaseAge = function(a, b, c){
  return this.age = this.age + a + b + c
}

//Call and apply methods can be used to access object properties and manipulate them with efficiency
const incAgeByCall = increaseAge.call(obj, 5, 8, 7)
console.log('incAgeByCall = ', incAgeByCall)

const incAgeByApply = increaseAge.apply(obj, [ 5, 8, 7, 9])
console.log('incAgeByApply = ', incAgeByApply)

// Bind returns a function that we can call in future like:
let bound = increaseAge.bind(obj)
console.log('bounded value', bound(1,2,3))

// With ES6
let user = { age: 24 }

let ageIncreaser = (a, b, c) => {
  return this.age = this.age + a + b + c
}

const ageIncCall = ageIncreaser.call(user, 4, 5, 6)
console.log('ageIncCall = ', ageIncCall) // Will be undefined. since ES6 dont have its this, it refers this one stp above

let aI = ageIncreaser.bind(user)
console.log('ES6 bound ageIncreaser = ', aI(4, 5, 6))