'use strict'
// `let` and `const`
// ES6 introduces two new variable types, `let` and `const`, both of which allow developers to use block-level scope.
var foo = "node";
console.log("outside foo: " +foo);
for (var  x = 0; x < 1; x++) {
	let foo = "bar";
	console.log("inner foo: " +foo);
}
// * note the difference with the example in the `function.js`
// the `let` doesn't cause global namespace pollution
console.log("outside foo: "+foo);

var a = 5;
(function() {
	var a = 6;
	console.log(a);
})();
console.log(a);

// Closure example

var hello = "hello";

function outer(name) {
	var hello = "hi",
	    inner;
	return inner = function() {
		return hello + " " +name;
	};
}

var name = outer("mark");
console.log(name());
