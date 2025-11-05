//Functions
// Function types
// Optional and default parameters
// Rest parameters
// Overloads
function doSomething(name, age) {
}
var func = function () {
};
// Function types
function abcd(name, cb) {
    cb(name);
}
abcd('talhhha', function (name) { console.log(name); });
// Optional and Default parameter
function user(name, age, gender, loggedIn) {
    if (loggedIn === void 0) { loggedIn = false; }
}
// Rest operator
function rest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log.apply(console, args);
}
rest(123, 231, 23, 23, 2, 32, 2, 3, 4, 3, 3);
/// Spread Operator 
console.log.apply(console, [1, 2, 3, 4, 5]);
