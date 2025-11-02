// Primitive and Reference

// primitive

let a = 19
let b = a;

let age = 18;
// age = 'talha'

// reference

let c = [1,2,3]
let d = c
d[2] = 10;

// Arrays 

let arr = [1,2,3,4,5]
let names = ['talha', 'talhha', 'talha']

let arr2 = [1,2,3, 'talha', {name : 'talha'}]

let arr3: number[] = [1,2,3,4,5] 
let names2: string[] = ['talha', 'talhha', 'talha']

// Tuples

const tupArr: [number, number, string] = [10, 29, 'talha']

// Enums

enum UserRoles {
    admin = 'admin',
    user = 'user'
}

UserRoles.admin

// Any, Unknown, Void, Never, Undefined, Null

// let abc: number;
let abc;

abc = 34
abc = 'talha'

// let abcd;

// abcd = 12
// abcd = 'talha'

// abcd.toUpperCase()


let abcd: unknown;

abcd = 12
abcd = 'talha'

// Type Narrowing

if (typeof abcd === 'string') {
    abcd.toUpperCase()
}

// Void

function sendData(data: object): void {
    console.log('Hello World!')
    console.log('Data Sended...')
}

function getData(): object {
    return {data : 'data'}
}

// Null

// let n: null;
// let n = 'talha'

// Union 

let g: string | null | number
g = 34

// Undefined 

let f: undefined;
// let f: number;

// Never

function abcf(): never {
    while (true) {
        
    }
}

abcf();
console.log('Hello World')