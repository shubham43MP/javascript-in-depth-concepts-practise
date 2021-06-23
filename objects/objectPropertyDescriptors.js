// Reference https://javascript.info/property-descriptors
// An object propertoies can be writable, enumerable and configurable. By Default they all are true

let user = {
  name: 'Shubham'
}

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log('user is = ', user, descriptor) // all true

Object.defineProperty(user, "name", {
  writable: false
});
user.name = 'Atharva'

console.log('lates user???', user.name) // Will again be Shubham