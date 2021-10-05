var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

// var myCar = {
//     make: 'Ford',
//     model: 'Mustang',
//     year: 1969
// };
debugger;
console.log(myCar);

// ==================================
// Can add functions as properties
// ==================================

let person = {
    name: "Sam",
    age: 30,
    // using function as a value
    greet: function () {
        console.log("hello");
    },
};

// person.greet(); // hello

// ==================================
// Nested objects
// ==================================

// nested object
// let student = {
//     name: 'John',
//     age: 20,
//     marks: {
//         science: 70,
//         math: 75
//     }
// }

// // accessing property of student object
// console.log(student.marks); // {science: 70, math: 75}

// // accessing property of marks object
// console.log(student.marks.science); // 70

// ==================================
// Destructor Object
// ==================================

// const user = {
//     id: 42,
//     displayName: "jdoe",
//     fullName: {
//         firstName: "John",
//         lastName: "Doe",
//     },
// };

// function userId({ id }) {
//     return id;
// }

// function whois({ displayName, fullName: { firstName: name } }) {
//     return `${displayName} is ${name}`;
// }

// console.log(userId(user)); // 42
// console.log(whois(user)); // "jdoe is John"
