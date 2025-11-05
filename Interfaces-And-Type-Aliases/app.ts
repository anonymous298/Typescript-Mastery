// Interfaces and Type Aliases
// Defining interfaces
// Using interfaces to define object shapes
// Extending interfaces
// Type aliases
// Intersecion types

interface User {
    name: string,
    email: string,
    password: string,
    gender?: string
}

function doSomething(obj: User) {
    
}

doSomething({name : 'talhah', email : 'talha@gmail.com', password : 'abcd123'})


// Extending Interfaces

interface Engine {
    engine: string,
    engineModel: string,
    engineManufactureDate: number
}

interface Car extends Engine {
    carModel: string,
    carCompany: string
}

function manufactureCar(details: Car) {
    
}

manufactureCar({
    engine : 'petrol',
    engineModel : 'v8',
    engineManufactureDate : 1997,
    carModel : 'Land Cruiser',
    carCompany : 'toyota'
}) 


// Type Aliases

type custom = number | string | boolean

let a: custom  = 'talha'

type arg = number | boolean

function abcd(val: arg) {

}

abcd(true)


// Intersection types

