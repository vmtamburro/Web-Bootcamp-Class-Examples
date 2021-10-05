// ==================================
// CREATE
// ==================================

let fruits = ["Apple", "Banana"];

console.log(fruits.length);

// ==================================
// INDEX
// ==================================

let first = fruits[0];

let last = fruits[fruits.length - 1];

// ==================================
// FOR EACH
// ==================================

fruits.forEach(function (item, index, array) {
    console.log("a[" + index + "] = " + item);
});

// ==================================
// PUSH, POP, SHIFT, UNSHIFT
// ==================================

// Add to the end
let newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

// Remove from the end
let last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"]

// Remove from the beginning
let first = fruits.shift(); // remove Apple from the front
// ["Banana"]

// add to the beginning
let newLength = fruits.unshift("Strawberry"); // add to the front
// ["Strawberry", "Banana"]
