// Object Oriented Programming
// Classes and Objects
// Class definition
// Constructors
// Access modifierds (public, private, protected)
// Readonly properties
// Optional properties
// Parameter properties
// Getters and setters
// Static members
// Abstract classes and methods
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ABC = /** @class */ (function () {
    function ABC(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    ABC.prototype.method = function () {
        console.log('Doing somethhing...', this.name);
    };
    ABC.prototype.someMoreMethod = function () {
        this.method();
    };
    return ABC;
}());
var a = new ABC('talha', 18, 'male');
var b = new ABC('fatima', 18, 'female');
console.log(b.name);
a.someMoreMethod();
// Access modifierds (public, private, protected)
var Engine = /** @class */ (function () {
    function Engine(engineType, engineModel) {
        this.engineType = engineType;
        this.engineModel = engineModel;
    }
    Engine.prototype.changeModel = function (newModel) {
        this.engineModel = newModel;
    };
    Engine.prototype.getModel = function () {
        console.log(this.engineModel);
    };
    return Engine;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(carModel, carCompany) {
        var _this = _super.call(this, 'petrol', 'v12') || this;
        _this.carModel = carModel;
        _this.carCompany = carCompany;
        return _this;
    }
    return Car;
}(Engine));
var ferrari = new Car('la ferrari', 'ferrari');
console.log(ferrari.carModel);
ferrari.getModel();
// Optional Parameter
var Car1 = /** @class */ (function (_super) {
    __extends(Car1, _super);
    function Car1(carModel, carCompany) {
        var _this = _super.call(this, 'petrol', 'v12') || this;
        _this.carModel = carModel;
        _this.carCompany = carCompany;
        return _this;
    }
    return Car1;
}(Engine));
// Parameter properties
var ABCD = /** @class */ (function () {
    function ABCD(a, b) {
        this.a = a;
        this.b = b;
    }
    return ABCD;
}());
// Getters and Setters
var User = /** @class */ (function () {
    function User(_name, age) {
        this._name = _name;
        this.age = age;
    }
    Object.defineProperty(User.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user1 = new User('talha', 18);
user1.setName = 'anonymous';
console.log(user1.getName);
