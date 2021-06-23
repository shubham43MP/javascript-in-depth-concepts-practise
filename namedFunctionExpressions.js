let hello = function(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    hello("Guest");
  }
};
let welcome = hello;
hello = null;

welcome(); // Error, the nested hello call doesn't work any more!


// To fix this
let hello = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest");
  }
};
let welcome = hello;
hello = null;

welcome(); // Hello, Guest (nested call works)