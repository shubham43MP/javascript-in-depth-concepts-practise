Array.prototype.customMap = function (cbFunction) {
  let finalArray = [];
  for (let i = 0; i < this.length; i++) {
    finalArray[i] = cbFunction(this[i], i, this);
  }
  return finalArray;
};

// tests
const result = [1, 2, 3, 4].customMap((item, index) => item * index * 5);
console.log('what is this, abc', result);