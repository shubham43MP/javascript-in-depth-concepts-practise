// Write a promise that calls 3 APIs and gets resolved as soon as any 2 of them gets resolved

const mockAPI = (delay) => {
  return new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, delay);
} )
}

const promiseDemo = new Promise( (resolve, reject) => {
  let count = 0;
  mockAPI(2000).then( () => {
   if (count < 2) count++;
   else resolve()
  } )
  mockAPI(800).then( () => {
   if (count < 2) count++;
   else resolve()
  } )
  mockAPI(1200).then( () => {
   if (count < 2) count++;
   else resolve()
  } )
} )

promiseDemo.then( (data) => {
  console.log('demo promise called', data)
})

// Important note: No matter how many resolve you write, Promise is resolved once overall