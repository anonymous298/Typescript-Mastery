//Functions

// Function types
// Optional and default parameters
// Rest parameters
// Overloads

function doSomething(name: string, age: number): void {
    
}

const func = ():void => {

}

// Function types

function abcd(name: string, cb: (name: string) => void) {
    cb(name)
}

abcd('talhhha', (name) => {console.log(name)})


// Optional and Default parameter

function user(name: string, age: number, gender?: string, loggedIn: boolean = false) {

}


// Rest operator

function rest(...args: number[]) {
    console.log(...args) 
}

rest(123,231,23,23,2,32,2,3,4,3,3)

/// Spread Operator 

console.log(...[1,2,3,4,5])


// Function overloading

