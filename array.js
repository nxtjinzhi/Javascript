
// quite better than Rust (Arrays, Slice, Vec)
var daysOfWeek = new Array();
var daysOfWeek = new Array(7);
var daysOfWeek = new Array('sunday','Monday','Tuesday');

var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (var i = 3; i < 100; i++) {
	fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

for (var i = 1; i < 20; i++) {
	console.log (fibonacci[i]);
}

var numbers = [0,1,2,3,4,5,6,7,8,9];

// yeah, javascript start with 0
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);


// array manipulate methods
// the `push` and `pop` methods allow an array to emulate a basic stack data structure
// the `shift` and `unshift` methods allow an array to emulate a basic queue data structure
numbers.push(10);
console.log(numbers);
numbers.unshift(-1);
console.log(numbers);
numbers.push(11);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);

// spilce 
// the first arguments of the method is the index we want to remove or insert elements from,
// the second arguments is the number of elements we want to remove (in this case 0)
// the third & after arguments are the values we would like to insert into the array
numbers.splice(5,0,100,101,102,103,104);
console.log(numbers);


// two-dimensional and multi-dimensional arrays
// javascirpt only suppports one-dimensional arrays; we can support 2-dimen and multi-dimen arrays with array of arrays
//
var matrix = [];
matrix[0] = [];
matrix[1] = [];
matrix[0][0] = 1;
matrix[0][1] = 2;
matrix[1][0] = 3;
matrix[1][1] = 4;

function printMatrix(matrix) {
	for (var i = 0; i < matrix[0].length; i++) {
		for (var j = 0; j < matrix[1].length; j++) {
			console.log(i,j,matrix[i][j]);
		}
	}
}

printMatrix(matrix);


// References for Javascript array methods
// concat: Joins multiple arrays and returns a copy the joined arrays
// every: Calls a function for every element of the array unti `false` is returned
// filter: Creates an array waith each elment that evaluates to `true` in the function provided
// forEach: Executes a specific function on each element of the array
// join: Joins all the array elements into a string
// indexOf: Searches the array for specific elements and returns ites position
// lastIndexOf: Returns the last item in the array that matches the search criteria and return its position
// map: Creates a new array with the result of calling the specified functions on each element of the array
// reverse: Reverse the array so the last items become the first and vice versa
// slice: Returns the new array from the specified index
// some: Passes each element through the supplied function until `true` is returned
// sort: Sorts the array alpabetically or by the supplied function
// toString: returns the arrays as a string
// valueOf: Like the method toString, this returns the array as as a string
//

// `concat`
var zero = 0;
var positiveNumbers = [1,2,3];
var negativeNumbers = [-3,-2,-1];
var numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers);



// `every`: ** until `false` is returned, thus is used for every value validation
numbers.every(function(x) {
	if (x %2 == 0) {
		console.log(x + "is even");
	} else {
		console.log("not even");
	}
});

// `map`: 
mapNumbers = numbers.map(function(x) {
	return x + 1;
});
console.log("numbers is:" + numbers + "mapNumbers is :" + mapNumbers);

// `reverse`: the array is changed after this methods
console.log("Reverers of mapNumbers is:" + mapNumbers.reverse());
console.log("mapNUmbers is :" + mapNumbers);

// `slice`
// view the example above

// `some`: until `true` is returned
var i = 0;
mapNumbers.some(function(x) {
	if (x > 100) {
		return true;
	} else {
		++i;
		return false;
	}
});

console.log("after some, the i is:" +i);

// `filter`: the origin is not changed
var isEven = function(x) {
	if (x %2 == 0) {
		return true;
	} else {
		return false;
	}
}

console.log("before filter: " + mapNumbers + ", after filter: " + mapNumbers.filter(isEven));
console.log("origin array is not changed after fileter method: " + mapNumbers);

// `sort`

function compare(a,b) {
	if (a > b) {
		return 1;
	} else {
		return -1;
	}
}

mapNumbers.sort(compare);
console.log("after sort: " + mapNumbers);

// sort function custom example
var people = [
{"name":"Jinzhi", "age": 25},
{"name":"lolol", "age": 24},
{"name":"tomas", "age": 30},
];

function age_compare(a, b) {
	if (a.age > b.age) {
		return 1;
	} else 
		return -1;
}

console.log(people);
people.sort(age_compare);
console.log(people);



