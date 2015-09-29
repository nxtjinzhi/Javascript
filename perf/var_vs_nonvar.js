/**
 * Created by jinzhichen on 9/29/15.
 */
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

function var_declared() {
    var foo = 1;
    var bar = 1;
    var baz = 1;
}

function non_declared() {
    foo = 1;
    bar = 1;
    baz = 1;
}

function declare_one_time_with_comma (){
    var foo = 1,
        bar = 1,
        baz = 1;
}

function non_declare_with_comma() {
    foo = 1,
        bar = 1,
        baz = 1;
}

// add tests
suite
    .add('var declared', var_declared
    )
    .add('non declared', non_declared
    )
    .add('declare one time', declare_one_time_with_comma)
    .add ('non declare one time', non_declare_with_comma)
// add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').pluck('name'));
    })
// run async
    .run({ 'async': true });

