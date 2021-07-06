/*
Given two arrays a[] and b[] of size n and m respectively. The task is to find union between these two arrays.

Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in union.
*/

const a = [85, 25, 1 ,32, 54, 6]
const b = [85, 2, 25 ]
function unionMaker(a,b) {
  const union = []
  const intersection = []
  const mapOfA = {}
  a.forEach(element => {
    if(!mapOfA[element]) {
      union.push(element)
      mapOfA[element] = element
    }
  });
  const intermediateMap = {...mapOfA}
  b.forEach(element => {
    if(!intermediateMap[element]) {
      union.push(element)
      intermediateMap[element] = element
    }
    if(mapOfA[element]) intersection.push(element)
  });
  return { union, intersection }
}

const { union, intersection } = unionMaker(a, b)
console.log('Union is ', union, ' intersection is ', intersection)
