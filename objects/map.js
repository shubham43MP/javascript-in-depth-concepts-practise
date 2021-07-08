/**
 * Objects and Map have similar use cases but still they are different. Lets explore them such.
 * Key field: in Object, it follows the rule of normal dictionary. The keys MUST be simple types — either integer or string or symbols. Nothing more. But in Map it can be any data type (an object, an array, etc…). (try using another object as Object’s property key — i dare you :))
Element order: in Map, original order of elements (pairs) is preserved, while in Object, it isn’t.
Inheritance: Map is an instance of Object (surprise surprise!), but Object is definitely not an instance of Map.
 */

var map = new Map([[1,2],[3,4]]);
console.log(map instanceof Object); //true
var obj = new Object();
console.log(obj instanceof Map); //false
