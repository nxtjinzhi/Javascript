// `let` and `const`
var foo = "node";
console.log("outside foo: " +foo);
for (var  x = 0; x < 1; x++) {
	var foo = "bar";
	console.log("inner foo: " +foo);
}
console.log("outside foo: "+foo);

var a = 5;
(function() {
	var a = 6;
	console.log(a);
})();
console.log(a);
