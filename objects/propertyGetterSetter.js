let user = {
  name: 'Shubham',
  surname: 'Dixit',

  get fullName() {
    return `${ this.name } ${ this.surname }`
  },

  set fullName (value) {
    [ this.name, this.surname ] = value.split(' ')
  }
}

user.fullName = "Alia Bhatt"

// Getter setters can be made writable, enumerable and stuff like that woith property descriptors

console.log(user.fullName)