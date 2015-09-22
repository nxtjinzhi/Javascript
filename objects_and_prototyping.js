// Javascript can create objects in three ways:
// using literal notation
// the `new()` operator
// the `create()` function
// The difference between these approaches is how the object is initialized

var foo = {},
    bar = new Object(),
    baz = Object.create(null);

var car = {};
Object.defineProperty(car, 'doors', {
	configurable: true,
	value: 4
});

// numbers are also objects.
(1).toString();
