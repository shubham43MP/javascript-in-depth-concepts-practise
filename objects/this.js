const user = {
  name : 'Shubham',
  age: 26
  sayHiWithES6BoundInside: () => {
  console.log('ES6 Hi Bound Inside', this.name)
}
}

user.sayHiNormal = function() {
  console.log('Normal Hi', this.name)
} 

user.sayHiWithES6 = () => {
  console.log('ES6 Hi', this.name)
}

user.sayHiNormal() //Normal Hi Shubham
user.sayHiWithES6() //ES6 Hi undefined
//The value of this is the object “before dot”

const sayHiWithES6Bound = () => {
  console.log('ES6 Hi Bound', this.name)
}

user.sayHiWithES6Bound = sayHiWithES6Bound.bind(this)
user.sayHiWithES6Bound() //ES6 Hi Bound undefined
// user.sayHiWithES6BoundInside()// WIll not work as ES6 functions are suitable for non methods functions
