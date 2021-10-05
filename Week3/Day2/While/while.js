let n = 0;

while (n < 3) {
    n++;
}

console.log(n);

// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

// let sum = 0;

// // take input from the user
// let number = parseInt(prompt("Enter a number: "));

// while (number >= 0) {
//     // add all positive numbers
//     sum += number;

//     // take input again if the number is positive
//     number = parseInt(prompt("Enter a number: "));
// }

// // display the sum
// console.log(`The sum is ${sum}.`);

let done = false;
while (!done) {
    console.log("test");
}
setTimeout(() => {
    done = true;
}, 3000);
