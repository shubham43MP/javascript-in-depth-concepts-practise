// 5^13 is basically 5*5*5.....13 times
// Instead Binary Exponentiation represents is as : 5^8*5^4*5^1

function binPow(a, b) {
  let res = 1;
  while(b>0){
    if(b & 1) res = res * a
    a = a*a;
    b>>=1; //equivalent to b = Math.floor(b/2)
  }
  return res
}

// Note that b & 1 is nothing but b!=0
console.time('Time consumed with binaryExp')
const final = binPow(5, 10)
console.timeEnd('Time consumed with binaryExp') //0.0119ms
console.time('Time consumed with inbuilt Math.Pow')
Math.pow(5, 10)
console.timeEnd('Time consumed with inbuilt Math.Pow') //0.034ms
console.log('Result is ', final, Math.pow(5, 10))

function naivePowApproach(a,b) {
  let res = 1;
  if(b === 0) return res
  for (let i=0; i<b ; i++) {
    res = res*a
  }
  return res
}
console.time('Time consumed with naive approach')
naivePowApproach(5, 10)
console.timeEnd('Time consumed with naive approach') //0.09ms


console.log('Result with naive Approach is ', naivePowApproach(5, 10), Math.pow(5, 10))