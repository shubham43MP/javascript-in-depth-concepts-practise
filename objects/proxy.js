/**
 * A Proxy object wraps another object and intercepts operations, like reading/writing properties and others,
  optionally handling them on its own, or transparently allowing the object to handle them.
  In other words, we can basically acces the object via a proxy object
 */

let target = {};
let proxy = new Proxy(target, {}); // empty handler

proxy.test = 5; // writing to proxy (1)
console.log(target.test); // 5, the property appeared in target!

console.log(proxy.test); // 5, we can read it from proxy too (2)

for(let key in proxy) console.log(key); // test, iteration works (3)
