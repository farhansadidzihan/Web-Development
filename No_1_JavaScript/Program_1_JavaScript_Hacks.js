// || let, var, const ||
let lett = 34 
var varriable = undefined
const constant = null

// || Primitive Data Types || N(null) N(number) S(string) S(symbol) B(boolean) B(BigInt) U(undefined) ||
let a = null  // Null
let b = 345  // Number
let c = "Zihan"  // String
let d = Symbol("I am Zihan") // Symbol
let e = true  // Boolean
let f = BigInt("3443") // BigInt
let g // = undefined // Undefined

// || Non-Primitive Data Type || Object ||
const marks = {
    "Zihan" : 100,
    "Harry" : 100,
    "Aman" : 100
}

// || Type Casting ||
let an = "334";
an = Number.parseInt(an)  // Converts string into number

// || Asynchronous Programming || Finishes later ||
console.log("Starts");
setTimeout(function() {
	console.log("Heloooooooooooooo!")
}), 3000
console.log("Ends!")

// || Synchronous Programming || Finish one by one ||
let a1 = 12;
let b1 = 23;
console.log("The sum of a and b is:-", a1 + b1);

// || Promise || Solution to "Pyramid of Doom or Call back Hell" ||
// let promise = new Promise(function(resolve, reject) {
// 	alert("Hello");
// 	resolve(56);
// })
console.log(promise)

// || Destructuring ||
let [x, y] = [2, 3];
console.log(x)
let ob = {a2:1, b2:2};
let {a2, b2} = ob;
console.log(a2, b2)
// || Spread Syntax ||
let arr = [1, 34, 2, 2, 4];
console.log({...arr});

// || Hoisting in JavaScript ||
hello("Zihan");
function hello(name) {
	console.log(`Hello ${name}`);
}
console.log(a3);
var a3 = 32;

