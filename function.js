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
