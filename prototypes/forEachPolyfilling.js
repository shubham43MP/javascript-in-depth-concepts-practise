Array.prototype.cutomForEach = function (cbFunction) {
  for (let i = 0; i < this.length; i++) cbFunction(this[i], i, this);
};

const test = [];
[1, 2, 3, 4].cutomForEach((item, index) => {
  test.push(item * index * 8);
});

console.log("RESULTS", test);