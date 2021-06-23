Array.prototype.cutomForEach = function (cbFunction) {
  const inputArray = [...this];
  for (let i = 0; i < inputArray.length; i++) cbFunction(inputArray[i], i, inputArray);
};

const test = [];
[1, 2, 3, 4].cutomForEach((item, index) => {
  test.push(item * index * 8);
});

console.log("RESULTS", test);