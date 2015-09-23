// In Javascript, variables are either a complex type(e.g, Object, Array) or a primitive type(e.g., String, Integer).
// When a complex object is supplied as an argument, it is passed by reference
// when passing a primitive type to a function, Javascript passes by value
//
var object = {
	'foo': 'bar'
};
var num = 1;

function chgObject(obj) {
	obj.foo = 'baz';
}

function chgNum(num) {
	num = 2;
}

console.log(object);
chgObject(object);
console.log(object);

console.log(num);
chgNum(num);
console.log(num);

// `arguments` 
// `arguments` object is a useful tool for designing functions that do not require a predtermined number of arguments
var sum = function() {
	var len = arguments.length;
	var total = 0;
	for (var i = 0; i < len; i++) {
		total += arguments[i];
	}
	return total;
};
console.log(sum(1,2,3,4,6));
