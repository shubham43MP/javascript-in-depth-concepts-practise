function createAdd(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = createAdd(5);
const add10 = createAdd(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12