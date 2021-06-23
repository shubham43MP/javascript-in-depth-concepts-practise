const multipleResolve = new Promise( (resolve, reject) => {
  console.log('Start')
  setTimeout(() => {
  resolve('Atharva')
  resolve('Shubham')
  resolve('Vayam')
  resolve('IAF')
  console.log('Final')
  }, 2000)
})

multipleResolve
  .then( data => console.log('Then 1 O/P = ', data) )
  .then( data1 => console.log('Then 2 O/P = ', data1) )
  .then( data2 => console.log('Then 3 O/P = ', data2) )
  .then( data3 => console.log('Then 4 O/P = ', data3) )

// Start
// Final
// Then 1 O/P =  Atharva
// Then 2 O/P =  undefined
// Then 3 O/P =  undefined
// Then 4 O/P =  undefined