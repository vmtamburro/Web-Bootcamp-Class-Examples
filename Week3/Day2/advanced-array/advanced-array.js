//=======================
// FILTER
//=======================

// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const overFive = numArray.filter((item) => item > 5);
// console.log(overFive);
//=======================
// FIND
//=======================
// const randomArray = [1, 45, 8, 98, 7];

// const firstEven = randomArray.find((item) => item % 2 === 0);

// console.log(firstEven);

// const team = [
//     { name: "Bill", age: 10 },
//     { name: "Linus", age: 15 },
//     { name: "Alan", age: 20 },
//     { name: "Steve", age: 34 },
// ];

// // using arrow function and deconstructing
// adultMember = team.find(({ age }) => age >= 18);

// console.log(adultMember); // { name: 'Alan', age: 20 }

//=======================
// INCLUDES
//=======================
// let languages = ["JavaScript", "Java", "C", "C++", "Python", "Lua"];

// let check = languages.includes("Java");
// console.log(check);
//=======================
// MAP
//=======================

// const prices = [1800, 2000, 3000, 5000, 500, 8000];

// let pricesWithTax = prices.map((item) => item * 0.07 + item);
// console.log(pricesWithTax);

//=======================
// REDUCE
//=======================

// const numbers = [1, 2, 3, 4, 5, 6];

// function sum_reducer(accumulator, currentValue) {
//   return accumulator + currentValue;
// }

// let sum = numbers.reduce(sum_reducer);
// console.log(sum); // 21

// // using arrow function
// let summation = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(summation);

// let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
// let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
//   if (accumulator.indexOf(currentValue) === -1) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);

// console.log(uniqueAgeGroup);
