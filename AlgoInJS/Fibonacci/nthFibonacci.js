// nth fibonacci term is represented as:
// Fn = round( (((1+5^1/2)/2)^n)/(5^1/2) )

const n = 12;

function nthFiboByFormula(n) {
  const rootFive = Math.pow(5, 0.5)
  const Fn = Math.round((Math.pow((1+rootFive)/2, n))/(rootFive))
  console.log('Fibonacci Number at ', n, ' is', Fn)
}

nthFiboByFormula(n)

// This method is least used as it is calculation heavy

//Fast Doubling Method:
/*
We will use following result to calculate nth Fibonacci in O(log(n))
F2k = Fk(2*(Fk+1) - Fk)
F2k+1 = square(Fk+1) + square(Fk)

if we have Fk & Fk+1, we can have F2k & F2k+1 as well. This is the essence of this formula
*/

// n is coming from above
function nthFiboByFastDoubling(n) {
  if (n == 0) return {first: 0, second: 1};
  const p = nthFiboByFastDoubling(n >> 1);
  const c = p.first * (2 * p.second - p.first);
  const d = p.first * p.first + p.second * p.second;
  if (n & 1)
        return {first: d, second: c+d};
    else
        return {first: c, second: d};
}

// first contains Fn, second contains Fn+1

console.log('nthe fibonacci by fast doublingggggg', nthFiboByFastDoubling(n))
