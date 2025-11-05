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

class ABC {

    public name;
    public age;
    public gender;

    constructor(name: string, age: number, gender: string) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    method() {
        console.log('Doing somethhing...', this.name)
    }

    someMoreMethod() {
        this.method()
    }
}

let a = new ABC('talha', 18, 'male');
let b = new ABC('fatima', 18, 'female');

console.log(b.name)

a.someMoreMethod()


// Access modifierds (public, private, protected)

class Engine {
    constructor(public engineType: string, private engineModel: string) {

    }

    changeModel(newModel: string) {
        this.engineModel = newModel
    }

    getModel() {
        console.log(this.engineModel)
    }
}

class Car extends Engine {
    constructor(public carModel: string, public readonly carCompany: string){
        super('petrol', 'v12')
    }

}

let ferrari = new Car('la ferrari', 'ferrari');
console.log(ferrari.carModel)
ferrari.getModel()


// Optional Parameter

class Car1 extends Engine {
    constructor(public carModel: string, public readonly carCompany? : string){
        super('petrol', 'v12')
    }

    // method() {
    //     this.carCompany = 'bmw' 
    // }
}


// Parameter properties

class ABCD {
    constructor(public a: string, public b: string) {

    }
}


// Getters and Setters

class User {
    constructor(public _name: string, public age: number){

    }

    get getName(){
        return this._name
    }

    set setName(name: string){
        this._name = name
    }
}

let user1 = new User('talha', 18);

user1.setName = 'anonymous'

console.log(user1.getName)