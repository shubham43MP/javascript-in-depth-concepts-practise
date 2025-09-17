type NestedInt = number | NestedInt[];

/**
 * Find the maximum integer from a nested array structure.
 */
const myMax = (arr: NestedInt[]): number => {
  let max = -Infinity;
  const stack: NestedInt[] = [...arr];

  while (stack.length) {
    const current = stack.pop()!;

    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        stack.push(current[i]);
      }
    } else {
      if (current > max) {
        max = current;
      }
    }
  }

  return max;
}

console.log(myMax([1, [2, 3]]));// 3
console.log(myMax([[[-5]], -10, [-2, [-3, -1]]])); // -1
console.log(myMax([1, [2, [3, [4, [5]]]]])); // 5
console.log(myMax([[1, 2], [3, [4, [5, 100]]]])); // 100
