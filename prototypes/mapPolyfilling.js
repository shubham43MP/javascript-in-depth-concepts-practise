Array.prototype.customMap = function (cbFunction) {
  const finalArray = [];
  const inputArray = [...this];
  for (let i = 0; i < inputArray.length; i++) 
    finalArray[i] = cbFunction(inputArray[i], i, inputArray);
  return finalArray;
};

// tests
const testerArray = [1, 2, 3, 4]
const result = testerArray.customMap((item, index) => {
  testerArray.push(index)
  return item * index * 5
});

console.log('what is this, abc', result);