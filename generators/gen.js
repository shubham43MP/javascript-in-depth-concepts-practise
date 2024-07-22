/**
 * Generators can return (“yield”) multiple values, one after another, on-demand.
 * They work great with iterables, allowing to create data streams with ease.
 */

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();
console.log('Report 1 ', generator.next())
console.log('Report 2 ', generator.next())
console.log('Report 3 ', generator.next())
console.log('Report 4 ', generator.next())

// Genrators are iterable as:
let generatorSudo = generateSequence();
for(let value of generatorSudo) {
  console.log(value); // 1, then 2, then 3
}
