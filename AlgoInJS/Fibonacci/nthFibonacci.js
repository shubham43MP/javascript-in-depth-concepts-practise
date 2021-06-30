// nth fibonacci term is represented as: 
// Fn = round( (((1+5^1/2)/2)^n)/(5^1/2) )

const n = 14;
const rootFive = Math.pow(5, 0.5)
const Fn = Math.round((Math.pow((1+rootFive)/2, n))/(rootFive))
console.log('Fibonacci Number at ', n, ' is', Fn)