const testObject = {
  name : 'Shubham',
  age: 26
}

console.log('response',  'name1' in testObject)

for ( let key in testObject) {
  console.log('key = ', key, ' value = ', testObject[key])
}

// so objects have a cool property when named objects used with number are ordered well
const orderedObject = {
  '34': 'testy',
  '45': 'woww',
  '29': 'is that real?',
  '5': 'lets see'
}

console.log('Ordered well', orderedObject) //Ordered well { '5': 'lets see', '29': 'is that real?', '34': 'testy', '45': 'woww' }