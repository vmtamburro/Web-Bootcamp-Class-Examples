// Different declarations
// var x = 1;
// let y = 1;
// const z = 1;

// Assignment vs Comparison
// // ==========================

// var assigned = 2;
// var compare = "2";

// console.log(compare === assigned);
// console.log(compare == assigned);

// // Scope

// //====================
// //Var

// var greeter = "hey hi";

// function newFunction() {
//     var hello = "hello";
// }

// console.log(hello); // error: hello is not defined

// // Problem with Var
// // ================================

// var greeter = "hey hi";
// var times = 4;

// if (times > 3) {
//     var greeter = "say Hello instead";
// }

// console.log(greeter) // "say Hello instead"

// // Let
// // ======================

// let greeting = "say Hi";
// let times = 4;

// if (times > 3) {
//      let hello = "say Hello instead";
//      console.log(hello);// "say Hello instead"
//  }
// console.log(hello) // hello is not defined

// // Let fixing Var
// // ==========================================
// let greeting = "say Hi";
// if (true) {
//     let greeting = "say Hello instead";
//     console.log(greeting); // "say Hello instead"
// }
// console.log(greeting); // "say Hi"

// TYPES AND COLLECTIONS
// //==========================

// DYNAMICALLY TYPED

// // no error
// let message = "hello";
// message = 123456;

// message = message + 1;

// console.log(message);
// // now take out the value reassignment

// //=======================
// NUMBERS
// //=======================

// // Converting to a number
// let x = "123";
// x = parseInt(x);
// console.log(x);

// let y = "abc";
// y = parseInt(y);
// console.log(y);

// // Comparisons
// let x = 1;
// let y = 2;

// console.log(x < y);

// // Example

// // Prevent negative numbers

// let input = 1;

// function notLessThan0(input) {
//     if (input >= 0) {
//         return input;
//     } else {
//         return 0;
//     }
// }

// console.log(notLessThan0(input));

// Incrementing and Random Numbers

// let x = 1;

// let y = x + 1;

// let z = 0;
// z++;
// console.log(z);

// let random = Math.random();
// console.log(random);

// function randomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }

// console.log(randomNumber(1, 10));

// function roundedRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// console.log(roundedRandomNumber(1, 10));

// //=======================
// STRINGS
// //=======================

// Case sensitive (this will catch a lot of people)
// let x = "Abc";
// let y = "abc";

// console.log(x === y);

// console.log(x.toLocaleLowerCase() === y.toLowerCase());

// String format aka Interpolation

// let x = "John";

// let y = `${x} is teaching JavaScript tonight.`;

// console.log(y);
