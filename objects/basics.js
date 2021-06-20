const testObject = {
  name : 'Shubham',
  age: 26
}

console.log('response',  'name1' in testObject)

for ( let key in testObject) {
  console.log('key = ', key, ' value = ', testObject[key])
}