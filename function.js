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



// Function types
// 1> function declarations
// 2> function expressions
// The only different between the two is when they are evaluated.
// During parse time, Javascript moves all the function declarations to the top of the current scope, that's why it doesn't matter where declarative functions appear in the script body.
//
var sayHo;

// => function
console.log(typeof (sayHey))

// => undefined
console.log(typeof (sayHo))

if (true) {
	function sayHey() {
		console.log("hey");
	}

	sayHo = function sayHo() {
		console.log("ho");
	}

} else {
	function sayHey() {
		console.log("no");
	}

	sayHo = function sayHo() {
		console.log("no");
	}

}
// => no
sayHey();
// => ho
sayHo();


// Arrow Prone (ECMAScript 6)
// The fat arrow is a new shorter way to write functions using `=>` instead of `function(){}`, and will look familiar to anyone who has used CoffeScript
// In addition to the shorter syntax, the fat arrow also makes reading code clearer because `this` arguments is visually linked ot the rest of the code.

// Seems nodejs doesn't support this syntax
/**
var VendingMachine = function () {
	this.stock = ["Sgt. Pepper", "Choke", "Spite"];
	return {
			dispense: () => {
				if (this.stock.length > 0) {
					return this.stock.pop();
				}
			}
	};
};

var popMachine = new VendingMachine();

// => 'Spite'
console.log(popMachine.dispense());
**/